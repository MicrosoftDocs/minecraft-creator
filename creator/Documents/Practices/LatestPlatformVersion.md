---
author: mammerla
ms.author: mikeam
title: Latest Platform Version Guidance
description: "A guide to using the latest platform version in your content"
ms.service: minecraft-bedrock-edition
ms.date: 12/23/2025
---

# Latest Platform Version Guidance

When delivering your Add-Ons and worlds to players, you'll want to ensure they're built on "up to date" versions of the Minecraft Bedrock platform. What do we mean by up to date? Unfortunately, versions are a little complicated in Minecraft. This article attempts to document the latest versions of content across sources.

> [!TIP]
> We have (preview) tooling available at [https://mctools.dev](https://mctools.dev) that can scan your content and tell you if it is conformant to the "up to date" version. When you open a zip or MCAddon of your content, under the Inspector option, select the "Current Platform Versions" suite, and it should show relevant versions and if any files are considered "out of date".

## How to read version numbers

Version numbers appear at the top of most definition files:

```json
{
  "format_version": "1.21.130",
  "minecraft:entity": {
    ...
  }
}
```

You can see the version number is actually three numbers, separated by dots. Version `1.21.130` should be read as:

* Major version: `1`
* Minor version: `21`
* Patch level: `130`

In general, when you're building new content, you should target the most recent release of the Minecraft: Bedrock Edition retail version, in this case, `1.21.130`. Minecraft versions that are within _one minor version_ of the current release are broadly considered "up to date": that means that add-ons written for version`1.20.*` and `1.21.*` (at any patch level) are up to date. We consider this the "N or N-1" rule, where "N" is the current minor version. Following this guideline, an add-on written for version `1.19.80` would _not_ be considered up to date.

## Versions across Minecraft

Minecraft Bedrock Edition uses several different "versioning" systems and histories in different places within the platform. In many cases (such as block type definitions) the latest format version of the file matches the version of the product. In other places, the de-facto "most modern version" comes from a previous version of the game (e.g., animations should be at version 1.10.0). In a few other places, like scripting, the versioning scheme is completely different. For these reasons, in places the "N-1" rule may not literally mean the version has to match the game version. In this rest of this article, we'll go over the exceptions and nuances of versioning in major portions of the platform.

The major versions to consider include:

* Base game version
* Min engine version
* Command version
* Per-file-type format versions
* Script module version

### Base game version

Base game version is a world template-only concept and located in the **manifest.json** of a world template file. `base_game_version` is compliant with the N-1 minor version idea.

Example of _non-conformant_ content:

```JSON
{
  "header": {
    "name": "pack.name",
    "description": "pack.description",
    "version": [1, 0, 7],
    "lock_template_options": true,
    "base_game_version": [1, 16, 0],
    "uuid": "cb599a1d-0fc2-4263-a06d-3e294fd5ffc4"
  },
  "modules": [{
    "version": [1, 0, 7],
    "type": "world_template",
    "uuid": "6eb7c7a6-7db3-496d-8155-edd8a5003116"
  }],
  "format_version": 2
}
```

As you upgrade content to newer base game versions, you will need to validate your world works as expected&mdash;for example, that the introduction of 1.19 or 1.20-era mobs doesn't suddenly cause game play bugs in various forms (e.g., a glow squid suddenly inside of your dungeon pond).

### Manifest file format version

The **manifest.json** file in behavior packs/resource packs should have a format version of `2`.

### Behavior Pack/Resource Pack manifest file min\_engine\_version

Behavior pack/resource pack files have a `min_engine_version` that is within the the N-1 rule. `min_engine_version` influences a wide array of things, including the version of commands as run within MCFunctions, tick.json, and behavior animations/behavior animation controllers.

### Command versions in Level DB and in structures

As part of using command blocks, an inherent command version gets associated with that command block. Commands as used inside of command blocks should be upgraded to a command version consistent with the N-1 rule. For version 1.21.0, this is command version 33.

### Format versions

Format versions are declared in many major JSON files in Minecraft packs. Depending on the type of file, we will validate the version is at least the minimum version specified. If the value is "N-1", we will validate against versions based on the "N-1" rule logic above.

It is expected that these tables will update over time, so stay tuned.

#### Behavior Packs

|Type of File|What JSON files?|Minimum version|
|:---|:---|:---|
|Animation Controllers|animation_controllers folder|1.10.0|
|Animations|animations folder|1.10.0|
|Block Types|blocks folder|N-1|
|Entity Types|entities folder|(exempt - entity type versioning is highly variable)|
|Item Types|items folder|N-1|
|Loot Tables|loot_tables folder|(no versioning concept)|
|Recipes|recipes folder|N-1|
|Spawn Rules|spawn_rules folder|N-1|
|Trading Tables|Trading folder|(no versioning concept)|

#### Resource Packs

|Type of File|What JSON files?|Minimum version|
|:---|:---|:---|
|Animation Controllers|animation_controllers folder|1.10.0|
|Animations|animations folder|1.10.0|
|Attachables (Item type rendering descriptions)|attachables folder|1.10.0|
|Client Biome definitions|biomes_client.json|(no versioning concept)|
|Block rendering definitions|blocks.json|(no versioning concept)|
|Entity type render descriptions|entity folder|N-1|
|Fogs|fogs folder|N-1|
|Models|models folder|1.12.0|
|Render Controllers|render_controllers folder|1.10.0|
|Sound/Music definitions|sounds folder|N-1|
|Texture definitions|textures/*_texture.json|(no versioning concept)|
|JSON UI|ui folder|(no versioning concept)|

### Script module versions

Every script module has its minor version incremented if new capabilities are introduced, version over version. Its major version (e.g., going from `1.x` to `2.y`) is incremented if there are known backwards compatibility impacting bugs that are fixed or changed.

Most Minecraft content that uses scripting uses the `@minecraft/server` module. Its "script module version" to "major version" mapping is described in [the Script Versioning article](./../ScriptVersioning.md). To adhere to the "N-1 rule", and assuming the current major version is `1.21.130`, we would ensure that Minecraft content in a behavior pack expresses a dependency on at least `1.2.0` of `@minecraft/server` (the version of the @minecraft/script contemporary of `1.20.0`), if it uses scripting.

Upgrading a dependency within a scripting minor version should generally be safe. Because the difference between version `1.2.0` and, say, `1.9.0`, should only be additive and not-backwards-compatible impacting, updating script module version dependencies with minor versions should not impact how that code works.
