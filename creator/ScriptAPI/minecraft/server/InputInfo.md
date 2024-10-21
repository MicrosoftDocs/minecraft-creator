---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.InputInfo Class
description: Contents of the @minecraft/server.InputInfo class.
monikerRange: "=minecraft-bedrock-experimental"
---
# InputInfo Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Contains the input information for a client instance.

## Properties

### **lastInputModeUsed**
`read-only lastInputModeUsed: InputMode;`

The last input mode used by the player.

Type: [*InputMode*](InputMode.md)

Notes:
  - This property can throw errors when used.
    - Throws [*@minecraft/common.EngineError*](../../minecraft/common/EngineError.md), [*InvalidEntityError*](InvalidEntityError.md)

### **touchOnlyAffectsHotbar**
`read-only touchOnlyAffectsHotbar: boolean;`

Whether the player touch input only affects the touchbar or not.

Type: *boolean*

Notes:
  - This property can throw errors when used.
    - Throws [*InvalidEntityError*](InvalidEntityError.md)
