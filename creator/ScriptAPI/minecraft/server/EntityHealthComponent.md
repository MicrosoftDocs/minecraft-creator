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

## Constants

### **componentId**
`static read-only componentId = "minecraft:health";`

Type: *string*

#### Examples
##### ***applyDamageThenHeal.ts***
```typescript
  const skelly = overworld.spawnEntity("minecraft:skeleton", targetLocation);

  skelly.applyDamage(19); // skeletons have max damage of 20 so this is a near-death skeleton

  mc.system.runTimeout(() => {
    let health = skelly.getComponent("health") as mc.EntityHealthComponent;
    log("Skeleton health before heal: " + health.currentValue);
    health.resetToMaxValue();
    log("Skeleton health after heal: " + health.currentValue);
  }, 20);
```
