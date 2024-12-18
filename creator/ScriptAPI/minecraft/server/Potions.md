---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.Potions Class
description: Contents of the @minecraft/server.Potions class.
monikerRange: "=minecraft-bedrock-experimental"
---
# Potions Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Used for accessing all potion effects, liquids, and modifiers currently available for use within the world.

## Methods
- [getPotionEffectType](#getpotioneffecttype)
- [getPotionLiquidType](#getpotionliquidtype)
- [getPotionModifierType](#getpotionmodifiertype)

### **getPotionEffectType**
`
static getPotionEffectType(potionEffectId: string): PotionEffectType | undefined
`

Retrieves a type handle for a specified potion effect id.

#### **Parameters**
- **potionEffectId**: *string*
  
  A valid potion effect id. See @minecraft/vanilla-data.MinecraftPotionEffectTypes

**Returns** [*PotionEffectType*](PotionEffectType.md) | *undefined* - A type handle wrapping the valid effect id, or undefined for an invalid effect id.

### **getPotionLiquidType**
`
static getPotionLiquidType(potionLiquidId: string): PotionLiquidType | undefined
`

Retrieves a type handle for a specified potion liquid id.

#### **Parameters**
- **potionLiquidId**: *string*

**Returns** [*PotionLiquidType*](PotionLiquidType.md) | *undefined* - A type handle wrapping the valid liquid id, or undefined for an invalid liquid id.

### **getPotionModifierType**
`
static getPotionModifierType(potionModifierId: string): PotionModifierType | undefined
`

Retrieves a type handle for a specified potion modifier id.

#### **Parameters**
- **potionModifierId**: *string*

**Returns** [*PotionModifierType*](PotionModifierType.md) | *undefined* - A type handle wrapping the valid modifier id, or undefined for an invalid modifier id.
