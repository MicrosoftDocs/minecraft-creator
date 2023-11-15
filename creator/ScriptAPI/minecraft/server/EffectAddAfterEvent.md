---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EffectAddAfterEvent Class
description: Contents of the @minecraft/server.EffectAddAfterEvent class.
monikerRange: "=minecraft-bedrock-experimental"
---
# EffectAddAfterEvent Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Contains information related to changes to an effect - like poison - being added to an entity.

## Properties

### **effect**
`effect: Effect;`

Additional properties and details of the effect.

Type: [*Effect*](Effect.md)
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

### **entity**
`entity: Entity;`

Entity that the effect is being added to.

Type: [*Entity*](Entity.md)
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.
