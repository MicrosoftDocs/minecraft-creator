---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: .CompoundBlockVolumeAction Enumeration
description: Contents of the .CompoundBlockVolumeAction enumeration.
monikerRange: "=minecraft-bedrock-experimental"
---
# CompoundBlockVolumeAction Enumeration

> [!CAUTION]
> This enum is still in pre-release.  Its signature may change or it may be removed in future releases.

The Action enum determines how the CompoundBlockVolume considers the associated CompoundBlockVolumeItem when performing inside/outside calculations.

## Constants
### **Add**
`Add = 0`

The associated BlockVolume is considered a positive space, and any intersection tests are considered hits
### **Subtract**
`Subtract = 1`

The associated BlockVolume is considered a negative or void space, and any intersection tests are considered misses.

Using the Subtract action, it is possible to `punch holes` in block volumes so that any intersection tests may pass through such spaces
