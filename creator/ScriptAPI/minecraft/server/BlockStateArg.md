---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: . Type Alias
description: Contents of the .BlockStateArg type alias.
monikerRange: "=minecraft-bedrock-experimental"
---
# BlockStateArg Type Alias

> [!CAUTION]
> This alias is still in pre-release.  Its signature may change or it may be removed in future releases.

Type alias used by the [*@minecraft/server.BlockPermutation*](../../minecraft/server/BlockPermutation.md) matches and resolve functions to narrow block state argument types to those mapped by {@link @minecraft/vanilla-data.BlockStateMapping}.

## Declaration
`export type BlockStateArg<T> = T extends `${minecraftvanilladata.MinecraftBlockTypes}` ? T extends keyof minecraftvanilladata.BlockStateMapping ? minecraftvanilladata.BlockStateMapping[T] : never : Record<string, boolean | number | string>;`
