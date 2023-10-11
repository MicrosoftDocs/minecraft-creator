---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.MusicOptions Interface
description: Contents of the @minecraft/server.MusicOptions class.
---
# MusicOptions Interface

Additional configuration options for [*@minecraft/server.World.playMusic*](../../minecraft/server/World.md#playmusic)/[*@minecraft/server.World.queueMusic*](../../minecraft/server/World.md#queuemusic) methods.

## Properties

### **fade**
`fade?: number;`

Specifies a fade overlap for music at the end of play.

Type: *number*

### **loop**
`loop?: boolean;`

If set to true, this music track will play repeatedly.

Type: *boolean*

### **volume**
`volume?: number;`

Relative volume level of the music.

Type: *number*
