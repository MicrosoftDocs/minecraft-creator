---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.Seat Class
description: Contents of the @minecraft/server.Seat class.
---
# Seat Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Describes a particular seating position on this rideable entity.

## Properties

### **lockRiderRotation**
`read-only lockRiderRotation: number;`

If specified, contains a forced rotation that the riders in this seat are facing.

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
