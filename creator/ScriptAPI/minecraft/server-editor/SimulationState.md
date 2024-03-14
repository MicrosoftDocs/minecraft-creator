---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.SimulationState Class
description: Contents of the @minecraft/server-editor.SimulationState class.
---
# SimulationState Class

Responsible for querying and modifying various properties of the simulation.

## Methods
- [isPaused](#ispaused)
- [setPaused](#setpaused)

### **isPaused**
`
isPaused(): boolean
`

Returns `true` if mob simulation is paused.

**Returns** *boolean*

### **setPaused**
`
setPaused(isPaused: boolean): void
`

Sets the state of mob simulation.  If set to `true`, mobs are paused.

#### **Parameters**
- **isPaused**: *boolean*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
