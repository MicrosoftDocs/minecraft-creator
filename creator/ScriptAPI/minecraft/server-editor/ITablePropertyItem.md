---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: . Type Alias
description: Contents of the .ITablePropertyItem type alias.
---
# ITablePropertyItem Type Alias

A property item which supports Table properties

## Declaration
`export type ITablePropertyItem<T extends PropertyBag, Prop extends keyof T & string> = IPropertyItem<T, Prop> & {
    updateCell(dataCell: IPropertyTableCellItem, row: number, column: number): void;
    updateRow(dataRow: IPropertyTableCellItem[], row: number): void;
    updateTable(newData: IPropertyTableCellItem[][]): void;
};`
