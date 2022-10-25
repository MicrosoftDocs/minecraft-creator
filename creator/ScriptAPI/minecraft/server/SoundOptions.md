---
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.SoundOptions Interface
description: Contents of the @minecraft/server.SoundOptions class.
---
# SoundOptions Interface
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

> [!CAUTION]
> This interface is still in pre-release.  Its signature may change or it may be removed in future releases.

Additional configuration options for the [*@minecraft/server.Player.playSound*](../server/Player.md#playsound)/[*@minecraft/server.World.playSound*](../server/World.md#playsound) method.

## Properties

### **location**
`location?: Location;`

Specifies a location of where to play a particular sound.

Type: [*Location*](Location.md)

### **pitch**
`pitch?: number;`

Pitch adjustment level for the sound.

Type: *number*

### **volume**
`volume?: number;`

Relative volume level of the sound.

Type: *number*
