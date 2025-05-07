---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.BlockBoundingBox Interface
description: Contents of the @minecraft/server.BlockBoundingBox class (Version 1.x.x).
---
# BlockBoundingBox Interface (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/BlockBoundingBox.md).

A BlockBoundingBox is an interface to an object which represents an AABB aligned rectangle.  

The BlockBoundingBox assumes that it was created in a valid state (min <= max) but cannot guarantee it (unless it was created using the associated {@link @minecraft/server.BlockBoundingBoxUtils} utility functions.

The min/max coordinates represent the diametrically opposite corners of the rectangle.

The BlockBoundingBox is not a representation of blocks - it has no association with any type, it is just a mathematical construct - so a rectangle with

( 0,0,0 ) -> ( 0,0,0 )

has a size of ( 0,0,0 ) (unlike the very similar [*@minecraft/server.BlockVolume*](../../../priorscriptapi/minecraft/server-1xx/BlockVolume.md) object)

## Properties

### **max**
`max: Vector3;`

A [*@minecraft/server.Vector3*](../../../priorscriptapi/minecraft/server-1xx/Vector3.md) that represents the largest corner of the rectangle

Type: [*Vector3*](Vector3.md)

### **min**
`min: Vector3;`

A [*@minecraft/server.Vector3*](../../../priorscriptapi/minecraft/server-1xx/Vector3.md) that represents the smallest corner of the rectangle

Type: [*Vector3*](Vector3.md)
