---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.BlockComponentReturnType Type Alias
description: Contents of the @minecraft/server.BlockComponentReturnType type alias (Version 1.x.x).
---
# BlockComponentReturnType Type Alias (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/BlockComponentReturnType.md).

## Declaration
`export type BlockComponentReturnType<T extends string> = T extends keyof BlockComponentTypeMap ? BlockComponentTypeMap[T] : BlockComponent;`
