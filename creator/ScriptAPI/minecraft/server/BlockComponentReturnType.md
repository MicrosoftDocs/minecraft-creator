---
# DO NOT TOUCH — This file was automatically generated by @minecraft/api-docs-generator, to report problems file an issue at https://github.com/Mojang/minecraft-scripting-libraries
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.BlockComponentReturnType Type Alias
description: Contents of the @minecraft/server.BlockComponentReturnType type alias.
---
# BlockComponentReturnType Type Alias

## Declaration
`export type BlockComponentReturnType<T extends string> = T extends keyof BlockComponentTypeMap ? BlockComponentTypeMap[T] : BlockCustomComponentInstance;`
