---
# DO NOT TOUCH — This file was automatically generated by @minecraft/api-docs-generator, to report problems file an issue at https://github.com/Mojang/minecraft-scripting-libraries
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.StatefulAction Type Alias
description: Contents of the @minecraft/server-editor.StatefulAction type alias.
---
# StatefulAction Type Alias

An action which returns the activation state.

## Declaration
`export type StatefulAction = {
    readonly actionType: ActionTypes.StatefulAction;
    readonly onExecute: (active: boolean) => void;
};`
