---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.EntityItemComponent Class
description: Contents of the mojang-minecraft.EntityItemComponent class.
---
# EntityItemComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Extends
- [*IEntityComponent*](IEntityComponent.md)

If added onto the entity, this indicates that the entity represents a free-floating item in the world. Lets you retrieve the actual item stack contents via the itemStack property.

## Properties

### **itemStack**
`read-only itemStack: ItemStack;`

Item stack represented by this entity in the world.

Type: [*ItemStack*](ItemStack.md)

## Constants

### **id**
`static read-only id = "minecraft:item";`

Identifier of this component.

Type: *string*

#### **Examples**
##### *testThatEntityIsFeatherItem.ts*
```javascript
  const query = new mc.EntityQueryOptions();
  query.type = "item";
  query.location = targetLocation;
  const items = overworld.getEntities(query);
  for (const item of items) {
    const itemComp = item.getComponent("item") as any;
    if (itemComp) {
      if (itemComp.itemStack.id.endsWith("feather")) {
        console.log("Success! Found a feather", 1);
      }
    }
  }
```
