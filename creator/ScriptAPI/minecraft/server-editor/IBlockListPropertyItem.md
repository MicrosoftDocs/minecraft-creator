---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: . Type Alias
description: Contents of the .IBlockListPropertyItem type alias.
---
# IBlockListPropertyItem Type Alias

A property item which supports BlockList properties

## Declaration
`export type IBlockListPropertyItem<T extends PropertyBag, Prop extends keyof T & string> = IPropertyItem<T, Prop> & {
    updateBlockList(newBlockList: string[]): void;
};`
