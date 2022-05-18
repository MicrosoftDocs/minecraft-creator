---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.Scoreboard Class
description: Contents of the mojang-minecraft.Scoreboard class.
---
# Scoreboard Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Contains objectives and participants for the scoreboard.

## Methods
- [getObjective](#getobjective)
- [getObjectives](#getobjectives)
- [getParticipants](#getparticipants)
  
### **getObjective**
`
getObjective(objectiveId: string): ScoreboardObjective
`

Returns a specific objective (by id).
#### **Parameters**
- **objectiveId**: *string*

#### **Returns** [*ScoreboardObjective*](ScoreboardObjective.md)
> [!WARNING]
> This function can throw errors.
### **getObjectives**
`
getObjectives(): ScoreboardObjective[]
`

Returns all defined objectives.

#### **Returns** [*ScoreboardObjective*](ScoreboardObjective.md)[]
> [!WARNING]
> This function can throw errors.
### **getParticipants**
`
getParticipants(): ScoreboardIdentity[]
`

Returns all defined scoreboard identities.

#### **Returns** [*ScoreboardIdentity*](ScoreboardIdentity.md)[]
> [!WARNING]
> This function can throw errors.
