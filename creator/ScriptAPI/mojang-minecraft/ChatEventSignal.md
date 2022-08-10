---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.ChatEventSignal Class
description: Contents of the mojang-minecraft.ChatEventSignal class.
---
# ChatEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Manages callbacks that are connected to chat messages being sent.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: ChatEvent) => void): (arg: ChatEvent) => void
`
Adds a callback that will be called when new chat messages are sent.

#### **Parameters**
- **callback**: (arg: [*ChatEvent*](ChatEvent.md)) => *void*

#### **Returns** (arg: [*ChatEvent*](ChatEvent.md)) => *void*

#### **Examples**
##### *custom_command.js*
```javascript
const chatCallback = World.events.beforeChat.subscribe((eventData) => {
  if (eventData.message.includes("cancel")) {
    // Cancel event if the message contains "cancel"
    eventData.canceled = true;
  } else {
    // Modify chat message being sent
    eventData.message = `Modified '${eventData.message}'`;
  }
});
```

### **unsubscribe**
`
unsubscribe(callback: (arg: ChatEvent) => void): void
`
Removes a callback from being called when new chat messages are sent.

#### **Parameters**
- **callback**: (arg: [*ChatEvent*](ChatEvent.md)) => *void*
> [!WARNING]
> This function can throw errors.
