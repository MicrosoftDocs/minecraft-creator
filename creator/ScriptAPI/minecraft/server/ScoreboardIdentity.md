---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.ScoreboardIdentity Class
description: Contents of the @minecraft/server.ScoreboardIdentity class.
---
# ScoreboardIdentity Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Contains an identity of the scoreboard item.

## Properties

### **displayName**
`read-only displayName: string;`

Returns the player-visible name of this identity.

Type: *string*

### **id**
`read-only id: number;`

Identifier of the scoreboard identity.

Type: *number*

### **type**
`read-only type: ScoreboardIdentityType;`

Type of the scoreboard identity.

Type: [*ScoreboardIdentityType*](ScoreboardIdentityType.md)

## Methods
- [getEntity](#getentity)
- [getScore](#getscore)
- [removeFromObjective](#removefromobjective)
- [setScore](#setscore)

### **getEntity**
`
getEntity(): Entity
`

If the scoreboard identity is an entity or player, returns the entity that this scoreboard item corresponds to.

#### **Returns** [*Entity*](Entity.md)

> [!WARNING]
> This function can throw errors.

### **getScore**
`
getScore(objective: ScoreboardObjective): number
`

Gets the current score for this participant based on an objective.

#### **Parameters**
- **objective**: [*ScoreboardObjective*](ScoreboardObjective.md)
  
  The objective to retrieve the score for.

#### **Returns** *number* - Score value.

> [!WARNING]
> This function can throw errors.

### **removeFromObjective**
`
removeFromObjective(objective: ScoreboardObjective): boolean
`

Removes this participant from an objective.

#### **Parameters**
- **objective**: [*ScoreboardObjective*](ScoreboardObjective.md)
  
  The objective to remove this participant from.

#### **Returns** *boolean*

> [!WARNING]
> This function can throw errors.

### **setScore**
`
setScore(objective: ScoreboardObjective, score: number): boolean
`

Sets a score for this participant for a particular objective.

#### **Parameters**
- **objective**: [*ScoreboardObjective*](ScoreboardObjective.md)
  
  Objective to apply the score to.
- **score**: *number*
  
  Score value.

#### **Returns** *boolean*

> [!WARNING]
> This function can throw errors.
