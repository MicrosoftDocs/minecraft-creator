---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
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

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **canExportProject**
`
canExportProject(): boolean
`

**Returns** *boolean*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **getGameOptions**
`
getGameOptions(useDefault?: boolean): GameOptions
`

#### **Parameters**
- **useDefault**?: *boolean* = `null`

**Returns** [*GameOptions*](GameOptions.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **getGameVersion**
`
getGameVersion(): string
`

**Returns** *string*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws *Error*
