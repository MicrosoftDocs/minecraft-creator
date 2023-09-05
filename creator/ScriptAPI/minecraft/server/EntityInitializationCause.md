---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
title: .EntityInitializationCause Enumeration
description: Contents of the .EntityInitializationCause enumeration.
ms.service: minecraft-bedrock-edition
---
# EntityInitializationCause Enumeration

> [!CAUTION]
> This enum is still in pre-release.  Its signature may change or it may be removed in future releases.

An enumeration describing initialization cause of an entity.

## Constants
### **Born**
`Born = "Born"`

Case when an entity is created as child of other entity or entities, e.g., cows making a cow or slimes making smaller slimes after dying.
### **Event**
`Event = "Event"`

Case when an entity is created by an event, e.g., Wandering trader spawning llamas.
### **Loaded**
`Loaded = "Loaded"`
### **Spawned**
`Spawned = "Spawned"`

Case when an entity is naturally spawned in the world.
### **Transformed**
`Transformed = "Transformed"`

Case when an entity is transformed into another entity.
