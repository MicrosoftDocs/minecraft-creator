---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.EntityEquipmentInventoryComponent Class
description: Contents of the @minecraft/server.EntityEquipmentInventoryComponent class.
---
# EntityEquipmentInventoryComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*EntityComponent*](EntityComponent.md)

Provides access to a mob's equipment slots. This component exists for all mob entities.

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

#### **Returns** [*ItemStack*](ItemStack.md) | *undefined* - Returns the item equipped to the given EquipmentSlot. If empty, returns undefined.

> [!IMPORTANT]
> This function can't be called in read-only mode.

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

#### **Returns** [*ContainerSlot*](ContainerSlot.md) - Returns the ContainerSlot corresponding to the given EquipmentSlot.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **setEquipment**
`
setEquipment(equipmentSlot: EquipmentSlot, itemStack?: ItemStack): void
`

Replaces the item in the given EquipmentSlot.

#### **Parameters**
- **equipmentSlot**: [*EquipmentSlot*](EquipmentSlot.md)
  
  The equipment slot. e.g. "head", "chest", "offhand".
- **itemStack**?: [*ItemStack*](ItemStack.md) = `null`
  
  The item to equip. If undefined, clears the slot.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

## Constants

### **componentId**
`static read-only componentId = "minecraft:equipment_inventory";`

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
