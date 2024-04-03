---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EntityLoadAfterEventSignal Class
description: Contents of the @minecraft/server.EntityLoadAfterEventSignal class.
---
# EntityLoadAfterEventSignal Class

Registers a script-based event handler for handling what happens when an entity loads.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: EntityLoadAfterEvent) => void): (arg: EntityLoadAfterEvent) => void
`

Method to register an event handler for what happens when an entity loads.

#### **Parameters**
- **callback**: (arg: [*EntityLoadAfterEvent*](EntityLoadAfterEvent.md)) => *void*
  
  Function that handles the load event.

**Returns** (arg: [*EntityLoadAfterEvent*](EntityLoadAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: EntityLoadAfterEvent) => void): void
`

Unregisters a method that was previously subscribed to the subscription event.

#### **Parameters**
- **callback**: (arg: [*EntityLoadAfterEvent*](EntityLoadAfterEvent.md)) => *void*
  
  Original function that was passed into the subscribe event, that is to be unregistered.

> [!IMPORTANT]
> This function can't be called in read-only mode.
