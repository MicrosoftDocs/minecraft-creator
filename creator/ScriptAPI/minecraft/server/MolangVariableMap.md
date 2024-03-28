---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.MolangVariableMap Class
description: Contents of the @minecraft/server.MolangVariableMap class.
---
# MolangVariableMap Class

Contains a set of additional variable values for further defining how rendering and animations function.

## Methods
- [constructor](#constructor)
- [setColorRGB](#setcolorrgb)
- [setColorRGBA](#setcolorrgba)
- [setFloat](#setfloat)
- [setSpeedAndDirection](#setspeedanddirection)
- [setVector3](#setvector3)

### **constructor**
`
new MolangVariableMap()
`

An constructor for creating a new MolangVariableMap object.

**Returns** [*MolangVariableMap*](MolangVariableMap.md)

### **setColorRGB**
`
setColorRGB(variableName: string, color: RGB): void
`

Adds the following variables to Molang:

- `<variable_name>.r` - Red color value [0-1]

- `<variable_name>.g` - Green color value [0-1]

- `<variable_name>.b` - Blue color value [0-1]

#### **Parameters**
- **variableName**: *string*
- **color**: [*RGB*](RGB.md)

> [!WARNING]
> This function can throw errors.

### **setColorRGBA**
`
setColorRGBA(variableName: string, color: RGBA): void
`

Adds the following variables to Molang:

- `<variable_name>.r` - Red color value [0-1]

- `<variable_name>.g` - Green color value [0-1]

- `<variable_name>.b` - Blue color value [0-1]

- `<variable_name>.a` - Alpha (transparency) color value [0-1]

#### **Parameters**
- **variableName**: *string*
- **color**: [*RGBA*](RGBA.md)

> [!WARNING]
> This function can throw errors.

### **setFloat**
`
setFloat(variableName: string, number: number): void
`

Sets a numeric (decimal) value within the Molang variable map.

#### **Parameters**
- **variableName**: *string*
  
  Name of the float-based number to set.
- **number**: *number*
  
  Value for the Molang-based variable to set.

> [!WARNING]
> This function can throw errors.

### **setSpeedAndDirection**
`
setSpeedAndDirection(variableName: string, speed: number, direction: Vector3): void
`

Adds the following variables to Molang:

- `<variable_name>.speed` - Speed number provided

- `<variable_name>.direction_x` - X value from the [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md) provided

- `<variable_name>.direction_y` - Y value from the [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md) provided

- `<variable_name>.direction_z` - Z value from the [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md) provided

#### **Parameters**
- **variableName**: *string*
- **speed**: *number*
- **direction**: [*Vector3*](Vector3.md)

> [!WARNING]
> This function can throw errors.

### **setVector3**
`
setVector3(variableName: string, vector: Vector3): void
`

Adds the following variables to Molang:

- `<variable_name>.x` - X value from the [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md) provided

- `<variable_name>.y` - Y value from the [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md) provided

- `<variable_name>.z` - Z value from the [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md) provided

#### **Parameters**
- **variableName**: *string*
- **vector**: [*Vector3*](Vector3.md)

> [!WARNING]
> This function can throw errors.
