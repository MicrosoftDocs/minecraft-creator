---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.ExportManager Class
description: Contents of the @minecraft/server-editor.ExportManager class.
---
# ExportManager Class

## Methods
- [beginExportProject](#beginexportproject)
- [canExportProject](#canexportproject)
- [getGameOptions](#getgameoptions)
- [getGameVersion](#getgameversion)

### **beginExportProject**
`
beginExportProject(options: GameOptions): Promise<ExportResult>
`

#### **Parameters**
- **options**: [*GameOptions*](GameOptions.md)

**Returns** Promise&lt;[*ExportResult*](ExportResult.md)&gt;
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **canExportProject**
`
canExportProject(): boolean
`

**Returns** *boolean*
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **getGameOptions**
`
getGameOptions(useDefault?: boolean): GameOptions
`

#### **Parameters**
- **useDefault**?: *boolean* = `null`

**Returns** [*GameOptions*](GameOptions.md)
  
Notes:
- This function can't be called in read-only mode.

### **getGameVersion**
`
getGameVersion(): string
`

**Returns** *string*
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws *Error*
