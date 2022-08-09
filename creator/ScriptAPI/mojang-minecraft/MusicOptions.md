---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.MusicOptions Class
description: Contents of the mojang-minecraft.MusicOptions class.
---
# MusicOptions Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Additional configuration options for [*mojang-minecraft.World.playMusic*](../mojang-minecraft/World.md#playmusic)/[*mojang-minecraft.World.queueMusic*](../mojang-minecraft/World.md#queuemusic) methods.

## Properties

### **fade**
`fade: number;`

Specifies a fade overlap for music at the end of play.

Type: *number*

### **loop**
`loop: boolean;`

If set to true, this music track will play repeatedly.

Type: *boolean*

### **volume**
`volume: number;`

Relative volume level of the music.

Type: *number*

## Methods
- [constructor](#constructor)

### **constructor**
`
new MusicOptions()
`
Creates a new instance of the SoundOptions object.

#### **Returns** [*MusicOptions*](MusicOptions.md)
