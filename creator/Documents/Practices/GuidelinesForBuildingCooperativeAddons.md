---
author: mammerla
ms.author: mikeam
title: Guidelines for Building Cooperative Add-Ons
description: "A set of guidelines for building add-ons that can safely share worlds with other add-ons"
ms.service: minecraft-bedrock-edition
---

# Guidelines for Building Cooperative Add-Ons

Across the Minecraft platform, there is so much potential to customize how the game looks and acts. You can build your own mobs or override "vanilla mobs". Build your own blocks that fit into Minecraft, or change the default textures to something completely different. If you want fewer skeletons spawning in, you can override the skeleton or change its spawn rules. Where possible, we aim for as much customizability as possible!

But if you want to support an environment where players can play Minecraft survival or creative experiences -- and add maybe a dozen different additional enhancements they love -- you're going to want your add-on to be "cooperative". A cooperative add-on is designed to play nicely: it doesn't fundamentally change how Minecraft plays, avoids interrupting other Minecraft add-ons or experiences, and doesn't consume so many resources that it doesn't leave anything left for other add-ons to use (considering the wide array of devices Minecraft runs on). A cooperative add-on is also designed to use features and capabilities that will better stand the test of time, version over version.

It turns out there are also a lot of hidden things that could potentially cause "conflicts" across add-ons. For example, if two add-ons ship an entity called `"common:boss"`, then based on per-world pack stack order, one of them will "win" and the other won't be available. Even if one creator ships two separate add-ons with the same mob in it with the same namespace, it can cause versioning issues if the implementation of that entity evolves over time across packs or version and the "old version" unexpectedly loads in a new version of a world.

Based on this, we introduce the concept of a "Cooperative" Add-On. A Cooperative Add-On is "just" a behavior pack+resource pack combo, but its behavior is generally additive and does not fundamentally change the gameplay of other experiences, such as the vanilla gameplay experiences or inadvertently conflict with other add-ons. It also takes precautions to avoid accidental conflicts, and to be more robust over the course of versions.

What follows is a set of guidelines for building these cooperative, additive-only add-ons. In many places, and out of a sense of precaution, you'll want to go to longer lengths to avoid add-ons that have any potential to conflict with other add-ons. Keep in mind that some of these rules are relatively strict; if you're creating an add-on for sharing with your friends, you may not need to adhere to all of these guidelines because the risk of "add-on conflicts" is probably much less.

