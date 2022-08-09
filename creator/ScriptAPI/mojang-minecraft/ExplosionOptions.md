---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.ExplosionOptions Class
description: Contents of the mojang-minecraft.ExplosionOptions class.
---
# ExplosionOptions Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Additional configuration options for the [*mojang-minecraft.Dimension.createExplosion*](../mojang-minecraft/Dimension.md#createexplosion) method.

## Properties

### **allowUnderwater**
`allowUnderwater: boolean;`

Whether parts of the explosion also impact underwater.

Type: *boolean*

### **breaksBlocks**
`breaksBlocks: boolean;`

Whether the explosion will break blocks within the blast radius.

Type: *boolean*

### **causesFire**
`causesFire: boolean;`

If true, the explosion is accompanied by fires within or near the blast radius.

Type: *boolean*

### **source**
`source: Entity;`

Optional source of the explosion.

Type: [*Entity*](Entity.md)

## Methods
- [constructor](#constructor)

### **constructor**
`
new ExplosionOptions()
`
Creates a new instance of the ExplosionOptions object, for use in the [*mojang-minecraft.Dimension.createExplosion*](../mojang-minecraft/Dimension.md#createexplosion) method.

#### **Returns** [*ExplosionOptions*](ExplosionOptions.md)

#### **Examples**
##### *createFireAndWaterExplosions.ts*
```javascript
  const explosionLoc = new mc.Location(targetLocation.x + 0.5, targetLocation.y + 0.5, targetLocation.z + 0.5);
  const fireExplosionOptions = new mc.ExplosionOptions();
  // Explode with fire
  fireExplosionOptions.causesFire = true;
  overworld.createExplosion(explosionLoc, 15, fireExplosionOptions);
  const waterExplosionOptions = new mc.ExplosionOptions();
  // Explode in water
  waterExplosionOptions.allowUnderwater = true;
  const belowWaterLoc = new mc.Location(targetLocation.x + 3, targetLocation.y + 1, targetLocation.z + 3);
  overworld.createExplosion(belowWaterLoc, 10, waterExplosionOptions);
```
##### *createNoBlockExplosion.ts*
```javascript
  const explosionOptions = new mc.ExplosionOptions();
  // Start by exploding without breaking blocks
  explosionOptions.breaksBlocks = false;
  const explodeNoBlocksLoc = new mc.Location(
    Math.floor(targetLocation.x + 1),
    Math.floor(targetLocation.y + 2),
    Math.floor(targetLocation.z + 1)
  );
  overworld.createExplosion(explodeNoBlocksLoc, 15, explosionOptions);
```
