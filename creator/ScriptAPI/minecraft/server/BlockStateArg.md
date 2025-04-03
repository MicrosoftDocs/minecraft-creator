---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.BlockStateArg Type Alias
description: Contents of the @minecraft/server.BlockStateArg type alias.
---
# BlockStateArg Type Alias

Type alias used by the [*@minecraft/server.BlockPermutation*](../../../scriptapi/minecraft/server/BlockPermutation.md) matches and resolve functions to narrow block state argument types to those mapped by {@link @minecraft/vanilla-data.BlockStateMapping}.

## Declaration
`export type BlockStateArg<T> = T extends `${minecraftvanilladata.MinecraftBlockTypes}` ? T extends keyof minecraftvanilladata.BlockStateMapping ? minecraftvanilladata.BlockStateMapping[T] : never : Record<string, boolean | number | string>;`
