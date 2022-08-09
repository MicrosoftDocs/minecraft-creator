---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.WorldInitializeEventSignal Class
description: Contents of the mojang-minecraft.WorldInitializeEventSignal class.
---
# WorldInitializeEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Manages callbacks that are run at the initialization of the scripting environment for a World. Do note that this event may run multiple times within a session in the case that the /reload command is used.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: WorldInitializeEvent) => void): (arg: WorldInitializeEvent) => void
`
Adds a callback that will be called when the scripting environment is initialized for a World.

#### **Parameters**
- **callback**: (arg: [*WorldInitializeEvent*](WorldInitializeEvent.md)) => *void*

#### **Returns** (arg: [*WorldInitializeEvent*](WorldInitializeEvent.md)) => *void*

### **unsubscribe**
`
unsubscribe(callback: (arg: WorldInitializeEvent) => void): void
`
Removes a callback from being called the scripting environment is initialized for a World.

#### **Parameters**
- **callback**: (arg: [*WorldInitializeEvent*](WorldInitializeEvent.md)) => *void*
> [!WARNING]
> This function can throw errors.
