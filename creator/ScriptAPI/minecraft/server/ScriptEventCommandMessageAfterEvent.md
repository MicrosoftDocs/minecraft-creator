---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ScriptEventCommandMessageAfterEvent Class
description: Contents of the @minecraft/server.ScriptEventCommandMessageAfterEvent class.
---
# ScriptEventCommandMessageAfterEvent Class

Returns additional data about a /scriptevent command invocation.

## Properties

### **id**
`read-only id: string;`

Identifier of this ScriptEvent command message.

Type: *string*

### **initiator**
`read-only initiator?: Entity;`

If this command was initiated via an NPC, returns the entity that initiated the NPC dialogue.

Type: [*Entity*](Entity.md)

### **message**
`read-only message: string;`

Optional additional data passed in with the script event command.

Type: *string*

### **sourceBlock**
`read-only sourceBlock?: Block;`

Source block if this command was triggered via a block (e.g., a commandblock.)

Type: [*Block*](Block.md)

### **sourceEntity**
`read-only sourceEntity?: Entity;`

Source entity if this command was triggered by an entity (e.g., a NPC).

Type: [*Entity*](Entity.md)

### **sourceType**
`read-only sourceType: ScriptEventSource;`

Returns the type of source that fired this command.

Type: [*ScriptEventSource*](ScriptEventSource.md)
