---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.EntityInventoryComponent Class
description: Contents of the @minecraft/server.EntityInventoryComponent class.
---
# EntityInventoryComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
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

Identifier of this component. Should always be minecraft:inventory.

Type: *string*

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.
