---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: .EntitySpawnReason Enumeration
description: Contents of the .EntitySpawnReason enumeration.
monikerRange: "=minecraft-bedrock-experimental"
---
# EntitySpawnReason Enumeration

> [!CAUTION]
> This enum is still in pre-release.  Its signature may change or it may be removed in future releases.

An enum containing reasons an entity could be spawned.

## Constants
### **Breeding**
`Breeding = "Breeding"`

Bred offspring.
### **Bucket**
`Bucket = "Bucket"`

Spawned from a bucket (e.g. Fish)
### **ChunkGeneration**
`ChunkGeneration = "ChunkGeneration"`

Spawned due to a chunk being generated.
### **Command**
`Command = "Command"`

Spawned via the /summon command.
### **Conversion**
`Conversion = "Conversion"`

Mob converted from another mob (e.g. Villager -> Zombie Villager).
### **DimensionTravel**
`DimensionTravel = "DimensionTravel"`

Mob transferred from another dimension.
### **Dispenser**
`Dispenser = "Dispenser"`

Spawned via dispenser.
### **Event**
`Event = "Event"`

Mobs spawned due to some in game event.
### **Jockey**
`Jockey = "Jockey"`

Jockey spawned with the mob they ride (e.g. Chicken jockey).
### **Load**
`Load = "Load"`

Mob loaded in from a saved state.
### **MobSummoned**
`MobSummoned = "MobSummoned"`

Mobs summoned via other mobs (e.g. Vex).
### **Natural**
`Natural = "Natural"`

Natural Mob Spawning.
### **Patrol**
`Patrol = "Patrol"`

Mobs spawned due to a patrol.
### **Reinforcement**
`Reinforcement = "Reinforcement"`

Mobs spawned from the reinforcement attribute (e.g. Zombies).
### **SpawnEgg**
`SpawnEgg = "SpawnEgg"`

Spawned from a spawn egg.
### **Spawner**
`Spawner = "Spawner"`

Spawner spawns.
### **Structure**
`Structure = "Structure"`

Mobs generated specifically within some structure (Nether Fortress, Ocean Monument, Witch Hut, etc).
### **TrialSpawner**
`TrialSpawner = "TrialSpawner"`

Mobs spawned from a Trial Spawner.
### **Triggered**
`Triggered = "Triggered"`

Some type of player triggered mob spawn (e.g. Skeleton Horse Traps, Wither, Snow Golem).
