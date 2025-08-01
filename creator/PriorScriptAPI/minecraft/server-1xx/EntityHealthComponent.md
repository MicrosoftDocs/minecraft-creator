---
# DO NOT TOUCH — This file was automatically generated by @minecraft/api-docs-generator, to report problems file an issue at https://github.com/Mojang/minecraft-scripting-libraries
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.EntityHealthComponent Class
description: Contents of the @minecraft/server.EntityHealthComponent class (Version 1.x.x).
---
# EntityHealthComponent Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/EntityHealthComponent.md).

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
import { system, EntityHealthComponent, EntityComponentTypes, DimensionLocation } from "@minecraft/server";
import { MinecraftEntityTypes } from "@minecraft/vanilla-data";

function applyDamageThenHeal(
  log: (message: string, status?: number) => void,
  targetLocation: DimensionLocation
) {
  const skelly = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Skeleton, targetLocation);

  skelly.applyDamage(19); // skeletons have max damage of 20 so this is a near-death skeleton

  system.runTimeout(() => {
    const health = skelly.getComponent(EntityComponentTypes.Health) as EntityHealthComponent;
    log("Skeleton health before heal: " + health?.currentValue);
    health?.resetToMaxValue();
    log("Skeleton health after heal: " + health?.currentValue);
  }, 20);
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/applyDamageThenHeal.ts) code sandbox.
