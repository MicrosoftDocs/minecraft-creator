---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: . Type Alias
description: Contents of the .NoArgsAction type alias.
---
# NoArgsAction Type Alias

An action which needs no additional client side arguments on execute

## Declaration
`export type NoArgsAction = {
    actionType: ActionTypes.NoArgsAction;
    readonly onExecute: () => void;
};`
