---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.WeatherChangeEventSignal Class
description: Contents of the @minecraft/server.WeatherChangeEventSignal class.
---
# WeatherChangeEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Manages callbacks that are connected to weather changing.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: WeatherChangeEvent) => void): (arg: WeatherChangeEvent) => void
`

Adds a callback that will be called when weather changes.

#### **Parameters**
- **callback**: (arg: [*WeatherChangeEvent*](WeatherChangeEvent.md)) => *void*

#### **Returns** (arg: [*WeatherChangeEvent*](WeatherChangeEvent.md)) => *void*

### **unsubscribe**
`
unsubscribe(callback: (arg: WeatherChangeEvent) => void): void
`

Removes a callback from being called when weather changes.

#### **Parameters**
- **callback**: (arg: [*WeatherChangeEvent*](WeatherChangeEvent.md)) => *void*

> [!WARNING]
> This function can throw errors.
