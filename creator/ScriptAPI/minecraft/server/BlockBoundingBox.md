---
# DO NOT TOUCH — This file was automatically generated by @minecraft/api-docs-generator, to report problems file an issue at https://github.com/Mojang/minecraft-scripting-libraries
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.BlockBoundingBox Interface
description: Contents of the @minecraft/server.BlockBoundingBox class.
---
# BlockBoundingBox Interface

A BlockBoundingBox is an interface to an object which represents an AABB aligned rectangle.  

The BlockBoundingBox assumes that it was created in a valid state (min <= max) but cannot guarantee it (unless it was created using the associated [*@minecraft/server.BlockBoundingBoxUtils*](../../../scriptapi/minecraft/server/BlockBoundingBoxUtils.md) utility functions.

The min/max coordinates represent the diametrically opposite corners of the rectangle.

The BlockBoundingBox is not a representation of blocks - it has no association with any type, it is just a mathematical construct - so a rectangle with

( 0,0,0 ) -> ( 0,0,0 )

has a size of ( 0,0,0 ) (unlike the very similar [*@minecraft/server.BlockVolume*](../../../scriptapi/minecraft/server/BlockVolume.md) object)

## Properties

### **max**
`max: Vector3;`

A [*@minecraft/server.Vector3*](../../../scriptapi/minecraft/server/Vector3.md) that represents the largest corner of the rectangle

Type: [*Vector3*](Vector3.md)

### **min**
`min: Vector3;`

A [*@minecraft/server.Vector3*](../../../scriptapi/minecraft/server/Vector3.md) that represents the smallest corner of the rectangle

Type: [*Vector3*](Vector3.md)
