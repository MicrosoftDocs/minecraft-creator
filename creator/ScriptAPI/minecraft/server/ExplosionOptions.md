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
##### ***createExplosions.ts***
```typescript
// Creates an explosion of radius 15 that does not break blocks
import { DimensionLocation } from '@minecraft/server';

function createExplosions(location: DimensionLocation) {
    // Creates an explosion of radius 15 that does not break blocks
    location.dimension.createExplosion(location, 15, { breaksBlocks: false });

    // Creates an explosion of radius 15 that does not cause fire
    location.dimension.createExplosion(location, 15, { causesFire: true });

    // Creates an explosion of radius 10 that can go underwater
    location.dimension.createExplosion(location, 10, { allowUnderwater: true });
}
```

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
##### ***createExplosions.ts***
```typescript
// Creates an explosion of radius 15 that does not break blocks
import { DimensionLocation } from '@minecraft/server';

function createExplosions(location: DimensionLocation) {
    // Creates an explosion of radius 15 that does not break blocks
    location.dimension.createExplosion(location, 15, { breaksBlocks: false });

    // Creates an explosion of radius 15 that does not cause fire
    location.dimension.createExplosion(location, 15, { causesFire: true });

    // Creates an explosion of radius 10 that can go underwater
    location.dimension.createExplosion(location, 10, { allowUnderwater: true });
}
```
