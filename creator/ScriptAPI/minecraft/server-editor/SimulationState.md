---
# DO NOT TOUCH — This file was automatically generated by @minecraft/api-docs-generator, to report problems file an issue at https://github.com/Mojang/minecraft-scripting-libraries
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
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
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
