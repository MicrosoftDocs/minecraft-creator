---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.EntityRideableComponent Class
description: Contents of the mojang-minecraft.EntityRideableComponent class.
---
# EntityRideableComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.


## Properties
### **controllingSeat**
`read-only controllingSeat: number;`

Type: *number*


### **crouchingSkipInteract**
`read-only crouchingSkipInteract: boolean;`

Type: *boolean*


### **familyTypes**
`read-only familyTypes: any[];`

Type: *any*[]


### **id**
`read-only id: string;`

Type: *string*


### **interactText**
`read-only interactText: string;`

Type: *string*


### **pullInEntities**
`read-only pullInEntities: boolean;`

Type: *boolean*


### **riderCanInteract**
`read-only riderCanInteract: boolean;`

Type: *boolean*


### **seatCount**
`read-only seatCount: number;`

Type: *number*


### **seats**
`read-only seats: Seat[];`

Type: [*Seat*](Seat.md)[]



## Methods
- [addRider](#addrider)
- [ejectRider](#ejectrider)
- [ejectRiders](#ejectriders)
  
### **addRider**
`
addRider(rider: Entity): boolean
`

#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **rider** | [*Entity*](Entity.md) | n/a | - |

Returns *boolean*

> [!WARNING]
> This function can throw errors.

### **ejectRider**
`
ejectRider(rider: Entity): void
`

#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **rider** | [*Entity*](Entity.md) | n/a | - |


> [!WARNING]
> This function can throw errors.

### **ejectRiders**
`
ejectRiders(): void
`



> [!WARNING]
> This function can throw errors.


