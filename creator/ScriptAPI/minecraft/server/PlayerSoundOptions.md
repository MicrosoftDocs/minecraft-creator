---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.PlayerSoundOptions Interface
description: Contents of the @minecraft/server.PlayerSoundOptions class.
---
# PlayerSoundOptions Interface
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
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
