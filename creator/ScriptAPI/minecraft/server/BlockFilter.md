---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.BlockFilter Interface
description: Contents of the @minecraft/server.BlockFilter class.
---
# BlockFilter Interface

Options to include or exclude blocks based on type, tag or permutation. If no include options are added it will select all blocks that are not rejected by the exclude options. If at least one include option is added the block must match one of the include options to not be rejected.

## Properties

### **excludePermutations**
`excludePermutations?: BlockPermutation[];`

Array of block permutations that the filter should reject if any matches.

Type: [*BlockPermutation*](BlockPermutation.md)[]

### **excludeTags**
`excludeTags?: string[];`

Array of block tags that the filter should reject if any matches.

Type: *string*[]

### **excludeTypes**
`excludeTypes?: string[];`

Array of block types that the filter should reject if any matches.

Type: *string*[]

### **includePermutations**
`includePermutations?: BlockPermutation[];`

Array of block permutations that the filter should select if at least one matches.

Type: [*BlockPermutation*](BlockPermutation.md)[]

### **includeTags**
`includeTags?: string[];`

Array of block tags that the filter should select if at least one matches.

Type: *string*[]

### **includeTypes**
`includeTypes?: string[];`

Array of block types that the filter should select if at least one matches.

Type: *string*[]
