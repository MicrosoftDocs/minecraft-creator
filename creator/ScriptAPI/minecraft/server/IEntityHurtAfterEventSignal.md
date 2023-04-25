---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.IEntityHurtAfterEventSignal Class
description: Contents of the @minecraft/server.IEntityHurtAfterEventSignal class.
---
# IEntityHurtAfterEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Classes that extend IEntityHurtAfterEventSignal
- [*EntityHurtAfterEventSignal*](EntityHurtAfterEventSignal.md)

Provides an adaptable interface for callers to subscribe to an event that fires when an entity is hurt.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: EntityHurtAfterEvent) => void, options?: EntityEventOptions): (arg: EntityHurtAfterEvent) => void
`

#### **Parameters**
- **callback**: (arg: [*EntityHurtAfterEvent*](EntityHurtAfterEvent.md)) => *void*
- **options**?: [*EntityEventOptions*](EntityEventOptions.md) = `null`

#### **Returns** (arg: [*EntityHurtAfterEvent*](EntityHurtAfterEvent.md)) => *void*

### **unsubscribe**
`
unsubscribe(callback: (arg: EntityHurtAfterEvent) => void): void
`

#### **Parameters**
- **callback**: (arg: [*EntityHurtAfterEvent*](EntityHurtAfterEvent.md)) => *void*

> [!WARNING]
> This function can throw errors.
