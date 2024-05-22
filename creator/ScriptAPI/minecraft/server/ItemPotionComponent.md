---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ItemPotionComponent Class
description: Contents of the @minecraft/server.ItemPotionComponent class.
monikerRange: "=minecraft-bedrock-experimental"
---
# ItemPotionComponent Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*ItemComponent*](ItemComponent.md)

When present on an item, this item is a potion item.

## Properties

### **potionEffectType**
`read-only potionEffectType: PotionEffectType;`

The PotionEffectType associated with the potion item.

Type: [*PotionEffectType*](PotionEffectType.md)

> [!WARNING]
> This property can throw errors when used.

### **potionLiquidType**
`read-only potionLiquidType: PotionLiquidType;`

The PotionLiquidType associated with the potion item.

Type: [*PotionLiquidType*](PotionLiquidType.md)

> [!WARNING]
> This property can throw errors when used.

### **potionModifierType**
`read-only potionModifierType: PotionModifierType;`

The PotionModifierType associated with the potion item.

Type: [*PotionModifierType*](PotionModifierType.md)

> [!WARNING]
> This property can throw errors when used.

## Constants

### **componentId**
`static read-only componentId = "minecraft:potion";`

Type: *string*
