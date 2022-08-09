---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.SoundOptions Class
description: Contents of the mojang-minecraft.SoundOptions class.
---
# SoundOptions Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Additional configuration options for the [*mojang-minecraft.Player.playSound*](../mojang-minecraft/Player.md#playsound)/[*mojang-minecraft.World.playSound*](../mojang-minecraft/World.md#playsound) method.

## Properties

### **location**
`location: Location;`

Specifies a location of where to play a particular sound.

Type: [*Location*](Location.md)

### **pitch**
`pitch: number;`

Pitch adjustment level for the sound.

Type: *number*

### **volume**
`volume: number;`

Relative volume level of the sound.

Type: *number*

## Methods
- [constructor](#constructor)

### **constructor**
`
new SoundOptions()
`
Creates a new instance of the SoundOptions object.

#### **Returns** [*SoundOptions*](SoundOptions.md)
