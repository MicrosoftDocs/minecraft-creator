---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.EntityEventOptions Class
description: Contents of the mojang-minecraft.EntityEventOptions class.
---
# EntityEventOptions Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Contains optional parameters for registering an entity event.

## Properties

### **entities**
`entities: Entity[];`

If this value is set, this event will only fire for entities that match the entities within this collection.

Type: [*Entity*](Entity.md)[]

### **entityTypes**
`entityTypes: string[];`

If this value is set, this event will only fire if the impacted entities' type matches this parameter.

Type: *string*[]

## Methods
- [constructor](#constructor)

### **constructor**
`
new EntityEventOptions()
`

#### **Returns** [*EntityEventOptions*](EntityEventOptions.md)