Also, we have a web and command-line based tool available via [Minecraft Creator Tools](https://mctools.dev). It has a validation suite called "Add-On Best Practices" in the Inspector that looks at your add-on and suggests fixes you can make that will make your add-on more compatible with cooperative guidelines.

As time goes on, this section will evolve to capture more use cases that will change the complexity of add-ons.

## Cooperativity

Fundamentally, Cooperative Add-Ons need to be designed to have "additive" functionality, rather than functionality that modifies or removes other functionality. For example, functionality that changes how creepers work might not be bad in and of itself, but if two completely separate add-ons are added by a player that happen to change how the creeper works, one will "win" (based on pack stack order, which for most players is not set in any particular intentful order). The add-on that "loses" (doesn't have its creeper customizations apply) might no longer work completely. We do not want to rely on players configuring their pack stack order precisely in order to have great experiences, so we want to avoid conflicts that come down to pack stack ordering.

- Cooperative add-ons need to work with other add-ons. Your cooperative add-ons should work (stacked) with at least one other cooperative add-on, and you should test your add-ons around that.
- Add-Ons should not disable or remove fundamental vanilla gameplay. It must sit on top of vanilla and should be able to be removed without affecting the gameplay of vanilla and/or any add-on. "Affecting the gameplay of vanilla" is a wide and grey area - even introducing a new hostile mob can make achieving the goals of vanilla Minecraft more difficult - but what we mean is that no one add-on should prevent fundamental gameplay styles of Minecraft or make the game substantially harder or easier.
  - You should not be making any changes to any vanilla files to accommodate your add-ons. That includes overriding or removing things that can be embedded in the world, like block types, item types, entity types, etc.
- For all identifiers across types (such as custom item types or custom block types), you should not use `minecraft:` as a name and ensure that the namespace is unique to the add-on. "Overriding" built-in mobs by including a type that starts with minecraft: to change how they work is not generally stable across versions.
  - Based on this, you should also NOT override `minecraft:player`.
- You should only add new elements to the game; these changes should not change vanilla behaviors and/or vanilla item types.
- Because there can only be one item that can be created per recipe "shape" - when creating recipes for the crafting table, furnace, or brewing stand, try to use custom items whenever possible so that the "recipe input" is unique and diverse.
- Add-Ons should not override a player's skin or Character Creator.

## Versioning

One of the most fundamental requirements for add-ons is that they work across Minecraft versions and into the future as Minecraft evolves.

This is unlike when you create a custom world or world template; with worlds, you can use the `base_game_version` attribute to lock your world to a particular version of Minecraft, and where possible, that world will be frozen at that version (for example, worlds with a base game version less than 1.18.0 should not have a Pale Garden biome in them). It is important to realize that cooperative add-ons don't have a concept of version locking; they need to keep working even as version numbers advance into the future. And even if you apply these best practices listed below for cross-version compatibility, and while we do try to avoid gratuitous breaking changes in how the Minecraft Bedrock Platform works, in some cases you may need to update your add-ons over time to account for changes in how Minecraft works. Don't build in hard (or soft) dependencies that a particular mob will spawn in a particular quantity at a particular place in the Minecraft world, for example. Be resilient if new mobs are introduced that your add-on doesn't "understand" (because they were added in a release in the future and are now working in the world your current-day add-on is working within.) 

- Cooperative Add-Ons need to work release over release without the need for you to make updates.
- Worlds with Cooperative Add-Ons need to upgrade the same way as vanilla worlds do (without add-ons applied): ideally, seamlessly and automatically and without any data loss. Keep in mind your add-on needs to keep working in a world that is played over the span of years.
- Any bug fixes that you make to an add-on should not break existing worlds or remove content from within the packs. Bug fixes should not cause data loss. For example, removing a custom entity type has the impact of removing/hiding all instances of that entity in the world - essentially making them disappear, which is not preferable. Instead, if you wish to upgrade an entity type, continue to support the old entity type for backwards compatibility reasons.
- You should not use `"runtime_identifier":` when creating new entities because as versions change, a mob's behavior can change significantly, potentially leading to frequent breaks.
- `min_engine_version` must be set on both packs of the cooperative add-on.
- Add-Ons should not use or rely on Experimental features.
- When making updates, don't change namespaces, as that will cause version-related breaks in the add-on for players.

## Cooperative Add-On Technical Structure

Cooperative Add-Ons use existing tech and are added to the world by the player from either the Resource Pack or Behavior Pack tabs of the Create New World or Edit World screens. The requirement for each pack having a dependency on the other ensures that players won't get into a state where they have one pack applied to the world without the other. 

- Cooperative Add-Ons should consist of only one Behavior Pack and one Resource Pack.
- Both the Behavior Pack and Resource Pack need to contain dependencies on each other so one should not be applied without the other.
- Cooperative Add-Ons should not have a dependency on packs outside of their own packs.

These restrictions keep the process of adding add-on packs as simple as possible for players.

## Manifest Updates

There is an additional field that needs to be added to the manifest of the Resource Pack of your add-on. To ensure that your resource pack can't be applied as a Global Resource Pack, you will need to add `"pack_scope": "world"`, just after the `"uuid:"`.

Here is an example of where that field goes in the resource pack manifest file:

```json
{
  "format_version": 2, 
  "header": { 
    "name": "pack.name", 
    "description": "pack.description", 
    "uuid": "aa943e69-b6b8-955b-d405-29d77cc87283", 
    "pack_scope": "world", 
    "version": [1, 0, 0], 
    "min_engine_version": [1, 21, 50], 
  }, 
  "modules": [ 
    { 
      "version": [1, 0, 0], 
      "uuid": "bb461250-6de3-49f0-4a94-62c1deeb9b71", 
      "type": "data" 
    } 
  ], 
  "dependencies": [ 
    { 
      "uuid": "aabcb1dc-29ca-4fc4-fa8c-ea1ea2d6788d", 
      "version": [1, 0, 0] 
    } 
  ] 
} 
```

## Limits for Performance

Many players will add 10+ add-on packs to their worlds, which can cause problems on a variety of devices. For example, some devices cannot scale to having 10 add-ons, each with 4,000 pieces of furniture and their attendant textures. On the other hand, 10 add-ons that each add 5-10 mobs is a bit more scalable. Based on this, we have some (admittedly coarse) guidelines on overall size of your add-ons.

- Try not to exceed 25MB uncompressed, or a maximum of 3,500 files.
  - because you need many files to implement basic concepts like a new block type, a 3,500 file limit equates to a rough maximum limit of 1,000 elements in your add-on, whether those elements are blocks, items, entities, or some combination thereof
- Block permutations should not exceed 10,000 blocks to ensure minimal performance impact across all platforms.
- Conserve overall texture size. When creating items like books, continue to use lower-resolution textures (<500 x <500).
  - Aim for below 256x256 for blocks and items.
  - Aim for below 2048x2048 for everything else.
  - Prioritize efficient use of space over power-of-2 (e.g., 512x512, 1024x1024) sizing.
  - See [Improving Performance and Resource Usage](./ImprovingPerformanceAndResourceUsage.md) for more tips.
- Use techniques like Molang and materials to produce color variants of textures, rather than creating, say, 8 color-tinted texture variants of the same texture.

## Types of Customizations to Avoid

- You should not add a dimension file to your add-on.
- Do not override UI files (resource packs/ui)
- Do not use custom client biome override files (resource)
- Via .lang files, do not override the words used for vanilla strings
- Do not override vanilla sounds and music with your own custom sounds and music.
- Do not use setLore APIs on `minecraft:written_book`.

## Ticking Areas

Because the number of available ticking areas are limited, avoid using ticking areas in your design plans when making your add-on.

Also, players or the base world can define their own ticking areas - even in the case that you are the only add-on applied to a world, it still may not be enough available ticking areas on that world.

## Namespacing and Identifiers

There are several items in your add-on that need to have names that are unique. Because it is conceivable that you could accidentally conflict with other add-ons, you would need to prevent conflicts with other add-ons (including other those from yourself as a creator – past,  present or future.) Below is a detailed recommendation on creating names for these items.

The following items need to have a unique name that no other add-on can ever have. It is recommended that you use a combination of creator name + pack abbreviations to create a unique namespace that you don't use in any other packs.

### Namespace

Every item in the add-on needs to have a namespace and that namespace can't be `minecraft:`.

The namespace needs to be the same for every item in the add-on, including particles.

Every add-on you make needs to have a different namespace from any other namespace used in previous packs. This will ensure that your pack won't have a conflict with add-ons from others creations, as well as any add-on that you may have released.

We recommend that you use your creator name (or abbreviated creator name) followed by an underscore and an abbreviated pack name. For example, for the add-on called **Your Creator Name's Super Awesome Add-On Pack**, you could use the namespace `ycn_saaop:`.

>[!Important]
> Having a conflict in the namespace is the only thing that can't easily be updated post-release, so you really want to get this right! If you have a conflict with another add-on you created, it is likely that you can't update the namespaces as that will cause data loss for all the items that you update to that namespace.

### Texture Name

Texture names need to be unique to prevent items from using the wrong texture when multiple add-ons are applied. Texture names can be anything and it is likely that there will be conflicts with other creators because texture names tend to be descriptive -- you could imagine multiple furniture add-ons naming a texture "table", and that would conflict based on pack stack order. For most players, pack stack order is not intentfully set so which texture "wins" would be random.

All textures should be placed at least 2 folders deep (although additional folders can be used if you want for additional organization.) The first folder should be your creator name and the second folder should be the pack name. The folder structure will look like this.

```powershell
&lt;resource pack name&gt; -> textures -> &lt;creator name&gt; -> &lt;pack name&gt; -> mycustomtexture.png
```

### Texture Reference

Like texture names, texture references need to be unique to prevent items from using the wrong texture when multiple add-ons are applied. When creating texture references, use the pack's "namespace:" before the name. This will prevent any conflicts.

### Localization (Lang Files)

If you localize your packs via .lang resource files, ensure that you use namespaced names for your .lang string replacement tokens.

### Geometry Identifiers

Geometry identifiers also need to be unique to prevent items from using the wrong geo file when multiple add-ons are applied. Geometry identifiers need to start with "geometry.". Because of that, we recommend that add ".namespace" immediately after "geometry.". Your geometry identifiers will look like this: `geometry.creatorname_gamename.whatever.else`. Doing this will prevent conflicts with other geometry files in add-ons.

### Tags and Scoreboard Objective names

When using tags or scoreboard objectives within commands, you need to ensure that they are unique so that they don't conflict with other add-ons. When creating tags and Scoreboard objective names, use a namespace before the tag and scoreboard names.

### Loot Tables

Loot table names need to be unique, or they can conflict with other loot tables in other add-ons. To prevent this, we suggest that every creator nests their loot tables in 2 folders.

The first folder is your creator name, and the second is the name of the add-on pack name. Here is an example below:

```powershell
<behavior pack name> -> loot_tables -> &lt;creator name&gt; -> &lt;pack name&gt; -> <loot table name>
```

### Animations

Animation names need to be unique. These are the names that are provided inside the animation file. Animation names need to start with "animation.". To prevent creators from using the same animation names, we recommend you add ".namespace" immediately after "animation." and will look like this `animation.creatorname_gamename.whatever.else`. Doing this will prevent conflicts with other geometry files in add-ons.

### Animation Controllers

Animation controller names need to be unique. These are the names that are provided inside the animation controller file. Animation controller names need to start with "controller.animation.". To prevent creators from using the same animation controller names, we recommend you add ".namespace" immediately after "controller.animation.". It will look like this: `controller.animation.creatorname_gamename.whatever.else`.

### Render Controllers

Render controller names need to be unique to prevent the wrong render controller files from being used. Render controller names need to start with "controller.render.<render_controller_name>". We recommend you add ".namespace" immediately after "controller.render.". It will look like this: `controller.render.creatorname_gamename.whatever.else`. Please note this is the name contained within the file.

### Structures

Structures for add-ons can be used with the structure command and/or features and feature rules.

When naming your structure, you need to place them in a folder that has the same name as the namespace used for the pack. When loading a structure file, the namespace used in this case is the folder name the structure appears.

Here is an example below:

```powershell
<behavior pack name> -> structures -> <namespace> -> <structure file name>
```

### Feature and Feature Rules

Feature and feature rules file names need to be unique, or they can conflict with other feature and feature rules files in other add-ons. Use the namespace identifier conventions that you use in other files. Be advised that, unfortunately, feature files cannot be located in subfolders without changing how their namespace identifier works in unpredictable ways.

### Functions

Function file names need to be unique, or they can conflict with other functions in other add-ons.

To prevent this, we suggest that every creator nests their functions in 2 folders.

The first folder is your creator name, and the second is the name of the add-on pack name. Here is an example below:

```powershell
<behavior pack name> -> functions -> &lt;creator name&gt; -> &lt;pack name&gt; -> <function file name>.
```

Using this naming convention also allows creators to use tick.json in their packs without conflicting with other creators.

### Sounds

Sounds are located within the Resource pack, and can override other sounds based on their file path and name. To prevent unwanted overrides, we suggest placing your sound files at least 2 folders deep in the sounds folder (although more can be used if desired).

The first folder is your creator name, and the second folder is the pack name. This will cause your folder structure to look like this:

```powershell
&lt;resource pack name&gt; -> sounds -> &lt;creator name&gt; -> &lt;pack name&gt;
```

### Sound Reference

Sound References need to be unique. Sound references are assigned in the sound definition file. All sound references need to start with "namespace:" to prevent files from conflicting with each other.

### NPC Scenes

NPC scenes need to have unique names to prevent any conflicts with other add-ons. Use the same namespace format that you use throughout the add-on to name the NPC scenes.

### Trade Tables

Trade table names need to be unique, or they can conflict with other trade tables in other add-ons. Creators should place their trade tables in a folder named "trading". Inside the trading folder we suggest that every creator nests their trade table files two additional folders deep to prevent conflict with other creators' add-ons.

The first folder is your creator name, and the second is the name of the add-on pack name. Here is an example below: 

```powershell
<behavior pack name> -> trading -> &lt;creator name&gt; -> &lt;pack name&gt; -> <trade table file name>.
```

### JSON UI and Custom Fonts overrides are disalllowed

Because JSON UI (i.e., files in &lt;resource pack name&gt;/ui) and fonts (i.e., files in &lt;resource pack name&gt;/font) are not overridable in a cooperative manner - such that multiple add-ons can customize the same asset - cooperative add-ons should not override any JSON UI or font glyph files.

### Folder Structures

For folders like textures, functions, loot tables, sounds, and trading we recommend that your folder structure appear like this, textures-> <creator_name> -> <pack_name>.

Where possible, always ensure your textures, functions, loot tables, sounds, and trading folder have a subfolder that is your <creator_name> and only that folder. You should not have "loose" files in the <creator_name> folder.

Inside the <creator_name> folder, we recommend that you don't add more than two folders. The first is the recommended <pack_name> folder. The only other folder that should appear in here is one called **"common"**. You can use this to help speed up development by placing assets in there that you use commonly across packs. 

>[!Note]
> Use of a common folder inside of <pack_name> folder is a little risky. If you change the asset in any way, you need to update it in **every pack that contains it** to prevent one of your packs conflicting with another pack.

You should come up with a unique namespace for each pack, and that name should consist of your creator name appended to the pack name and separated by an underscore. Doing this will ensure that your packs will work with all add-ons created and future proof against any add-ons created in the future. This will help prevent a potential negative experience for players.

Using that namespace as suffix to texture names, texture references, geo identifiers, tags and scoreboard objective names also ensures that what you create in your add-on will always appear the way that you intend them to look.

## Using Block Placing Methods like Structures, Setblock, Fill, and Clone

Suppose you want to add something to an existing 5 year old world. Your add-on should not arbitrarily destroy (or replace blocks in) areas of the world, especially without explicit user consent - because you could be destroying someone's cherished 5 year old creations!

While placing structures have more of a chance of altering or destroying something that the player cares about, it can still occur when replacing a single block. If that happens, there is no way for the player to recover from this (unless they backed up the world before loading).

If your concept requires a starting area structure, or for large structures to spawn in or be created without player interaction, or without the player knowing what is going to happen, please consider using these ideas in an entire world instead of as a Cooperative Add-On.

Here are some recommendations for using these features:

### In existing saved chunks

Ensure that these are brought in during player interaction, explain what is going to happen, and allow the player a way to undo.

Check to make sure that these blocks are only placed in areas that are empty - meaning the blocks they are replacing are only air.

### In unmodified chunks

If these come in without player interaction check to make sure that these blocks are only placed in areas that are fully air.

Ensure that these are brought in during player interaction, explain what is going to happen, and allow the player a way to undo.

If you are going to replace blocks, try to ensure that blocks that are valuable to players aren't replaced (like ores, archeology blocks, etc.)

## Teaching players how to use your Add-On

Teaching players how to use your add-on is vitally important for a great player experience and there should be a single, non-destructive way to do this. This way the players will have the same expectations no matter which add-on they add to the world.

We recommend that all creators spawn a book at the feet of the player on first load that teaches the player how to use the add-on. This needs to be done in a non-destructive way.

There are a few techniques for adding an instructional book:

### Adding a book

It's a little clunky, but one way to safely add a book to a players' inventory is to make the book spawn at the player's location. 

The mechanism behind this is to create a small (1 block) structure at the player's position that contains only the book and a structure void. Make the structure spawn only once.

Doing this will allow players with a space in their inventory to automatically pick up the book. For those with a full inventory, they would need to choose something to drop to pick it up. Because this is generally the way that all cooperative add-ons work, there will be a player expectation to look for this book. You can also send the player an onscreen message that informs them about the book (so players with a full inventory will look for it), but this isn't required.

If you want to be super-nice, you could provide an empty chest so players can off-load items so they can pick up the book.

### Messages in chat

If you choose to have a chat message, please ensure that it is 28 characters or less so that it fits on one line. Stacking multiple add-ons will make it difficult for players to read all the messages. You should also make sure that it only sends the message the first time the player joins the world. Try to avoid excessive messages being broadcast to players.

### Custom item that acts like a book

Another alternative is to create a custom item and entity that looks and acts like a book when opened. Please note that if you go this route that the text might not be localize-able since it is part of the textures.

You will also need to handle the opening, closing, and reacquiring of the book yourself and need to do this in a way that won't interfere with other entity books in multiplayer. It will be much easier for players to lose books when using this method. We recommend creating a way to craft your entity books so players can easily craft a replacement if needed. Please keep these things in mind when deciding to use this method.

It is recommended that you make the max item stack size for these types of books 64. This will allow players to place them in bundles. The bundle uses max stack size and a max stack size of 1 will fill the entire bundle with that one item. Nothing extra needs to be done if you are using the structure that spawns a book approach.

Regardless of whether you choose to spawn the guidebook as an entity or a structure containing a signed book, spawning it at the player's location can only happen once per player. Do not spawn a book every time a player joins the world or after the player dies. 

Lastly, do not use `setLore` APIs on your books, as it will be added to all the guidebooks the player has. (it will overwrite the books of other creators that may be stacked in the world as well!)

## Summary of Cooperative Add-On Creator Guidelines

Use namespaces and custom folder names to ensure that the identifiers used across your add-on are unique, and cannot accidentally collide with other add-ons.

Do not use certain features, like custom dimension sizes or UI JSON overrides, that don't scale to being cooperatively overridden.

Do not change or remove vanilla behavior; only add new things to the game. Vanilla gameplay changes over time and new gameplay updates rely on existing vanilla blocks, items, mobs, and mechanics, so changing these can affect gameplay. To prevent vanilla gameplay from breaking, you should not change any of the vanilla gameplay files or use scripting to disable vanilla gameplay elements.

In addition to vanilla gameplay, you should not change or update vanilla elements, because we need to ensure that multiple add-ons work together. If we allow you to change a vanilla element, it could interfere with another add-on that relies on the same element. To prevent add-ons from unintentionally disabling another add-on, we only allow new things to be created.
