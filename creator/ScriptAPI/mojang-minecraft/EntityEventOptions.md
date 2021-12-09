---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.EntityEventOptions Class
description: Contents of the mojang-minecraft.EntityEventOptions class.
---
# EntityEventOptions Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Contains optional paramters for registering an entity event.

## Properties
### **entity**
`entity: Entity;`

If this value is set, this event will only fire for entities that are of the specified types.

Type: [*Entity*](Entity.md)


### **entityTypes**
`entityTypes: string[];`

If this value is set, this event will only fire if the impacted entity matches this parameter.

Type: *string*[]



## Methods
- [constructor](#constructor)
  
### **constructor**
`
new EntityEventOptions()
`


#### **Returns** [*EntityEventOptions*](EntityEventOptions.md)



