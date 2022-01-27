---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.World Class
description: Contents of the mojang-minecraft.World class.
---
# World Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

A class that wraps the state of a world - a set of dimensions and the environment of Minecraft.

## Properties
### **events**
`read-only events: Events;`

Contains a set of events that are applicable to the entirety of the world.

Type: [*Events*](Events.md)



## Methods
- [getDimension](#getdimension)
- [getPlayers](#getplayers)
  
### **getDimension**
`
getDimension(dimensionName: ('overworld'|'nether'|'the end')): Dimension
`

#### **Parameters**
- **dimensionName**: `'overworld'`, `'nether'`, `'the end'`
  
  The name of the Dimension

#### **Returns** [*Dimension*](Dimension.md) - The requested dimension

> [!WARNING]
> Throws if the given dimension name is invalid

### **getPlayers**
`
getPlayers(options?: EntityQueryOptions): PlayerIterator
`

Returns all players currently in the world.
#### **Parameters**
- **options**?: [*EntityQueryOptions*](EntityQueryOptions.md) = `null`

#### **Returns** [*PlayerIterator*](PlayerIterator.md) - All players currently in the world.

> [!WARNING]
> This function can throw errors.


