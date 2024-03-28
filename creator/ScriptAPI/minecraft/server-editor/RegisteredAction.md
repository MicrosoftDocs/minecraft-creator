---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: . Type Alias
description: Contents of the .RegisteredAction type alias.
---
# RegisteredAction Type Alias

A registered action is an action that has been registered with the action manager system and has a unique ID representing the action now. An action must be registered before it can be used in other systems.

## Declaration
`export type RegisteredAction<T extends Action> = T & ActionID;`
