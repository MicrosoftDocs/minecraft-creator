---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.Scoreboard Class
description: Contents of the @minecraft/server.Scoreboard class (Version 1.x.x).
---
# Scoreboard Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/Scoreboard.md).

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
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

#### Examples

##### ***updateScoreboard.ts***

```typescript
import { world, DisplaySlotId, ObjectiveSortOrder, DimensionLocation } from "@minecraft/server";

function updateScoreboard(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const scoreboardObjectiveId = "scoreboard_demo_objective";
  const scoreboardObjectiveDisplayName = "Demo Objective";

  const players = world.getPlayers();

  // Ensure a new objective.
  let objective = world.scoreboard.getObjective(scoreboardObjectiveId);

  if (!objective) {
    objective = world.scoreboard.addObjective(scoreboardObjectiveId, scoreboardObjectiveDisplayName);
  }

  // get the scoreboard identity for player 0
  const player0Identity = players[0].scoreboardIdentity;

  if (player0Identity === undefined) {
    log("Could not get a scoreboard identity for player 0.");
    return -1;
  }

  // initialize player score to 100;
  objective.setScore(player0Identity, 100);

  world.scoreboard.setObjectiveAtDisplaySlot(DisplaySlotId.Sidebar, {
    objective: objective,
    sortOrder: ObjectiveSortOrder.Descending,
  });

  const playerScore = objective.getScore(player0Identity) ?? 0;

  // score should now be 110.
  objective.setScore(player0Identity, playerScore + 10);
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/updateScoreboard.ts) code sandbox.

### **clearObjectiveAtDisplaySlot**
`
clearObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId): ScoreboardObjective | undefined
`

Clears the objective that occupies a display slot.

#### **Parameters**
- **displaySlotId**: [*DisplaySlotId*](DisplaySlotId.md)

**Returns** [*ScoreboardObjective*](ScoreboardObjective.md) | *undefined*
  
Notes:
- This function can't be called in read-only mode.

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
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **setObjectiveAtDisplaySlot**
`
setObjectiveAtDisplaySlot(displaySlotId: DisplaySlotId, objectiveDisplaySetting: ScoreboardObjectiveDisplayOptions): ScoreboardObjective | undefined
`

Sets an objective into a display slot with specified additional display settings.

#### **Parameters**
- **displaySlotId**: [*DisplaySlotId*](DisplaySlotId.md)
- **objectiveDisplaySetting**: [*ScoreboardObjectiveDisplayOptions*](ScoreboardObjectiveDisplayOptions.md)

**Returns** [*ScoreboardObjective*](ScoreboardObjective.md) | *undefined* - Returns the previous `ScoreboardObjective` set at the display slot, if no objective was previously set it returns `undefined`.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

#### Examples

##### ***updateScoreboard.ts***

```typescript
import { world, DisplaySlotId, ObjectiveSortOrder, DimensionLocation } from "@minecraft/server";

function updateScoreboard(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const scoreboardObjectiveId = "scoreboard_demo_objective";
  const scoreboardObjectiveDisplayName = "Demo Objective";

  const players = world.getPlayers();

  // Ensure a new objective.
  let objective = world.scoreboard.getObjective(scoreboardObjectiveId);

  if (!objective) {
    objective = world.scoreboard.addObjective(scoreboardObjectiveId, scoreboardObjectiveDisplayName);
  }

  // get the scoreboard identity for player 0
  const player0Identity = players[0].scoreboardIdentity;

  if (player0Identity === undefined) {
    log("Could not get a scoreboard identity for player 0.");
    return -1;
  }

  // initialize player score to 100;
  objective.setScore(player0Identity, 100);

  world.scoreboard.setObjectiveAtDisplaySlot(DisplaySlotId.Sidebar, {
    objective: objective,
    sortOrder: ObjectiveSortOrder.Descending,
  });

  const playerScore = objective.getScore(player0Identity) ?? 0;

  // score should now be 110.
  objective.setScore(player0Identity, playerScore + 10);
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/updateScoreboard.ts) code sandbox.
