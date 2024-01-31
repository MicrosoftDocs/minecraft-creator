---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EntityItemComponent Class
description: Contents of the @minecraft/server.EntityItemComponent class.
---
# EntityItemComponent Class

## Extends
- [*EntityComponent*](EntityComponent.md)

If added onto the entity, this indicates that the entity represents a free-floating item in the world. Lets you retrieve the actual item stack contents via the itemStack property.

#### Examples
##### ***checkFeatherNearby.ts***
```typescript
import { DimensionLocation, EntityComponentTypes } from "@minecraft/server";

// Returns true if a feather item entity is within 'distance' blocks of 'location'.
function isFeatherNear(location: DimensionLocation, distance: number): boolean {
    const items = location.dimension.getEntities({
        location: location,
        maxDistance: 20,
    });
    
    for (const item of items) {
        const itemComp = item.getComponent(EntityComponentTypes.Item);
    
        if (itemComp) {
            if (itemComp.itemStack.typeId.endsWith('feather')) {
                return true;
            }
        }
    }

    return false;
}
```

## Properties

### **itemStack**
`read-only itemStack: ItemStack;`

Item stack represented by this entity in the world.

Type: [*ItemStack*](ItemStack.md)

> [!WARNING]
> This property can throw errors when used.

## Constants

### **componentId**
`static read-only componentId = "minecraft:item";`

Type: *string*

#### Examples
##### ***checkFeatherNearby.ts***
```typescript
import { DimensionLocation, EntityComponentTypes } from "@minecraft/server";

// Returns true if a feather item entity is within 'distance' blocks of 'location'.
function isFeatherNear(location: DimensionLocation, distance: number): boolean {
    const items = location.dimension.getEntities({
        location: location,
        maxDistance: 20,
    });
    
    for (const item of items) {
        const itemComp = item.getComponent(EntityComponentTypes.Item);
    
        if (itemComp) {
            if (itemComp.itemStack.typeId.endsWith('feather')) {
                return true;
            }
        }
    }

    return false;
}
```
