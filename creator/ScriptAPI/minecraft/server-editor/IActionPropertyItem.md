---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
title: . Type Alias
description: Contents of the .IActionPropertyItem type alias.
ms.service: minecraft-bedrock-edition
---
# IActionPropertyItem Type Alias

> [!CAUTION]
> This alias is still in pre-release.  Its signature may change or it may be removed in future releases.

A property item which supports bound actions and replacing the bound action

## Declaration
`export type IActionPropertyItem<T extends PropertyBag, Prop extends keyof T & string> = IPropertyItem<T, Prop> & {
    replaceBoundAction(action: RegisteredAction<NoArgsAction> | undefined): void;
};`
