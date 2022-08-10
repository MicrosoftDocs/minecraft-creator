---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.TickEvent Class
description: Contents of the mojang-minecraft.TickEvent class.
---
# TickEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

An event for handling updates, that fires 20 times every second.

## Properties

### **currentTick**
`read-only currentTick: number;`

Current tick at the time this event was fired.

Type: *number*

### **deltaTime**
`read-only deltaTime: number;`

Time since the last tick was fired.

Type: *number*
