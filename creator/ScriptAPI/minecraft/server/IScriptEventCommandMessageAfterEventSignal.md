---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.IScriptEventCommandMessageAfterEventSignal Class
description: Contents of the @minecraft/server.IScriptEventCommandMessageAfterEventSignal class.
---
# IScriptEventCommandMessageAfterEventSignal Class

## Classes that extend IScriptEventCommandMessageAfterEventSignal
- [*ScriptEventCommandMessageAfterEventSignal*](ScriptEventCommandMessageAfterEventSignal.md)

Provides an adaptable interface for callers to subscribe to an event that fires when /script event command is called.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: ScriptEventCommandMessageAfterEvent) => void, options?: ScriptEventMessageFilterOptions): (arg: ScriptEventCommandMessageAfterEvent) => void
`

#### **Parameters**
- **callback**: (arg: [*ScriptEventCommandMessageAfterEvent*](ScriptEventCommandMessageAfterEvent.md)) => *void*
- **options**?: [*ScriptEventMessageFilterOptions*](ScriptEventMessageFilterOptions.md) = `null`

#### **Returns** (arg: [*ScriptEventCommandMessageAfterEvent*](ScriptEventCommandMessageAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: ScriptEventCommandMessageAfterEvent) => void): void
`

#### **Parameters**
- **callback**: (arg: [*ScriptEventCommandMessageAfterEvent*](ScriptEventCommandMessageAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
