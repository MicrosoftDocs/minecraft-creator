---
# DO NOT TOUCH — This file was automatically generated by @minecraft/api-docs-generator, to report problems file an issue at https://github.com/Mojang/minecraft-scripting-libraries
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.WeatherChangeAfterEvent Class
description: Contents of the @minecraft/server.WeatherChangeAfterEvent class (Version 1.x.x).
---
# WeatherChangeAfterEvent Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/WeatherChangeAfterEvent.md).

Contains information related to changes in weather in the environment.

## Properties

### **dimension**
`read-only dimension: string;`

Dimension in which the weather has changed.

Type: *string*

### **newWeather**
`read-only newWeather: WeatherType;`

The weather type after the weather was changed.

Type: [*WeatherType*](WeatherType.md)

### **previousWeather**
`read-only previousWeather: WeatherType;`

The weather type before the weather was changed.

Type: [*WeatherType*](WeatherType.md)
