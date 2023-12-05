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

## Methods
- [getEquipment](#getequipment)
::: moniker range="=minecraft-bedrock-experimental"
- [getEquipmentSlot](#getequipmentslot)
::: moniker-end
- [setEquipment](#setequipment)

### **getEquipment**
`
getEquipment(equipmentSlot: EquipmentSlot): ItemStack | undefined
`

Gets the equipped item for the given EquipmentSlot.

#### **Parameters**
- **equipmentSlot**: [*EquipmentSlot*](EquipmentSlot.md)
  
  The equipment slot. e.g. "head", "chest", "offhand"

#### **Returns** [*ItemStack*](ItemStack.md) | *undefined* - Returns the item equipped to the given EquipmentSlot. If empty, returns undefined.

> [!WARNING]
> This function can throw errors.

::: moniker range="=minecraft-bedrock-experimental"
### **getEquipmentSlot**
`
getEquipmentSlot(equipmentSlot: EquipmentSlot): ContainerSlot
`

Gets the ContainerSlot corresponding to the given EquipmentSlot.

#### **Parameters**
- **equipmentSlot**: [*EquipmentSlot*](EquipmentSlot.md)
  
  The equipment slot. e.g. "head", "chest", "offhand".

#### **Returns** [*ContainerSlot*](ContainerSlot.md) - Returns the ContainerSlot corresponding to the given EquipmentSlot.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This function can throw errors.
::: moniker-end

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

#### **Returns** *boolean*

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
  let players = mc.world.getAllPlayers();

  const equipment = players[0].getComponent("equipment_inventory") as mc.EntityEquipmentInventoryComponent;
  equipment.setEquipment(mc.EquipmentSlot.chest, new mc.ItemStack("minecraft:elytra"));

  log("Player given Elytra");
```
##### ***givePlayerEquipment.ts***
```typescript
  let players = mc.world.getAllPlayers();

  const armorStandLoc = { x: targetLocation.x, y: targetLocation.y, z: targetLocation.z + 4 };
  let armorStand = players[0].dimension.spawnEntity("armor_stand", armorStandLoc);

  const equipmentCompPlayer = players[0].getComponent("equipment_inventory") as mc.EntityEquipmentInventoryComponent;
  equipmentCompPlayer.setEquipment(mc.EquipmentSlot.head, new mc.ItemStack("minecraft:golden_helmet"));
  equipmentCompPlayer.setEquipment(mc.EquipmentSlot.chest, new mc.ItemStack("minecraft:iron_chestplate"));
  equipmentCompPlayer.setEquipment(mc.EquipmentSlot.legs, new mc.ItemStack("minecraft:diamond_leggings"));
  equipmentCompPlayer.setEquipment(mc.EquipmentSlot.feet, new mc.ItemStack("minecraft:netherite_boots"));
  equipmentCompPlayer.setEquipment(mc.EquipmentSlot.mainhand, new mc.ItemStack("minecraft:wooden_sword"));
  equipmentCompPlayer.setEquipment(mc.EquipmentSlot.offhand, new mc.ItemStack("minecraft:shield"));

  const equipmentCompArmorStand = armorStand.getComponent(
    "equipment_inventory"
  ) as mc.EntityEquipmentInventoryComponent;
  equipmentCompArmorStand.setEquipment(mc.EquipmentSlot.head, new mc.ItemStack("minecraft:golden_helmet"));
  equipmentCompArmorStand.setEquipment(mc.EquipmentSlot.chest, new mc.ItemStack("minecraft:iron_chestplate"));
  equipmentCompArmorStand.setEquipment(mc.EquipmentSlot.legs, new mc.ItemStack("minecraft:diamond_leggings"));
  equipmentCompArmorStand.setEquipment(mc.EquipmentSlot.feet, new mc.ItemStack("minecraft:netherite_boots"));
  equipmentCompArmorStand.setEquipment(mc.EquipmentSlot.mainhand, new mc.ItemStack("minecraft:wooden_sword"));
  equipmentCompArmorStand.setEquipment(mc.EquipmentSlot.offhand, new mc.ItemStack("minecraft:shield"));
```
