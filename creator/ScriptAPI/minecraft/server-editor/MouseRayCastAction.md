---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: . Type Alias
description: Contents of the .MouseRayCastAction type alias.
---
# MouseRayCastAction Type Alias

An action which returns the ray corresponding to a vector from the users mouse click in the viewport.

## Declaration
`export type MouseRayCastAction = {
    actionType: ActionTypes.MouseRayCastAction;
    readonly onExecute: (mouseRay: Ray, mouseProps: MouseProps) => void;
};`
