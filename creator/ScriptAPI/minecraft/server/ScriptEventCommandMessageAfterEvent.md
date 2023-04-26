---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.ScriptEventCommandMessageAfterEvent Class
description: Contents of the @minecraft/server.ScriptEventCommandMessageAfterEvent class.
---
# ScriptEventCommandMessageAfterEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Returns additional data about a /scriptevent command invocation.

## Properties

### **id**
`read-only id: string;`

Identifier of this ScriptEvent command message.

Type: *string*

### **initiator**
`read-only initiator: Entity;`

If this command was initiated via an NPC, returns the entity that initiated the NPC dialogue.

Type: [*Entity*](Entity.md)

### **message**
`read-only message: string;`

Optional additional data passed in with the script event command.

Type: *string*

### **sourceBlock**
`read-only sourceBlock: Block;`

Source block if this command was triggered via a block (e.g., a commandblock.)

Type: [*Block*](Block.md)

### **sourceEntity**
`read-only sourceEntity: Entity;`

Source entity if this command was triggered by an entity (e.g., a NPC).

Type: [*Entity*](Entity.md)

### **sourceType**
`read-only sourceType: MessageSourceType;`

Returns the type of source that fired this command.

Type: [*MessageSourceType*](MessageSourceType.md)
