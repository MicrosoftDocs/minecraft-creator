---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.WidgetManager Class
description: Contents of the @minecraft/server-editor.WidgetManager class.
---
# WidgetManager Class

## Methods
- [createGroup](#creategroup)
- [deleteGroup](#deletegroup)

### **createGroup**
`
createGroup(options?: WidgetGroupCreateOptions): WidgetGroup
`

#### **Parameters**
- **options**?: [*WidgetGroupCreateOptions*](WidgetGroupCreateOptions.md) = `null`

**Returns** [*WidgetGroup*](WidgetGroup.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws *Error*

### **deleteGroup**
`
deleteGroup(groupToDelete: WidgetGroup): void
`

#### **Parameters**
- **groupToDelete**: [*WidgetGroup*](WidgetGroup.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws *Error*, [*InvalidWidgetGroupError*](InvalidWidgetGroupError.md)
