---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.BlockBreakEventSignal Class
description: Contents of the @minecraft/server.BlockBreakEventSignal class.
---
# BlockBreakEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Manages callbacks that are connected to when a block is broken.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: BlockBreakEvent) => void): (arg: BlockBreakEvent) => void
`

Adds a callback that will be called when a block is broken by a player.

#### **Parameters**
- **callback**: (arg: [*BlockBreakEvent*](BlockBreakEvent.md)) => *void*

#### **Returns** (arg: [*BlockBreakEvent*](BlockBreakEvent.md)) => *void*

### **unsubscribe**
`
unsubscribe(callback: (arg: BlockBreakEvent) => void): void
`

Removes a callback from being called when an block is broken.

#### **Parameters**
- **callback**: (arg: [*BlockBreakEvent*](BlockBreakEvent.md)) => *void*

> [!WARNING]
> This function can throw errors.
