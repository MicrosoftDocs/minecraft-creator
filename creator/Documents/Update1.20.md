---
author: kakinnun
ms.author: kakinnun
title: 1.20 Update Notes
description: Update summary of Creator changes in Bedrock 1.20
ms.service: minecraft-bedrock-edition
ms.date: 06/07/2023
---
# Minecraft Bedrock 1.20 Update Notes for Creators

Minecraft Bedrock has been updated to 1.20 and there are a number of changes of note for creators.

## Holiday Creator Features ##

Five Item Components have released and are now available without using the Holiday Creator Features experiment toggle.

- [display_name](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_display_name.md)
- [durability](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_durability.md)
- [entity_placer](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_entity_placer.md)
- [fuel](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_fuel.md)
- [icon](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_icon.md)

## Creator API ##

A third set of Creator APIs have been released out of beta and into stable (see: [script versioning](ScriptVersioning.md) for information on how we version Creator APIs ). These APIs should be a lot more stable and also allow Marketplace content creators to leverage them with backwards compatibility support. 

**APIs included in the @minecraft/server version 1.2.0 release:**

- Entity damage application
  - (Entity) [kill](../PriorScriptAPI/minecraft/server-1xx/Entity.md#kill)
  - (Entity) [applyDamage](../PriorScriptAPI/minecraft/server-1xx/Entity.md#applydamage)
  - [EntityApplyDamageOptions](../PriorScriptAPI/minecraft/server-1xx/EntityApplyDamageOptions.md)
  - [EntityApplyDamageByProjectileOptions](../PriorScriptAPI/minecraft/server-1xx/EntityApplyDamageByProjectileOptions.md)
  - [EntityDamageCause](../PriorScriptAPI/minecraft/server-1xx/EntityDamageCause.md)
- Entity tagging
  - [addTag](../PriorScriptAPI/minecraft/server-1xx/Entity.md#addtag)
  - [removeTag](../PriorScriptAPI/minecraft/server-1xx/Entity.md#removetag)
  - [hasTag](../PriorScriptAPI/minecraft/server-1xx/Entity.md#hastag)
  - [getTags](../PriorScriptAPI/minecraft/server-1xx/Entity.md#gettags)
- Entity Components
  - [getComponent](../PriorScriptAPI/minecraft/server-1xx/Entity.md#getcomponent)
  - [getComponents](../PriorScriptAPI/minecraft/server-1xx/Entity.md#getcomponents)
  - [hasComponent](../PriorScriptAPI/minecraft/server-1xx/Entity.md#hascomponent)
- Entity Inventory
  - [Container](../PriorScriptAPI/minecraft/server-1xx/Container.md)
  - [EntityInventoryComponent](../PriorScriptAPI/minecraft/server-1xx/EntityInventoryComponent.md)
- Block Inventory
  - [BlockInventoryComponent](../PriorScriptAPI/minecraft/server-1xx/BlockInventoryComponent.md)
- Music
  - (World) [playMusic](../PriorScriptAPI/minecraft/server-1xx/World.md#playmusic)
  - (World) [queueMusic](../PriorScriptAPI/minecraft/server-1xx/World.md#queuemusic)
  - (World) [stopMusic](../PriorScriptAPI/minecraft/server-1xx/World.md#stopmusic)
  - [MusicOptions](../PriorScriptAPI/minecraft/server-1xx/MusicOptions.md)

- Sound
  - (Player) [playSound](../PriorScriptAPI/minecraft/server-1xx/Player.md#playsound)
  - (World) [playSound](../PriorScriptAPI/minecraft/server-1xx/World.md#playsound)
  - [PlayerSoundOptions](../PriorScriptAPI/minecraft/server-1xx/PlayerSoundOptions.md)
  - [WorldSoundOptions](../PriorScriptAPI/minecraft/server-1xx/WorldSoundOptions.md)
- [ItemStack](../PriorScriptAPI/minecraft/server-1xx/ItemStack.md) (read-only APIs)
- ItemStack basic component model
  - [EntityItemComponent](../PriorScriptAPI/minecraft/server-1xx/EntityItemComponent.md)
  - [ItemComponent](../PriorScriptAPI/minecraft/server-1xx/ItemComponent.md)
  - [ItemType](../PriorScriptAPI/minecraft/server-1xx/ItemType.md)
  - [ItemLockMode](../PriorScriptAPI/minecraft/server-1xx/ItemLockMode.md)
- Entity velocity APIs
  - [applyImpulse](../PriorScriptAPI/minecraft/server-1xx/Entity.md#applyimpulse)
  - [applyKnockback](../PriorScriptAPI/minecraft/server-1xx/Entity.md#applyknockback)
  - [clearVelocity](../PriorScriptAPI/minecraft/server-1xx/Entity.md#clearvelocity)
- Execution Fundamentals
  - [runCommand](../PriorScriptAPI/minecraft/server-1xx/Entity.md#runcommand)
  - [runInterval](../PriorScriptAPI/minecraft/server-1xx/System.md#runinterval)

**APIs included in the @minecraft/server-ui version 1.0.0 release:**
- Basic form server UI
  - [ModalFormData](../PriorScriptAPI/minecraft/server-ui-1xx/ModalFormData.md)
  - [MessageFormData](../PriorScriptAPI/minecraft/server-ui-1xx/MessageFormData.md)
  - [ActionFormData](../PriorScriptAPI/minecraft/server-ui-1xx/ActionFormData.md)

Beta APIs will continue to be developed behind the Beta API experimental flag so if you want to use those, make sure you have that flag enabled and your manifest.json references will need to update to 1.3.0-beta. Read more about [script versioning](ScriptVersioning.md).

Scripting is a powerful way to add complex behavior to your experience. It allows for a [professional development environment that includes profiling and hot reloading](./ScriptDeveloperTools.md).

[Get started with scripting](https://aka.ms/startwithmcscript).

## New Experimental Features ##

**Camera**

The [camera](../Documents/CameraCommandIntroduction.md) feature allows for defining custom cameras via JSON, and manipulating them via the /camera command. This initial experiment focuses on the ```free camera``` preset.

**Block Traits**

[Block Traits](../Reference/Content/BlockReference/Examples/BlockTraits.md) are intended as a shortcut for creators to add Vanilla BlockStates and setter functions to data-driven blocks.

For example:

- By using the ```minecraft:placement_direction``` trait to set the ```minecraft:cardinal_direction``` state, you can create a custom furnace block that will orient so the front is facing the player.

- By using the ```minecraft:placement_position``` trait to set the ```minecraft:block_face``` (the face the block was placed on) and ```minecraft:vertical_half``` (if a block was placed on the top or bottom) states, you can easily create blocks that behave like slabs or trapdoors.
