---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.ScriptEventSource Enumeration
description: Contents of the @minecraft/server.ScriptEventSource enumeration (Version 1.x.x).
---
# ScriptEventSource Enumeration (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/ScriptEventSource.md).

Describes where the script event originated from.

## Constants
### **Block**
`Block = "Block"`

The script event originated from a Block such as a Command Block.
### **Entity**
`Entity = "Entity"`

The script event originated from an Entity such as a Player, Command Block Minecart or Animation Controller.
### **NPCDialogue**
`NPCDialogue = "NPCDialogue"`

The script event originated from an NPC dialogue.
### **Server**
`Server = "Server"`

The script event originated from the server, such as from a runCommand API call or a dedicated server console.
