---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.MolangVariableMap Class
description: Contents of the mojang-minecraft.MolangVariableMap class.
---
# MolangVariableMap Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Contains a set of additional variable values for further defining how rendering and animations function.

## Methods
- [constructor](#constructor)
- [setColorRGB](#setcolorrgb)
- [setColorRGBA](#setcolorrgba)
- [setSpeedAndDirection](#setspeedanddirection)
- [setVector3](#setvector3)

### **constructor**
`
new MolangVariableMap()
`

#### **Returns** [*MolangVariableMap*](MolangVariableMap.md)

### **setColorRGB**
`
setColorRGB(variableName: string, color: Color): MolangVariableMap
`
Sets a Molang rendering/animation variable with the value of a Red/Green/Blue color.

#### **Parameters**
- **variableName**: *string*
- **color**: [*Color*](Color.md)

#### **Returns** [*MolangVariableMap*](MolangVariableMap.md)

### **setColorRGBA**
`
setColorRGBA(variableName: string, color: Color): MolangVariableMap
`
Sets a Molang rendering/animation variable with the value of a Red/Green/Blue color + Alpha (transparency) value.

#### **Parameters**
- **variableName**: *string*
- **color**: [*Color*](Color.md)

#### **Returns** [*MolangVariableMap*](MolangVariableMap.md)

### **setSpeedAndDirection**
`
setSpeedAndDirection(variableName: string, speed: number, direction: Vector): MolangVariableMap
`
Sets the speed and direction for a Molang (rendering and animation) variable.

#### **Parameters**
- **variableName**: *string*
- **speed**: *number*
- **direction**: [*Vector*](Vector.md)

#### **Returns** [*MolangVariableMap*](MolangVariableMap.md)

### **setVector3**
`
setVector3(variableName: string, vector: Vector): MolangVariableMap
`
Sets a vector value for a Molang (rendering and animation) variable.

#### **Parameters**
- **variableName**: *string*
- **vector**: [*Vector*](Vector.md)

#### **Returns** [*MolangVariableMap*](MolangVariableMap.md)
