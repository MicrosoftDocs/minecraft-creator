---
author: kakinnun
ms.author: kakinnun
title: 1.20.40 Update Notes
description: Update summary of Creator changes in Bedrock 1.20.40
ms.service: minecraft-bedrock-edition
---
# Minecraft Bedrock 1.20.40 Update Notes for Creators

Minecraft Bedrock has been updated to 1.20.40 and there are a number of changes of note for add-on creators. The following features do not require experimental toggles.

## Entities

When the Camel and Sniffer were included in 1.20 they had several "internal-only" components that were not usable by creators. These components are now releasing allowing for better customization of the Sniffer and Camel mobs.

- **Camel Components**
  - [dash](../Reference/Content/EntityReference/Examples/EntityComponents/minecraftComponent_dash.md)
- **Sniffer Components**
  - [behavior.timer_flag_1](../Reference/Content/EntityReference/Examples/EntityGoals/minecraftBehavior_timer_flag_1.md)
  - [behavior.timer_flag_2](../Reference/Content/EntityReference/Examples/EntityGoals/minecraftBehavior_timer_flag_2.md)
  - [behavior.timer_flag_3](../Reference/Content/EntityReference/Examples/EntityGoals/minecraftBehavior_timer_flag_3.md)
  - [behavior.random_search_and_dig](../Reference/Content/EntityReference/Examples/EntityGoals/minecraftBehavior_random_search_and_dig.md)

## Creator API

Another set of Creator APIs have been released out of beta and into stable (see: [script versioning](ScriptVersioning.md) for information on how we version Creator APIs). These APIs should be a lot more stable and also allow Marketplace content creators to leverage them with backwards compatibility support.

**APIs included in the @minecraft/server version 1.6.0 release:**

