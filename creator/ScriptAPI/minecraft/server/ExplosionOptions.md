---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ExplosionOptions Interface
description: Contents of the @minecraft/server.ExplosionOptions class.
---
# ExplosionOptions Interface

Additional configuration options for the [*@minecraft/server.Dimension.createExplosion*](../../minecraft/server/Dimension.md#createexplosion) method.

#### Examples

##### ***createNoBlockExplosion.ts***

```typescript
import { DimensionLocation } from "@minecraft/server";
import { Vector3Utils } from "@minecraft/math";

function createNoBlockExplosion(
  log: (message: string, status?: number) => void,
  targetLocation: DimensionLocation
) {
  const explodeNoBlocksLoc = Vector3Utils.floor(Vector3Utils.add(targetLocation, { x: 1, y: 2, z: 1 }));

  log("Creating an explosion of radius 15 that does not break blocks.");
  targetLocation.dimension.createExplosion(explodeNoBlocksLoc, 15, { breaksBlocks: false });
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/createNoBlockExplosion.ts) code sandbox.

##### ***createExplosions.ts***

```typescript
import { DimensionLocation } from "@minecraft/server";
import { Vector3Utils } from "@minecraft/math";

function createExplosions(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const explosionLoc = Vector3Utils.add(targetLocation, { x: 0.5, y: 0.5, z: 0.5 });

  log("Creating an explosion of radius 15 that causes fire.");
  targetLocation.dimension.createExplosion(explosionLoc, 15, { causesFire: true });

  const belowWaterLoc = Vector3Utils.add(targetLocation, { x: 3, y: 1, z: 3 });

  log("Creating an explosion of radius 10 that can go underwater.");
  targetLocation.dimension.createExplosion(belowWaterLoc, 10, { allowUnderwater: true });
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/createExplosions.ts) code sandbox.

## Properties

### **allowUnderwater**
`allowUnderwater?: boolean;`

Whether parts of the explosion also impact underwater.

Type: *boolean*

### **breaksBlocks**
`breaksBlocks?: boolean;`

Whether the explosion will break blocks within the blast radius.

Type: *boolean*

### **causesFire**
`causesFire?: boolean;`

If true, the explosion is accompanied by fires within or near the blast radius.

Type: *boolean*

### **source**
`source?: Entity;`

Optional source of the explosion.

Type: [*Entity*](Entity.md)

#### Examples

##### ***createNoBlockExplosion.ts***

```typescript
import { DimensionLocation } from "@minecraft/server";
import { Vector3Utils } from "@minecraft/math";

function createNoBlockExplosion(
  log: (message: string, status?: number) => void,
  targetLocation: DimensionLocation
) {
  const explodeNoBlocksLoc = Vector3Utils.floor(Vector3Utils.add(targetLocation, { x: 1, y: 2, z: 1 }));

  log("Creating an explosion of radius 15 that does not break blocks.");
  targetLocation.dimension.createExplosion(explodeNoBlocksLoc, 15, { breaksBlocks: false });
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/createNoBlockExplosion.ts) code sandbox.

##### ***createExplosions.ts***

```typescript
import { DimensionLocation } from "@minecraft/server";
import { Vector3Utils } from "@minecraft/math";

function createExplosions(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const explosionLoc = Vector3Utils.add(targetLocation, { x: 0.5, y: 0.5, z: 0.5 });

  log("Creating an explosion of radius 15 that causes fire.");
  targetLocation.dimension.createExplosion(explosionLoc, 15, { causesFire: true });

  const belowWaterLoc = Vector3Utils.add(targetLocation, { x: 3, y: 1, z: 3 });

  log("Creating an explosion of radius 10 that can go underwater.");
  targetLocation.dimension.createExplosion(belowWaterLoc, 10, { allowUnderwater: true });
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/createExplosions.ts) code sandbox.
