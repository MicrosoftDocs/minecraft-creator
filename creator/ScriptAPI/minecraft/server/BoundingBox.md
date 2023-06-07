---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.BoundingBox Interface
description: Contents of the @minecraft/server.BoundingBox class.
---
# BoundingBox Interface
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This interface is still in pre-release.  Its signature may change or it may be removed in future releases.

A BoundingBox is an interface to an object which represents an AABB aligned rectangle.  

The BoundingBox assumes that it was created in a valid state (min <= max) but cannot guarantee it (unless it was created using the associated {@link @minecraft-server.BoundingBoxUtils} utility functions.

The min/max coordinates represent the diametrically opposite corners of the rectangle.

The BoundingBox is not a representation of blocks - it has no association with any type, it is just a mathematical construct - so a rectangle with

( 0,0,0 ) -> ( 0,0,0 )

has a size of ( 0,0,0 ) (unlike the very similar [*@minecraft/server.BlockVolume*](../../minecraft/server/BlockVolume.md) object)

## Properties

### **max**
`max: Vector3;`

A {@link @minecraft-server.Vector3} that represents the largest corner of the rectangle

Type: [*Vector3*](Vector3.md)

### **min**
`min: Vector3;`

A {@link @minecraft-server.Vector3} that represents the smallest corner of the rectangle

Type: [*Vector3*](Vector3.md)
