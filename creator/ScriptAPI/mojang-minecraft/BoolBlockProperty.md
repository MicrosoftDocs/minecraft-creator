---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.BoolBlockProperty Class
description: Contents of the mojang-minecraft.BoolBlockProperty class.
---
# BoolBlockProperty Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Extends
- [*IBlockProperty*](IBlockProperty.md)

Contains the state of a boolean-based property for a [*mojang-minecraft.BlockPermutation*](../mojang-minecraft/BlockPermutation.md).

## Properties

### **name**
`read-only name: string;`

The name of this property.

Type: *string*

### **validValues**
`read-only validValues: boolean[];`

A list of valid values for this property.

Type: *boolean*[]

### **value**
`value: boolean;`

The current value of this property.

Type: *boolean*

> [!WARNING]
> Setting this property can throw if the value passed is not valid for the property. Use [*mojang-minecraft.BoolBlockProperty.validValues*](../mojang-minecraft/BoolBlockProperty.md#validvalues) to check allowed values.
