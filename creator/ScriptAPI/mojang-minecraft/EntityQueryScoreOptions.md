---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.EntityQueryScoreOptions Class
description: Contents of the mojang-minecraft.EntityQueryScoreOptions class.
---
# EntityQueryScoreOptions Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Contains additional options for filtering players based on their score for an objective.

## Properties

### **exclude**
`exclude: boolean;`

If set to true, entities and players within this score range are excluded from query results.

Type: *boolean*

### **maxScore**
`maxScore: number;`

If defined, only players that have a score equal to or under maxScore are included.

Type: *number*

### **minScore**
`minScore: number;`

If defined, only players that have a score equal to or over minScore are included.

Type: *number*

### **objective**
`objective: string;`

Identifier of the scoreboard objective to filter on.

Type: *string*

## Methods
- [constructor](#constructor)

### **constructor**
`
new EntityQueryScoreOptions()
`
Creates a new EntityQueryScoreOptions query object, for use in an entity query.

#### **Returns** [*EntityQueryScoreOptions*](EntityQueryScoreOptions.md)
