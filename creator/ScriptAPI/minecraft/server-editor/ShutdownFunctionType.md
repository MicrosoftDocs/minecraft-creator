---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.ShutdownFunctionType Type Alias
description: Contents of the @minecraft/server-editor.ShutdownFunctionType type alias.
---
# ShutdownFunctionType Type Alias

Callback type when an extension instance is shutdown for a given player. Used for performing any final work or clean up that can't be handled automatically via Disposables.

## Declaration
`export type ShutdownFunctionType<PerPlayerStorageType> = (uiSession: IPlayerUISession<PerPlayerStorageType>) => void;`
