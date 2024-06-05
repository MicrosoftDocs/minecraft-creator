---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ScriptEventCommandMessageAfterEventSignal Class
description: Contents of the @minecraft/server.ScriptEventCommandMessageAfterEventSignal class.
---
# ScriptEventCommandMessageAfterEventSignal Class

Allows for registering an event handler that responds to inbound /scriptevent commands.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: ScriptEventCommandMessageAfterEvent) => void, options?: ScriptEventMessageFilterOptions): (arg: ScriptEventCommandMessageAfterEvent) => void
`

Registers a new ScriptEvent handler.

#### **Parameters**
- **callback**: (arg: [*ScriptEventCommandMessageAfterEvent*](ScriptEventCommandMessageAfterEvent.md)) => *void*
- **options**?: [*ScriptEventMessageFilterOptions*](ScriptEventMessageFilterOptions.md) = `null`

**Returns** (arg: [*ScriptEventCommandMessageAfterEvent*](ScriptEventCommandMessageAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: ScriptEventCommandMessageAfterEvent) => void): void
`

Unsubscribes a particular handler for a ScriptEvent event.

#### **Parameters**
- **callback**: (arg: [*ScriptEventCommandMessageAfterEvent*](ScriptEventCommandMessageAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
