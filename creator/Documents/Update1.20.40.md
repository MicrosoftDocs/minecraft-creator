---
author: kakinnun
ms.author: kakinnun
title: 1.20.40 Update Notes
description: Update summary of Creator changes in Bedrock 1.20.40
ms.service: minecraft-bedrock-edition
ms.date: 10/24/2023
---
# Minecraft Bedrock 1.20.40 Update Notes for Creators

Minecraft Bedrock has been updated to 1.20.40 and there are a number of changes of note for creators. The following features do not require experimental toggles.

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
    - [setCamera](../PriorScriptAPI/minecraft/server-1xx/Camera.md#setcamera)
    - [fade](../PriorScriptAPI/minecraft/server-1xx/Camera.md#fade)
    - [clear](../PriorScriptAPI/minecraft/server-1xx/Camera.md#clear)
  - [EasingType](../PriorScriptAPI/minecraft/server-1xx/EasingType.md)
  - [CameraSetRotOptions](../PriorScriptAPI/minecraft/server-1xx/CameraSetRotOptions.md)
  - [CameraSetFacingOptions](../PriorScriptAPI/minecraft/server-1xx/CameraSetFacingOptions.md)
  - [CameraSetPosOptions](../PriorScriptAPI/minecraft/server-1xx/CameraSetPosOptions.md)
  - [CameraDefaultOptions](../PriorScriptAPI/minecraft/server-1xx/CameraDefaultOptions.md)
  - [CameraSetLocationOptions](../PriorScriptAPI/minecraft/server-1xx/CameraSetLocationOptions.md)
- **Moon Phase APIs**   
   - World
     - [getMoonPhase](../PriorScriptAPI/minecraft/server-1xx/World.md#getmoonphase)
   - [MoonPhase](../PriorScriptAPI/minecraft/server-1xx/MoonPhase.md)
   - [MoonPhaseCount](../PriorScriptAPI/minecraft/server-1xx/minecraft-server.md#moonphasecount)
- **Entity "is" properties**
  - Player
    - [isEmoting](../PriorScriptAPI/minecraft/server-1xx/Player.md#isemoting)
    - [isGliding](../PriorScriptAPI/minecraft/server-1xx/Player.md#isgliding)
    - [isJumping](../PriorScriptAPI/minecraft/server-1xx/Player.md#isjumping)
    - [isFlying](../PriorScriptAPI/minecraft/server-1xx/Player.md#isflying)
  - Entity
    - [isSleeping](../PriorScriptAPI/minecraft/server-1xx/Entity.md#issleeping)
    - [isSneaking](../PriorScriptAPI/minecraft/server-1xx/Entity.md#issneaking)
    - [isSprinting](../PriorScriptAPI/minecraft/server-1xx/Entity.md#issprinting)
    - [isSwimming](../PriorScriptAPI/minecraft/server-1xx/Entity.md#isswimming)
    - [isClimbing](../PriorScriptAPI/minecraft/server-1xx/Entity.md#isclimbing)
    - [isOnGround](../PriorScriptAPI/minecraft/server-1xx/Entity.md#isonground)
    - [isInWater](../PriorScriptAPI/minecraft/server-1xx/Entity.md#isinwater)
    - [isFalling](../PriorScriptAPI/minecraft/server-1xx/Entity.md#isfalling)
- **Entity Rotation APIs**
  - Entity
    - [getRotation](../PriorScriptAPI/minecraft/server-1xx/Entity.md#getrotation)
    - [setRotation](../PriorScriptAPI/minecraft/server-1xx/Entity.md#setrotation) 
- **ItemStack + its properties and methods**
  - ItemStack
    - [amount](../PriorScriptAPI/minecraft/server-1xx/ItemStack.md#amount)
    - [maxAmount](../PriorScriptAPI/minecraft/server-1xx/ItemStack.md#maxamount)
    - [isStackable](../PriorScriptAPI/minecraft/server-1xx/ItemStack.md#isstackable)
    - [isStackableWith](../PriorScriptAPI/minecraft/server-1xx/ItemStack.md#isstackablewith)
    - [keepOnDeath](../PriorScriptAPI/minecraft/server-1xx/ItemStack.md#keepondeath)
    - [lockMode](../PriorScriptAPI/minecraft/server-1xx/ItemStack.md#lockmode)
    - [nameTag](../PriorScriptAPI/minecraft/server-1xx/ItemStack.md#nametag)
    - [type](../PriorScriptAPI/minecraft/server-1xx/ItemStack.md#type)
    - [typeId](../PriorScriptAPI/minecraft/server-1xx/ItemStack.md#typeid)
    - [clone](../PriorScriptAPI/minecraft/server-1xx/ItemStack.md#clone)
    - [getComponent](../PriorScriptAPI/minecraft/server-1xx/ItemStack.md#getcomponent)
    - [getComponents](../PriorScriptAPI/minecraft/server-1xx/ItemStack.md#getcomponents)
    - [hasComponent](../PriorScriptAPI/minecraft/server-1xx/ItemStack.md#hascomponent)
    - [getLore](../PriorScriptAPI/minecraft/server-1xx/ItemStack.md#getlore)
    - [setLore](../PriorScriptAPI/minecraft/server-1xx/ItemStack.md#setlore)
    - [getTags](../PriorScriptAPI/minecraft/server-1xx/ItemStack.md#gettags)
    - [hasTag](../PriorScriptAPI/minecraft/server-1xx/ItemStack.md#hastag)
    - [setCanDestroy](../PriorScriptAPI/minecraft/server-1xx/ItemStack.md#setcandestroy)
    - [setCanPlaceOn](../PriorScriptAPI/minecraft/server-1xx/ItemStack.md#setcanplaceon)
  - [ItemLockMode](../PriorScriptAPI/minecraft/server-1xx/ItemLockMode.md)
  - [ItemType](../PriorScriptAPI/minecraft/server-1xx/ItemType.md)
  - [ItemComponent](../PriorScriptAPI/minecraft/server-1xx/ItemComponent.md)
- **More Block Events**
  - [PlayerBreakBlockAfterEvent](../PriorScriptAPI/minecraft/server-1xx/PlayerBreakBlockAfterEvent.md)
  - [PlayerBreakBlockAfterEventSignal](../PriorScriptAPI/minecraft/server-1xx/PlayerBreakBlockAfterEventSignal.md)
  - [PlayerBreakBlockBeforeEvent](../PriorScriptAPI/minecraft/server-1xx/PlayerBreakBlockBeforeEvent.md)
  - [PlayerBreakBlockBeforeEventSignal](../PriorScriptAPI/minecraft/server-1xx/PlayerBreakBlockBeforeEventSignal.md)
  - [PlayerPlaceBlockAfterEvent](../PriorScriptAPI/minecraft/server-1xx/PlayerPlaceBlockAfterEvent.md)
  - [PlayerPlaceBlockAfterEventSignal](../PriorScriptAPI/minecraft/server-1xx/PlayerPlaceBlockAfterEvent.md)
  - WorldAfterEvents
    - [playerBreakBlock](../PriorScriptAPI/minecraft/server-1xx/WorldAfterEvents.md#playerbreakblock)
    - [playerPlaceBlock](../PriorScriptAPI/minecraft/server-1xx/WorldAfterEvents.md#playerplaceblock)
  - WorldBeforeEvents
    - [playerBreakBlock](../PriorScriptAPI/minecraft/server-1xx/WorldBeforeEvents.md#playerbreakblock)
  - [BlockEventOptions](../PriorScriptAPI/minecraft/server-1xx/BlockEventOptions.md)
- **Set Weather API**
  - Dimension
    - [setWeather](../PriorScriptAPI/minecraft/server-1xx/Dimension.md#setweather)
- **Entity Lifetime Events**
  - [EntityRemoveAfterEvent](../PriorScriptAPI/minecraft/server-1xx/EntityRemoveAfterEvent.md)
  - [EntityRemoveAfterEventSignal](../PriorScriptAPI/minecraft/server-1xx/EntityRemoveAfterEventSignal.md)
  - [EntityRemoveBeforeEvent](../PriorScriptAPI/minecraft/server-1xx/EntityRemoveBeforeEvent.md)
  - [EntityRemoveBeforeEventSignal](../PriorScriptAPI/minecraft/server-1xx/EntityRemoveBeforeEventSignal.md)
  - [EntitySpawnAfterEvent](../PriorScriptAPI/minecraft/server-1xx/EntitySpawnAfterEvent.md)
  - [EntitySpawnAfterEventSignal](../PriorScriptAPI/minecraft/server-1xx/EntitySpawnAfterEventSignal.md)
  - [EntityInitializationCause](../PriorScriptAPI/minecraft/server-1xx/EntityInitializationCause.md)
  - [EntityLoadAfterEvent](../PriorScriptAPI/minecraft/server-1xx/EntityLoadAfterEvent.md)
  - [EntityLoadAfterEventSignal](../PriorScriptAPI/minecraft/server-1xx/EntityLoadAfterEventSignal.md)
  - WorldAfterEvents
    - [entityRemove](../PriorScriptAPI/minecraft/server-1xx/WorldAfterEvents.md#entityremove)
    - [entitySpawn](../PriorScriptAPI/minecraft/server-1xx/WorldAfterEvents.md#entityspawn)
    - [entityLoad](../PriorScriptAPI/minecraft/server-1xx/WorldAfterEvents.md#entityload)
  - WorldBeforeEvents
    - [entityRemove](../PriorScriptAPI/minecraft/server-1xx/WorldBeforeEvents.md#entityremove)
- **Block isAir/isLiquid**
  - Block
    - [isAir](../PriorScriptAPI/minecraft/server-1xx/Block.md#isair)
    - [isLiquid](../PriorScriptAPI/minecraft/server-1xx/Block.md#isliquid) 
- **Entity Properties APIs**
  - Entity
    - [setProperty](../PriorScriptAPI/minecraft/server-1xx/Entity.md#setproperty)
    - [getProperty](../PriorScriptAPI/minecraft/server-1xx/Entity.md#getproperty)
    - [resetProperty](../PriorScriptAPI/minecraft/server-1xx/Entity.md#resetproperty)    
- **Player Experience/Level**
  - Player
    - [addLevels](../PriorScriptAPI/minecraft/server-1xx/Player.md#addlevels)
    - [addExperience](../PriorScriptAPI/minecraft/server-1xx/Player.md#addexperience)
    - [level](../PriorScriptAPI/minecraft/server-1xx/Player.md#level)
    - [getTotalXP](../PriorScriptAPI/minecraft/server-1xx/Player.md#gettotalxp)
    - [xpEarnedAtCurrentLevel](../PriorScriptAPI/minecraft/server-1xx/Player.md#xpearnedatcurrentlevel)
    - [totalXpNeededForNextLevel](../PriorScriptAPI/minecraft/server-1xx/Player.md#totalxpneededfornextlevel)
- **Player Dimension Changed Events**
  - [PlayerDimensionChangeAfterEvent](../PriorScriptAPI/minecraft/server-1xx/PlayerDimensionChangeAfterEvent.md)
  - [PlayerDimensionChangeAfterEventSignal](../PriorScriptAPI/minecraft/server-1xx/PlayerDimensionChangeAfterEventSignal.md)
  - [DimensionType](../PriorScriptAPI/minecraft/server-1xx/DimensionType.md)
  - WorldAfterEvents
    - [playerDimensionChange](../PriorScriptAPI/minecraft/server-1xx/WorldAfterEvents.md#playerdimensionchange)
     
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

For more information on what's next, follow our [Beta/Preview Changelogs](https://feedback.minecraft.net/hc/sections/360001185332).
