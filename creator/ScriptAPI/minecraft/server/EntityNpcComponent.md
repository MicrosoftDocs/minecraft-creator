---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EntityNpcComponent Class
description: Contents of the @minecraft/server.EntityNpcComponent class.
monikerRange: "=minecraft-bedrock-experimental"
---
# EntityNpcComponent Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*EntityComponent*](EntityComponent.md)

Adds NPC capabilities to an entity such as custom skin, name, and dialogue interactions.

## Properties

### **defaultScene**
`defaultScene: string;`

The DialogueScene that is opened when players first interact with the NPC.

Type: *string*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

### **name**
`name: string;`

The name of the NPC as it is displayed to players.

Type: *string*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

### **skinIndex**
`skinIndex: number;`

The index of the skin the NPC will use.

Type: *number*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

## Constants

### **componentId**
`static read-only componentId = "minecraft:npc";`

Type: *string*
