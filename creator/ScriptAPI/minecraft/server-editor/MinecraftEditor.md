---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.MinecraftEditor Class
description: Contents of the @minecraft/server-editor.MinecraftEditor class.
---
# MinecraftEditor Class

The MinecraftEditor class is a namespace container for Editor functionality which does not have any player context.

## Properties

### **log**
`read-only log: Logger;`

A global instance of the log output class object.  This is not contextualized to any particular player, and any messages sent to this instance will be broadcast to all connected editor client sessions

Type: [*Logger*](Logger.md)

> [!WARNING]
> This property can throw errors when used.

### **simulation**
`read-only simulation: SimulationState;`

Allows querying and modifying some properties of the simulation.

Type: [*SimulationState*](SimulationState.md)
