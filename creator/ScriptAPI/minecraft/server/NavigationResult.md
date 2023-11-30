---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.NavigationResult Class
description: Contents of the @minecraft/server.NavigationResult class.
monikerRange: "=minecraft-bedrock-experimental"
---
# NavigationResult Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Contains data resulting from a navigation operation, including whether the navigation is possible and the path of navigation.

## Properties

### **isFullPath**
`read-only isFullPath: boolean;`

Whether the navigation result contains a full path, including to the requested destination.

Type: *boolean*

## Methods
- [getPath](#getpath)

### **getPath**
`
getPath(): Vector3[]
`

A set of block locations that comprise the navigation route.

#### **Returns** [*Vector3*](Vector3.md)[]
