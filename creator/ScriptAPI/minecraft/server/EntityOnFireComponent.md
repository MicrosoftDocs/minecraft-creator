---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EntityOnFireComponent Class
description: Contents of the @minecraft/server.EntityOnFireComponent class.
---
# EntityOnFireComponent Class

## Extends
- [*EntityComponent*](EntityComponent.md)

When present on an entity, this entity is on fire.

#### Examples
##### ***setEntityOnFire.ts***
```typescript
import { world, Entity, EntityComponentTypes, system } from "@minecraft/server";

function setAblaze(entity: Entity) {
    entity.setOnFire(20, true);

    system.runTimeout(() => {
        const onfire = entity.getComponent(EntityComponentTypes.OnFire);
        if (onfire) {
            world.sendMessage(`${onfire.onFireTicksRemaining} fire ticks remaining, extinguishing the entity.`);
        }
        // This will extinguish the entity
        entity.extinguishFire(true);
    }, 30); // Run in 30 ticks or ~1.5 seconds
    
}
```

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
##### ***setEntityOnFire.ts***
```typescript
import { world, Entity, EntityComponentTypes, system } from "@minecraft/server";

function setAblaze(entity: Entity) {
    entity.setOnFire(20, true);

    system.runTimeout(() => {
        const onfire = entity.getComponent(EntityComponentTypes.OnFire);
        if (onfire) {
            world.sendMessage(`${onfire.onFireTicksRemaining} fire ticks remaining, extinguishing the entity.`);
        }
        // This will extinguish the entity
        entity.extinguishFire(true);
    }, 30); // Run in 30 ticks or ~1.5 seconds
    
}
```
