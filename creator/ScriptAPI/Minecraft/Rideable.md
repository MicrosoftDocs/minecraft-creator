---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.Rideable Class
description: Contents of the Minecraft.Rideable class.
---
# Rideable Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.

When added, this component adds the capability that an entity can be ridden by another entity.

## Properties
### **id** - `string`
Identifier of this component. Should always be minecraft:rideable.


### **seatCount** - `number`
Number of seats for riders defined for this entity.


### **crouchingSkipInteract** - `boolean`
Determines whether interactions are not supported if the entity is crouching.


### **interactText** - `string`
Set of text that should be displayed when a player is looking to ride on this entity (commonly with touch-screen controls).


### **familyTypes** - `any[]`
A string-list of entity types that this entity can support as riders.


### **controllingSeat** - `number`
Zero-based index of the seat that can used to control this entity.


### **pullInEntities** - `boolean`
If true, this entity will pull in entities that are in the correct family_types into any available seat.


### **riderCanInteract** - `boolean`
If true, this entity will be picked when looked at by the rider.


### **seats** - `Seat[]`
The list of positions and number of riders for each position for entities riding this entity.



## Methods
- [addRider](#addrider)
- [ejectRider](#ejectrider)
- [ejectRiders](#ejectriders)
  
### **addRider**
`
addRider(rider: Entity): boolean
`

Adds an entity to this entity as a rider.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **rider** | [*Entity*](Entity.md) | Entity that will become the rider of this entity. |

Returns *boolean* - True if the rider entity was successfully added.

> [!WARNING]
> This function can throw errors.

### **ejectRider**
`
ejectRider(rider: Entity): void
`

Ejects the specified rider of this entity.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **rider** | [*Entity*](Entity.md) | Entity that should be ejected from this entity. |


> [!WARNING]
> This function can throw errors.

### **ejectRiders**
`
ejectRiders(): void
`

Ejects all riders of this entity.


> [!WARNING]
> This function can throw errors.

