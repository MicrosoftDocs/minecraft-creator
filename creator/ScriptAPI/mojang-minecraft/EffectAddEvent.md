---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.EffectAddEvent Class
description: Contents of the mojang-minecraft.EffectAddEvent class.
---
# EffectAddEvent Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Contains information related to changes to an effect - like poison - being added to an entity.

## Properties

### **effect**
`effect: Effect;`

Additional properties and details of the effect.

Type: [*Effect*](Effect.md)

### **effectState**
`effectState: number;`

Additional variant number for the effect.

Type: *number*

### **entity**
`entity: Entity;`

Entity that the effect is being added to.

Type: [*Entity*](Entity.md)