- **Camera APIs**
  - Camera
    - [setCamera](../ScriptAPI/minecraft/server/Camera.md#setcamera)
    - [fade](../ScriptAPI/minecraft/server/Camera.md#fade)
    - [clear](../ScriptAPI/minecraft/server/Camera.md#clear)
  - [EasingType](../ScriptAPI/minecraft/server/EasingType.md)
  - [CameraSetRotOptions](../ScriptAPI/minecraft/server/CameraSetRotOptions.md)
  - [CameraSetFacingOptions](../ScriptAPI/minecraft/server/CameraSetFacingOptions.md)
  - [CameraSetPosOptions](../ScriptAPI/minecraft/server/CameraSetPosOptions.md)
  - [CameraDefaultOptions](../ScriptAPI/minecraft/server/CameraDefaultOptions.md)
  - [CameraSetLocationOptions](../ScriptAPI/minecraft/server/CameraSetLocationOptions.md)
- **Moon Phase APIs**   
   - World
     - [getMoonPhase](../ScriptAPI/minecraft/server/World.md#getmoonphase)
   - [MoonPhase](../ScriptAPI/minecraft/server/MoonPhase.md)
   - [MoonPhaseCount](../ScriptAPI/minecraft/server/minecraft-server.md#moonphasecount)
- **Entity "is" properties**
  - Player
    - [isEmoting](../ScriptAPI/minecraft/server/Player.md#isemoting)
    - [isGliding](../ScriptAPI/minecraft/server/Player.md#isgliding)
    - [isJumping](../ScriptAPI/minecraft/server/Player.md#isjumping)
    - [isFlying](../ScriptAPI/minecraft/server/Player.md#isflying)
  - Entity
    - [isSleeping](../ScriptAPI/minecraft/server/Entity.md#issleeping)
    - [isSneaking](../ScriptAPI/minecraft/server/Entity.md#issneaking)
    - [isSprinting](../ScriptAPI/minecraft/server/Entity.md#issprinting)
    - [isSwimming](../ScriptAPI/minecraft/server/Entity.md#isswimming)
    - [isClimbing](../ScriptAPI/minecraft/server/Entity.md#isclimbing)
    - [isOnGround](../ScriptAPI/minecraft/server/Entity.md#isonground)
    - [isInWater](../ScriptAPI/minecraft/server/Entity.md#isinwater)
    - [isFalling](../ScriptAPI/minecraft/server/Entity.md#isfalling)
- **Entity Rotation APIs**
  - Entity
    - [getRotation](../ScriptAPI/minecraft/server/Entity.md#getrotation)
    - [setRotation](../ScriptAPI/minecraft/server/Entity.md#setrotation) 
- **ItemStack + its properties and methods**
  - ItemStack
    - [amount](../ScriptAPI/minecraft/server/ItemStack.md#amount)
    - [maxAmount](../ScriptAPI/minecraft/server/ItemStack.md#maxamount)
    - [isStackable](../ScriptAPI/minecraft/server/ItemStack.md#isstackable)
    - [isStackableWith](../ScriptAPI/minecraft/server/ItemStack.md#isstackablewith)
    - [keepOnDeath](../ScriptAPI/minecraft/server/ItemStack.md#keepondeath)
    - [lockMode](../ScriptAPI/minecraft/server/ItemStack.md#lockmode)
    - [nameTag](../ScriptAPI/minecraft/server/ItemStack.md#nametag)
    - [type](../ScriptAPI/minecraft/server/ItemStack.md#type)
    - [typeId](../ScriptAPI/minecraft/server/ItemStack.md#typeid)
    - [clone](../ScriptAPI/minecraft/server/ItemStack.md#clone)
    - [getComponent](../ScriptAPI/minecraft/server/ItemStack.md#getcomponent)
    - [getComponents](../ScriptAPI/minecraft/server/ItemStack.md#getcomponents)
    - [hasComponent](../ScriptAPI/minecraft/server/ItemStack.md#hascomponent)
    - [getLore](../ScriptAPI/minecraft/server/ItemStack.md#getlore)
    - [setLore](../ScriptAPI/minecraft/server/ItemStack.md#setlore)
    - [getTags](../ScriptAPI/minecraft/server/ItemStack.md#gettags)
    - [hasTag](../ScriptAPI/minecraft/server/ItemStack.md#hastag)
    - [setCanDestroy](../ScriptAPI/minecraft/server/ItemStack.md#setcandestroy)
    - [setCanPlaceOn](../ScriptAPI/minecraft/server/ItemStack.md#setcanplaceon)
  - [ItemLockMode](../ScriptAPI/minecraft/server/ItemLockMode.md)
  - [ItemType](../ScriptAPI/minecraft/server/ItemType.md)
  - [ItemComponent](../ScriptAPI/minecraft/server/ItemComponent.md)
- **More Block Events**
  - [PlayerBreakBlockAfterEvent](../ScriptAPI/minecraft/server/PlayerBreakBlockAfterEvent.md)
  - [PlayerBreakBlockAfterEventSignal](../ScriptAPI/minecraft/server/PlayerBreakBlockAfterEventSignal.md)
  - [PlayerBreakBlockBeforeEvent](../ScriptAPI/minecraft/server/PlayerBreakBlockBeforeEvent.md)
  - [PlayerBreakBlockBeforeEventSignal](../ScriptAPI/minecraft/server/PlayerBreakBlockBeforeEventSignal.md)
  - [PlayerPlaceBlockAfterEvent](../ScriptAPI/minecraft/server/PlayerPlaceBlockAfterEvent.md)
  - [PlayerPlaceBlockAfterEventSignal](../ScriptAPI/minecraft/server/PlayerPlaceBlockAfterEvent.md)
  - WorldAfterEvents
    - [playerBreakBlock](../ScriptAPI/minecraft/server/WorldAfterEvents.md#playerbreakblock)
    - [playerPlaceBlock](../ScriptAPI/minecraft/server/WorldAfterEvents.md#playerplaceblock)
  - WorldBeforeEvents
    - [playerBreakBlock](../ScriptAPI/minecraft/server/WorldBeforeEvents.md#playerbreakblock)
  - [BlockEventOptions](../ScriptAPI/minecraft/server/BlockEventOptions.md)
- **Set Weather API**
  - Dimension
    - [setWeather](../ScriptAPI/minecraft/server/Dimension.md#setweather)
- **Entity Lifetime Events**
  - [EntityRemoveAfterEvent](../ScriptAPI/minecraft/server/EntityRemoveAfterEvent.md)
  - [EntityRemoveAfterEventSignal](../ScriptAPI/minecraft/server/EntityRemoveAfterEventSignal.md)
  - [EntityRemoveBeforeEvent](../ScriptAPI/minecraft/server/EntityRemoveBeforeEvent.md)
  - [EntityRemoveBeforeEventSignal](../ScriptAPI/minecraft/server/EntityRemoveBeforeEventSignal.md)
  - [EntitySpawnAfterEvent](../ScriptAPI/minecraft/server/EntitySpawnAfterEvent.md)
  - [EntitySpawnAfterEventSignal](../ScriptAPI/minecraft/server/EntitySpawnAfterEventSignal.md)
  - [EntityInitializationCause](../ScriptAPI/minecraft/server/EntityInitializationCause.md)
  - [EntityLoadAfterEvent](../ScriptAPI/minecraft/server/EntityLoadAfterEvent.md)
  - [EntityLoadAfterEventSignal](../ScriptAPI/minecraft/server/EntityLoadAfterEventSignal.md)
  - WorldAfterEvents
    - [entityRemove](../ScriptAPI/minecraft/server/WorldAfterEvents.md#entityremove)
    - [entitySpawn](../ScriptAPI/minecraft/server/WorldAfterEvents.md#entityspawn)
    - [entityLoad](../ScriptAPI/minecraft/server/WorldAfterEvents.md#entityload)
  - WorldBeforeEvents
    - [entityRemove](../ScriptAPI/minecraft/server/WorldBeforeEvents.md#entityremove)
- **Block isAir/isLiquid**
  - Block
    - [isAir](../ScriptAPI/minecraft/server/Block.md#isair)
    - [isLiquid](../ScriptAPI/minecraft/server/Block.md#isliquid) 
- **Entity Properties APIs**
  - Entity
    - [setProperty](../ScriptAPI/minecraft/server/Entity.md#setproperty)
    - [getProperty](../ScriptAPI/minecraft/server/Entity.md#getproperty)
    - [resetProperty](../ScriptAPI/minecraft/server/Entity.md#resetproperty)    
- **Player Experience/Level**
  - Player
    - [addLevels](../ScriptAPI/minecraft/server/Player.md#addlevels)
    - [addExperience](../ScriptAPI/minecraft/server/Player.md#addexperience)
    - [level](../ScriptAPI/minecraft/server/Player.md#level)
    - [getTotalXP](../ScriptAPI/minecraft/server/Player.md#gettotalxp)
    - [xpEarnedAtCurrentLevel](../ScriptAPI/minecraft/server/Player.md#xpearnedatcurrentlevel)
    - [totalXpNeededForNextLevel](../ScriptAPI/minecraft/server/Player.md#totalxpneededfornextlevel)
- **Player Dimension Changed Events**
  - [PlayerDimensionChangeAfterEvent](../ScriptAPI/minecraft/server/PlayerDimensionChangeAfterEvent.md)
  - [PlayerDimensionChangeAfterEventSignal](../ScriptAPI/minecraft/server/PlayerDimensionChangeAfterEventSignal.md)
  - [DimensionType](../ScriptAPI/minecraft/server/DimensionType.md)
  - WorldAfterEvents
    - [playerDimensionChange](../ScriptAPI/minecraft/server/WorldAfterEvents.md#playerdimensionchange)
     
Beta APIs will continue to be developed behind the Beta API experimental flag so if you want to use those, make sure you have that flag enabled and your manifest.json references will need to update to 1.7.0-beta. Read more about [script versioning](ScriptVersioning.md).

Scripting is a powerful way to add complex behavior to your experience. It allows for a [professional development environment that includes profiling and hot reloading](./ScriptDeveloperTools.md).

[Get started with scripting](https://aka.ms/startwithmcscript).

## What's Next

Looking ahead, here's what you can expect coming in future releases.

**Creator API**

Additional scripting APIs are planned to move to stable in an upcoming release:
- Explosion Events
- World Dynamic Properties
- Entity Dynamic Properties
- Player Interact Events

For more information on what's next, follow our [Beta/Preview Changelogs](https://feedback.minecraft.net/hc/en-us/sections/360001185332).