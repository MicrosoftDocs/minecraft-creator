---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.DataDrivenEntityTriggerAfterEvent Class
description: Contents of the @minecraft/server.DataDrivenEntityTriggerAfterEvent class (Version 1.x.x).
---
# DataDrivenEntityTriggerAfterEvent Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/DataDrivenEntityTriggerAfterEvent.md).

Contains information related to firing of a data driven entity event - for example, the minecraft:ageable_grow_up event on a chicken.

## Properties

### **entity**
`read-only entity: Entity;`

Entity that the event triggered on.

Type: [*Entity*](Entity.md)

### **eventId**
`read-only eventId: string;`

Name of the data driven event being triggered.

Type: *string*

## Methods
- [getModifiers](#getmodifiers)

### **getModifiers**
`
getModifiers(): DefinitionModifier[]
`

An updateable list of modifications to component state that are the effect of this triggered event.

**Returns** [*DefinitionModifier*](DefinitionModifier.md)[]
