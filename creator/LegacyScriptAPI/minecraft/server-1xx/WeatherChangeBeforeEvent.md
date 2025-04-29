---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.WeatherChangeBeforeEvent Class
description: Contents of the @minecraft/server.WeatherChangeBeforeEvent class (Version 1.x.x).
---
# WeatherChangeBeforeEvent Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/WeatherChangeBeforeEvent.md).

Contains information related to changes in weather in the environment.

## Properties

### **cancel**
`cancel: boolean;`

If set to true the weather change will be cancelled.

Type: *boolean*

### **duration**
`duration: number;`

Sets the duration of the new weather (in ticks).

Type: *number*

### **newWeather**
`newWeather: WeatherType;`

The type of weather that will be applied.

Type: [*WeatherType*](WeatherType.md)

### **previousWeather**
`read-only previousWeather: WeatherType;`

The type of weather that it was prior to the event being fired.

Type: [*WeatherType*](WeatherType.md)
