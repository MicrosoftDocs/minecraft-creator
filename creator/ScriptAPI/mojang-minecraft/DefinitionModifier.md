---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.DefinitionModifier Class
description: Contents of the mojang-minecraft.DefinitionModifier class.
---
# DefinitionModifier Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Contains a set of updates to the component definition state of an entity.

## Properties

### **componentGroupsToAdd**
`read-only componentGroupsToAdd: string[];`

A list of components that will be added via this definition modification.

Type: *string*[]

### **componentGroupsToRemove**
`read-only componentGroupsToRemove: string[];`

A list of components that will be removed via this definition modification.

Type: *string*[]

### **triggers**
`triggers: Trigger[];`

A list of entity definition events that will be fired via this update.

Type: [*Trigger*](Trigger.md)[]

## Methods
- [constructor](#constructor)

### **constructor**
`
new DefinitionModifier()
`

#### **Returns** [*DefinitionModifier*](DefinitionModifier.md)
