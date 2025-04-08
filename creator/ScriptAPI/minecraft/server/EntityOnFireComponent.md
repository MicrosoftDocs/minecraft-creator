---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.EntityOnFireComponent Class
description: Contents of the @minecraft/server.EntityOnFireComponent class.
---
# EntityOnFireComponent Class

## Extends
- [*EntityComponent*](EntityComponent.md)

When present on an entity, this entity is on fire.

## Properties

### **onFireTicksRemaining**
`read-only onFireTicksRemaining: number;`

The number of ticks remaining before the fire goes out.

Type: *number*

## Constants

### **componentId**
`static read-only componentId = "minecraft:onfire";`

Type: *string*

#### Examples

##### ***setOnFire.ts***

```typescript
import { system, EntityOnFireComponent, EntityComponentTypes, DimensionLocation } from "@minecraft/server";
import { MinecraftEntityTypes } from "@minecraft/vanilla-data";

function setOnFire(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const skelly = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Skeleton, targetLocation);

  skelly.setOnFire(20, true);

  system.runTimeout(() => {
    const onfire = skelly.getComponent(EntityComponentTypes.OnFire) as EntityOnFireComponent;
    log(onfire?.onFireTicksRemaining + " fire ticks remaining.");

    skelly.extinguishFire(true);
    log("Never mind. Fire extinguished.");
  }, 20);
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/setOnFire.ts) code sandbox.
