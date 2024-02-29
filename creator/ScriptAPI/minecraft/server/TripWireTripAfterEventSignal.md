---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.TripWireTripAfterEventSignal Class
description: Contents of the @minecraft/server.TripWireTripAfterEventSignal class.
---
# TripWireTripAfterEventSignal Class

Manages callbacks that are connected to when a trip wire is tripped.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: TripWireTripAfterEvent) => void): (arg: TripWireTripAfterEvent) => void
`

Adds a callback that will be called when a trip wire is tripped.

#### **Parameters**
- **callback**: (arg: [*TripWireTripAfterEvent*](TripWireTripAfterEvent.md)) => *void*

#### **Returns** (arg: [*TripWireTripAfterEvent*](TripWireTripAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: TripWireTripAfterEvent) => void): void
`

Removes a callback from being called when a trip wire is tripped.

#### **Parameters**
- **callback**: (arg: [*TripWireTripAfterEvent*](TripWireTripAfterEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
