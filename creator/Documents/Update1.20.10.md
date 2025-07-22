---
author: kakinnun
ms.author: kakinnun
title: 1.20.10 Update Notes
description: Update summary of Creator changes in Bedrock 1.20.10
ms.service: minecraft-bedrock-edition
ms.date: 07/11/2023
---
# Minecraft Bedrock 1.20.10 Update Notes for Creators

Minecraft Bedrock has been updated to 1.20.10 and there are a number of changes of note for creators. The following features do not require experimental toggles.

## Holiday Creator Features

Several Item Components have released and are now available without using the Holiday Creator Features experiment toggle.

- [cooldown](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_cooldown.md)
- [repairable](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_repairable.md)
- [planter](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_entity_placer.md)
- [record](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_record.md)
- [shooter](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_shooter.md)
- [projectile](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_projectile.md)
- [throwable](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_throwable.md)
- [can\_destroy\_in\_creative](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_can_destroy_in_creative.md)
- [hover\_text\_color](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_hover_text_color.md)
- [max\_stack\_size](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_max_stack_size.md)

Additionally, bone\_visibility (part of the [geometry](../Reference/Content/BlockReference/Examples/BlockComponents/minecraftBlock_geometry.md) Block component) has Molang capability added, restoring the functionality to be closer to the original experimental part\_visibility component.

## Creator API

A fourth set of Creator APIs have been released out of beta and into stable (see: [script versioning](ScriptVersioning.md) for information on how we version Creator APIs). These APIs should be a lot more stable and also allow Marketplace content creators to leverage them with backwards compatibility support.

**APIs included in the @minecraft/server version 1.3.0 release:**

