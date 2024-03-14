---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.BedrockEventSubscriptionCache Class
description: Contents of the @minecraft/server-editor.BedrockEventSubscriptionCache class.
---
# BedrockEventSubscriptionCache Class

A cache for bedrock event subscriptions. Stores off a subscription by event key, and upon teardown unregisters all subscriptions.

## Methods
- [constructor](#(constructor))
- [subscribeToBedrockEvent](#subscribetobedrockevent)
- [teardown](#teardown)

### **constructor**
`
new BedrockEventSubscriptionCache(mEvents: WorldAfterEvents)
`

Constructs a new instance of the `BedrockEventSubscriptionCache` class

#### **Parameters**
- **mEvents**: *WorldAfterEvents*

**Returns** *BedrockEventSubscriptionCache*

### **subscribeToBedrockEvent**
`
subscribeToBedrockEvent(event: T, params: Parameters<WorldAfterEvents[T]['subscribe']>): ReturnType<WorldAfterEvents[T]['subscribe']>
`

Subcribes to a bedrock event using the key of the desired event. When subscribed, the event handler is both returned, but also cached internally for unsubscription. This means the caller of the subscription does not need to worry about unsubscription since the cache will automatically unsubscribe handlers on overall teardown.

#### **Parameters**
- **event**: *T*
  
  The event on the bedrock APIs to which to subscribe
- **params**: *Parameters<WorldAfterEvents[T]['subscribe']>*
  
  The parameters to the subscription method for the event. Auto complete will display this for you

**Returns** *ReturnType<WorldAfterEvents[T]['subscribe']>*

### **teardown**
`
teardown(): void
`

Cleans up the set of internal registrations and subscriptions.

**Returns** *void*
