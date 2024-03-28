---
author: kakinnun
ms.author: kakinnun
title: 1.20.10 Update Notes
description: Update summary of Creator changes in Bedrock 1.20.10
ms.service: minecraft-bedrock-edition
---
# Minecraft Bedrock 1.20.10 Update Notes for Creators

Minecraft Bedrock has been updated to 1.20.10 and there are a number of changes of note for add-on creators. The following features do not require experimental toggles.

## Holiday Creator Features

Several Item Components have released and are now available without using the Holiday Creator Features experiment toggle.

- [cooldown](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_cooldown.md)
- [repairable](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_repairable.md)
- [planter](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_entity_placer.md)
- [record](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_record.md)
- [shooter](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_shooter.md)
- [projectile](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_projectile.md)
- [throwable](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_throwable.md)
- [can_destroy_in_creative](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_can_destroy_in_creative.md)
- [hover_text_color](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_hover_text_color.md)
- [max_stack_size](../Reference/Content/ItemReference/Examples/ItemComponents/minecraft_max_stack_size.md)

Additionally, [bone_visibility](../Reference/Content/BlockReference/Examples/BlockComponents/minecraftBlock_geometry.md#bone_visibility) (part of the [geometry](../Reference/Content/BlockReference/Examples/BlockComponents/minecraftBlock_geometry.md) Block component) has Molang capability added, restoring the functionality to be closer to the original experimental part_visibility component.

## Creator API

A fourth set of Creator APIs have been released out of beta and into stable (see: [script versioning](ScriptVersioning.md) for information on how we version Creator APIs). These APIs should be a lot more stable and also allow Marketplace content creators to leverage them with backwards compatibility support.

**APIs included in the @minecraft/server version 1.3.0 release:**

- **Entity and Item spawning**
  - Dimension
    - [spawnEntity()](../ScriptAPI/minecraft/server/Dimension.md#spawnentity)
    - [spawnItem()](../ScriptAPI/minecraft/server/Dimension.md#spawnitem)
- **Entity relocation/teleportation**
  - Entity
    - [teleport()](../ScriptAPI/minecraft/server/Entity.md#teleport)
    - [tryTeleport()](../ScriptAPI/minecraft/server/Entity.md#tryteleport)
    - [TeleportOptions](../ScriptAPI/minecraft/server/TeleportOptions.md)
  - [Vector2](../ScriptAPI/minecraft/server/Vector2.md)
- **Entity Effects create/read/update/delete**
  - Entity
    - [addEffect()](../ScriptAPI/minecraft/server/Entity.md#addeffect)
    - [getEffect()](../ScriptAPI/minecraft/server/Entity.md#geteffect)
    - [getEffects()](../ScriptAPI/minecraft/server/Entity.md#geteffects)
    - [removeEffect()](../ScriptAPI/minecraft/server/Entity.md#removeeffect)
  - Effect
    - [amplifier](../ScriptAPI/minecraft/server/Effect.md#amplifier)
    - [displayName](../ScriptAPI/minecraft/server/Effect.md#displayname)
    - [duration](../ScriptAPI/minecraft/server/Effect.md#duration)
    - [typeId](../ScriptAPI/minecraft/server/Effect.md#typeid)
  - EffectType
    - [getName()](../ScriptAPI/minecraft/server/EffectType.md#getname)
    - [EntityEffectOptions](../ScriptAPI/minecraft/server/EntityEffectOptions.md)
- **Entity Health components**
  - [EntityAttributeComponent](../ScriptAPI/minecraft/server/EntityAttributeComponent.md)
  - [EntityHealthComponent](../ScriptAPI/minecraft/server/EntityHealthComponent.md)
  - [EntityHealableComponent](../ScriptAPI/minecraft/server/EntityHealableComponent.md)
  - [FeedItem](../ScriptAPI/minecraft/server/FeedItem.md)
  - [FeedItemEffect](../ScriptAPI/minecraft/server/FeedItemEffect.md)
- **Player join/spawn/leave events**
  - [PlayerJoinAfterEvent](../ScriptAPI/minecraft/server/PlayerJoinAfterEvent.md)
  - [PlayerJoinAfterEventSignal](../ScriptAPI/minecraft/server/PlayerJoinAfterEventSignal.md)
  - [IPlayerJoinAfterEventSignal](../ScriptAPI/minecraft/server/IPlayerJoinAfterEventSignal.md)
  - [PlayerLeaveAfterEvent](../ScriptAPI/minecraft/server/PlayerLeaveAfterEvent.md)
  - [PlayerLeaveAfterEventSignal](../ScriptAPI/minecraft/server/PlayerLeaveAfterEventSignal.md)
  - [IPlayerLeaveAfterEventSignal](../ScriptAPI/minecraft/server/IPlayerLeaveAfterEventSignal.md)
  - [PlayerSpawnAfterEvent](../ScriptAPI/minecraft/server/PlayerSpawnAfterEvent.md)
  - [PlayerSpawnAfterEventSignal](../ScriptAPI/minecraft/server/PlayerSpawnAfterEventSignal.md)
  - [IPlayerSpawnAfterEventSignal](../ScriptAPI/minecraft/server/IPlayerSpawnAfterEventSignal.md)
- **WorldAfterEvents**
  - [playerJoin](../ScriptAPI/minecraft/server/WorldAfterEvents.md#playerjoin)
  - [playerLeave](../ScriptAPI/minecraft/server/WorldAfterEvents.md#playerleave)
  - [playerSpawn](../ScriptAPI/minecraft/server/WorldAfterEvents.md#playerspawn)
- **Basic Block After Events (Button Push and Lever Action)**
  - [ButtonPushAfterEvent](../ScriptAPI/minecraft/server/ButtonPushAfterEvent.md)
  - [ButtonPushAfterEventSignal](../ScriptAPI/minecraft/server/ButtonPushAfterEventSignal.md)
  - [IButtonPushAfterEventSignal](../ScriptAPI/minecraft/server/IButtonPushAfterEventSignal.md)
  - [LeverActionAfterEvent](../ScriptAPI/minecraft/server/LeverActionAfterEvent.md)
  - [LeverActionAfterEventSignal](../ScriptAPI/minecraft/server/LeverActionAfterEventSignal.md)
  - [ILeverActionAfterEventSignal](../ScriptAPI/minecraft/server/ILeverActionAfterEventSignal.md)
- **WorldAfterEvents**
  - [buttonPush](../ScriptAPI/minecraft/server/WorldAfterEvents.md#buttonpush)
  - [leverAction](../ScriptAPI/minecraft/server/WorldAfterEvents.md#leveraction)
- **Basic Block Component Model**
  - Block
    - [getComponent()](../ScriptAPI/minecraft/server/Block.md#getcomponent)
    - [BlockComponent](../ScriptAPI/minecraft/server/BlockComponent.md)

Beta APIs will continue to be developed behind the Beta API experimental flag so if you want to use those, make sure you have that flag enabled and your manifest.json references will need to update to 1.4.0-beta. Read more about [script versioning](ScriptVersioning.md).

Scripting is a powerful way to add complex behavior to your experience. It allows for a [professional development environment that includes profiling and hot reloading](./ScriptDeveloperTools.md).

[Get started with scripting](https://aka.ms/startwithmcscript).
