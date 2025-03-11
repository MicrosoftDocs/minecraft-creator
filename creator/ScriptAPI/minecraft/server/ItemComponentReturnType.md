---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.ItemComponentReturnType Type Alias
description: Contents of the @minecraft/server.ItemComponentReturnType type alias.
monikerRange: "=minecraft-bedrock-experimental"
---
# ItemComponentReturnType Type Alias

> [!CAUTION]
> This alias is still in pre-release.  Its signature may change or it may be removed in future releases.

## Declaration
`export type ItemComponentReturnType<T extends string> = T extends keyof ItemComponentTypeMap ? ItemComponentTypeMap[T] : ItemCustomComponentInstance;`
