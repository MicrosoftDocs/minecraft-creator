---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EntityLeashableComponent Class
description: Contents of the @minecraft/server.EntityLeashableComponent class.
---
# EntityLeashableComponent Class

## Extends
- [*EntityComponent*](EntityComponent.md)

Allows the entity to be leashed. Defines the conditions and events for when an entity is leashed.

## Properties

### **canBeStolen**
`read-only canBeStolen: boolean;`

Returns true if another entity can 'steal' the leashed entity by attaching their own leash to it.

Type: *boolean*

> [!WARNING]
> This property can throw errors when used.

### **hardDistance**
`read-only hardDistance: number;`

Distance in blocks at which the leash stiffens, restricting movement.

Type: *number*

> [!WARNING]
> This property can throw errors when used.

### **isLeashed**
`read-only isLeashed: boolean;`

Returns true if the entity is leashed.

Type: *boolean*

> [!WARNING]
> This property can throw errors when used.

### **leashHolder**
`read-only leashHolder?: Entity;`

Entity that is holding the leash.

Type: [*Entity*](Entity.md)

> [!WARNING]
> This property can throw errors when used.

### **leashHolderEntityId**
`read-only leashHolderEntityId?: string;`

Identifier of entity that is holding the leash.

Type: *string*

> [!WARNING]
> This property can throw errors when used.

### **maxDistance**
`read-only maxDistance: number;`

Distance in blocks at which the leash breaks.

Type: *number*

> [!WARNING]
> This property can throw errors when used.

### **softDistance**
`read-only softDistance: number;`

Distance in blocks at which the 'spring' effect starts acting to keep this entity close to the entity that leashed it.

Type: *number*

> [!WARNING]
> This property can throw errors when used.

## Methods
- [leashTo](#leashto)
- [unleash](#unleash)

### **leashTo**
`
leashTo(leashHolder: Entity): void
`

Leashes this entity to another entity.

#### **Parameters**
- **leashHolder**: [*Entity*](Entity.md)
  
  The entity to leash this entity to.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws if the entity to leash to is over the max distance, and if the player is dead or in spectator mode.

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
