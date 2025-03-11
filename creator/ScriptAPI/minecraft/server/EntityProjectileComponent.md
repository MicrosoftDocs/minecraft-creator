---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.EntityProjectileComponent Class
description: Contents of the @minecraft/server.EntityProjectileComponent class.
---
# EntityProjectileComponent Class

## Extends
- [*EntityComponent*](EntityComponent.md)

The projectile component controls the properties of a projectile entity and allows it to be shot in a given direction.

This component is present when the entity has the minecraft:projectile component.

#### Examples

##### ***shootArrow.ts***

```typescript
import { DimensionLocation, EntityProjectileComponent } from "@minecraft/server";

function shootArrow(targetLocation: DimensionLocation) {
  const velocity = { x: 0, y: 1, z: 5 };

  const arrow = targetLocation.dimension.spawnEntity("minecraft:arrow", {
    x: targetLocation.x,
    y: targetLocation.y + 2,
    z: targetLocation.z,
  });

  const projectileComp = arrow.getComponent("minecraft:projectile") as EntityProjectileComponent;

  projectileComp?.shoot(velocity);
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/shootArrow.ts) code sandbox.

## Properties

### **airInertia**
`airInertia: number;`

The fraction of the projectile's speed maintained every tick while traveling through air. 

Type: *number*

Notes:
  - This property can't be edited in read-only mode.

### **catchFireOnHurt**
`catchFireOnHurt: boolean;`

If true, the entity will be set on fire when hurt. The default burn duration is 5 seconds. This duration can be modified via the onFireTime property. The entity will not catch fire if immune or if the entity is wet.

Type: *boolean*

Notes:
  - This property can't be edited in read-only mode.

### **critParticlesOnProjectileHurt**
`critParticlesOnProjectileHurt: boolean;`

If true, the projectile will spawn crit particles when hit by a player. E.g. Player attacking a Shulker bullet.

Type: *boolean*

Notes:
  - This property can't be edited in read-only mode.

### **destroyOnProjectileHurt**
`destroyOnProjectileHurt: boolean;`

If true, the projectile will be destroyed when it takes damage. E.g. Player attacking a Shulker bullet.

Type: *boolean*

Notes:
  - This property can't be edited in read-only mode.

### **gravity**
`gravity: number;`

The gravity applied to the projectile. When the entity is not on the ground, subtracts this amount from the projectile’s change in vertical position every tick. The higher the value, the faster the projectile falls. If negative, the entity will rise instead of fall.

Type: *number*

Notes:
  - This property can't be edited in read-only mode.

### **hitEntitySound**
`hitEntitySound?: string;`

The sound that plays when the projectile hits an entity.

Type: *string*

Notes:
  - This property can't be edited in read-only mode.

### **hitGroundSound**
`hitGroundSound?: string;`

The sound that plays when the projectile hits a block.

Type: *string*

Notes:
  - This property can't be edited in read-only mode.

### **hitParticle**
`hitParticle?: string;`

The particle that spawns when the projectile hits something.

Type: *string*

Notes:
  - This property can't be edited in read-only mode.

### **lightningStrikeOnHit**
`lightningStrikeOnHit: boolean;`

If true and the weather is thunder and the entity has line of sight to the sky, the entity will be struck by lightning when hit. E.g. A thrown Trident with the Channeling enchantment.

Type: *boolean*

Notes:
  - This property can't be edited in read-only mode.

### **liquidInertia**
`liquidInertia: number;`

The fraction of the projectile's speed maintained every tick while traveling through a liquid. 

Type: *number*

Notes:
  - This property can't be edited in read-only mode.

### **onFireTime**
`onFireTime: number;`

Duration in seconds that the entity hit will be on fire for when catchFireOnHurt is set to true.

Type: *number*

Notes:
  - This property can't be edited in read-only mode.

### **owner**
`owner?: Entity;`

The owner of the projectile. This is used to determine what the projectile can collide with and damage. It also determines which entity is assigned as the attacker.

Type: [*Entity*](Entity.md)

Notes:
  - This property can't be edited in read-only mode.

### **shouldBounceOnHit**
`shouldBounceOnHit: boolean;`

If true, the projectile will bounce off mobs when no damage is taken. E.g. A spawning wither.

Type: *boolean*

Notes:
  - This property can't be edited in read-only mode.

### **stopOnHit**
`stopOnHit: boolean;`

If true, the projectile will stop moving when an entity is hit as thought it had been blocked. E.g. Thrown trident on hit behavior.

Type: *boolean*

Notes:
  - This property can't be edited in read-only mode.

## Methods
- [shoot](#shoot)

### **shoot**
`
shoot(velocity: Vector3, options?: ProjectileShootOptions): void
`

Shoots the projectile with a given velocity. The projectile will be shot from its current location.

#### **Parameters**
- **velocity**: [*Vector3*](Vector3.md)
  
  The velocity to fire the projectile. This controls both the speed and direction which which the projectile will be shot.
- **options**?: [*ProjectileShootOptions*](ProjectileShootOptions.md) = `null`
  
  Optional configuration for the shoot.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws if the component or entity no longer exist.

## Constants

### **componentId**
`static read-only componentId = "minecraft:projectile";`

Type: *string*

#### Examples

##### ***shootArrow.ts***

```typescript
import { DimensionLocation, EntityProjectileComponent } from "@minecraft/server";

function shootArrow(targetLocation: DimensionLocation) {
  const velocity = { x: 0, y: 1, z: 5 };

  const arrow = targetLocation.dimension.spawnEntity("minecraft:arrow", {
    x: targetLocation.x,
    y: targetLocation.y + 2,
    z: targetLocation.z,
  });

  const projectileComp = arrow.getComponent("minecraft:projectile") as EntityProjectileComponent;

  projectileComp?.shoot(velocity);
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/shootArrow.ts) code sandbox.
