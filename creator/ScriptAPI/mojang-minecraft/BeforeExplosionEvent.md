---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.BeforeExplosionEvent Class
description: Contents of the mojang-minecraft.BeforeExplosionEvent class.
---
# BeforeExplosionEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Contains information regarding an explosion that has happened.

## Properties

### **cancel**
`cancel: boolean;`

If set to true, cancels the explosion event.

Type: *boolean*

### **dimension**
`read-only dimension: Dimension;`

Dimension where the explosion has occurred.

Type: [*Dimension*](Dimension.md)

### **impactedBlocks**
`impactedBlocks: BlockLocation[];`

A collection of blocks impacted by this explosion event. Note that this property can be updated to change the set of blocks impacted.

Type: [*BlockLocation*](BlockLocation.md)[]

### **source**
`read-only source: Entity;`

Optional source of the explosion.

Type: [*Entity*](Entity.md)
