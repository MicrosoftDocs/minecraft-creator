---
author: mammerla
ms.author: mikeam
title: Improving performance and resource usage
description: "An article that discusses several performance tips for creators"
ms.service: minecraft-bedrock-edition
---

# Improving performance and resource usage

Add-Ons that can extend your vanilla playing experience have always been a popular part of the Minecraft experience - and if anything, they're growing _even more_ in popularity! It's increasingly common for someone to have a Minecraft world with a furniture add-on, a few different add-ons with new families of mobs, some custom pets, and maybe a custom gameplay extension or two. And then you add some additional utilities, like a custom back pack or a piece of equipment. And of course, every Minecraft experience loads every vanilla texture, and there is a lot of those too. Its not uncommon for players to maybe add 8 or more add-ons to their world. And they do this across a range of devices; from the latest consoles to high spec workstations, to their older phones from 5 years ago or a very basic integrated PC.

But as players add more add-ons additively to their world, there may come a point where their device runs out of resources, and bad behaviors could result (textures may grow fuzzy or fail to load; performance may slow down; there may even be crashes if you add enough add-ons). The best solution for this is for individual add-ons to attempt to be a thrifty in their resource usage and performance. But even if it's most important for add-ons to be thrifty, these techniques also apply to any custom world experiences or texture packs you may be building - better performance is almost always noticeable and appreciated by players.

## Texture size

Typically, we see overall texture size as one of the first things that can fail on devices. Generally, all textures - including for the user interface of Minecraft, are loaded when a world is first loaded. Everything you see in the game has a texture applied to it. And textures, being two-dimensional and all, can occupy a lot of memory quickly if the collective texture dimensions grow in size; the difference between a 256 x 256 texture (65536 bytes) and a 1024 x 1024 texture (1,048,576 bytes) is a factor of 16x (983,040 additional bytes), and when multiplied by 100 different entities or skin variants, can add up to some serious memory usages.

### Avoid wasted space

A key issue is that textures are loaded uncompressed into memory. Even if you have a largely-empty 1024 x 1024 texture that compresses to something small as a PNG file on your disk -- at least as far as Minecraft loads it, it occupies the same texture size in memory as any other 1024 x 1024 texture - that is, 1,048,576 bytes of memory. This brings us to our first recommendation: as you build textures, try to avoid wasted space and texture "real-estate". Previously, we recommended that textures have a sizing that is square and a power of 2 (e.g., 256x256, 512x512, 1024x1024), but we no longer recommend that if your texture is not close to a power of 2 dimension. For example, if you can cleave off empty space and go with a 1024 x 512 image (or even 632 x 486, to mention a random size) - then we would recommend that.

### Consider texture atlasing

For content that has many small, frequently used textures, it is often more efficient to store the textures in a single, larger texture (often referred to as Atlasing). In addition to making better use of space (less empty space) - this also can improve the disk input/output speed as the world is loading.

Minecraft will automatically assemble non-entity textures into an atlas. But for entity textures, you can create your own texture atlas.

#### Step 1. Create the combined texture atlas

Here is an example of the initial 2 textures:

Initial mob texture:

![Initial mob texture](media/ImprovingPerformanceAndResourceUsage/textureA.png)

Second mob texture:

![Second mob texture](media/ImprovingPerformanceAndResourceUsage/textureB.png)

We then combined them into a single "atlas texture" taking note of the coordinates where the initial texture ends up.

![Combined mob texture; the second mob texture is to the right of the inital mob texture](media/ImprovingPerformanceAndResourceUsage/textureC.png)

#### Step 2. Create a custom material

In order for the texture to be appropriately indexed during rendering USE_UV_ANIM within a .material file will need to be enabled.

This is done by deriving from the desired material and enabling the define:

```json
"my_uv_offset:entity_alphatest": {
    "+defines": ["USE_UV_ANIM"]
}
```

#### Step 3. Render Controller

To make use of the new material, it requires the render controller to have the `uv_anim` field to be set. These need to be the correct offset and scale the original texture relative to the final atlas texture.

