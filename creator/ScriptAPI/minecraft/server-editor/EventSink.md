---
# DO NOT TOUCH — This file was automatically generated by @minecraft/api-docs-generator, to report problems file an issue at https://github.com/Mojang/minecraft-scripting-libraries
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.EventSink Interface
description: Contents of the @minecraft/server-editor.EventSink class.
---
# EventSink Interface

 An event that can be subscribed to. You can use the token, returned from the subscribe method, to clean up handlers.

## Methods
- [subscribe](#subscribe)

### **subscribe**
`
subscribe(handler: EventHandler<T>): IEventToken
`

Subscribes an event handler to a particular subscription.

#### **Parameters**
- **handler**: *EventHandler<T>*
  
  Handler function to subscribe with.

**Returns** *IEventToken* - An event handler subscription token that can be used to unsubscribe and clean-up handlers.
