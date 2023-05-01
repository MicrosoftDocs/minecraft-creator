---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.WeatherChangeAfterEvent Class
description: Contents of the @minecraft/server.WeatherChangeAfterEvent class.
---
# WeatherChangeAfterEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

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
