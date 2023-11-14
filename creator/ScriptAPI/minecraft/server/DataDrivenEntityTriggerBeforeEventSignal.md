---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.DataDrivenEntityTriggerBeforeEventSignal Class
description: Contents of the @minecraft/server.DataDrivenEntityTriggerBeforeEventSignal class.
monikerRange: "=minecraft-bedrock-experimental"
---
# DataDrivenEntityTriggerBeforeEventSignal Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Contains information related to firing of a data driven entity event - for example, the minecraft:ageable_grow_up event on a chicken.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: DataDrivenEntityTriggerBeforeEvent) => void, options?: EntityDataDrivenTriggerEventOptions): (arg: DataDrivenEntityTriggerBeforeEvent) => void
`

Adds a callback that will be called before a data driven entity event is triggered.

#### **Parameters**
- **callback**: (arg: [*DataDrivenEntityTriggerBeforeEvent*](DataDrivenEntityTriggerBeforeEvent.md)) => *void*
- **options**?: [*EntityDataDrivenTriggerEventOptions*](EntityDataDrivenTriggerEventOptions.md) = `null`

#### **Returns** (arg: [*DataDrivenEntityTriggerBeforeEvent*](DataDrivenEntityTriggerBeforeEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: DataDrivenEntityTriggerBeforeEvent) => void): void
`

Removes a callback that will be called before a data driven entity event is triggered.

#### **Parameters**
- **callback**: (arg: [*DataDrivenEntityTriggerBeforeEvent*](DataDrivenEntityTriggerBeforeEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
