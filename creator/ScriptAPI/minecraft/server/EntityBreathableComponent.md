---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EntityBreathableComponent Class
description: Contents of the @minecraft/server.EntityBreathableComponent class.
monikerRange: "=minecraft-bedrock-experimental"
---
# EntityBreathableComponent Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*EntityComponent*](EntityComponent.md)

Defines what blocks this entity can breathe in and gives them the ability to suffocate.

## Properties

### **airSupply**
`airSupply: number;`

The current air supply of the entity.

Type: *number*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

> [!WARNING]
> This property can throw errors when used.
>
> Will throw an error if the air supply is out of bounds [suffocationTime, maxAirSupply].

### **breathesAir**
`read-only breathesAir: boolean;`

If true, this entity can breathe in air.

Type: *boolean*

> [!WARNING]
> This property can throw errors when used.

### **breathesLava**
`read-only breathesLava: boolean;`

If true, this entity can breathe in lava.

Type: *boolean*

> [!WARNING]
> This property can throw errors when used.

### **breathesSolids**
`read-only breathesSolids: boolean;`

If true, this entity can breathe in solid blocks.

Type: *boolean*

> [!WARNING]
> This property can throw errors when used.

### **breathesWater**
`read-only breathesWater: boolean;`

If true, this entity can breathe in water.

Type: *boolean*

> [!WARNING]
> This property can throw errors when used.

### **canBreathe**
`read-only canBreathe: boolean;`

If true, the entity is able to breathe.

Type: *boolean*

> [!WARNING]
> This property can throw errors when used.

### **generatesBubbles**
`read-only generatesBubbles: boolean;`

If true, this entity will have visible bubbles while in water.

Type: *boolean*

> [!WARNING]
> This property can throw errors when used.

### **inhaleTime**
`read-only inhaleTime: number;`

Time in seconds to recover breath to maximum.

Type: *number*

> [!WARNING]
> This property can throw errors when used.

### **suffocateTime**
`read-only suffocateTime: number;`

Time in seconds between suffocation damage.

Type: *number*

> [!WARNING]
> This property can throw errors when used.

### **totalSupply**
`read-only totalSupply: number;`

Time in seconds the entity can hold its breath.

Type: *number*

> [!WARNING]
> This property can throw errors when used.

## Methods
- [getBreatheBlocks](#getbreatheblocks)
- [getNonBreatheBlocks](#getnonbreatheblocks)

### **getBreatheBlocks**
`
getBreatheBlocks(): BlockPermutation[]
`

List of blocks this entity can breathe in, in addition to the separate properties for classes of blocks.

**Returns** [*BlockPermutation*](BlockPermutation.md)[]

> [!WARNING]
> This function can throw errors.

### **getNonBreatheBlocks**
`
getNonBreatheBlocks(): BlockPermutation[]
`

List of blocks this entity can't breathe in.

**Returns** [*BlockPermutation*](BlockPermutation.md)[]

> [!WARNING]
> This function can throw errors.

## Constants

### **componentId**
`static read-only componentId = "minecraft:breathable";`

Type: *string*
