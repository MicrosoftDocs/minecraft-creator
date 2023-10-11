---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.FeedItemEffect Class
description: Contents of the @minecraft/server.FeedItemEffect class.
---
# FeedItemEffect Class

Represents an effect that is applied as a result of a food item being fed to an entity.

## Properties

### **amplifier**
`read-only amplifier: number;`

Gets an amplifier that may have been applied to this effect. Valid values are integers starting at 0 and up - but usually ranging between 0 and 4.

Type: *number*

### **chance**
`read-only chance: number;`

Chance that this effect is applied as a result of the entity being fed this item. Valid values range between 0 and 1.

Type: *number*

### **duration**
`read-only duration: number;`

Gets the duration, in ticks, of this effect.

Type: *number*

### **name**
`read-only name: string;`

Gets the identifier of the effect to apply. Example values include 'fire_resistance' or 'regeneration'.

Type: *string*
