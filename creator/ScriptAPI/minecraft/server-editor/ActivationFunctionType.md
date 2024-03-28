---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: . Type Alias
description: Contents of the .ActivationFunctionType type alias.
---
# ActivationFunctionType Type Alias

Callback type when an extension instance is activated for a given player. It is expected to return an array of disposables that will automatically be cleaned up on shutdown.

## Declaration
`export type ActivationFunctionType<PerPlayerStorageType> = (uiSession: IPlayerUISession<PerPlayerStorageType>) => IDisposable[];`
