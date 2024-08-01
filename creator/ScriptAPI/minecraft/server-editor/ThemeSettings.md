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
- [addNewTheme](#addnewtheme)
- [deleteTheme](#deletetheme)
- [getCurrentTheme](#getcurrenttheme)
- [getThemeList](#getthemelist)
- [resolveColorKey](#resolvecolorkey)
- [setCurrentTheme](#setcurrenttheme)
- [updateThemeColor](#updatethemecolor)

### **addNewTheme**
`
addNewTheme(name: string): void
`

#### **Parameters**
- **name**: *string*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws *Error*

### **deleteTheme**
`
deleteTheme(name: string): void
`

#### **Parameters**
- **name**: *string*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws *Error*

### **getCurrentTheme**
`
getCurrentTheme(): string
`

**Returns** *string*

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

### **updateThemeColor**
`
updateThemeColor(name: string, key: ThemeSettingsColorKey, newColor: minecraftserver.RGBA): void
`

#### **Parameters**
- **name**: *string*
- **key**: [*ThemeSettingsColorKey*](ThemeSettingsColorKey.md)
- **newColor**: [*@minecraft/server.RGBA*](../../minecraft/server/RGBA.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws *Error*
