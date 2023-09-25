---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
title: . Type Alias
description: Contents of the .ShutdownFunctionType type alias.
ms.service: minecraft-bedrock-edition
---
# ShutdownFunctionType Type Alias

> [!CAUTION]
> This alias is still in pre-release.  Its signature may change or it may be removed in future releases.

Callback type when an extension instance is shutdown for a given player. Used for performing any final work or clean up that can't be handled automatically via Disposables.

## Declaration
`export type ShutdownFunctionType<PerPlayerStorageType> = (uiSession: IPlayerUISession<PerPlayerStorageType>) => void;`
