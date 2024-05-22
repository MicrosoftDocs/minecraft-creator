---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.DataDrivenEntityTriggerAfterEventSignal Class
description: Contents of the @minecraft/server.DataDrivenEntityTriggerAfterEventSignal class.
---
# DataDrivenEntityTriggerAfterEventSignal Class

Contains event registration related to firing of a data driven entity event - for example, the minecraft:ageable_grow_up event on a chicken.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: DataDrivenEntityTriggerAfterEvent) => void, options?: EntityDataDrivenTriggerEventOptions): (arg: DataDrivenEntityTriggerAfterEvent) => void
`

Adds a callback that will be called after a data driven entity event is triggered.

#### **Parameters**
- **callback**: (arg: [*DataDrivenEntityTriggerAfterEvent*](DataDrivenEntityTriggerAfterEvent.md)) => *void*
- **options**?: [*EntityDataDrivenTriggerEventOptions*](EntityDataDrivenTriggerEventOptions.md) = `null`

**Returns** (arg: [*DataDrivenEntityTriggerAfterEvent*](DataDrivenEntityTriggerAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: DataDrivenEntityTriggerAfterEvent) => void): void
`

Removes a callback that will be called after a data driven entity event is triggered.

#### **Parameters**
- **callback**: (arg: [*DataDrivenEntityTriggerAfterEvent*](DataDrivenEntityTriggerAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
