---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: . Type Alias
description: Contents of the .OnChangeCallback type alias.
---
# OnChangeCallback Type Alias

Callback to execute when a value of a property item is updated.

## Declaration
`export type OnChangeCallback<T extends PropertyBag, Prop extends keyof T & string> = (obj: T, property: Prop, oldValue: object, newValue: object) => void;`
