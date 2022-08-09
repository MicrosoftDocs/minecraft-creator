---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.Effect Class
description: Contents of the mojang-minecraft.Effect class.
---
# Effect Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Represents an effect - like poison - that has been added to an Entity.

## Properties

### **amplifier**
`read-only amplifier: number;`

Gets an amplifier that may have been applied to this effect. Sample values range typically from 0 to 4. Example: The effect 'Jump Boost II' will have an amplifier value of 1.

Type: *number*

### **displayName**
`read-only displayName: string;`

Gets the player-friendly name of this effect.

Type: *string*

### **duration**
`read-only duration: number;`

Gets the entire specified duration, in ticks, of this effect.

Type: *number*
