---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.ItemComponentReturnType Type Alias
description: Contents of the @minecraft/server.ItemComponentReturnType type alias (Version 1.x.x).
---
# ItemComponentReturnType Type Alias (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/ItemComponentReturnType.md).

## Declaration
`export type ItemComponentReturnType<T extends string> = T extends keyof ItemComponentTypeMap ? ItemComponentTypeMap[T] : ItemComponent;`