- **Entity and Item spawning**
  - Dimension
    - [spawnEntity()](../PriorScriptAPI/minecraft/server-1xx/Dimension.md#spawnentity)
    - [spawnItem()](../PriorScriptAPI/minecraft/server-1xx/Dimension.md#spawnitem)
- **Entity relocation/teleportation**
  - Entity
    - [teleport()](../PriorScriptAPI/minecraft/server-1xx/Entity.md#teleport)
    - [tryTeleport()](../PriorScriptAPI/minecraft/server-1xx/Entity.md#tryteleport)
    - [TeleportOptions](../PriorScriptAPI/minecraft/server-1xx/TeleportOptions.md)
  - [Vector2](../PriorScriptAPI/minecraft/server-1xx/Vector2.md)
- **Entity Effects create/read/update/delete**
  - Entity
    - [addEffect()](../PriorScriptAPI/minecraft/server-1xx/Entity.md#addeffect)
    - [getEffect()](../PriorScriptAPI/minecraft/server-1xx/Entity.md#geteffect)
    - [getEffects()](../PriorScriptAPI/minecraft/server-1xx/Entity.md#geteffects)
    - [removeEffect()](../PriorScriptAPI/minecraft/server-1xx/Entity.md#removeeffect)
  - Effect
    - [amplifier](../PriorScriptAPI/minecraft/server-1xx/Effect.md#amplifier)
    - [displayName](../PriorScriptAPI/minecraft/server-1xx/Effect.md#displayname)
    - [duration](../PriorScriptAPI/minecraft/server-1xx/Effect.md#duration)
    - [typeId](../PriorScriptAPI/minecraft/server-1xx/Effect.md#typeid)
  - EffectType
    - [getName()](../PriorScriptAPI/minecraft/server-1xx/EffectType.md#getname)
    - [EntityEffectOptions](../PriorScriptAPI/minecraft/server-1xx/EntityEffectOptions.md)
- **Entity Health components**
  - [EntityAttributeComponent](../PriorScriptAPI/minecraft/server-1xx/EntityAttributeComponent.md)
  - [EntityHealthComponent](../PriorScriptAPI/minecraft/server-1xx/EntityHealthComponent.md)
  - [EntityHealableComponent](../PriorScriptAPI/minecraft/server-1xx/EntityHealableComponent.md)
  - [FeedItem](../PriorScriptAPI/minecraft/server-1xx/FeedItem.md)
  - [FeedItemEffect](../PriorScriptAPI/minecraft/server-1xx/FeedItemEffect.md)
- **Player join/spawn/leave events**
  - [PlayerJoinAfterEvent](../PriorScriptAPI/minecraft/server-1xx/PlayerJoinAfterEvent.md)
  - [PlayerJoinAfterEventSignal](../PriorScriptAPI/minecraft/server-1xx/PlayerJoinAfterEventSignal.md)
  - [IPlayerJoinAfterEventSignal](../PriorScriptAPI/minecraft/server-1xx/IPlayerJoinAfterEventSignal.md)
  - [PlayerLeaveAfterEvent](../PriorScriptAPI/minecraft/server-1xx/PlayerLeaveAfterEvent.md)
  - [PlayerLeaveAfterEventSignal](../PriorScriptAPI/minecraft/server-1xx/PlayerLeaveAfterEventSignal.md)
  - [IPlayerLeaveAfterEventSignal](../PriorScriptAPI/minecraft/server-1xx/IPlayerLeaveAfterEventSignal.md)
  - [PlayerSpawnAfterEvent](../PriorScriptAPI/minecraft/server-1xx/PlayerSpawnAfterEvent.md)
  - [PlayerSpawnAfterEventSignal](../PriorScriptAPI/minecraft/server-1xx/PlayerSpawnAfterEventSignal.md)
  - [IPlayerSpawnAfterEventSignal](../PriorScriptAPI/minecraft/server-1xx/IPlayerSpawnAfterEventSignal.md)
- **WorldAfterEvents**
  - [playerJoin](../PriorScriptAPI/minecraft/server-1xx/WorldAfterEvents.md#playerjoin)
  - [playerLeave](../PriorScriptAPI/minecraft/server-1xx/WorldAfterEvents.md#playerleave)
  - [playerSpawn](../PriorScriptAPI/minecraft/server-1xx/WorldAfterEvents.md#playerspawn)
- **Basic Block After Events (Button Push and Lever Action)**
  - [ButtonPushAfterEvent](../PriorScriptAPI/minecraft/server-1xx/ButtonPushAfterEvent.md)
  - [ButtonPushAfterEventSignal](../PriorScriptAPI/minecraft/server-1xx/ButtonPushAfterEventSignal.md)
  - [IButtonPushAfterEventSignal](../PriorScriptAPI/minecraft/server-1xx/IButtonPushAfterEventSignal.md)
  - [LeverActionAfterEvent](../PriorScriptAPI/minecraft/server-1xx/LeverActionAfterEvent.md)
  - [LeverActionAfterEventSignal](../PriorScriptAPI/minecraft/server-1xx/LeverActionAfterEventSignal.md)
  - [ILeverActionAfterEventSignal](../PriorScriptAPI/minecraft/server-1xx/ILeverActionAfterEventSignal.md)
- **WorldAfterEvents**
  - [buttonPush](../PriorScriptAPI/minecraft/server-1xx/WorldAfterEvents.md#buttonpush)
  - [leverAction](../PriorScriptAPI/minecraft/server-1xx/WorldAfterEvents.md#leveraction)
- **Basic Block Component Model**
  - Block
    - [getComponent()](../PriorScriptAPI/minecraft/server-1xx/Block.md#getcomponent)
    - [BlockComponent](../PriorScriptAPI/minecraft/server-1xx/BlockComponent.md)

Beta APIs will continue to be developed behind the Beta API experimental flag so if you want to use those, make sure you have that flag enabled and your manifest.json references will need to update to 1.4.0-beta. Read more about [script versioning](ScriptVersioning.md).

Scripting is a powerful way to add complex behavior to your experience. It allows for a [professional development environment that includes profiling and hot reloading](./ScriptDeveloperTools.md).

[Get started with scripting](https://aka.ms/startwithmcscript).
