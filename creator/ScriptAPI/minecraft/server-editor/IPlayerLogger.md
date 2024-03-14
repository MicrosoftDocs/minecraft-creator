---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.IPlayerLogger Interface
description: Contents of the @minecraft/server-editor.IPlayerLogger class.
---
# IPlayerLogger Interface

Log helper interface for Player.

## Methods
- [debug](#debug)
- [error](#error)
- [info](#info)
- [warning](#warning)

### **debug**
`
debug(message: string): void
`

Dispatch a player log message with Debug log level

#### **Parameters**
- **message**: *string*
  
  Message content

**Returns** *void*

### **error**
`
error(message: string): void
`

Dispatch a player log message with Error log level

#### **Parameters**
- **message**: *string*
  
  Message content

**Returns** *void*

### **info**
`
info(message: string): void
`

Dispatch a player log message with Info log level

#### **Parameters**
- **message**: *string*
  
  Message content

**Returns** *void*

### **warning**
`
warning(message: string): void
`

Dispatch a player log message with Warning log level

#### **Parameters**
- **message**: *string*
  
  Message content

**Returns** *void*
