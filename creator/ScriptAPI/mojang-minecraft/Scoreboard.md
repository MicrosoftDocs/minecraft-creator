---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
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
