---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.BlockFluidContainerComponent Class
description: Contents of the @minecraft/server.BlockFluidContainerComponent class (Version 1.x.x).
---
# BlockFluidContainerComponent Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/BlockFluidContainerComponent.md).

## Extends
- [*BlockComponent*](BlockComponent.md)

Represents the fluid container of a block in the world. Used with blocks like cauldrons.

## Properties

### **fillLevel**
`fillLevel: number;`

Relative fill level of the fluid container.

Type: *number*

Notes:
  - This property can't be edited in read-only mode.

### **fluidColor**
`fluidColor: RGBA;`

Custom color of the fluid in the container.

Type: [*RGBA*](RGBA.md)

Notes:
  - This property can't be edited in read-only mode.

## Methods
- [addDye](#adddye)
- [getFluidType](#getfluidtype)
- [setFluidType](#setfluidtype)
- [setPotion](#setpotion)

### **addDye**
`
addDye(dye: ItemType): void
`

Adds a dye to the fluid. The dye color is combined with any existing custom color.

#### **Parameters**
- **dye**: [*ItemType*](ItemType.md)
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **getFluidType**
`
getFluidType(): FluidType
`

Gets the current fluid type in the container.

**Returns** [*FluidType*](FluidType.md)
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **setFluidType**
`
setFluidType(fluidType: FluidType): void
`

Sets the current fluid type in the container.

#### **Parameters**
- **fluidType**: [*FluidType*](FluidType.md)
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **setPotion**
`
setPotion(itemStack: ItemStack): void
`

Sets a potion item in the container. Changes the container's fluid type to potion.

#### **Parameters**
- **itemStack**: [*ItemStack*](ItemStack.md)
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

## Constants

### **componentId**
`static read-only componentId = "minecraft:fluidContainer";`

Type: *string*
