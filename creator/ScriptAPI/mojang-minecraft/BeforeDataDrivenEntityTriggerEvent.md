---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.BeforeDataDrivenEntityTriggerEvent Class
description: Contents of the mojang-minecraft.BeforeDataDrivenEntityTriggerEvent class.
---
# BeforeDataDrivenEntityTriggerEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Contains information related to firing of a data driven entity event - for example, the minecraft:ageable_grow_up event on a chicken.

## Properties
### **cancel**
`cancel: boolean;`

If set to true, this entity event is not triggered.

Type: *boolean*


### **entity**
`read-only entity: Entity;`

Entity that the event triggered on.

Type: [*Entity*](Entity.md)


### **id**
`read-only id: string;`

Name of the data driven event being triggered.

Type: *string*


### **modifiers**
`modifiers: DefinitionModifier[];`

An updateable list of modifications to component state that are the effect of this triggered event.

Type: [*DefinitionModifier*](DefinitionModifier.md)[]


