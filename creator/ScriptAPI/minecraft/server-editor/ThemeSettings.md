---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.ThemeSettings Class
description: Contents of the @minecraft/server-editor.ThemeSettings class.
---
# ThemeSettings Class

## Methods
- [getThemeList](#getthemelist)
- [resolveColorKey](#resolvecolorkey)
- [setCurrentTheme](#setcurrenttheme)

### **getThemeList**
`
getThemeList(): string[]
`

**Returns** *string*[]

### **resolveColorKey**
`
resolveColorKey(key: ThemeSettingsColorKey): minecraftserver.RGBA | undefined
`

#### **Parameters**
- **key**: [*ThemeSettingsColorKey*](ThemeSettingsColorKey.md)

**Returns** [*@minecraft/server.RGBA*](../../minecraft/server/RGBA.md) | *undefined*

### **setCurrentTheme**
`
setCurrentTheme(name: string): void
`

#### **Parameters**
- **name**: *string*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws *Error*
