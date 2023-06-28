---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: . Type Alias
description: Contents of the .ActivationFunctionType type alias.
---
# ActivationFunctionType Type Alias

> [!CAUTION]
> This alias is still in pre-release.  Its signature may change or it may be removed in future releases.

Callback type when an extension instance is activated for a given player. It is expected to return an array of disposables that will automatically be cleaned up on shutdown.

## Declaration
`export type ActivationFunctionType<PerPlayerStorageType> = (uiSession: IPlayerUISession<PerPlayerStorageType>) => IDisposable[];`
