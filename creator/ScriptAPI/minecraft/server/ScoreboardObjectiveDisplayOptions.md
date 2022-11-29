---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.ScoreboardObjectiveDisplayOptions Interface
description: Contents of the @minecraft/server.ScoreboardObjectiveDisplayOptions class.
---
# ScoreboardObjectiveDisplayOptions Interface
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This interface is still in pre-release.  Its signature may change or it may be removed in future releases.

Contains additional options for how a scoreboard should be displayed within its display slot.

## Properties

### **objective**
`objective: ScoreboardObjective;`

Objective to be displayed.

Type: [*ScoreboardObjective*](ScoreboardObjective.md)

### **sortOrder**
`sortOrder?: ObjectiveSortOrder;`

The sort order to display the objective items within.

Type: [*ObjectiveSortOrder*](ObjectiveSortOrder.md)
