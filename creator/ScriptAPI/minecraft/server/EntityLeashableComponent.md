---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EntityLeashableComponent Class
description: Contents of the @minecraft/server.EntityLeashableComponent class.
monikerRange: "=minecraft-bedrock-experimental"
---
# EntityLeashableComponent Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*EntityComponent*](EntityComponent.md)

Allows the entity to be leashed. Defines the conditions and events for when an entity is leashed.

## Properties

### **softDistance**
`read-only softDistance: number;`

Distance in blocks at which the 'spring' effect starts acting to keep this entity close to the entity that leashed it.

Type: *number*

> [!WARNING]
> This property can throw errors when used.

## Methods
- [leash](#leash)
- [unleash](#unleash)

### **leash**
`
leash(leashHolder: Entity): void
`

#### **Parameters**
- **leashHolder**: [*Entity*](Entity.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **unleash**
`
unleash(): void
`

Unleashes this entity if it is leashed to another entity.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

## Constants

### **componentId**
`static read-only componentId = "minecraft:leashable";`

Type: *string*
