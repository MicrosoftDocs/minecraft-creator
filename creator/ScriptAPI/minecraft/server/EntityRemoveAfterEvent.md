---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EntityRemoveAfterEvent Class
description: Contents of the @minecraft/server.EntityRemoveAfterEvent class.
---
# EntityRemoveAfterEvent Class

Data for an event that happens when an entity is removed from the world (for example, the entity is unloaded because it is not close to players.)

## Properties

### **removedEntityId**
`read-only removedEntityId: string;`

Id of the entity that was removed.

Type: *string*

### **typeId**
`read-only typeId: string;`

Identifier of the type of the entity removed - for example, 'minecraft:skeleton'.

Type: *string*
