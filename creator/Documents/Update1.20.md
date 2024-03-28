---
author: kakinnun
ms.author: kakinnun
title: 1.20 Update Notes
description: Update summary of Creator changes in Bedrock 1.20
ms.service: minecraft-bedrock-edition
---
# Minecraft Bedrock 1.20 Update Notes for Creators

Minecraft Bedrock has been updated to 1.20 and there are a number of changes of note for add-on creators.

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
  - (Entity) [kill](../ScriptAPI/minecraft/server/Entity.md#kill)
  - (Entity) [applyDamage](../ScriptAPI/minecraft/server/Entity.md#applydamage)
  - [EntityApplyDamageOptions](../ScriptAPI/minecraft/server/EntityApplyDamageOptions.md)
  - [EntityApplyDamageByProjectileOptions](../ScriptAPI/minecraft/server/EntityApplyDamageByProjectileOptions.md)
  - [EntityDamageCause](../ScriptAPI/minecraft/server/EntityDamageCause.md)
- Entity tagging
  - [addTag](../ScriptAPI/minecraft/server/Entity.md#addtag)
  - [removeTag](../ScriptAPI/minecraft/server/Entity.md#removetag)
  - [hasTag](../ScriptAPI/minecraft/server/Entity.md#hastag)
  - [getTags](../ScriptAPI/minecraft/server/Entity.md#gettags)
- Entity Components
  - [getComponent](../ScriptAPI/minecraft/server/Entity.md#getcomponent)
  - [getComponents](../ScriptAPI/minecraft/server/Entity.md#getcomponents)
  - [hasComponent](../ScriptAPI/minecraft/server/Entity.md#hascomponent)
- Entity Inventory
  - [Container](../ScriptAPI/minecraft/server/Container.md)
  - [EntityInventoryComponent](../ScriptAPI/minecraft/server/EntityInventoryComponent.md)
- Block Inventory
  - [BlockInventoryComponent](../ScriptAPI/minecraft/server/BlockInventoryComponent.md)
- Music
  - (World) [playMusic](../ScriptAPI/minecraft/server/World.md#playmusic)
  - (World) [queueMusic](../ScriptAPI/minecraft/server/World.md#queuemusic)
  - (World) [stopMusic](../ScriptAPI/minecraft/server/World.md#stopmusic)
  - [MusicOptions](../ScriptAPI/minecraft/server/MusicOptions.md)

- Sound
  - (Player) [playSound](../ScriptAPI/minecraft/server/Player.md#playsound)
  - (World) [playSound](../ScriptAPI/minecraft/server/World.md#playsound)
  - [PlayerSoundOptions](../ScriptAPI/minecraft/server/PlayerSoundOptions.md)
  - [WorldSoundOptions](../ScriptAPI/minecraft/server/WorldSoundOptions.md)
- [ItemStack](../ScriptAPI/minecraft/server/ItemStack.md) (read-only APIs)
- ItemStack basic component model
  - [EntityItemComponent](../ScriptAPI/minecraft/server/EntityItemComponent.md)
  - [ItemComponent](../ScriptAPI/minecraft/server/ItemComponent.md)
  - [ItemType](../ScriptAPI/minecraft/server/ItemType.md)
  - [ItemLockMode](../ScriptAPI/minecraft/server/ItemLockMode.md)
- Entity velocity APIs
  - [applyImpulse](../ScriptAPI/minecraft/server/Entity.md#applyimpulse)
  - [applyKnockback](../ScriptAPI/minecraft/server/Entity.md#applyknockback)
  - [clearVelocity](../ScriptAPI/minecraft/server/Entity.md#clearvelocity)
- Execution Fundamentals
  - [runCommand](../ScriptAPI/minecraft/server/Entity.md#runcommand)
  - [runInterval](../ScriptAPI/minecraft/server/System.md#runinterval)

**APIs included in the @minecraft/server-ui version 1.0.0 release:**
- Basic form server UI
  - [ModalFormData](../ScriptAPI/minecraft/server-ui/ModalFormData.md)
  - [MessageFormData](../ScriptAPI/minecraft/server-ui/MessageFormData.md)
  - [ActionFormData](../ScriptAPI/minecraft/server-ui/ActionFormData.md)

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
