---
# DO NOT TOUCH — This file was automatically generated.  See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: Gaming
title: Minecraft.WeatherChangedEventSignal Class
description: Contents of the Minecraft.WeatherChangedEventSignal class.
---
# WeatherChangedEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)
  
### **subscribe**
`
subscribe(callback: (arg0: WeatherChangedEvent) => undefined): void
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **callback** | (arg0: WeatherChangedEvent) => undefined | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **unsubscribe**
`
unsubscribe(callback: (arg0: WeatherChangedEvent) => undefined): void
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **callback** | (arg0: WeatherChangedEvent) => undefined | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

