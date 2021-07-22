---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.NavigationGeneric Class
description: Contents of the Minecraft.NavigationGeneric class.
---
# NavigationGeneric Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.

Allows this entity to generate paths by walking, swimming, flying and/or climbing around and jumping up and down a block.

## Properties
### **id** - `string`
Identifier of this component. Should always be minecraft:navigation.generic.


### **isAmphibious** - `boolean`
Tells the pathfinder whether or not it can walk on the ground or go underwater.


### **avoidSun** - `boolean`
Whether or not the pathfinder should avoid tiles that are exposed to the sun when creating paths.


### **canPassDoors** - `boolean`
Whether a path can be created through a door.


### **canOpenDoors** - `boolean`
Tells the pathfinder that it can path through a closed door assuming the AI will open the door.


### **canOpenIronDoors** - `boolean`
Tells the pathfinder that it can path through a closed iron door assuming the AI will open the door.


### **canBreakDoors** - `boolean`
Tells the pathfinder that it can path through a closed door and break it.


### **avoidWater** - `boolean`
Tells the pathfinder to avoid water when creating a path.


### **avoidDamageBlocks** - `boolean`
Tells the pathfinder to avoid blocks that cause damage when finding a path.


### **canFloat** - `boolean`
Tells the pathfinder whether or not it can float.


### **canSink** - `boolean`
Tells the pathfinder whether or not it will be pulled down by gravity while in water.


### **canPathOverWater** - `boolean`
Tells the pathfinder whether or not it can travel on the surface of the water.


### **canPathOverLava** - `boolean`
Tells the pathfinder whether or not it can travel on the surface of the lava.


### **canWalkInLava** - `boolean`
Tells the pathfinder whether or not it can travel in lava like walking on ground.


### **avoidPortals** - `boolean`
Tells the pathfinder to avoid portals (like nether portals) when finding a path.


### **canWalk** - `boolean`
Tells the pathfinder whether or not it can walk on the ground outside water.


### **canSwim** - `boolean`
Tells the pathfinder whether or not it can path anywhere through water and plays swimming animation along that path.


### **canBreach** - `boolean`
Tells the pathfinder whether or not it can jump out of water (like a dolphin).


### **canJump** - `boolean`
Tells the pathfinder whether or not it can jump up blocks.


### **canPathFromAir** - `boolean`
Tells the pathfinder that it can start pathing when in the air.



