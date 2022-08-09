---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.EntityRideableComponent Class
description: Contents of the mojang-minecraft.EntityRideableComponent class.
---
# EntityRideableComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Extends
- [*IEntityComponent*](IEntityComponent.md)

When added, this component adds the capability that an entity can be ridden by another entity.

## Properties

### **controllingSeat**
`read-only controllingSeat: number;`

Zero-based index of the seat that can used to control this entity.

Type: *number*

### **crouchingSkipInteract**
`read-only crouchingSkipInteract: boolean;`

Determines whether interactions are not supported if the entity is crouching.

Type: *boolean*

### **familyTypes**
`read-only familyTypes: string[];`

A string-list of entity types that this entity can support as riders.

Type: *string*[]

### **interactText**
`read-only interactText: string;`

Set of text that should be displayed when a player is looking to ride on this entity (commonly with touch-screen controls).

Type: *string*

### **pullInEntities**
`read-only pullInEntities: boolean;`

If true, this entity will pull in entities that are in the correct family_types into any available seat.

Type: *boolean*

### **riderCanInteract**
`read-only riderCanInteract: boolean;`

If true, this entity will be picked when looked at by the rider.

Type: *boolean*

### **seatCount**
`read-only seatCount: number;`

Number of seats for riders defined for this entity.

Type: *number*

### **seats**
`read-only seats: Seat[];`

The list of positions and number of riders for each position for entities riding this entity.

Type: [*Seat*](Seat.md)[]

## Methods
- [addRider](#addrider)
- [ejectRider](#ejectrider)
- [ejectRiders](#ejectriders)

### **addRider**
`
addRider(rider: Entity): boolean
`
Adds an entity to this entity as a rider.

#### **Parameters**
- **rider**: [*Entity*](Entity.md)
  
  Entity that will become the rider of this entity.

#### **Returns** *boolean* - True if the rider entity was successfully added.
> [!WARNING]
> This function can throw errors.

### **ejectRider**
`
ejectRider(rider: Entity): void
`
Ejects the specified rider of this entity.

#### **Parameters**
- **rider**: [*Entity*](Entity.md)
  
  Entity that should be ejected from this entity.
> [!WARNING]
> This function can throw errors.

### **ejectRiders**
`
ejectRiders(): void
`
Ejects all riders of this entity.
> [!WARNING]
> This function can throw errors.

## Constants

### **id**
`static read-only id = "minecraft:rideable";`

Identifier of this component. Should always be minecraft:rideable.

Type: *string*
