---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.BlockVolumeIntersection Enumeration
description: Contents of the @minecraft/server.BlockVolumeIntersection enumeration (Version 1.x.x).
---
# BlockVolumeIntersection Enumeration (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/BlockVolumeIntersection.md).

Description of the resulting intersection test on two BlockVolume objects

## Constants
### **Disjoint**
`Disjoint = 0`

Volume B has no intersection points with Volume A
### **Contains**
`Contains = 1`

Volume B resides completely inside Volume A
### **Intersects**
`Intersects = 2`

Volume B partially intersects Volume A
