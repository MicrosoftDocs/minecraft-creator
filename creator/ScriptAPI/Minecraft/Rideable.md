---
# DO NOT TOUCH — This file was automatically generated.  See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.Rideable Class
description: Contents of the Minecraft.Rideable class.
---
# Rideable Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.
## Properties
### **id** - `string`



### **seatCount** - `number`



### **crouchingSkipInteract** - `boolean`



### **interactText** - `string`



### **familyTypes** - `array`



### **controllingSeat** - `number`



### **pullInEntities** - `boolean`



### **riderCanInteract** - `boolean`



### **seats** - `array`




## Methods
- [addRider](#addrider)
- [ejectRider](#ejectrider)
- [ejectRiders](#ejectriders)
  
### **addRider**
`
addRider(rider: Entity): boolean
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **rider** | [*Entity*](Entity.md) | - |

Returns *boolean*

> [!WARNING]
> This function can throw errors.

### **ejectRider**
`
ejectRider(rider: Entity): void
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **rider** | [*Entity*](Entity.md) | - |

Returns *undefined*

> [!WARNING]
> This function can throw errors.

### **ejectRiders**
`
ejectRiders(): void
`


Returns *undefined*

> [!WARNING]
> This function can throw errors.

