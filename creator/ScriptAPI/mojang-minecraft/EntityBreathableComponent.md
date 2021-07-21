---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.EntityBreathableComponent Class
description: Contents of the mojang-minecraft.EntityBreathableComponent class.
---
# EntityBreathableComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.


## Properties
### **breatheBlocks**
`read-only breatheBlocks: BlockPermutation[];`

Type: [*BlockPermutation*](BlockPermutation.md)[]


### **breathesAir**
`read-only breathesAir: boolean;`

Type: *boolean*


### **breathesLava**
`read-only breathesLava: boolean;`

Type: *boolean*


### **breathesSolids**
`read-only breathesSolids: boolean;`

Type: *boolean*


### **breathesWater**
`read-only breathesWater: boolean;`

Type: *boolean*


### **generatesBubbles**
`read-only generatesBubbles: boolean;`

Type: *boolean*


### **id**
`read-only id: string;`

Type: *string*


### **inhaleTime**
`read-only inhaleTime: number;`

Type: *number*


### **nonBreatheBlocks**
`read-only nonBreatheBlocks: BlockPermutation[];`

Type: [*BlockPermutation*](BlockPermutation.md)[]


### **suffocateTime**
`read-only suffocateTime: number;`

Type: *number*


### **totalSupply**
`read-only totalSupply: number;`

Type: *number*



## Methods
- [setAirSupply](#setairsupply)
  
### **setAirSupply**
`
setAirSupply(value: number): void
`

#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **value** | *number* | n/a | - |


> [!WARNING]
> This function can throw errors.


