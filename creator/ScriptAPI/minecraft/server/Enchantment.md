---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.Enchantment Class
description: Contents of the @minecraft/server.Enchantment class.
---
# Enchantment Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

This class represents a specific leveled enchantment that is applied to an item.

## Properties

### **level**
`level: number;`

The level of this enchantment instance.

Type: *number*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

### **type**
`read-only type: EnchantmentType;`

The enchantment type of this instance.

Type: [*EnchantmentType*](EnchantmentType.md)

## Methods
- [constructor](#constructor)

### **constructor**
`
new Enchantment(enchantmentType: EnchantmentType | string, level?: number)
`

Creates a new particular type of enchantment configuration.

#### **Parameters**
- **enchantmentType**: [*EnchantmentType*](EnchantmentType.md) | *string*
  
  Type of the enchantment.
- **level**?: *number* = `1`
  
  Level of the enchantment.

#### **Returns** [*Enchantment*](Enchantment.md)

> [!WARNING]
> This function can throw errors.

#### Examples
##### ***diamondAwesomeSword.ts***
```typescript
  const diamondAwesomeSword = new mc.ItemStack(mc.MinecraftItemTypes.diamondSword, 1);
  let players = mc.world.getAllPlayers();

  diamondAwesomeSword.setLore(["§c§lDiamond Sword of Awesome§r", "+10 coolness", "§p+4 shiny§r"]);

  // hover over/select the item in your inventory to see the lore.
  const inventory = players[0].getComponent("inventory") as mc.EntityInventoryComponent;
  inventory.container.setItem(0, diamondAwesomeSword);

  let item = inventory.container.getItem(0);

  if (item) {
    let enchants = item.getComponent("minecraft:enchantments") as mc.ItemEnchantsComponent;
    let knockbackEnchant = new mc.Enchantment("knockback", 3);
    enchants.enchantments.addEnchantment(knockbackEnchant);
  }
```
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
