---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.PotionOptions Interface
description: Contents of the @minecraft/server.PotionOptions class.
monikerRange: "=minecraft-bedrock-experimental"
---
# PotionOptions Interface

> [!CAUTION]
> This interface is still in pre-release.  Its signature may change or it may be removed in future releases.

Options for use in creating potions. See ItemStack.createPotion.

## Properties

### **effect**
`effect: PotionEffectType | string;`

The type of potion effect to create. See @minecraft/vanilla-data.MinecraftPotionEffectTypes.

Type: [*PotionEffectType*](PotionEffectType.md) | *string*

### **liquid**
`liquid?: PotionLiquidType | string;`

Optional potion liquid, defaults to 'Regular'. See @minecraft/vanilla-data.MinecraftPotionLiquidTypes.

Type: [*PotionLiquidType*](PotionLiquidType.md) | *string*

### **modifier**
`modifier?: PotionModifierType | string;`

Optional potion modifier, defaults to 'Normal'. See @minecraft/vanilla-data.MinecraftPotionModifierTypes.

Type: [*PotionModifierType*](PotionModifierType.md) | *string*
