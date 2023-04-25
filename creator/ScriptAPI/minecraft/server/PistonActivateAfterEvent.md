---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.PistonActivateAfterEvent Class
description: Contents of the @minecraft/server.PistonActivateAfterEvent class.
---
# PistonActivateAfterEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*BlockEvent*](BlockEvent.md)

Contains information related to changes to a piston expanding or retracting.

## Properties

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
const pistonLoc: mc.Vector3 = {
  x: Math.floor(targetLocation.x) + 1,
  y: Math.floor(targetLocation.y) + 2,
  z: Math.floor(targetLocation.z) + 1,
};
const pistonCallback = mc.world.beforeEvents.pistonActivate.subscribe((pistonEvent: mc.PistonActivateBeforeEvent) => {
  if (pistonEvent.piston.location.equals(pistonLoc)) {
    log("Cancelling piston event");
    pistonEvent.cancel = true;
    canceled = true;
  }
});
```
