---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.EntityQueryScoreOptions Interface
description: Contents of the @minecraft/server.EntityQueryScoreOptions class.
---
# EntityQueryScoreOptions Interface
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
Contains additional options for filtering players based on their score for an objective.

## Properties

### **exclude**
`exclude?: boolean;`

If set to true, entities and players within this score range are excluded from query results.

Type: *boolean*

### **maxScore**
`maxScore?: number;`

If defined, only players that have a score equal to or under maxScore are included.

Type: *number*

### **minScore**
`minScore?: number;`

If defined, only players that have a score equal to or over minScore are included.

Type: *number*

### **objective**
`objective?: string;`

Identifier of the scoreboard objective to filter on.

Type: *string*
