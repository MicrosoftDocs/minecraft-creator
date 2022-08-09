---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.PistonActivateEvent Class
description: Contents of the mojang-minecraft.PistonActivateEvent class.
---
# PistonActivateEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Extends
- [*BlockEvent*](BlockEvent.md)

Contains information related to changes to a piston expanding or retracting.

## Properties

### **block**
`read-only block: Block;`

Block impacted by this event.

Type: [*Block*](Block.md)

### **dimension**
`read-only dimension: Dimension;`

Dimension that contains the block that is the subject of this event.

Type: [*Dimension*](Dimension.md)

### **isExpanding**
`read-only isExpanding: boolean;`

True if the piston is the process of expanding.

Type: *boolean*

### **piston**
`read-only piston: BlockPistonComponent;`

Contains additional properties and details of the piston.

Type: [*BlockPistonComponent*](BlockPistonComponent.md)

#### **Examples**
##### *pistonEvent.ts*
```javascript
  let canceled = false;
  const pistonLoc = new mc.BlockLocation(
    Math.floor(targetLocation.x) + 1,
    Math.floor(targetLocation.y) + 2,
    Math.floor(targetLocation.z) + 1
  );
  const pistonCallback = mc.world.events.beforePistonActivate.subscribe((pistonEvent: mc.BeforePistonActivateEvent) => {
    if (pistonEvent.piston.location.equals(pistonLoc)) {
      log("Cancelling piston event");
      pistonEvent.cancel = true;
      canceled = true;
    }
  });
```
