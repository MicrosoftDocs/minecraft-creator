---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
title: . Type Alias
description: Contents of the .RegisteredAction type alias.
ms.service: minecraft-bedrock-edition
---
# RegisteredAction Type Alias

> [!CAUTION]
> This alias is still in pre-release.  Its signature may change or it may be removed in future releases.

A registered action is an action that has been registered with the action manager system and has a unique ID representing the action now. An action must be registered before it can be used in other systems.

## Declaration
`export type RegisteredAction<T extends Action> = T & ActionID;`
