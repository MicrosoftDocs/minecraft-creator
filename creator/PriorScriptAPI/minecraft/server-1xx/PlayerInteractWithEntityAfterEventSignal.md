---
# DO NOT TOUCH — This file was automatically generated by @minecraft/api-docs-generator, to report problems file an issue at https://github.com/Mojang/minecraft-scripting-libraries
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.PlayerInteractWithEntityAfterEventSignal Class
description: Contents of the @minecraft/server.PlayerInteractWithEntityAfterEventSignal class (Version 1.x.x).
---
# PlayerInteractWithEntityAfterEventSignal Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/PlayerInteractWithEntityAfterEventSignal.md).

Manages callbacks that are connected to after a player interacts with an entity.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: PlayerInteractWithEntityAfterEvent) => void): (arg0: PlayerInteractWithEntityAfterEvent) => void
`

Adds a callback that will be called after a player interacts with an entity.

#### **Parameters**
- **callback**: (arg0: [*PlayerInteractWithEntityAfterEvent*](PlayerInteractWithEntityAfterEvent.md)) => *void*

**Returns** (arg0: [*PlayerInteractWithEntityAfterEvent*](PlayerInteractWithEntityAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: PlayerInteractWithEntityAfterEvent) => void): void
`

Removes a callback from being called after a player interacts with an entity.

#### **Parameters**
- **callback**: (arg0: [*PlayerInteractWithEntityAfterEvent*](PlayerInteractWithEntityAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.
