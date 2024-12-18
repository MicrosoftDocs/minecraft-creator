---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: . Type Alias
description: Contents of the .IDropdownPropertyItem_deprecated type alias.
---
# IDropdownPropertyItem_deprecated Type Alias

A property item which supports Dropdown properties

## Declaration
`export type IDropdownPropertyItem_deprecated<T extends Omit<PropertyBag, Prop> & {
    [key in Prop]: number;
}, Prop extends keyof T & string> = IPropertyItem<T, Prop> & IDropdownPropertyItemMixIn;`
