---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: .ScriptEventSource Enumeration
description: Contents of the .ScriptEventSource enumeration.
---
# ScriptEventSource Enumeration

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
