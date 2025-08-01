---
# DO NOT TOUCH — This file was automatically generated by @minecraft/api-docs-generator, to report problems file an issue at https://github.com/Mojang/minecraft-scripting-libraries
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.EntityQueryScoreOptions Interface
description: Contents of the @minecraft/server.EntityQueryScoreOptions class (Version 1.x.x).
---
# EntityQueryScoreOptions Interface (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/EntityQueryScoreOptions.md).

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
