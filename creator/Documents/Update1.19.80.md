---
author: kakinnun
ms.author: kakinnun
title: 1.19.80 Update Notes
description: Update summary of Creator changes in Bedrock 1.19.80
ms.service: minecraft-bedrock-edition
---
# Minecraft Bedrock 1.19.80 Update Notes for Creators

Minecraft Bedrock has been updated to 1.19.80 and there are a number of changes of note for add-on creators.

## Holiday Creator Features ##

No existing Holiday Creator Features left experimental this release. But two new components were added, replacing previous Holiday Creator Features.

- [transformation](../Reference/Content/BlockReference/Examples/BlockComponents/minecraftBlock_transformation.md) - replaces the previous block rotation component (and adds scaling and translation)
- [bone_visibility](../Reference/Content/BlockReference/Examples/BlockComponents/minecraftBlock_geometry.md#bone_visibility) - added to the geometry component and replaces the previous part_visibility component

## Components ##

**New Block Transformation Component**

Added a new [transformation](../Reference/Content/BlockReference/Examples/BlockComponents/minecraftBlock_transformation.md) component for blocks to support rotation, scaling and translation. The component can be added to the whole block, and/or to individual [block permutations](../Reference/Content/BlockReference/Examples/BlockStatesAndPermutations.md#block-permutations).

````JSON
"minecraft:transformation": {
    "translation": [0.0, 0.1, -0.1],
    "scale": [0.5, 1, 1.5],
    "rotation": [90, 180, 0]
}
````

**bone_visibility**

Added a new [bone_visibility](../Reference/Content/BlockReference/Examples/BlockComponents/minecraftBlock_geometry.md#bone_visibility) element to the block geometry component.

## Commands ##

**New Command: inputpermission**

Added the [inputpermission](../Commands/commands/inputpermission.md) command, which allows for setting the player's camera or movement as enabled or disabled. This will be handy in cutscenes and non-interactive sequences.

```/inputpermission set <target: player> <permission: camera | movement> <state: enabled | disabled>```

**Improved Command: summon**

Added two new overloads to the [summon](../Commands/commands/summon.md) command to make it easier to summon entities at specific rotations.

```/summon [spawnPos : x y z] facing <position: x y z> [spawnEvent: string] [nametag: string]```

```/summon [spawnPos : x y z] facing <lookAtEntity: target> [spawnEvent: string] [nametag: string]```

**Auto-complete support for block states**

In 1.19.70, we removed support for field "data" in the following commands:

- [/clone](../Commands/commands/clone.md)
- [/execute](../Commands/commands/execute.md)
- [/fill](../Commands/commands/fill.md)
- [/setblock](../Commands/commands/setblock.md)
- [/testforblock](../Commands/commands/testforblock.md)

In 1.19.80, we've added auto-complete support for block-states to make it easier to use this syntax.

**Example:**

No longer supported:

```/setblock ~ ~ ~ minecraft:wool 1```

Supported:

```/setblock ~ ~ ~ minecraft:wool ["color":"orange"]```


## Creator API ##

A second set of Creator APIs have been released out of beta and into stable (see: [script versioning](ScriptVersioning.md) for information on how we version Creator APIs ). These APIs should be a lot more stable and also allow Marketplace content creators to leverage them with backwards compatibility support. 

**APIs included in the @minecraft/server version 1.1.0 release:**

 - [Vector3](../ScriptAPI/minecraft/server/Vector3.md)
 - System
    - [runTimeout](../ScriptAPI/minecraft/server/System.md#runtimeout)
    - [runInterval](../ScriptAPI/minecraft/server/System.md#runinterval)
    - [clearRun](../ScriptAPI/minecraft/server/System.md#clearrun)
    - [currentTick](../ScriptAPI/minecraft/server/System.md#currenttick)
 - Reading Basic Block properties
     - [BlockPermutation](../ScriptAPI/minecraft/server/BlockPermutation.md)  (only a subset)
     - [Block](../ScriptAPI/minecraft/server/Block.md)
     - [getBlock](../ScriptAPI/minecraft/server/Dimension.md#getblock)
 - Basic messaging
     - [sendMessage](../ScriptAPI/minecraft/server/Player.md#sendmessage)

Beta APIs will continue to be developed behind the Beta API experimental flag so if you want to use those, make sure you have that flag enabled and your manifest.json references will need to update to 1.2.0-beta. Read more about [script versioning](ScriptVersioning.md).

Scripting is a powerful way to add complex behavior to your experience. It allows for a [professional development environment that includes profiling and hot reloading](./ScriptDeveloperTools.md).

[Get started with scripting](https://aka.ms/startwithmcscript).