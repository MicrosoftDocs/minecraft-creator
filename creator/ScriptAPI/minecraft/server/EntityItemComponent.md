---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.EntityItemComponent Class
description: Contents of the @minecraft/server.EntityItemComponent class.
---
# EntityItemComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
## Extends
- [*EntityComponent*](EntityComponent.md)

If added onto the entity, this indicates that the entity represents a free-floating item in the world. Lets you retrieve the actual item stack contents via the itemStack property.

## Properties

### **itemStack**
`read-only itemStack: ItemStack;`

Item stack represented by this entity in the world.

Type: [*ItemStack*](ItemStack.md)

## Constants

### **componentId**
`static read-only componentId = "minecraft:item";`

Identifier of this component.

Type: *string*

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.

#### **Examples**
##### *testThatEntityIsFeatherItem.ts*
```javascript
const query = {
  type: "item",
  location: targetLocation,
};
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
