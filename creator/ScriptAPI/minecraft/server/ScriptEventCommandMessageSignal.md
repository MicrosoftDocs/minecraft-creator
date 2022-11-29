---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.ScriptEventCommandMessageSignal Class
description: Contents of the @minecraft/server.ScriptEventCommandMessageSignal class.
---
# ScriptEventCommandMessageSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Allows for registering an event handler that responds to inbound /scriptevent commands.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: ScriptScriptCommandMessageEvent) => void, options?: ScriptEventMessageFilterOptions): (arg: ScriptScriptCommandMessageEvent) => void
`

Registers a new ScriptEvent handler.

#### **Parameters**
- **callback**: (arg: [*ScriptScriptCommandMessageEvent*](ScriptScriptCommandMessageEvent.md)) => *void*
- **options**?: [*ScriptEventMessageFilterOptions*](ScriptEventMessageFilterOptions.md) = `null`

#### **Returns** (arg: [*ScriptScriptCommandMessageEvent*](ScriptScriptCommandMessageEvent.md)) => *void*

### **unsubscribe**
`
unsubscribe(callback: (arg: ScriptScriptCommandMessageEvent) => void): void
`

Unsubscribes a particular handler for a ScriptEvent event.

#### **Parameters**
- **callback**: (arg: [*ScriptScriptCommandMessageEvent*](ScriptScriptCommandMessageEvent.md)) => *void*

> [!WARNING]
> This function can throw errors.
