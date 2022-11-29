---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.PlayerSpawnEventSignal Class
description: Contents of the @minecraft/server.PlayerSpawnEventSignal class.
---
# PlayerSpawnEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Registers an event when a player is spawned (or re-spawned after death) and fully ready within the world.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: PlayerSpawnEvent) => void): (arg: PlayerSpawnEvent) => void
`

Registers a new event receiver for this particular type of event.

#### **Parameters**
- **callback**: (arg: [*PlayerSpawnEvent*](PlayerSpawnEvent.md)) => *void*

#### **Returns** (arg: [*PlayerSpawnEvent*](PlayerSpawnEvent.md)) => *void*

### **unsubscribe**
`
unsubscribe(callback: (arg: PlayerSpawnEvent) => void): void
`

De-registers an event receiver for the player spawn event.

#### **Parameters**
- **callback**: (arg: [*PlayerSpawnEvent*](PlayerSpawnEvent.md)) => *void*

> [!WARNING]
> This function can throw errors.
