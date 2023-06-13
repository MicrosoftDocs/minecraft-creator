---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
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
- [hasParticipant](#hasparticipant)
- [isValid](#isvalid)
- [removeParticipant](#removeparticipant)
- [setScore](#setscore)

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
getScore(participant: Entity | ScoreboardIdentity | string): number | undefined
`

Returns a specific score for a participant.

#### **Parameters**
- **participant**: [*Entity*](Entity.md) | [*ScoreboardIdentity*](ScoreboardIdentity.md) | *string*
  
  Identifier of the participant to retrieve a score for.

#### **Returns** *number* | *undefined*

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

### **hasParticipant**
`
hasParticipant(participant: Entity | ScoreboardIdentity | string): boolean
`

Returns if the specified identity is a participant of the scoreboard objective.

#### **Parameters**
- **participant**: [*Entity*](Entity.md) | [*ScoreboardIdentity*](ScoreboardIdentity.md) | *string*

#### **Returns** *boolean*

> [!WARNING]
> This function can throw errors.

### **isValid**
`
isValid(): boolean
`

#### **Returns** *boolean*

### **removeParticipant**
`
removeParticipant(participant: Entity | ScoreboardIdentity | string): boolean
`

Removes a participant from this scoreboard objective.

#### **Parameters**
- **participant**: [*Entity*](Entity.md) | [*ScoreboardIdentity*](ScoreboardIdentity.md) | *string*
  
  Participant to remove from being tracked with this objective.

#### **Returns** *boolean*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **setScore**
`
setScore(participant: Entity | ScoreboardIdentity | string, score: number): void
`

Sets a score for a participant.

#### **Parameters**
- **participant**: [*Entity*](Entity.md) | [*ScoreboardIdentity*](ScoreboardIdentity.md) | *string*
  
  Identity of the participant.
- **score**: *number*
  
  New value of the score.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
