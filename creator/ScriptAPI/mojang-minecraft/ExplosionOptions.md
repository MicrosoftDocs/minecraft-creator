---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
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



