---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.WeatherChangeEvent Class
description: Contents of the mojang-minecraft.WeatherChangeEvent class.
---
# WeatherChangeEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Contains information related to changes in weather in the environment.

## Properties

### **dimension**
`read-only dimension: string;`

Dimension in which the weather has changed.

Type: *string*

### **lightning**
`read-only lightning: boolean;`

Whether it is lightning after the change in weather.

Type: *boolean*

### **raining**
`read-only raining: boolean;`

Whether it is raining after the change in weather.

Type: *boolean*
