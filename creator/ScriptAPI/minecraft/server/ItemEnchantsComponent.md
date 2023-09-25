---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
title: minecraft/server.ItemEnchantsComponent Class
description: Contents of the @minecraft/server.ItemEnchantsComponent class.
ms.service: minecraft-bedrock-edition
---
# ItemEnchantsComponent Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*ItemComponent*](ItemComponent.md)

When present on an item, this item has applied enchantment effects. Note that this component only applies to data-driven items.

## Properties

### **enchantments**
`enchantments: EnchantmentList;`

Returns a collection of the enchantments applied to this item stack.

Type: [*EnchantmentList*](EnchantmentList.md)
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

## Methods
- [removeAllEnchantments](#removeallenchantments)

### **removeAllEnchantments**
`
removeAllEnchantments(): void
`

Removes all enchantments applied to this item stack.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

## Constants

### **componentId**
`static read-only componentId = "minecraft:enchantments";`

Type: *string*

#### Examples
##### ***ironFireSword.ts***
```typescript
  const ironFireSword = new mc.ItemStack(mc.MinecraftItemTypes.diamondSword, 1);
  let players = mc.world.getAllPlayers();

  let fireAspectEnchant = new mc.Enchantment("fire_aspect", 3);
  let enchants = ironFireSword.getComponent("minecraft:enchantments") as mc.ItemEnchantsComponent;
  let addedFire = enchants.enchantments.addEnchantment(fireAspectEnchant);

  if (!addedFire) {
    log("Could not add fire aspect.");
    return -1;
  }

  const inventory = players[0].getComponent("inventory") as mc.EntityInventoryComponent;
  inventory.container.setItem(0, ironFireSword);

  // hover over/select the item in your inventory to see the lore.
```
