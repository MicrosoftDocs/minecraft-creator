---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.EntityEquippableComponent Class
description: Contents of the @minecraft/server.EntityEquippableComponent class.
---
# EntityEquippableComponent Class

## Extends
- [*EntityComponent*](EntityComponent.md)

Provides access to a mob's equipment slots. This component exists for all mob entities.

## Properties

::: moniker range="=minecraft-bedrock-experimental"
### **totalArmor**
`read-only totalArmor: number;`

Returns the total Armor level of the owner.

Type: *number*

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.

Notes:
  - This property can throw errors when used.
    - Throws [*InvalidEntityError*](InvalidEntityError.md)
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **totalToughness**
`read-only totalToughness: number;`

Returns the total Toughness level of the owner.

Type: *number*

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.

Notes:
  - This property can throw errors when used.
    - Throws [*InvalidEntityError*](InvalidEntityError.md)
::: moniker-end

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
  
Notes:
- This function can throw errors.

### **getEquipmentSlot**
`
getEquipmentSlot(equipmentSlot: EquipmentSlot): ContainerSlot
`

Gets the ContainerSlot corresponding to the given EquipmentSlot.

#### **Parameters**
- **equipmentSlot**: [*EquipmentSlot*](EquipmentSlot.md)
  
  The equipment slot. e.g. "head", "chest", "offhand".

**Returns** [*ContainerSlot*](ContainerSlot.md) - Returns the ContainerSlot corresponding to the given EquipmentSlot.
  
Notes:
- This function can throw errors.

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
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

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

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/givePlayerElytra.ts) code sandbox.
