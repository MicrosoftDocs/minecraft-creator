---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.ScoreboardScoreInfo Class
description: Contents of the @minecraft/server.ScoreboardScoreInfo class.
---
# ScoreboardScoreInfo Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Contains a pair of a scoreboard participant and its respective score.

## Properties

### **participant**
`read-only participant: ScoreboardIdentity;`

This scoreboard participant for this score.

Type: [*ScoreboardIdentity*](ScoreboardIdentity.md)

### **score**
`read-only score: number;`

Score value of the identity for this objective.

Type: *number*
