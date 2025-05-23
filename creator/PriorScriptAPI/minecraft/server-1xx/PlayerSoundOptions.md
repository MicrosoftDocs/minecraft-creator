---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.PlayerSoundOptions Interface
description: Contents of the @minecraft/server.PlayerSoundOptions class (Version 1.x.x).
---
# PlayerSoundOptions Interface (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/PlayerSoundOptions.md).

Additional options for how a sound plays for a player.

## Properties

### **location**
`location?: Vector3;`

Location of the sound; if not specified, the sound is played near a player.

Type: [*Vector3*](Vector3.md)

### **pitch**
`pitch?: number;`

Optional pitch of the sound.

Type: *number*

### **volume**
`volume?: number;`

Optional volume of the sound.

Type: *number*
