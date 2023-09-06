---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
title: minecraft/server.EntityInventoryComponent Class
description: Contents of the @minecraft/server.EntityInventoryComponent class.
ms.service: minecraft-bedrock-edition
---
# EntityInventoryComponent Class

## Extends
- [*EntityComponent*](EntityComponent.md)

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
`read-only container: Container;`

Defines the container for this entity.

Type: [*Container*](Container.md)

### **containerType**
`read-only containerType: string;`

Type of container this entity has.

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

### **componentId**
`static read-only componentId = "minecraft:inventory";`

Type: *string*
