---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.MusicOptions Interface
description: Contents of the @minecraft/server.MusicOptions class (Version 1.x.x).
---
# MusicOptions Interface (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/MusicOptions.md).

Additional configuration options for [*@minecraft/server.World.playMusic*](../../../priorscriptapi/minecraft/server-1xx/World.md#playmusic)/[*@minecraft/server.World.queueMusic*](../../../priorscriptapi/minecraft/server-1xx/World.md#queuemusic) methods.

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
