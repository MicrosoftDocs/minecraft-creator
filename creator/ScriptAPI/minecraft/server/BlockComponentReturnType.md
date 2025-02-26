---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: . Type Alias
description: Contents of the .BlockComponentReturnType type alias.
monikerRange: "=minecraft-bedrock-experimental"
---
# BlockComponentReturnType Type Alias

> [!CAUTION]
> This alias is still in pre-release.  Its signature may change or it may be removed in future releases.

## Declaration
`export type BlockComponentReturnType<T extends string> = T extends keyof BlockComponentTypeMap ? BlockComponentTypeMap[T] : BlockComponent;`
