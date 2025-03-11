---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.ThemeSettings Class
description: Contents of the @minecraft/server-editor.ThemeSettings class.
---
# ThemeSettings Class

## Methods
- [addNewTheme](#addnewtheme)
- [canThemeBeModified](#canthemebemodified)
- [deleteTheme](#deletetheme)
- [getCurrentTheme](#getcurrenttheme)
- [getThemeColors](#getthemecolors)
- [getThemeIdList](#getthemeidlist)
- [getThemeName](#getthemename)
- [resolveColorKey](#resolvecolorkey)
- [setCurrentTheme](#setcurrenttheme)
- [setThemeName](#setthemename)
- [updateThemeColor](#updatethemecolor)

### **addNewTheme**
`
addNewTheme(id: string, name?: string, sourceThemeId?: string): void
`

#### **Parameters**
- **id**: *string*
- **name**?: *string* = `null`
- **sourceThemeId**?: *string* = `null`
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws *Error*

### **canThemeBeModified**
`
canThemeBeModified(id: string): boolean
`

#### **Parameters**
- **id**: *string*

**Returns** *boolean*

### **deleteTheme**
`
deleteTheme(id: string): void
`

#### **Parameters**
- **id**: *string*
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws *Error*

### **getCurrentTheme**
`
getCurrentTheme(): string
`

**Returns** *string*

### **getThemeColors**
`
getThemeColors(id: string): Record<string, minecraftserver.RGBA> | undefined
`

#### **Parameters**
- **id**: *string*

**Returns** Record<*string*, [*@minecraft/server.RGBA*](../../../scriptapi/minecraft/server/RGBA.md)> | *undefined*

### **getThemeIdList**
`
getThemeIdList(): string[]
`

**Returns** *string*[]

### **getThemeName**
`
getThemeName(id: string): string
`

#### **Parameters**
- **id**: *string*

**Returns** *string*
  
Notes:
- This function can throw errors.
  - Throws *Error*

### **resolveColorKey**
`
resolveColorKey(key: ThemeSettingsColorKey): minecraftserver.RGBA
`

#### **Parameters**
- **key**: [*ThemeSettingsColorKey*](ThemeSettingsColorKey.md)

**Returns** [*@minecraft/server.RGBA*](../../../scriptapi/minecraft/server/RGBA.md)

### **setCurrentTheme**
`
setCurrentTheme(id: string): void
`

#### **Parameters**
- **id**: *string*
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws *Error*

### **setThemeName**
`
setThemeName(id: string, name: string): void
`

#### **Parameters**
- **id**: *string*
- **name**: *string*
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws *Error*

### **updateThemeColor**
`
updateThemeColor(id: string, key: ThemeSettingsColorKey, newColor: minecraftserver.RGBA): void
`

#### **Parameters**
- **id**: *string*
- **key**: [*ThemeSettingsColorKey*](ThemeSettingsColorKey.md)
- **newColor**: [*@minecraft/server.RGBA*](../../../scriptapi/minecraft/server/RGBA.md)
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws *Error*
