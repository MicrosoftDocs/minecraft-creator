---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.ExplosionOptions Interface
description: Contents of the @minecraft/server.ExplosionOptions class.
---
# ExplosionOptions Interface
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This interface is still in pre-release.  Its signature may change or it may be removed in future releases.

Additional configuration options for the [*@minecraft/server.Dimension.createExplosion*](../../minecraft/server/Dimension.md#createexplosion) method.

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

#### **Examples**
##### *createFireAndWaterExplosions.ts*
```javascript
const explosionLoc: mc.Vector3 = { x: targetLocation.x + 0.5, y: targetLocation.y + 0.5, z: targetLocation.z + 0.5 };
const fireExplosionOptions = new mc.ExplosionOptions();
// Explode with fire
fireExplosionOptions.causesFire = true;
overworld.createExplosion(explosionLoc, 15, fireExplosionOptions);
const waterExplosionOptions = new mc.ExplosionOptions();
// Explode in water
waterExplosionOptions.allowUnderwater = true;
const belowWaterLoc: mc.Vector3 = { x: targetLocation.x + 3, y: targetLocation.y + 1, z: targetLocation.z + 3 };
overworld.createExplosion(belowWaterLoc, 10, waterExplosionOptions);
```
##### *createNoBlockExplosion.ts*
```javascript
const explosionOptions = new mc.ExplosionOptions();
// Start by exploding without breaking blocks
explosionOptions.breaksBlocks = false;
const explodeNoBlocksLoc: mc.Vector3 = {
  x: Math.floor(targetLocation.x + 1),
  y: Math.floor(targetLocation.y + 2),
  z: Math.floor(targetLocation.z + 1),
};
overworld.createExplosion(explodeNoBlocksLoc, 15, explosionOptions);
```
