---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.ClipboardWriteOptions Interface
description: Contents of the @minecraft/server-editor.ClipboardWriteOptions class.
---
# ClipboardWriteOptions Interface

Interface used to specify the options when a clipboard item is being written to the world

## Properties

### **mirror**
`mirror?: minecraftserver.StructureMirrorAxis;`

An enum which represents the axis (or combination of axis') along which the item should be mirrored

- X

- Z

- XZ

Type: [*@minecraft/server.StructureMirrorAxis*](../../minecraft/server/StructureMirrorAxis.md)

### **normalizedOrigin**
`normalizedOrigin?: minecraftserver.Vector3;`

Type: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)

### **offset**
`offset?: minecraftserver.Vector3;`

A position offset which should be applied to the paste location while the clipboard item is being written

Type: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)

### **rotation**
`rotation?: minecraftserver.StructureRotation;`

An enum representing the rotation around the Y-Axis which should be applied while the clipboard item is being written

Type: [*@minecraft/server.StructureRotation*](../../minecraft/server/StructureRotation.md)
