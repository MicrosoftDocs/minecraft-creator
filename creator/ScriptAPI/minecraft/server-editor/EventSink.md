---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
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
