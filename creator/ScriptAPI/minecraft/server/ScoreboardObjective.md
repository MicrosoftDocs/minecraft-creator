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

Notes:
  - This property can throw errors when used.

### **id**
`read-only id: string;`

Identifier of the scoreboard objective.

Type: *string*

Notes:
  - This property can throw errors when used.

::: moniker range="=minecraft-bedrock-experimental"
### **isValid**
`read-only isValid: boolean;`

Returns true if the ScoreboardObjective reference is still valid.

Type: *boolean*

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.
::: moniker-end

## Methods
- [addScore](#addscore)
- [getParticipants](#getparticipants)
- [getScore](#getscore)
- [getScores](#getscores)
- [hasParticipant](#hasparticipant)
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
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **getParticipants**
`
getParticipants(): ScoreboardIdentity[]
`

Returns all objective participant identities.

**Returns** [*ScoreboardIdentity*](ScoreboardIdentity.md)[]
  
Notes:
- This function can throw errors.

### **getScore**
`
getScore(participant: Entity | ScoreboardIdentity | string): number | undefined
`

Returns a specific score for a participant.

#### **Parameters**
- **participant**: [*Entity*](Entity.md) | [*ScoreboardIdentity*](ScoreboardIdentity.md) | *string*
  
  Identifier of the participant to retrieve a score for.

**Returns** *number* | *undefined*
  
Notes:
- This function can throw errors.

### **getScores**
`
getScores(): ScoreboardScoreInfo[]
`

Returns specific scores for this objective for all participants.

**Returns** [*ScoreboardScoreInfo*](ScoreboardScoreInfo.md)[]
  
Notes:
- This function can throw errors.

### **hasParticipant**
`
hasParticipant(participant: Entity | ScoreboardIdentity | string): boolean
`

Returns if the specified identity is a participant of the scoreboard objective.

#### **Parameters**
- **participant**: [*Entity*](Entity.md) | [*ScoreboardIdentity*](ScoreboardIdentity.md) | *string*

**Returns** *boolean*
  
Notes:
- This function can throw errors.

### **removeParticipant**
`
removeParticipant(participant: Entity | ScoreboardIdentity | string): boolean
`

Removes a participant from this scoreboard objective.

#### **Parameters**
- **participant**: [*Entity*](Entity.md) | [*ScoreboardIdentity*](ScoreboardIdentity.md) | *string*
  
  Participant to remove from being tracked with this objective.

**Returns** *boolean*
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

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
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
