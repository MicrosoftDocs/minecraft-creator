---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.BiomeTypes Class
description: Contents of the @minecraft/server.BiomeTypes class.
monikerRange: "=minecraft-bedrock-experimental"
---
# BiomeTypes Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Supports a catalog of available biome types registered within Minecraft.

## Methods
- [get](#get)
- [getAll](#getall)

### **get**
`
static "get"(typeName: string): BiomeType | undefined
`

Returns a specific biome type.

#### **Parameters**
- **typeName**: *string*
  
  Identifier of the biome.  Generally, namespaced identifiers (e.g., minecraft:frozen_peaks) should be used.

**Returns** [*BiomeType*](BiomeType.md) | *undefined* - If the biome exists, a BiomeType object is returned. If not, undefined is returned.

### **getAll**
`
static getAll(): BiomeType[]
`

Returns all registered biome types within Minecraft

**Returns** [*BiomeType*](BiomeType.md)[]
