---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EntityDieAfterEvent Class
description: Contents of the @minecraft/server.EntityDieAfterEvent class.
---
# EntityDieAfterEvent Class

Contains data related to the death of an entity in the game.

## Properties

### **damageSource**
`read-only damageSource: EntityDamageSource;`

If specified, provides more information on the source of damage that caused the death of this entity.

Type: [*EntityDamageSource*](EntityDamageSource.md)

### **deadEntity**
`read-only deadEntity: Entity;`

Now-dead entity object.

Type: [*Entity*](Entity.md)
