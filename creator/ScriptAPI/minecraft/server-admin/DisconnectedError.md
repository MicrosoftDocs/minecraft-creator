---
# DO NOT TOUCH — This file was automatically generated by @minecraft/api-docs-generator, to report problems file an issue at https://github.com/Mojang/minecraft-scripting-libraries
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-admin.DisconnectedError Class
description: Contents of the @minecraft/server-admin.DisconnectedError class.
---
# DisconnectedError Class

## Extends
- *Error*

An error that is thrown when trying to interact with a join event and the player is disconnected.

## Properties

### **id**
`read-only id: string;`

The id of the player that was disconnected.

Type: *string*

Notes:
  - This property can be read in early-execution mode.
