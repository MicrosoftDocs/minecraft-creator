---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.InputInfo Class
description: Contents of the @minecraft/server.InputInfo class.
---
# InputInfo Class

Contains the input information for a client instance.

## Properties

### **lastInputModeUsed**
`read-only lastInputModeUsed: InputMode;`

The last input mode used by the player.

Type: [*InputMode*](InputMode.md)

Notes:
  - This property can throw errors when used.
    - Throws [*@minecraft/common.EngineError*](../../../scriptapi/minecraft/common/EngineError.md), [*InvalidEntityError*](InvalidEntityError.md)

### **touchOnlyAffectsHotbar**
`read-only touchOnlyAffectsHotbar: boolean;`

Whether the player touch input only affects the touchbar or not.

Type: *boolean*

Notes:
  - This property can throw errors when used.
    - Throws [*InvalidEntityError*](InvalidEntityError.md)

## Methods
- [getButtonState](#getbuttonstate)
- [getMovementVector](#getmovementvector)

### **getButtonState**
`
getButtonState(button: InputButton): ButtonState
`

#### **Parameters**
- **button**: [*InputButton*](InputButton.md)

**Returns** [*ButtonState*](ButtonState.md)
  
Notes:
- This function can throw errors.
  - Throws [*@minecraft/common.EngineError*](../../../scriptapi/minecraft/common/EngineError.md), [*InvalidEntityError*](InvalidEntityError.md)

### **getMovementVector**
`
getMovementVector(): Vector2
`

**Returns** [*Vector2*](Vector2.md)
  
Notes:
- This function can throw errors.
  - Throws [*InvalidEntityError*](InvalidEntityError.md)
