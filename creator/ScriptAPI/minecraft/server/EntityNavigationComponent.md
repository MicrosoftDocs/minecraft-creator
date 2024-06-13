---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EntityNavigationComponent Class
description: Contents of the @minecraft/server.EntityNavigationComponent class.
---
# EntityNavigationComponent Class

## Extends
- [*EntityComponent*](EntityComponent.md)

## Classes that extend EntityNavigationComponent
- [*EntityNavigationClimbComponent*](EntityNavigationClimbComponent.md)
- [*EntityNavigationFloatComponent*](EntityNavigationFloatComponent.md)
- [*EntityNavigationFlyComponent*](EntityNavigationFlyComponent.md)
- [*EntityNavigationGenericComponent*](EntityNavigationGenericComponent.md)
- [*EntityNavigationHoverComponent*](EntityNavigationHoverComponent.md)
- [*EntityNavigationWalkComponent*](EntityNavigationWalkComponent.md)

Allows this entity to generate paths that include vertical walls (for example, like Minecraft spiders do.)

## Properties

### **avoidDamageBlocks**
`read-only avoidDamageBlocks: boolean;`

Tells the pathfinder to avoid blocks that cause damage when finding a path.

Type: *boolean*

> [!WARNING]
> This property can throw errors when used.

### **avoidPortals**
`read-only avoidPortals: boolean;`

Tells the pathfinder to avoid portals (like nether portals) when finding a path.

Type: *boolean*

> [!WARNING]
> This property can throw errors when used.

### **avoidSun**
`read-only avoidSun: boolean;`

Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.

Type: *boolean*

> [!WARNING]
> This property can throw errors when used.

### **avoidWater**
`read-only avoidWater: boolean;`

Tells the pathfinder to avoid water when creating a path.

Type: *boolean*

> [!WARNING]
> This property can throw errors when used.

### **canBreach**
`read-only canBreach: boolean;`

Tells the pathfinder whether or not it can jump out of water (like a dolphin).

Type: *boolean*

> [!WARNING]
> This property can throw errors when used.

### **canBreakDoors**
`read-only canBreakDoors: boolean;`

Tells the pathfinder that it can path through a closed door and break it.

Type: *boolean*

> [!WARNING]
> This property can throw errors when used.

### **canFloat**
`read-only canFloat: boolean;`

Tells the pathfinder whether or not it can float.

Type: *boolean*

> [!WARNING]
> This property can throw errors when used.

### **canJump**
`read-only canJump: boolean;`

Tells the pathfinder whether or not it can jump up blocks.

Type: *boolean*

> [!WARNING]
> This property can throw errors when used.

### **canOpenDoors**
`read-only canOpenDoors: boolean;`

Tells the pathfinder that it can path through a closed door assuming the AI will open the door.

Type: *boolean*

> [!WARNING]
> This property can throw errors when used.

### **canOpenIronDoors**
`read-only canOpenIronDoors: boolean;`

Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.

Type: *boolean*

> [!WARNING]
> This property can throw errors when used.

### **canPassDoors**
`read-only canPassDoors: boolean;`

Whether a path can be created through a door.

Type: *boolean*

> [!WARNING]
> This property can throw errors when used.

### **canPathFromAir**
`read-only canPathFromAir: boolean;`

Tells the pathfinder that it can start pathing when in the air.

Type: *boolean*

> [!WARNING]
> This property can throw errors when used.

### **canPathOverLava**
`read-only canPathOverLava: boolean;`

Tells the pathfinder whether or not it can travel on the surface of the lava.

Type: *boolean*

> [!WARNING]
> This property can throw errors when used.

### **canPathOverWater**
`read-only canPathOverWater: boolean;`

Tells the pathfinder whether or not it can travel on the surface of the water.

Type: *boolean*

> [!WARNING]
> This property can throw errors when used.

### **canSink**
`read-only canSink: boolean;`

Tells the pathfinder whether or not it will be pulled down by gravity while in water.

Type: *boolean*

> [!WARNING]
> This property can throw errors when used.

### **canSwim**
`read-only canSwim: boolean;`

Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path.

Type: *boolean*

> [!WARNING]
> This property can throw errors when used.

### **canWalk**
`read-only canWalk: boolean;`

Tells the pathfinder whether or not it can walk on the ground outside water.

Type: *boolean*

> [!WARNING]
> This property can throw errors when used.

### **canWalkInLava**
`read-only canWalkInLava: boolean;`

Tells the pathfinder whether or not it can travel in lava like walking on ground.

Type: *boolean*

> [!WARNING]
> This property can throw errors when used.

### **isAmphibious**
`read-only isAmphibious: boolean;`

Tells the pathfinder whether or not it can walk on the ground or go underwater.

Type: *boolean*

> [!WARNING]
> This property can throw errors when used.
