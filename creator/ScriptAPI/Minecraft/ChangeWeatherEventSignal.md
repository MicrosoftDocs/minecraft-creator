---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.ChangeWeatherEventSignal Class
description: Contents of the Minecraft.ChangeWeatherEventSignal class.
---
# ChangeWeatherEventSignal Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.



## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)
  
### **subscribe**
`
subscribe(callback: (arg: WeatherChangedEvent) => undefined): (arg: WeatherChangedEvent) => undefined
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **callback** | (arg: WeatherChangedEvent) => undefined | - |

Returns (arg: WeatherChangedEvent) => undefined


### **unsubscribe**
`
unsubscribe(callback: (arg: WeatherChangedEvent) => undefined): void
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **callback** | (arg: WeatherChangedEvent) => undefined | - |


> [!WARNING]
> This function can throw errors.

