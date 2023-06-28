---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.Scoreboard Class
description: Contents of the @minecraft/server.Scoreboard class.
---
# Scoreboard Class

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
- [removeObjective](#removeobjective)
- [setObjectiveAtDisplaySlot](#setobjectiveatdisplayslot)

### **addObjective**
`
addObjective(objectiveId: string, displayName: string): ScoreboardObjective
`

Adds a new objective to the scoreboard.

#### **Parameters**
- **objectiveId**: *string*
- **displayName**: *string*

#### **Returns** [*ScoreboardObjective*](ScoreboardObjective.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **clearObjectiveAtDisplaySlot**
`
clearObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjective
`

Clears the objective that occupies a display slot.

#### **Parameters**
- **displaySlotId**: [*DisplaySlotId*](DisplaySlotId.md)

#### **Returns** [*ScoreboardObjective*](ScoreboardObjective.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

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
getObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjectiveDisplayOptions
`

Returns an objective that occupies the specified display slot.

#### **Parameters**
- **displaySlotId**: [*DisplaySlotId*](DisplaySlotId.md)

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

### **removeObjective**
`
removeObjective(objectiveId: ScoreboardObjective | string): boolean
`

Removes an objective from the scoreboard.

#### **Parameters**
- **objectiveId**: [*ScoreboardObjective*](ScoreboardObjective.md) | *string*

#### **Returns** *boolean*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **setObjectiveAtDisplaySlot**
`
setObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId, objectiveDisplaySetting: ScoreboardObjectiveDisplayOptions): ScoreboardObjective
`

Sets an objective into a display slot with specified additional display settings.

#### **Parameters**
- **displaySlotId**: [*DisplaySlotId*](DisplaySlotId.md)
- **objectiveDisplaySetting**: [*ScoreboardObjectiveDisplayOptions*](ScoreboardObjectiveDisplayOptions.md)

#### **Returns** [*ScoreboardObjective*](ScoreboardObjective.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
