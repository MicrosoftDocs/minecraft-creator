---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: .EntityInitializationCause Enumeration
description: Contents of the .EntityInitializationCause enumeration.
---
# EntityInitializationCause Enumeration

An enumeration describing initialization cause of an entity.

## Constants
### **Born**
`Born = "Born"`

Case when an entity is created as child of other entity or entities, e.g., cows making a cow or slimes making smaller slimes after dying.
### **Event**
`Event = "Event"`

Case when an entity is created by an event, e.g., a Wandering trader spawning llamas.
### **Loaded**
`Loaded = "Loaded"`

Case when an entity is loaded into the world.
### **Spawned**
`Spawned = "Spawned"`

Case when an entity is naturally spawned in the world.
### **Transformed**
`Transformed = "Transformed"`

Case when an entity is transformed into another entity.
