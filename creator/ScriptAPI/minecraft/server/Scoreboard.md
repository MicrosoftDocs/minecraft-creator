---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.Scoreboard Class
description: Contents of the @minecraft/server.Scoreboard class.
---
# Scoreboard Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Contains objectives and participants for the scoreboard.

## Methods
- [addObjective](#addobjective)
- [clearObjectiveAtDisplaySlot](#clearobjectiveatdisplayslot)
- [getObjective](#getobjective)
- [getObjectiveAtDisplaySlot](#getobjectiveatdisplayslot)
- [getObjectives](#getobjectives)
- [getParticipants](#getparticipants)
- [getScore](#getscore)
- [removeObjective](#removeobjective)
- [setObjectiveAtDisplaySlot](#setobjectiveatdisplayslot)
- [setScore](#setscore)

### **addObjective**
`
addObjective(objectiveId: string, displayName: string): ScoreboardObjective
`

Adds a new objective to the scoreboard.

#### **Parameters**
- **objectiveId**: *string*
- **displayName**: *string*

#### **Returns** [*ScoreboardObjective*](ScoreboardObjective.md)

> [!WARNING]
> This function can throw errors.

### **clearObjectiveAtDisplaySlot**
`
clearObjectiveAtDisplaySlot(displaySlotId: string): ScoreboardObjective
`

Clears the objective that occupies a display slot.

#### **Parameters**
- **displaySlotId**: *string*

#### **Returns** [*ScoreboardObjective*](ScoreboardObjective.md)

> [!WARNING]
> This function can throw errors.

### **getObjective**
`
getObjective(objectiveId: string): ScoreboardObjective
`

Returns a specific objective (by id).

#### **Parameters**
- **objectiveId**: *string*
  
  Identifier of the objective.

#### **Returns** [*ScoreboardObjective*](ScoreboardObjective.md)

> [!WARNING]
> This function can throw errors.

### **getObjectiveAtDisplaySlot**
`
getObjectiveAtDisplaySlot(displaySlotId: string): ScoreboardObjectiveDisplayOptions
`

Returns an objective that occupies the specified display slot.

#### **Parameters**
- **displaySlotId**: *string*

#### **Returns** [*ScoreboardObjectiveDisplayOptions*](ScoreboardObjectiveDisplayOptions.md)

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

### **getScore**
`
getScore(objective: ScoreboardObjective, participant: ScoreboardIdentity): number
`

Returns a score given an objective and participant.

#### **Parameters**
- **objective**: [*ScoreboardObjective*](ScoreboardObjective.md)
  
  Objective to retrieve the score for.
- **participant**: [*ScoreboardIdentity*](ScoreboardIdentity.md)
  
  Participant to retrieve the score for.

#### **Returns** *number* - Score value.

> [!WARNING]
> This function can throw errors.

### **removeObjective**
`
removeObjective(objectiveId: ScoreboardObjective | string): boolean
`

Removes an objective from the scoreboard.

#### **Parameters**
- **objectiveId**: [*ScoreboardObjective*](ScoreboardObjective.md) | *string*

#### **Returns** *boolean*

> [!WARNING]
> This function can throw errors.

### **setObjectiveAtDisplaySlot**
`
setObjectiveAtDisplaySlot(displaySlotId: string, objectiveDisplaySetting: ScoreboardObjectiveDisplayOptions): ScoreboardObjective
`

Sets an objective into a display slot with specified additional display settings.

#### **Parameters**
- **displaySlotId**: *string*
- **objectiveDisplaySetting**: [*ScoreboardObjectiveDisplayOptions*](ScoreboardObjectiveDisplayOptions.md)

#### **Returns** [*ScoreboardObjective*](ScoreboardObjective.md)

> [!WARNING]
> This function can throw errors.

### **setScore**
`
setScore(objective: ScoreboardObjective, participant: ScoreboardIdentity, score: number): boolean
`

Sets the score given a participant and objective.

#### **Parameters**
- **objective**: [*ScoreboardObjective*](ScoreboardObjective.md)
  
  Objective to use for the scoreboard.
- **participant**: [*ScoreboardIdentity*](ScoreboardIdentity.md)
  
  Participant to apply the scoreboard value to.
- **score**: *number*

#### **Returns** *boolean*

> [!WARNING]
> This function can throw errors.
