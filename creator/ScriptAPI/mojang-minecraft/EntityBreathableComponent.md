---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.EntityBreathableComponent Class
description: Contents of the mojang-minecraft.EntityBreathableComponent class.
---
# EntityBreathableComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Extends
- [*IEntityComponent*](IEntityComponent.md)

Defines what blocks this entity can breathe in and gives them the ability to suffocate.

## Properties

### **breatheBlocks**
`read-only breatheBlocks: BlockPermutation[];`

List of blocks this entity can breathe in, in addition to the separate properties for classes of blocks.

Type: [*BlockPermutation*](BlockPermutation.md)[]

### **breathesAir**
`read-only breathesAir: boolean;`

If true, this entity can breathe in air.

Type: *boolean*

### **breathesLava**
`read-only breathesLava: boolean;`

If true, this entity can breathe in lava.

Type: *boolean*

### **breathesSolids**
`read-only breathesSolids: boolean;`

If true, this entity can breathe in solid blocks.

Type: *boolean*

### **breathesWater**
`read-only breathesWater: boolean;`

If true, this entity can breathe in water.

Type: *boolean*

### **generatesBubbles**
`read-only generatesBubbles: boolean;`

If true, this entity will have visible bubbles while in water.

Type: *boolean*

### **inhaleTime**
`read-only inhaleTime: number;`

Time in seconds to recover breath to maximum.

Type: *number*

### **nonBreatheBlocks**
`read-only nonBreatheBlocks: BlockPermutation[];`

List of blocks this entity can't breathe in.

Type: [*BlockPermutation*](BlockPermutation.md)[]

### **suffocateTime**
`read-only suffocateTime: number;`

Time in seconds between suffocation damage.

Type: *number*

### **totalSupply**
`read-only totalSupply: number;`

Time in seconds the entity can hold its breath.

Type: *number*

## Methods
- [setAirSupply](#setairsupply)

### **setAirSupply**
`
setAirSupply(value: number): void
`
Sets the current air supply of the entity.

#### **Parameters**
- **value**: *number*
  
  New air supply for the entity.
> [!WARNING]
> This function can throw errors.

## Constants

### **id**
`static read-only id = "minecraft:breathable";`

Identifier of this component. Should always be minecraft:breathable.

Type: *string*
