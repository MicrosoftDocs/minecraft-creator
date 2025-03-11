---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.ContinuousAction Type Alias
description: Contents of the @minecraft/server-editor.ContinuousAction type alias.
---
# ContinuousAction Type Alias

An action that continues to execute after activation

## Declaration
`export type ContinuousAction = {
    readonly actionType: ActionTypes.ContinuousAction;
    readonly onExecute: (state: ContinuousActionState, repeatCount: number) => void;
    repeatDelay?: number;
    repeatInterval?: number;
};`
