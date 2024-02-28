---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EntityHealthComponent Class
description: Contents of the @minecraft/server.EntityHealthComponent class.
---
# EntityHealthComponent Class

## Extends
- [*EntityAttributeComponent*](EntityAttributeComponent.md)

Defines the health properties of an entity.

#### Examples
##### ***applyDamageThenHeal.ts***
```typescript
// A function that applies damage and then heals the entity
import { Entity, EntityComponentTypes, system, world } from '@minecraft/server';

function applyDamageAndHeal(entity: Entity) {
    entity.applyDamage(19); // Many mobs have max damage of 20 so this is a near-death mob

    system.runTimeout(() => {
        const health = entity.getComponent(EntityComponentTypes.Health);
        if (health) {
            world.sendMessage(`Entity health before heal: ${health.currentValue}`);

            health.resetToMaxValue();

            world.sendMessage(`Entity after before heal: ${health.currentValue}`);
        } else {
            console.warn('Entity does not have health component');
        }
    }, 40); // Run in a few seconds (40 ticks)
}
```

## Constants

### **componentId**
`static read-only componentId = "minecraft:health";`

Type: *string*

#### Examples
##### ***applyDamageThenHeal.ts***
```typescript
// A function that applies damage and then heals the entity
import { Entity, EntityComponentTypes, system, world } from '@minecraft/server';

function applyDamageAndHeal(entity: Entity) {
    entity.applyDamage(19); // Many mobs have max damage of 20 so this is a near-death mob

    system.runTimeout(() => {
        const health = entity.getComponent(EntityComponentTypes.Health);
        if (health) {
            world.sendMessage(`Entity health before heal: ${health.currentValue}`);

            health.resetToMaxValue();

            world.sendMessage(`Entity after before heal: ${health.currentValue}`);
        } else {
            console.warn('Entity does not have health component');
        }
    }, 40); // Run in a few seconds (40 ticks)
}
```
