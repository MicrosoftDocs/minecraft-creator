---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.BlockType Class
description: Contents of the mojang-minecraft.BlockType class.
---
# BlockType Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

The type (or template) of a block. Does not contain permutation data (state) other than the type of block it represents. This type was introduced as of version 1.17.10.21.

## Properties

### **canBeWaterlogged**
`read-only canBeWaterlogged: boolean;`

Represents whether this type of block can be waterlogged.

Type: *boolean*

### **id**
`read-only id: string;`

Block type name - for example, `minecraft:acacia_stairs`.

Type: *string*

## Methods
- [createDefaultBlockPermutation](#createdefaultblockpermutation)

### **createDefaultBlockPermutation**
`
createDefaultBlockPermutation(): BlockPermutation
`
Creates the default [*mojang-minecraft.BlockPermutation*](../mojang-minecraft/BlockPermutation.md) for this type which uses the default values for all properties.

#### **Returns** [*BlockPermutation*](BlockPermutation.md) - Returns created permutation.
> [!WARNING]
> This function can throw errors.
