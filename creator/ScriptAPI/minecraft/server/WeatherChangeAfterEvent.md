---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.WeatherChangeAfterEvent Class
description: Contents of the @minecraft/server.WeatherChangeAfterEvent class.
---
# WeatherChangeAfterEvent Class

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
