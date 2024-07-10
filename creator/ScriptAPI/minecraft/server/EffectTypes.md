---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EffectTypes Class
description: Contents of the @minecraft/server.EffectTypes class.
---
# EffectTypes Class

Represents a type of effect - like poison - that can be applied to an entity.

## Methods
- [get](#get)
- [getAll](#getall)

### **get**
`
static "get"(identifier: string): EffectType | undefined
`

Effect type for the given identifier.

#### **Parameters**
- **identifier**: *string*
  
  The identifier for the effect.

**Returns** [*EffectType*](EffectType.md) | *undefined* - Effect type for the given identifier or undefined if the effect does not exist.

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **getAll**
`
static getAll(): EffectType[]
`

Gets all effects.

**Returns** [*EffectType*](EffectType.md)[] - A list of all effects.

> [!IMPORTANT]
> This function can't be called in read-only mode.
