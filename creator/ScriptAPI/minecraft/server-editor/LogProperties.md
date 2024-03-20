---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.LogProperties Interface
description: Contents of the @minecraft/server-editor.LogProperties class.
---
# LogProperties Interface

A properties class for the global instance of the logger object.

While the logger object is available through the [*@minecraft/server-editor.ExtensionContext*](../../minecraft/server-editor/ExtensionContext.md) - using the global instance allows the creator to use this properties class to perform direct server->client messaging and broadcasts.

## Properties

### **player**
`player?: minecraftserver.Player;`

Direct a log message to a specific player.  If no player is specified, then all players will receive the message

Type: [*@minecraft/server.Player*](../../minecraft/server/Player.md)

### **tags**
`tags?: string[];`

Add additional tags to the log message which can be used by the client session to filter/search in the log window

Type: *string*[]
