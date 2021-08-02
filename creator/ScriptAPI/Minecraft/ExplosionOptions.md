---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.ExplosionOptions Class
description: Contents of the Minecraft.ExplosionOptions class.
---
# ExplosionOptions Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.

Additional configuration options for the [*Minecraft.Dimension.createExplosion*](../Minecraft/Dimension.md#createexplosion) method.

## Properties
### **source** - `Entity`
Optional source of the explosion.


### **breaksBlocks** - `boolean`
Whether the explosion will break blocks within the blast radius.


### **causesFire** - `boolean`
If true, the explosion is accompanied by fires within or near the blast radius.


### **allowUnderwater** - `boolean`
Whether parts of the explosion also impact underwater.



## Methods
- [constructor](#constructor)
  
### **constructor**
`
new ExplosionOptions()
`


Returns [*ExplosionOptions*](ExplosionOptions.md)


