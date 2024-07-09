---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.PlaytestManager Class
description: Contents of the @minecraft/server-editor.PlaytestManager class.
---
# PlaytestManager Class

## Methods
- [beginPlaytest](#beginplaytest)
- [getPlaytestSessionAvailability](#getplaytestsessionavailability)

### **beginPlaytest**
`
beginPlaytest(options: GameOptions): Promise<PlaytestSessionResult>
`

#### **Parameters**
- **options**: [*GameOptions*](GameOptions.md)

**Returns** Promise&lt;[*PlaytestSessionResult*](PlaytestSessionResult.md)&gt;

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **getPlaytestSessionAvailability**
`
getPlaytestSessionAvailability(): PlaytestSessionResult
`

**Returns** [*PlaytestSessionResult*](PlaytestSessionResult.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
