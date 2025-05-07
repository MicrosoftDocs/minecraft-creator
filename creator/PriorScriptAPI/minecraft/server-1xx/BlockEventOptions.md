---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.BlockEventOptions Interface
description: Contents of the @minecraft/server.BlockEventOptions class (Version 1.x.x).
---
# BlockEventOptions Interface (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/BlockEventOptions.md).

Contains optional parameters for registering a block event.

## Properties

### **blockTypes**
`blockTypes?: string[];`

If this value is set, this event will only fire if the impacted block's type matches this parameter.

Type: *string*[]

### **permutations**
`permutations?: BlockPermutation[];`

If this value is set, this event will only fire if the impacted block's permutation matches this parameter.

Type: [*BlockPermutation*](BlockPermutation.md)[]
