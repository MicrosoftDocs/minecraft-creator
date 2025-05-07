---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.DataDrivenEntityTriggerAfterEventSignal Class
description: Contents of the @minecraft/server.DataDrivenEntityTriggerAfterEventSignal class (Version 1.x.x).
---
# DataDrivenEntityTriggerAfterEventSignal Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/DataDrivenEntityTriggerAfterEventSignal.md).

Contains event registration related to firing of a data driven entity event - for example, the minecraft:ageable_grow_up event on a chicken.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: DataDrivenEntityTriggerAfterEvent) => void, options?: EntityDataDrivenTriggerEventOptions): (arg0: DataDrivenEntityTriggerAfterEvent) => void
`

Adds a callback that will be called after a data driven entity event is triggered.

#### **Parameters**
- **callback**: (arg0: [*DataDrivenEntityTriggerAfterEvent*](DataDrivenEntityTriggerAfterEvent.md)) => *void*
- **options**?: [*EntityDataDrivenTriggerEventOptions*](EntityDataDrivenTriggerEventOptions.md) = `null`

**Returns** (arg0: [*DataDrivenEntityTriggerAfterEvent*](DataDrivenEntityTriggerAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: DataDrivenEntityTriggerAfterEvent) => void): void
`

Removes a callback that will be called after a data driven entity event is triggered.

#### **Parameters**
- **callback**: (arg0: [*DataDrivenEntityTriggerAfterEvent*](DataDrivenEntityTriggerAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.
