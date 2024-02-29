---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.TeleportOptions Interface
description: Contents of the @minecraft/server.TeleportOptions class.
---
# TeleportOptions Interface

Contains additional options for teleporting an entity.

## Properties

### **checkForBlocks**
`checkForBlocks?: boolean;`

Whether to check whether blocks will block the entity after teleport.

Type: *boolean*

### **dimension**
`dimension?: Dimension;`

Dimension to potentially move the entity to.  If not specified, the entity is teleported within the dimension that they reside.

Type: [*Dimension*](Dimension.md)

### **facingLocation**
`facingLocation?: Vector3;`

Location that the entity should be facing after teleport.

Type: [*Vector3*](Vector3.md)

### **keepVelocity**
`keepVelocity?: boolean;`

Whether to retain the entities velocity after teleport.

Type: *boolean*

### **rotation**
`rotation?: Vector2;`

Rotation of the entity after teleport.

Type: [*Vector2*](Vector2.md)
