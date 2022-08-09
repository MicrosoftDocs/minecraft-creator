---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.NavigationResult Class
description: Contents of the mojang-minecraft.NavigationResult class.
---
# NavigationResult Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Contains data resulting from a navigation operation, including whether the navigation is possible and the path of navigation.

## Properties

### **isFullPath**
`read-only isFullPath: boolean;`

Whether the navigation result contains a full path, including to the requested destination.

Type: *boolean*

### **path**
`read-only path: BlockLocation[];`

A set of block locations that comprise the navigation route.

Type: [*BlockLocation*](BlockLocation.md)[]
