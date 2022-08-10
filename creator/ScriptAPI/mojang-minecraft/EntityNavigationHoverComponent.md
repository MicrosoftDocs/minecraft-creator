---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.EntityNavigationHoverComponent Class
description: Contents of the mojang-minecraft.EntityNavigationHoverComponent class.
---
# EntityNavigationHoverComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Extends
- [*IEntityComponent*](IEntityComponent.md)

Allows this entity to generate paths in the air (for example, like the Minecraft Bees do.) Keeps them from falling out of the skies and doing predictive movement.

## Properties

### **avoidDamageBlocks**
`read-only avoidDamageBlocks: boolean;`

Tells the pathfinder to avoid blocks that cause damage when finding a path.

Type: *boolean*

### **avoidPortals**
`read-only avoidPortals: boolean;`

Tells the pathfinder to avoid portals (like nether portals) when finding a path.

Type: *boolean*

### **avoidSun**
`read-only avoidSun: boolean;`

Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.

Type: *boolean*

### **avoidWater**
`read-only avoidWater: boolean;`

Tells the pathfinder to avoid water when creating a path.

Type: *boolean*

### **canBreach**
`read-only canBreach: boolean;`

Tells the pathfinder whether or not it can jump out of water (like a dolphin).

Type: *boolean*

### **canBreakDoors**
`read-only canBreakDoors: boolean;`

Tells the pathfinder that it can path through a closed door and break it.

Type: *boolean*

### **canFloat**
`read-only canFloat: boolean;`

Tells the pathfinder whether or not it can float.

Type: *boolean*

### **canJump**
`read-only canJump: boolean;`

Tells the pathfinder whether or not it can jump up blocks.

Type: *boolean*

### **canOpenDoors**
`read-only canOpenDoors: boolean;`

Tells the pathfinder that it can path through a closed door assuming the AI will open the door.

Type: *boolean*

### **canOpenIronDoors**
`read-only canOpenIronDoors: boolean;`

Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.

Type: *boolean*

### **canPassDoors**
`read-only canPassDoors: boolean;`

Whether a path can be created through a door.

Type: *boolean*

### **canPathFromAir**
`read-only canPathFromAir: boolean;`

Tells the pathfinder that it can start pathing when in the air.

Type: *boolean*

### **canPathOverLava**
`read-only canPathOverLava: boolean;`

Tells the pathfinder whether or not it can travel on the surface of the lava.

Type: *boolean*

### **canPathOverWater**
`read-only canPathOverWater: boolean;`

Tells the pathfinder whether or not it can travel on the surface of the water.

Type: *boolean*

### **canSink**
`read-only canSink: boolean;`

Tells the pathfinder whether or not it will be pulled down by gravity while in water.

Type: *boolean*

### **canSwim**
`read-only canSwim: boolean;`

Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path.

Type: *boolean*

### **canWalk**
`read-only canWalk: boolean;`

Tells the pathfinder whether or not it can walk on the ground outside water.

Type: *boolean*

### **canWalkInLava**
`read-only canWalkInLava: boolean;`

Tells the pathfinder whether or not it can travel in lava like walking on ground.

Type: *boolean*

### **isAmphibious**
`read-only isAmphibious: boolean;`

Tells the pathfinder whether or not it can walk on the ground or go underwater.

Type: *boolean*

## Constants

### **id**
`static read-only id = "minecraft:navigation.hover";`

Identifier of this component. Should always be minecraft:navigation.hover.

Type: *string*