To avoid defining many render controllers we are using a client entity variable:

```json
"controller.render.uv_offset": {
    "geometry": "Geometry.default",
    "materials": [{ "*": "Material.default" }],
    "textures": ["Texture.default"],
    "uv_anim" : {
        "offset" : ["variable.offset_x", "variable.offset_y"],
        "scale" : ["variable.scale_x", "variable.scale_y"]
    }
}
```

#### Step 4. Update the client entity to set the offset and scale coordinates

The client entity will need to reference the new atlas texture, the new material, and finally define the Molang variables in the client entity will allow the render controller to use the appropriate values.

```json
{
    "format_version": "1.10.0",
    "minecraft:client_entity": {
        "description": {
            "identifier": "design:sample_addon_atlas_1",
            "materials": { "default": "uv_offset" }, // UV material
            "textures": {
                "default": "textures/entity/sample_addon_atlas" // new atlas texture
            },
            "scripts": {
                "pre_animation": [
                    "variable.offset_x = 0.0 / 1.0;", // (horizonal index) / (num textures horizontal)
                    "variable.offset_y = 0.0 / 2.0;", // (vertical index) / (num textures vertical)
                    "variable.scale_x = 1.0 / 1.0;", // 1.0 / (num textures horizontal)
                    "variable.scale_y = 1.0 / 2.0;" // 1.0 / (num textures vertical)
                ],
            },
            "render_controllers": ["controller.render.uv_offset"],
            "geometry": {
                "default": "geometry.sample_addon"
            },
            "spawn_egg": {
                "base_color": "#CC55FF",
                "overlay_color": "#2926FF"
            }
        }
    }
}      
```

This simple example above assumes all textures are the same size. This doesn't have to be the case; however, it does make the calculation for the offset + scale more complicated.

### Size recommendations

The maximum size of these non-entity auto-generated atlases is based on platform requirements and may be scaled down to ensure consistent player experience. For best results across all platforms, we recommend a maximum size of 256x256 for non-entity textures (e.g., a block texture) and 2048x2048 for flipbook textures.

In this case, Minecraft may scale the entire atlas to ensure a consistent player experience. For best results across all platforms, we recommend manually created atlases do not exceed 2048x2048.

### Consider subpacks

Minecraft texture loading also has a feature where you can use subpacks and sub-textures to load differently-sized textures depending on the performance characteristics of the device they are loaded on. For example, you can utilize good-looking medium-resolution textures on a low-end mobile device, but "HD" textures on a higher-end gaming PC. See the [article on Utilizing Subpacks](./../UtilizingSubpacks.md) for more information on how to get started.

### Special note: Books

Many add-ons and worlds frequently include basic elements of user interface or instructional content - for example, a visual book that you can hold in your hand, complete with animated pages that can flip. When a user looks at the book, it's essentially an entity that _looks like_ a book, complete with individual pages that are the "body" of the entity.

From a texture perspective, every page then frequently becomes its own texture, and there is a desire to perhaps increase the size of pages to ensure text readability. However, this can be problematic if each page is its own 1024x1024 or greater texture. We've found that individual pages with a texture size of 350x250 pixels work just great to create readable pages in an entity-based help book.

### Or, just try not to go wild with variants

A very common visual flourish can be to have texture variants for different states of a mob - for example, the cat has a wholly separate texture "just" to implement a collar for cats when they are tamed. This essentially occupies twice the amount of space in memory from a texture size perspective. While of course no one would deny the importance of collars for tamed cats 😺, do try to conserve the number of variants like this that you consider for your mobs.

## Texture Handles

In addition to overall texture size, you should consider the number of textures that are also loaded into Minecraft. Texture handles correspond to the number of unique texture files that Minecraft has loaded into GPU memory - but there are exceptions for some textures like block textures that get compiled into a broader atlas'ed texture. Each texture handle has memory overhead, and Minecraft has a limit of 4,000 texture handles. Exceeding this limit can result in "pink textures" and instability.

