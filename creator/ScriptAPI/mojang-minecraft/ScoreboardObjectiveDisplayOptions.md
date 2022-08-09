---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.ScoreboardObjectiveDisplayOptions Class
description: Contents of the mojang-minecraft.ScoreboardObjectiveDisplayOptions class.
---
# ScoreboardObjectiveDisplayOptions Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Contains additional options for how a scoreboard should be displayed within its display slot.

## Properties

### **objective**
`read-only objective: ScoreboardObjective;`

Objective to be displayed.

Type: [*ScoreboardObjective*](ScoreboardObjective.md)

### **sortOrder**
`read-only sortOrder: ObjectiveSortOrder;`

The sort order to display the objective items within.

Type: [*ObjectiveSortOrder*](ObjectiveSortOrder.md)

## Methods
- [constructor](#constructor)

### **constructor**
`
new ScoreboardObjectiveDisplayOptions(objective: ScoreboardObjective, sortOrder?: ObjectiveSortOrder)
`

#### **Parameters**
- **objective**: [*ScoreboardObjective*](ScoreboardObjective.md)
- **sortOrder**?: [*ObjectiveSortOrder*](ObjectiveSortOrder.md) = `1`

#### **Returns** [*ScoreboardObjectiveDisplayOptions*](ScoreboardObjectiveDisplayOptions.md)
