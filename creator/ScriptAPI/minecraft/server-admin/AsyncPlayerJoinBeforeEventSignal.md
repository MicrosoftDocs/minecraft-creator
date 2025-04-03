---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-admin.AsyncPlayerJoinBeforeEventSignal Class
description: Contents of the @minecraft/server-admin.AsyncPlayerJoinBeforeEventSignal class.
---
# AsyncPlayerJoinBeforeEventSignal Class

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: AsyncPlayerJoinBeforeEvent) => Promise<void>): (arg0: AsyncPlayerJoinBeforeEvent) => Promise<void>
`

Add a callback that's ran before a player joins the world. This callback returns a promise and the player won't join until that promise is resolved. If the promise is not resolved within a reasonable time, the player joining will be rejected. If the player joining leaves/disconnects, then the event data's isValid will return false.

#### **Parameters**
- **callback**: (arg0: [*AsyncPlayerJoinBeforeEvent*](AsyncPlayerJoinBeforeEvent.md)) => Promise&lt;*void*&gt;

**Returns** (arg0: [*AsyncPlayerJoinBeforeEvent*](AsyncPlayerJoinBeforeEvent.md)) => Promise&lt;*void*&gt;

### **unsubscribe**
`
unsubscribe(callback: (arg0: AsyncPlayerJoinBeforeEvent) => Promise<void>): boolean
`

#### **Parameters**
- **callback**: (arg0: [*AsyncPlayerJoinBeforeEvent*](AsyncPlayerJoinBeforeEvent.md)) => Promise&lt;*void*&gt;

**Returns** *boolean*
