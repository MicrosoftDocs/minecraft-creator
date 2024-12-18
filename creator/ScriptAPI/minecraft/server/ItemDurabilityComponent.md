---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ItemDurabilityComponent Class
description: Contents of the @minecraft/server.ItemDurabilityComponent class.
---
# ItemDurabilityComponent Class

## Extends
- [*ItemComponent*](ItemComponent.md)

When present on an item, this item can take damage in the process of being used. Note that this component only applies to data-driven items.

#### Examples

##### ***giveHurtDiamondSword.ts***

```typescript
import { world, ItemStack, EntityInventoryComponent, EntityComponentTypes, ItemComponentTypes, ItemDurabilityComponent, DimensionLocation } from "@minecraft/server";
import { MinecraftItemTypes } from "@minecraft/vanilla-data";

function giveHurtDiamondSword(
    targetLocation: DimensionLocation
) {
  const hurtDiamondSword = new ItemStack(MinecraftItemTypes.DiamondSword);

  const durabilityComponent = hurtDiamondSword.getComponent(ItemComponentTypes.Durability) as ItemDurabilityComponent;

  if (durabilityComponent !== undefined) {
    durabilityComponent.damage = durabilityComponent.maxDurability / 2;
  }

  for (const player of world.getAllPlayers()) {
    const inventory = player.getComponent(EntityComponentTypes.Inventory) as EntityInventoryComponent;
    if (inventory && inventory.container) {
      inventory.container.addItem(hurtDiamondSword);
    }
  }
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/giveHurtDiamondSword.ts) code sandbox.

## Properties

### **damage**
`damage: number;`

Returns the current damage level of this particular item.

Type: *number*

Notes:
  - This property can't be edited in read-only mode.

### **maxDurability**
`read-only maxDurability: number;`

Represents the amount of damage that this item can take before breaking.

Type: *number*

Notes:
  - This property can throw errors when used.

## Methods
- [getDamageChance](#getdamagechance)
- [getDamageChanceRange](#getdamagechancerange)

### **getDamageChance**
`
getDamageChance(unbreakingEnchantmentLevel?: number): number
`

Returns the maximum chance that this item would be damaged using the damageRange property, given an unbreaking enchantment level.

#### **Parameters**
- **unbreakingEnchantmentLevel**?: *number* = `0`
  
  Unbreaking factor to consider in factoring the damage chance. Incoming unbreaking parameter must be within the range [0, 3].

**Returns** *number*
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **getDamageChanceRange**
`
getDamageChanceRange(): minecraftcommon.NumberRange
`

A range of numbers that is used to calculate the damage chance for an item. The damage chance will fall within this range.

**Returns** [*@minecraft/common.NumberRange*](../../minecraft/common/NumberRange.md)
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

## Constants

### **componentId**
`static read-only componentId = "minecraft:durability";`

Type: *string*

#### Examples

##### ***giveHurtDiamondSword.ts***

```typescript
import { world, ItemStack, EntityInventoryComponent, EntityComponentTypes, ItemComponentTypes, ItemDurabilityComponent, DimensionLocation } from "@minecraft/server";
import { MinecraftItemTypes } from "@minecraft/vanilla-data";

function giveHurtDiamondSword(
    targetLocation: DimensionLocation
) {
  const hurtDiamondSword = new ItemStack(MinecraftItemTypes.DiamondSword);

  const durabilityComponent = hurtDiamondSword.getComponent(ItemComponentTypes.Durability) as ItemDurabilityComponent;

  if (durabilityComponent !== undefined) {
    durabilityComponent.damage = durabilityComponent.maxDurability / 2;
  }

  for (const player of world.getAllPlayers()) {
    const inventory = player.getComponent(EntityComponentTypes.Inventory) as EntityInventoryComponent;
    if (inventory && inventory.container) {
      inventory.container.addItem(hurtDiamondSword);
    }
  }
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/giveHurtDiamondSword.ts) code sandbox.
