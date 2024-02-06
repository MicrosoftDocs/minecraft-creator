---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EntityBaseMovementComponent Class
description: Contents of the @minecraft/server.EntityBaseMovementComponent class.
---
# EntityBaseMovementComponent Class

## Extends
- [*EntityComponent*](EntityComponent.md)

## Classes that extend EntityBaseMovementComponent
- [*EntityMovementAmphibiousComponent*](EntityMovementAmphibiousComponent.md)
- [*EntityMovementBasicComponent*](EntityMovementBasicComponent.md)
- [*EntityMovementFlyComponent*](EntityMovementFlyComponent.md)
- [*EntityMovementGenericComponent*](EntityMovementGenericComponent.md)
- [*EntityMovementGlideComponent*](EntityMovementGlideComponent.md)
- [*EntityMovementHoverComponent*](EntityMovementHoverComponent.md)
- [*EntityMovementJumpComponent*](EntityMovementJumpComponent.md)
- [*EntityMovementSkipComponent*](EntityMovementSkipComponent.md)
- [*EntityMovementSwayComponent*](EntityMovementSwayComponent.md)

Base class for a family of entity movement events.

## Properties

### **maxTurn**
`read-only maxTurn: number;`

Maximum turn rate for this movement modality of the mob.

Type: *number*

> [!WARNING]
> This property can throw errors when used.
