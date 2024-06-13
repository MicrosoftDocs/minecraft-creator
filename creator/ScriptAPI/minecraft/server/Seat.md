---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.Seat Class
description: Contents of the @minecraft/server.Seat class.
---
# Seat Class

Describes a particular seating position on this rideable entity.

## Properties

### **lockRiderRotation**
`read-only lockRiderRotation: number;`

Angle in degrees that a rider is allowed to rotate while riding this entity.

Type: *number*

### **maxRiderCount**
`read-only maxRiderCount: number;`

A maximum number of riders that this seat can support.

Type: *number*

### **minRiderCount**
`read-only minRiderCount: number;`

A minimum number of riders that can be placed in this seat position, if this seat is to be filled.

Type: *number*

### **position**
`read-only position: Vector3;`

Physical location of this seat, relative to the entity's location.

Type: [*Vector3*](Vector3.md)

### **seatRotation**
`read-only seatRotation: number;`

Angle in degrees to rotate riders by.

Type: *number*
