---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.PlayerDimensionChangeAfterEvent Class
description: Contents of the @minecraft/server.PlayerDimensionChangeAfterEvent class.
---
# PlayerDimensionChangeAfterEvent Class

Contains information related to changes to a player's dimension having been changed.

## Properties

### **fromDimension**
`read-only fromDimension: Dimension;`

The dimension the player is changing from.

Type: [*Dimension*](Dimension.md)

### **fromLocation**
`read-only fromLocation: Vector3;`

The location the player was at before changing dimensions.

Type: [*Vector3*](Vector3.md)

### **player**
`read-only player: Player;`

Handle to the player that is changing dimensions.

Type: [*Player*](Player.md)

### **toDimension**
`read-only toDimension: Dimension;`

The dimension that the player is changing to.

Type: [*Dimension*](Dimension.md)

### **toLocation**
`read-only toLocation: Vector3;`

The location the player will spawn to after changing dimensions.

Type: [*Vector3*](Vector3.md)
