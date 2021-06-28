---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: Minecraft.ChatEvent Class
description: Contents of the Minecraft.ChatEvent class.
---
# ChatEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.

An event that fires as players enter chat messages.

## Properties
### **message** - `string`
Message that is being broadcast. In a beforeChat event handler, _message_ can be updated with edits before the message is displayed to players.


### **sender** - `Player`
Player that sent the chat message.


### **targets** - `Player[]`
List of players that will receive this message.


### **sendToTargets** - `boolean`
If true, this message is directly targeted to one or more players (i.e., is not broadcast.)



