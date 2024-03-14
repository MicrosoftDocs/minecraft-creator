---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EntityEquippableComponent Class
description: Contents of the @minecraft/server.EntityEquippableComponent class.
---
# EntityEquippableComponent Class

## Extends
- [*EntityComponent*](EntityComponent.md)

Provides access to a mob's equipment slots. This component exists for all mob entities.

#### Examples
##### ***givePlayerElytra.ts***
```typescript
// Gives the player Elytra
import { EquipmentSlot, ItemStack, Player, EntityComponentTypes } from '@minecraft/server';
import { MinecraftItemTypes } from '@minecraft/vanilla-data';

function giveEquipment(player: Player) {
    const equipmentCompPlayer = player.getComponent(EntityComponentTypes.Equippable);
    if (equipmentCompPlayer) {
        equipmentCompPlayer.setEquipment(EquipmentSlot.Chest, new ItemStack(MinecraftItemTypes.Elytra));
    }
}
```
##### ***givePlayerEquipment.ts***
```typescript
// Gives the player some equipment
import { EquipmentSlot, ItemStack, Player, EntityComponentTypes } from '@minecraft/server';
import { MinecraftItemTypes } from '@minecraft/vanilla-data';

function giveEquipment(player: Player) {
    const equipmentCompPlayer = player.getComponent(EntityComponentTypes.Equippable);
    if (equipmentCompPlayer) {
        equipmentCompPlayer.setEquipment(EquipmentSlot.Head, new ItemStack(MinecraftItemTypes.GoldenHelmet));
        equipmentCompPlayer.setEquipment(EquipmentSlot.Chest, new ItemStack(MinecraftItemTypes.IronChestplate));
        equipmentCompPlayer.setEquipment(EquipmentSlot.Legs, new ItemStack(MinecraftItemTypes.DiamondLeggings));
        equipmentCompPlayer.setEquipment(EquipmentSlot.Feet, new ItemStack(MinecraftItemTypes.NetheriteBoots));
        equipmentCompPlayer.setEquipment(EquipmentSlot.Mainhand, new ItemStack(MinecraftItemTypes.WoodenSword));
        equipmentCompPlayer.setEquipment(EquipmentSlot.Offhand, new ItemStack(MinecraftItemTypes.Shield));
    } else {
        console.warn('No equipment component found on player');
    }
}
```

## Methods
- [getEquipment](#getequipment)
- [getEquipmentSlot](#getequipmentslot)
- [setEquipment](#setequipment)

### **getEquipment**
`
getEquipment(equipmentSlot: EquipmentSlot): ItemStack | undefined
`

Gets the equipped item for the given EquipmentSlot.

#### **Parameters**
- **equipmentSlot**: [*EquipmentSlot*](EquipmentSlot.md)
  
  The equipment slot. e.g. "head", "chest", "offhand"

**Returns** [*ItemStack*](ItemStack.md) | *undefined* - Returns the item equipped to the given EquipmentSlot. If empty, returns undefined.

> [!WARNING]
> This function can throw errors.

### **getEquipmentSlot**
`
getEquipmentSlot(equipmentSlot: EquipmentSlot): ContainerSlot
`

Gets the ContainerSlot corresponding to the given EquipmentSlot.

#### **Parameters**
- **equipmentSlot**: [*EquipmentSlot*](EquipmentSlot.md)
  
  The equipment slot. e.g. "head", "chest", "offhand".

**Returns** [*ContainerSlot*](ContainerSlot.md) - Returns the ContainerSlot corresponding to the given EquipmentSlot.

> [!WARNING]
> This function can throw errors.

### **setEquipment**
`
setEquipment(equipmentSlot: EquipmentSlot, itemStack?: ItemStack): boolean
`

Replaces the item in the given EquipmentSlot.

#### **Parameters**
- **equipmentSlot**: [*EquipmentSlot*](EquipmentSlot.md)
  
  The equipment slot. e.g. "head", "chest", "offhand".
- **itemStack**?: [*ItemStack*](ItemStack.md) = `null`
  
  The item to equip. If undefined, clears the slot.

**Returns** *boolean*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

## Constants

### **componentId**
`static read-only componentId = "minecraft:equippable";`

Type: *string*

#### Examples
##### ***givePlayerElytra.ts***
```typescript
// Gives the player Elytra
import { EquipmentSlot, ItemStack, Player, EntityComponentTypes } from '@minecraft/server';
import { MinecraftItemTypes } from '@minecraft/vanilla-data';

function giveEquipment(player: Player) {
    const equipmentCompPlayer = player.getComponent(EntityComponentTypes.Equippable);
    if (equipmentCompPlayer) {
        equipmentCompPlayer.setEquipment(EquipmentSlot.Chest, new ItemStack(MinecraftItemTypes.Elytra));
    }
}
```
##### ***givePlayerEquipment.ts***
```typescript
// Gives the player some equipment
import { EquipmentSlot, ItemStack, Player, EntityComponentTypes } from '@minecraft/server';
import { MinecraftItemTypes } from '@minecraft/vanilla-data';

function giveEquipment(player: Player) {
    const equipmentCompPlayer = player.getComponent(EntityComponentTypes.Equippable);
    if (equipmentCompPlayer) {
        equipmentCompPlayer.setEquipment(EquipmentSlot.Head, new ItemStack(MinecraftItemTypes.GoldenHelmet));
        equipmentCompPlayer.setEquipment(EquipmentSlot.Chest, new ItemStack(MinecraftItemTypes.IronChestplate));
        equipmentCompPlayer.setEquipment(EquipmentSlot.Legs, new ItemStack(MinecraftItemTypes.DiamondLeggings));
        equipmentCompPlayer.setEquipment(EquipmentSlot.Feet, new ItemStack(MinecraftItemTypes.NetheriteBoots));
        equipmentCompPlayer.setEquipment(EquipmentSlot.Mainhand, new ItemStack(MinecraftItemTypes.WoodenSword));
        equipmentCompPlayer.setEquipment(EquipmentSlot.Offhand, new ItemStack(MinecraftItemTypes.Shield));
    } else {
        console.warn('No equipment component found on player');
    }
}
```
