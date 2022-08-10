---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.EntityHurtEvent Class
description: Contents of the mojang-minecraft.EntityHurtEvent class.
---
# EntityHurtEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Contains information related to an entity getting hurt by another entity.

## Properties

### **cause**
`read-only cause: EntityDamageCause;`

A summary of the reason that damage was caused.

Type: [*EntityDamageCause*](EntityDamageCause.md)

### **damage**
`read-only damage: number;`

Describes the amount of damage caused.

Type: *number*

### **damagingEntity**
`read-only damagingEntity: Entity;`

Optional entity that caused the damaging attack, or undefined if the hurt reason was not because of another entity.

Type: [*Entity*](Entity.md)

### **hurtEntity**
`read-only hurtEntity: Entity;`

Entity that was hurt.

Type: [*Entity*](Entity.md)

### **projectile**
`read-only projectile: Entity;`

Optional entity for a projectile that potentially hurt an entity.

Type: [*Entity*](Entity.md)
