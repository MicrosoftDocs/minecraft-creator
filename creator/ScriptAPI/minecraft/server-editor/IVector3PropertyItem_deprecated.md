---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: . Type Alias
description: Contents of the .IVector3PropertyItem_deprecated type alias.
---
# IVector3PropertyItem_deprecated Type Alias

A property item which supports Vector3 properties

## Declaration
`export type IVector3PropertyItem_deprecated<T extends PropertyBag, Prop extends keyof T & string> = IPropertyItem<T, Prop> & {
    updateAxisLimits(limits: {
        minX?: number;
        maxX?: number;
        minY?: number;
        maxY?: number;
        minZ?: number;
        maxZ?: number;
    }): void;
};`
