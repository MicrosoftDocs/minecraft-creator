---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
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

#### **Returns** *BedrockEventSubscriptionCache*

### **subscribeToBedrockEvent**
`
subscribeToBedrockEvent(event: T, params: Parameters<WorldAfterEvents[T]['subscribe']>): ((arg: import("@minecraft/server").BlockBreakAfterEvent) => void) | ((arg: import("@minecraft/server").BlockExplodeAfterEvent) => void) | ((arg: import("@minecraft/server").ChatSendAfterEvent) => void) | ((arg: import("@minecraft/server").DataDrivenEntityTriggerAfterEvent) => void) | ((arg: import("@minecraft/server").EffectAddAfterEvent) => void) | ((arg: import("@minecraft/server").EntityDieAfterEvent) => void) | ((arg: import("@minecraft/server").EntityHealthChangedAfterEvent) => void) | ((arg: import("@minecraft/server").EntityHitBlockAfterEvent) => void) | ((arg: import("@minecraft/server").EntityHitEntityAfterEvent) => void) | ((arg: import("@minecraft/server").EntityHurtAfterEvent) => void) | ((arg: import("@minecraft/server").EntityRemovedAfterEvent) => void) | ((arg: import("@minecraft/server").ExplosionAfterEvent) => void) | ((arg: import("@minecraft/server").ItemCompleteUseAfterEvent) => void) | ((arg: import("@minecraft/server").ItemDefinitionTriggeredAfterEvent) => void) | ((arg: import("@minecraft/server").ItemUseOnAfterEvent) => void) | ((arg: import("@minecraft/server").LeverActionAfterEvent) => void) | ((arg: import("@minecraft/server").MessageReceiveAfterEvent) => void) | ((arg: import("@minecraft/server").PistonActivateAfterEvent) => void) | ((arg: import("@minecraft/server").PlayerJoinAfterEvent) => void) | ((arg: import("@minecraft/server").PlayerSpawnAfterEvent) => void) | ((arg: import("@minecraft/server").ProjectileHitBlockAfterEvent) => void) | ((arg: import("@minecraft/server").ProjectileHitEntityAfterEvent) => void) | ((arg: import("@minecraft/server").TargetBlockHitAfterEvent) => void) | ((arg: import("@minecraft/server").TripWireTripAfterEvent) => void) | ((arg: import("@minecraft/server").WeatherChangeAfterEvent) => void) | ((arg: import("@minecraft/server").WorldInitializeAfterEvent) => void)
`

Subcribes to a bedrock event using the key of the desired event. When subscribed, the event handler is both returned, but also cached internally for unsubscription. This means the caller of the subscription does not need to worry about unsubscription since the cache will automatically unsubscribe handlers on overall teardown.

#### **Parameters**
- **event**: *T*
  
  The event on the bedrock APIs to which to subscribe
- **params**: *Parameters<WorldAfterEvents[T]['subscribe']>*
  
  The parameters to the subscription method for the event. Auto complete will display this for you

#### **Returns** *((arg: import("@minecraft/server").BlockBreakAfterEvent) => void) | ((arg: import("@minecraft/server").BlockExplodeAfterEvent) => void) | ((arg: import("@minecraft/server").ChatSendAfterEvent) => void) | ((arg: import("@minecraft/server").DataDrivenEntityTriggerAfterEvent) => void) | ((arg: import("@minecraft/server").EffectAddAfterEvent) => void) | ((arg: import("@minecraft/server").EntityDieAfterEvent) => void) | ((arg: import("@minecraft/server").EntityHealthChangedAfterEvent) => void) | ((arg: import("@minecraft/server").EntityHitBlockAfterEvent) => void) | ((arg: import("@minecraft/server").EntityHitEntityAfterEvent) => void) | ((arg: import("@minecraft/server").EntityHurtAfterEvent) => void) | ((arg: import("@minecraft/server").EntityRemovedAfterEvent) => void) | ((arg: import("@minecraft/server").ExplosionAfterEvent) => void) | ((arg: import("@minecraft/server").ItemCompleteUseAfterEvent) => void) | ((arg: import("@minecraft/server").ItemDefinitionTriggeredAfterEvent) => void) | ((arg: import("@minecraft/server").ItemUseOnAfterEvent) => void) | ((arg: import("@minecraft/server").LeverActionAfterEvent) => void) | ((arg: import("@minecraft/server").MessageReceiveAfterEvent) => void) | ((arg: import("@minecraft/server").PistonActivateAfterEvent) => void) | ((arg: import("@minecraft/server").PlayerJoinAfterEvent) => void) | ((arg: import("@minecraft/server").PlayerSpawnAfterEvent) => void) | ((arg: import("@minecraft/server").ProjectileHitBlockAfterEvent) => void) | ((arg: import("@minecraft/server").ProjectileHitEntityAfterEvent) => void) | ((arg: import("@minecraft/server").TargetBlockHitAfterEvent) => void) | ((arg: import("@minecraft/server").TripWireTripAfterEvent) => void) | ((arg: import("@minecraft/server").WeatherChangeAfterEvent) => void) | ((arg: import("@minecraft/server").WorldInitializeAfterEvent) => void)*

### **teardown**
`
teardown(): void
`

Cleans up the set of internal registrations and subscriptions.

#### **Returns** *void*
