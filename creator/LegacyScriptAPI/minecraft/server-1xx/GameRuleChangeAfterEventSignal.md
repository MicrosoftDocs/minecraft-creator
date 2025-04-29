---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.GameRuleChangeAfterEventSignal Class
description: Contents of the @minecraft/server.GameRuleChangeAfterEventSignal class (Version 1.x.x).
---
# GameRuleChangeAfterEventSignal Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/GameRuleChangeAfterEventSignal.md).

Manages callbacks that are connected to when a world.gameRules property has changed.

## Methods
- [subscribe](#subscribe)
- [unsubscribe](#unsubscribe)

### **subscribe**
`
subscribe(callback: (arg0: GameRuleChangeAfterEvent) => void): (arg0: GameRuleChangeAfterEvent) => void
`

Adds a callback that will be called when a world.gameRules property is changed.

#### **Parameters**
- **callback**: (arg0: [*GameRuleChangeAfterEvent*](GameRuleChangeAfterEvent.md)) => *void*

**Returns** (arg0: [*GameRuleChangeAfterEvent*](GameRuleChangeAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

### **unsubscribe**
`
unsubscribe(callback: (arg0: GameRuleChangeAfterEvent) => void): void
`

Removes a callback from being called when a world.gameRules property is changed.

#### **Parameters**
- **callback**: (arg0: [*GameRuleChangeAfterEvent*](GameRuleChangeAfterEvent.md)) => *void*
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.
