---
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.StringBlockProperty Class
description: Contents of the @minecraft/server.StringBlockProperty class.
---
# StringBlockProperty Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*IBlockProperty*](IBlockProperty.md)

Contains the state of a string-based property for a [*@minecraft/server.BlockPermutation*](../server/BlockPermutation.md).

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
> Setting this property can throw if the value passed is not valid for the property. Use [*@minecraft/server.StringBlockProperty.validValues*](../server/StringBlockProperty.md#validvalues) to check allowed values.
