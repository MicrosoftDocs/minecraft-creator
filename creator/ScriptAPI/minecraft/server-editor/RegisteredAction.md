---
# DO NOT TOUCH — This file was automatically generated by @minecraft/api-docs-generator, to report problems file an issue at https://github.com/Mojang/minecraft-scripting-libraries
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.RegisteredAction Type Alias
description: Contents of the @minecraft/server-editor.RegisteredAction type alias.
---
# RegisteredAction Type Alias

A registered action is an action that has been registered with the action manager system and has a unique ID representing the action now. An action must be registered before it can be used in other systems.

## Declaration
`export type RegisteredAction<T extends Action> = T & ActionID;`
