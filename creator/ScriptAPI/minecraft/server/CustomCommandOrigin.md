---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.CustomCommandOrigin Class
description: Contents of the @minecraft/server.CustomCommandOrigin class.
monikerRange: "=minecraft-bedrock-experimental"
---
# CustomCommandOrigin Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Details about the origins of the command.

## Properties

### **initiator**
`read-only initiator?: Entity;`

If this command was initiated via an NPC, returns the entity that initiated the NPC dialogue.

Type: [*Entity*](Entity.md)

### **sourceBlock**
`read-only sourceBlock?: Block;`

Source block if this command was triggered via a block (e.g., a commandblock.)

Type: [*Block*](Block.md)

### **sourceEntity**
`read-only sourceEntity?: Entity;`

Source entity if this command was triggered by an entity (e.g., a NPC).

Type: [*Entity*](Entity.md)

### **sourceType**
`read-only sourceType: CustomCommandSource;`

Returns the type of source that fired this command.

Type: [*CustomCommandSource*](CustomCommandSource.md)
