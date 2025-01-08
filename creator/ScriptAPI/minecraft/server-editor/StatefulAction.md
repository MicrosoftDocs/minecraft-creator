---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: . Type Alias
description: Contents of the .StatefulAction type alias.
---
# StatefulAction Type Alias

An action which returns the activation state.

## Declaration
`export type StatefulAction = {
    actionType: ActionTypes.StatefulAction;
    readonly onExecute: (active: boolean) => void;
};`
