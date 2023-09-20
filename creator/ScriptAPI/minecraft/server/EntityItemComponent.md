---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
title: minecraft/server.EntityItemComponent Class
description: Contents of the @minecraft/server.EntityItemComponent class.
ms.service: minecraft-bedrock-edition
---
# EntityItemComponent Class

## Extends
- [*EntityComponent*](EntityComponent.md)

If added onto the entity, this indicates that the entity represents a free-floating item in the world. Lets you retrieve the actual item stack contents via the itemStack property.

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
##### ***testThatEntityIsFeatherItem.ts***
```typescript
  const overworld = mc.world.getDimension("overworld");

  const items = overworld.getEntities({
    location: targetLocation,
    maxDistance: 20,
  });

  for (const item of items) {
    const itemComp = item.getComponent("item") as mc.EntityItemComponent;

    if (itemComp) {
      if (itemComp.itemStack.typeId.endsWith("feather")) {
        log("Success! Found a feather", 1);
      }
    }
  }
```
