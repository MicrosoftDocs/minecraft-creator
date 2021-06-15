---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.Breathable Class
description: Contents of the Minecraft.Breathable class.
---
# Breathable Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.

Defines what blocks this entity can breathe in and gives them the ability to suffocate.

## Properties
### **id** - `string`
Identifier of this component. Should always be minecraft:breathable.


### **totalSupply** - `number`
Time in seconds the entity can hold its breath.


### **suffocateTime** - `number`
Time in seconds between suffocation damage.


### **inhaleTime** - `number`
Time in seconds to recover breath to maximum.


### **breathesAir** - `boolean`
If true, this entity can breathe in air.


### **breathesWater** - `boolean`
If true, this entity can breathe in water.


### **breathesLava** - `boolean`
If true, this entity can breathe in lava.


### **breathesSolids** - `boolean`
If true, this entity can breathe in solid blocks.


### **generatesBubbles** - `boolean`
If true, this entity will have visible bubbles while in water.


### **breatheBlocks** - `BlockPermutation[]`
List of blocks this entity can breathe in, in addition to the separate properties for classes of blocks.


### **nonBreatheBlocks** - `BlockPermutation[]`
List of blocks this entity can't breathe in.



## Methods
- [setAirSupply](#setairsupply)
  
### **setAirSupply**
`
setAirSupply(value: number): void
`

Sets the current air supply of the entity.
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **value** | *number* | New air supply for the entity. |


> [!WARNING]
> This function can throw errors.

