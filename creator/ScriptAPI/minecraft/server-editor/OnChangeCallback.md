---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
title: . Type Alias
description: Contents of the .OnChangeCallback type alias.
ms.service: minecraft-bedrock-edition
---
# OnChangeCallback Type Alias

> [!CAUTION]
> This alias is still in pre-release.  Its signature may change or it may be removed in future releases.

Callback to execute when a value of a property item is updated.

## Declaration
`export type OnChangeCallback<T extends PropertyBag, Prop extends keyof T & string> = (obj: T, property: Prop, oldValue: object, newValue: object) => void;`
