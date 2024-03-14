---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.Effect Class
description: Contents of the @minecraft/server.Effect class.
---
# Effect Class

Represents an effect - like poison - that has been added to an Entity.

## Properties

### **amplifier**
`read-only amplifier: number;`

Gets an amplifier that may have been applied to this effect. Sample values range typically from 0 to 4. Example: The effect 'Jump Boost II' will have an amplifier value of 1.

Type: *number*

> [!WARNING]
> This property can throw errors when used.

### **displayName**
`read-only displayName: string;`

Gets the player-friendly name of this effect.

Type: *string*

> [!WARNING]
> This property can throw errors when used.

### **duration**
`read-only duration: number;`

Gets the entire specified duration, in ticks, of this effect. There are 20 ticks per second. Use [*@minecraft/server.TicksPerSecond*](../../minecraft/server/minecraft-server.md#tickspersecond) constant to convert between ticks and seconds.

Type: *number*

> [!WARNING]
> This property can throw errors when used.

### **typeId**
`read-only typeId: string;`

Gets the type id of this effect.

Type: *string*

> [!WARNING]
> This property can throw errors when used.

## Methods
- [isValid](#isvalid)

### **isValid**
`
isValid(): boolean
`

Returns whether an effect instance is available for use in this context.

**Returns** *boolean*
