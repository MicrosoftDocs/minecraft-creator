---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.PlayerInputPermissionCategoryChangeAfterEvent Class
description: Contents of the @minecraft/server.PlayerInputPermissionCategoryChangeAfterEvent class.
---
# PlayerInputPermissionCategoryChangeAfterEvent Class

Contains information regarding an event after a players input permissions change.

## Properties

### **category**
`read-only category: InputPermissionCategory;`

The category of input permissions that have changed.

Type: [*InputPermissionCategory*](InputPermissionCategory.md)

### **enabled**
`read-only enabled: boolean;`

The enabled/disabled state of the players input permissions.

Type: *boolean*

### **player**
`read-only player: Player;`

The player that has had their input permissions changed.

Type: [*Player*](Player.md)
