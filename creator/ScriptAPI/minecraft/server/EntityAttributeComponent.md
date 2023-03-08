---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.EntityAttributeComponent Class
description: Contents of the @minecraft/server.EntityAttributeComponent class.
---
# EntityAttributeComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*EntityComponent*](EntityComponent.md)

## Classes that extend EntityAttributeComponent
- [*EntityHealthComponent*](EntityHealthComponent.md)
- [*EntityLavaMovementComponent*](EntityLavaMovementComponent.md)
- [*EntityMovementComponent*](EntityMovementComponent.md)
- [*EntityUnderwaterMovementComponent*](EntityUnderwaterMovementComponent.md)

## Properties

### **current**
`read-only current: number;`

Type: *number*

### **value**
`read-only value: number;`

Type: *number*

## Methods
- [resetToDefaultValue](#resettodefaultvalue)
- [resetToMaxValue](#resettomaxvalue)
- [resetToMinValue](#resettominvalue)
- [setCurrent](#setcurrent)

### **resetToDefaultValue**
`
resetToDefaultValue(): void
`

> [!WARNING]
> This function can throw errors.

### **resetToMaxValue**
`
resetToMaxValue(): void
`

> [!WARNING]
> This function can throw errors.

### **resetToMinValue**
`
resetToMinValue(): void
`

> [!WARNING]
> This function can throw errors.

### **setCurrent**
`
setCurrent(value: number): boolean
`

#### **Parameters**
- **value**: *number*

#### **Returns** *boolean*

> [!WARNING]
> This function can throw errors.
