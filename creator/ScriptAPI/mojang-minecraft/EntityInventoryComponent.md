---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.EntityInventoryComponent Class
description: Contents of the mojang-minecraft.EntityInventoryComponent class.
---
# EntityInventoryComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Extends
- [*IEntityComponent*](IEntityComponent.md)

Defines this entity's inventory properties.

## Properties

### **additionalSlotsPerStrength**
`read-only additionalSlotsPerStrength: number;`

Number of slots that this entity can gain per extra strength.

Type: *number*

### **canBeSiphonedFrom**
`read-only canBeSiphonedFrom: boolean;`

If true, the contents of this inventory can be removed by a hopper.

Type: *boolean*

### **container**
`read-only container: InventoryComponentContainer;`

Defines the container for this entity.

Type: [*InventoryComponentContainer*](InventoryComponentContainer.md)

### **containerType**
`read-only containerType: string;`

Type of container this entity has.

Type: *string*

### **id**
`read-only id: string;`

Identifier of this component. Should always be minecraft:inventory.

Type: *string*

### **inventorySize**
`read-only inventorySize: number;`

Number of slots the container has.

Type: *number*

### **private**
`read-only private: boolean;`

If true, the entity will not drop it's inventory on death.

Type: *boolean*

### **restrictToOwner**
`read-only restrictToOwner: boolean;`

If true, the entity's inventory can only be accessed by its owner or itself.

Type: *boolean*

## Constants

### **id**
`static read-only id = "minecraft:inventory";`

Identifier of this component. Should always be minecraft:inventory.

Type: *string*
