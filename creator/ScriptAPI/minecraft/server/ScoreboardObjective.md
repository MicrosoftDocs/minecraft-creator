---
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.ScoreboardObjective Class
description: Contents of the @minecraft/server.ScoreboardObjective class.
---
# ScoreboardObjective Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

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


