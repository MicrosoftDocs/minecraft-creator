---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.WeatherChangeBeforeEventSignal Class
description: Contents of the @minecraft/server.WeatherChangeBeforeEventSignal class.
---
# WeatherChangeBeforeEventSignal Class

Manages callbacks that are connected to before weather changing.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg: WeatherChangeBeforeEvent) => void): (arg: WeatherChangeBeforeEvent) => void
`

Adds a callback that will be called before weather changes.

#### **Parameters**
- **callback**: (arg: [*WeatherChangeBeforeEvent*](WeatherChangeBeforeEvent.md)) => *void*

**Returns** (arg: [*WeatherChangeBeforeEvent*](WeatherChangeBeforeEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unsubscribe**
`
unsubscribe(callback: (arg: WeatherChangeBeforeEvent) => void): void
`

Removes a callback from being called before weather changes.

#### **Parameters**
- **callback**: (arg: [*WeatherChangeBeforeEvent*](WeatherChangeBeforeEvent.md)) => *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
