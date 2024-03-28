---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: . Type Alias
description: Contents of the .IActionPropertyItem type alias.
---
# IActionPropertyItem Type Alias

A property item which supports bound actions and replacing the bound action

## Declaration
`export type IActionPropertyItem<T extends PropertyBag, Prop extends keyof T & string> = IPropertyItem<T, Prop> & {
    replaceBoundAction(action: RegisteredAction<NoArgsAction> | undefined): void;
};`
