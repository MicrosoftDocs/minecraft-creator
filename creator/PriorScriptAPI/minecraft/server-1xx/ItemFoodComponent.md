---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.ItemFoodComponent Class
description: Contents of the @minecraft/server.ItemFoodComponent class (Version 1.x.x).
---
# ItemFoodComponent Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/ItemFoodComponent.md).

## Extends
- [*ItemComponent*](ItemComponent.md)

When present on an item, this item is consumable by entities. Note that this component only applies to data-driven items.

## Properties

### **canAlwaysEat**
`read-only canAlwaysEat: boolean;`

If true, the player can always eat this item (even when not hungry).

Type: *boolean*

Notes:
  - This property can throw errors when used.

### **nutrition**
`read-only nutrition: number;`

Represents how much nutrition this food item will give an entity when eaten.

Type: *number*

Notes:
  - This property can throw errors when used.

### **saturationModifier**
`read-only saturationModifier: number;`

When an item is eaten, this value is used according to this formula (nutrition * saturation_modifier * 2) to apply a saturation buff.

Type: *number*

Notes:
  - This property can throw errors when used.

### **usingConvertsTo**
`read-only usingConvertsTo: string;`

When specified, converts the active item to the one specified by this property.

Type: *string*

Notes:
  - This property can throw errors when used.

## Constants

### **componentId**
`static read-only componentId = "minecraft:food";`

Type: *string*
