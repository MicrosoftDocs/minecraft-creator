---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.Scoreboard Class
description: Contents of the @minecraft/server.Scoreboard class.
---
# Scoreboard Class

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
addObjective(objectiveId: string, displayName?: string): ScoreboardObjective
`

Adds a new objective to the scoreboard.

#### **Parameters**
- **objectiveId**: *string*
- **displayName**?: *string* = `null`

**Returns** [*ScoreboardObjective*](ScoreboardObjective.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **clearObjectiveAtDisplaySlot**
`
clearObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjective | undefined
`

Clears the objective that occupies a display slot.

#### **Parameters**
- **displaySlotId**: [*DisplaySlotId*](DisplaySlotId.md)

**Returns** [*ScoreboardObjective*](ScoreboardObjective.md) | *undefined*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **getObjective**
`
getObjective(objectiveId: string): ScoreboardObjective | undefined
`

Returns a specific objective (by id).

#### **Parameters**
- **objectiveId**: *string*
  
  Identifier of the objective.

**Returns** [*ScoreboardObjective*](ScoreboardObjective.md) | *undefined*

### **getObjectiveAtDisplaySlot**
`
getObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjectiveDisplayOptions | undefined
`

Returns an objective that occupies the specified display slot.

#### **Parameters**
- **displaySlotId**: [*DisplaySlotId*](DisplaySlotId.md)

**Returns** [*ScoreboardObjectiveDisplayOptions*](ScoreboardObjectiveDisplayOptions.md) | *undefined*

### **getObjectives**
`
getObjectives(): ScoreboardObjective[]
`

Returns all defined objectives.

**Returns** [*ScoreboardObjective*](ScoreboardObjective.md)[]

### **getParticipants**
`
getParticipants(): ScoreboardIdentity[]
`

Returns all defined scoreboard identities.

**Returns** [*ScoreboardIdentity*](ScoreboardIdentity.md)[]

### **removeObjective**
`
removeObjective(objectiveId: ScoreboardObjective | string): boolean
`

Removes an objective from the scoreboard.

#### **Parameters**
- **objectiveId**: [*ScoreboardObjective*](ScoreboardObjective.md) | *string*

**Returns** *boolean*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **setObjectiveAtDisplaySlot**
`
setObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId, objectiveDisplaySetting: ScoreboardObjectiveDisplayOptions): ScoreboardObjective | undefined
`

Sets an objective into a display slot with specified additional display settings.

#### **Parameters**
- **displaySlotId**: [*DisplaySlotId*](DisplaySlotId.md)
- **objectiveDisplaySetting**: [*ScoreboardObjectiveDisplayOptions*](ScoreboardObjectiveDisplayOptions.md)

**Returns** [*ScoreboardObjective*](ScoreboardObjective.md) | *undefined* - Returns the previous `ScoreboardObjective` set at the display slot, if no objective was previously set it returns `undefined`.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
