---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.StringBlockProperty Class
description: Contents of the mojang-minecraft.StringBlockProperty class.
---
# StringBlockProperty Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Extends
- [*IBlockProperty*](IBlockProperty.md)

Contains the state of a string-based property for a [*mojang-minecraft.BlockPermutation*](../mojang-minecraft/BlockPermutation.md).

## Properties

### **name**
`read-only name: string;`

Name of this property.

Type: *string*

### **validValues**
`read-only validValues: string[];`

A list of allowed values for this string property.

Type: *string*[]

### **value**
`value: string;`

The current value of this property.

Type: *string*

> [!WARNING]
> Setting this property can throw if the value passed is not valid for the property. Use [*mojang-minecraft.StringBlockProperty.validValues*](../mojang-minecraft/StringBlockProperty.md#validvalues) to check allowed values.
