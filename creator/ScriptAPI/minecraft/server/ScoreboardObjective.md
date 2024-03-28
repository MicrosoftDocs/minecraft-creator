---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ScoreboardObjective Class
description: Contents of the @minecraft/server.ScoreboardObjective class.
---
# ScoreboardObjective Class

Contains objectives and participants for the scoreboard.

## Properties

### **displayName**
`read-only displayName: string;`

Returns the player-visible name of this scoreboard objective.

Type: *string*

> [!WARNING]
> This property can throw errors when used.

### **id**
`read-only id: string;`

Identifier of the scoreboard objective.

Type: *string*

> [!WARNING]
> This property can throw errors when used.

## Methods
- [addScore](#addscore)
- [getParticipants](#getparticipants)
- [getScore](#getscore)
- [getScores](#getscores)
- [hasParticipant](#hasparticipant)
- [isValid](#isvalid)
- [removeParticipant](#removeparticipant)
- [setScore](#setscore)

### **addScore**
`
addScore(participant: Entity | ScoreboardIdentity | string, scoreToAdd: number): number
`

Adds a score to the given participant and objective.

#### **Parameters**
- **participant**: [*Entity*](Entity.md) | [*ScoreboardIdentity*](ScoreboardIdentity.md) | *string*
  
  Participant to apply the scoreboard value addition to.
- **scoreToAdd**: *number*

**Returns** *number*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **getParticipants**
`
getParticipants(): ScoreboardIdentity[]
`

Returns all objective participant identities.

**Returns** [*ScoreboardIdentity*](ScoreboardIdentity.md)[]

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

**Returns** *number* | *undefined*

> [!WARNING]
> This function can throw errors.

### **getScores**
`
getScores(): ScoreboardScoreInfo[]
`

Returns specific scores for this objective for all participants.

**Returns** [*ScoreboardScoreInfo*](ScoreboardScoreInfo.md)[]

> [!WARNING]
> This function can throw errors.

### **hasParticipant**
`
hasParticipant(participant: Entity | ScoreboardIdentity | string): boolean
`

Returns if the specified identity is a participant of the scoreboard objective.

#### **Parameters**
- **participant**: [*Entity*](Entity.md) | [*ScoreboardIdentity*](ScoreboardIdentity.md) | *string*

**Returns** *boolean*

> [!WARNING]
> This function can throw errors.

### **isValid**
`
isValid(): boolean
`

Returns true if the ScoreboardObjective reference is still valid.

**Returns** *boolean*

### **removeParticipant**
`
removeParticipant(participant: Entity | ScoreboardIdentity | string): boolean
`

Removes a participant from this scoreboard objective.

#### **Parameters**
- **participant**: [*Entity*](Entity.md) | [*ScoreboardIdentity*](ScoreboardIdentity.md) | *string*
  
  Participant to remove from being tracked with this objective.

**Returns** *boolean*

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