You can use tools like [Minecraft Creator Tools](../MCToolsOverview.md) and its Inspector view to get an approximation of the number of texture handles your pack uses.

* For World Templates, we recommend staying under 2,000 texture handles.
* For Add-ons, we recommend staying under 800 texture handles.

## Pack Size & File Counts

We've seen packs larger than 200MB (uncompressed) running low on memory on some devices. Staying under 200MB is recommended but less than 100MB (uncompressed) is safest.

Every file has overhead, so having too many files can also impact performance. We've seen packs with thousands of mcfunction files have difficulty on some platforms. We've seen packs with over 10,000 files running out of memory of some devices.

It's highly recommended to stay under 10,000 files, but a top-end range of 5,000-7,000 is safer. File counts also have an impact on loading times.

Pack size and file count impact can vary significantly so the above are just guidelines.

For Add-Ons, we recommend a max pack size of 25MB (uncompressed) and a maximum of 2,500 files.

## Entities

Keep an eye on entity count, complexity and density.

When you have a lot of entities in one place, the slowdown on the server side is going to be due to path finding logic (or AI in general). On the client it is rendering.

Limit the number of entities in loaded chunks, especially those that cannot be seen. This includes the entire vertical space of the chunk.

Level designs with many entities arrayed in a small vertical space can lead to executing entity behaviors throughout that space, even when entities are too far away to be seen, or hidden behind blocks.

Limit the number of entities that need to do path-finding within close range of each other.

Limit the length of time entity scripts run for. Long scripts or large numbers of entities in a chunk will degrade FPS.

Avoid using entities to implement complex block behaviors. Use custom blocks instead.

## Sound

Consider limiting the length, size and number of sounds playing at once -- especially things that can be triggered in quick succession by minimal player input (for example, playing voice dialogues).

Limit sound file counts and sizes. Compressing the files does not help; the cost is the total in-memory size.

Many entities can emit sounds - playing sounds for many entities can get very costly.

Sounds get cached in memory, and cache management involves some locks. Playing many sounds can cause lock contention problems that show up as freezes or drops in FPS on some platforms.

Sound files also have a memory/lookup cost. The number of sound files increases lookup cost finding the sound to play. The size of sound files increases memory pressure and can result in thrashing/disk reads if the files don't all fit in the cache at once.

## Particles

Make sure there aren't too many particles simulating at once and that their complexity isn't too large.

## Commands & Scripts

Try to avoid running commands and script functionality on every tick. It is especially important to not run dozens of commands or lots of script on every tick.

If you need to run commands often, consider putting them on an interval, so they run every 5 or 20 or 100 ticks instead. Also, if you are running commands and script on these intervals, offset the intervals so your commands or script run on different ticks.

Try not to use long running commands or script operations often (e.g. a big block /fill or /clone). If possible, split this into more than one command that runs at different ticks.

## More General Suggestions

Consider creating your own in-game performance toggles with varying levels of fidelity and features.

With newer script APIs for getting at the rough outlines of a player's client system [e.g., player.clientSystemInfo](../../ScriptAPI/minecraft/server/ClientSystemInfo.md), you can key time-intensive behaviors (e.g., spawning particles) based on the rough outlines of performance (e.g., the more render distance a player has, assumedly the more performant their device is.) You will want to carefully ensure that the fundamental gameplay experience doesn't change depending on the performance profile of the player's device, however - for example, you don't want that fewer monsters spawn in a given area if the client device information is on the lower end.

Prepare for low end devices by testing on these devices as early as possible in your development process. You don't know how it's going to perform until you test.

## Summary

In sum, the foremost consumer of resources in a particular world or add-on is usually these set of textures that are included inside of its resource packs. Through the minimization of the number or dimensions of the size of textures, you can help to conserve previous space on a player's device, allowing them to load more diverse add-ons and experiences into their worlds. Across entities, script, and commands, there are also a number of ways to improve overall performance by more tightly managing when expensive operations occur. Thanks for helping to conserve texture memory and build performant experiences for Minecraft!
