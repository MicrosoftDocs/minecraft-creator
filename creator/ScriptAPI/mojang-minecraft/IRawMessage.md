---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.IRawMessage Interface
description: Contents of the mojang-minecraft.IRawMessage class.
---
# IRawMessage Interface
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

An interface that describes the signature of a message that is passed into a say/tell API request.

## Properties

### **rawtext**
`rawtext: IRawMessage | string[];`

A list of text objects used to build a message.

Type: [*IRawMessage*](IRawMessage.md) | *string*[]

### **text**
`text: string;`

Contains plain text to display directly. Only valid when used as a sub member in a parent _rawtext_ or _with_ member.

Type: *string*

### **translate**
`translate: string;`

Contains a resource pack translation identifier that can be used to translate text in the player's selected language.

Type: *string*

### **with**
`with: IRawMessage | string[];`

A list of text object arguments that can be used to fill values in the _translate_ text. Ignored when _translate_ is not present.

Type: [*IRawMessage*](IRawMessage.md) | *string*[]
