---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.ScoreboardObjective Class
description: Contents of the mojang-minecraft.ScoreboardObjective class.
---
# ScoreboardObjective Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Contains objectives and participants for the scoreboard.

## Properties

### **displayName**
`read-only displayName: string;`

Returns the player-visible name of this scoreboard objective.

Type: *string*

### **id**
`read-only id: string;`

Identifier of the scoreboard objective.

Type: *string*

## Methods
- [getParticipants](#getparticipants)
- [getScore](#getscore)
- [getScores](#getscores)

### **getParticipants**
`
getParticipants(): ScoreboardIdentity[]
`
Returns all objective participant identities.

#### **Returns** [*ScoreboardIdentity*](ScoreboardIdentity.md)[]
> [!WARNING]
> This function can throw errors.

### **getScore**
`
getScore(participant: ScoreboardIdentity): number
`
Returns a specific score for a participant.

#### **Parameters**
- **participant**: [*ScoreboardIdentity*](ScoreboardIdentity.md)

#### **Returns** *number*
> [!WARNING]
> This function can throw errors.

### **getScores**
`
getScores(): ScoreboardScoreInfo[]
`
Returns specific scores for this objective for all participants.

#### **Returns** [*ScoreboardScoreInfo*](ScoreboardScoreInfo.md)[]
> [!WARNING]
> This function can throw errors.
