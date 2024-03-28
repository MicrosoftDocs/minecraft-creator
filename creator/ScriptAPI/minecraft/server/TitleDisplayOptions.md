---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.TitleDisplayOptions Interface
description: Contents of the @minecraft/server.TitleDisplayOptions class.
---
# TitleDisplayOptions Interface

Contains additional options for displaying a title and optional subtitle.

## Properties

### **fadeInDuration**
`fadeInDuration: number;`

Fade-in duration for the title and subtitle, in ticks. There are 20 ticks per second. Use [*@minecraft/server.TicksPerSecond*](../../minecraft/server/minecraft-server.md#tickspersecond) constant to convert between ticks and seconds.

Type: *number*

### **fadeOutDuration**
`fadeOutDuration: number;`

Fade-out time for the title and subtitle, in ticks. There are 20 ticks per second. Use [*@minecraft/server.TicksPerSecond*](../../minecraft/server/minecraft-server.md#tickspersecond) constant to convert between ticks and seconds.

Type: *number*

### **stayDuration**
`stayDuration: number;`

Amount of time for the title and subtitle to stay in place, in ticks. There are 20 ticks per second. Use [*@minecraft/server.TicksPerSecond*](../../minecraft/server/minecraft-server.md#tickspersecond) constant to convert between ticks and seconds.

Type: *number*

### **subtitle**
`subtitle?: (RawMessage | string)[] | RawMessage | string;`

Optional subtitle text.

Type: ([*RawMessage*](RawMessage.md) | *string*)[] | [*RawMessage*](RawMessage.md) | *string*
