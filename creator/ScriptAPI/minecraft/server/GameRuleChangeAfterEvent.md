---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.GameRuleChangeAfterEvent Class
description: Contents of the @minecraft/server.GameRuleChangeAfterEvent class.
monikerRange: "=minecraft-bedrock-experimental"
---
# GameRuleChangeAfterEvent Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Contains information regarding a changed world.gameRules property.

## Properties

### **rule**
`read-only rule: GameRule;`

The rule identifier pertaining to the changed world.gameRules property.

Type: [*GameRule*](GameRule.md)

### **value**
`read-only value: boolean | number;`

The value of the world.gameRules property after being changed.

Type: *boolean* | *number*
