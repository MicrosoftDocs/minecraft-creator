---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.EntityInventoryComponent Class
description: Contents of the @minecraft/server.EntityInventoryComponent class (Version 1.x.x).
---
# EntityInventoryComponent Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/EntityInventoryComponent.md).

## Extends
- [*EntityComponent*](EntityComponent.md)

Defines this entity's inventory properties.

## Properties

### **additionalSlotsPerStrength**
`read-only additionalSlotsPerStrength: number;`

Number of slots that this entity can gain per extra strength.

Type: *number*

Notes:
  - This property can throw errors when used.

### **canBeSiphonedFrom**
`read-only canBeSiphonedFrom: boolean;`

If true, the contents of this inventory can be removed by a hopper.

Type: *boolean*

Notes:
  - This property can throw errors when used.

### **container**
`read-only container?: Container;`

Defines the container for this entity. The container will be undefined if the entity has been removed.

Type: [*Container*](Container.md)

### **containerType**
`read-only containerType: string;`

Type of container this entity has.

Type: *string*

Notes:
  - This property can throw errors when used.

### **inventorySize**
`read-only inventorySize: number;`

Number of slots the container has.

Type: *number*

Notes:
  - This property can throw errors when used.

### **private**
`read-only private: boolean;`

If true, the entity will not drop it's inventory on death.

Type: *boolean*

Notes:
  - This property can throw errors when used.

### **restrictToOwner**
`read-only restrictToOwner: boolean;`

If true, the entity's inventory can only be accessed by its owner or itself.

Type: *boolean*

Notes:
  - This property can throw errors when used.

## Constants

### **componentId**
`static read-only componentId = "minecraft:inventory";`

Type: *string*
