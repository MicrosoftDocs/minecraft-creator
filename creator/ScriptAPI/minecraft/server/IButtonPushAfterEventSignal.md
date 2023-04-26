---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.IButtonPushAfterEventSignal Class
description: Contents of the @minecraft/server.IButtonPushAfterEventSignal class.
---
# IButtonPushAfterEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Classes that extend IButtonPushAfterEventSignal
- [*ButtonPushAfterEventSignal*](ButtonPushAfterEventSignal.md)

Provides an adaptable interface for callers to subscribe to an event that fires when a button is pushed.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: ButtonPushAfterEvent) => void): (arg: ButtonPushAfterEvent) => void
`

#### **Parameters**
- **callback**: (arg: [*ButtonPushAfterEvent*](ButtonPushAfterEvent.md)) => *void*

#### **Returns** (arg: [*ButtonPushAfterEvent*](ButtonPushAfterEvent.md)) => *void*

### **unsubscribe**
`
unsubscribe(callback: (arg: ButtonPushAfterEvent) => void): void
`

#### **Parameters**
- **callback**: (arg: [*ButtonPushAfterEvent*](ButtonPushAfterEvent.md)) => *void*

> [!WARNING]
> This function can throw errors.
