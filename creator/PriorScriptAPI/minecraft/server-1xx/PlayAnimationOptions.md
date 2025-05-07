---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.PlayAnimationOptions Interface
description: Contents of the @minecraft/server.PlayAnimationOptions class (Version 1.x.x).
---
# PlayAnimationOptions Interface (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/PlayAnimationOptions.md).

Contains additional options for how an animation is played.

## Properties

### **blendOutTime**
`blendOutTime?: number;`

Amount of time to fade out after an animation stops.

Type: *number*

### **controller**
`controller?: string;`

Specifies a controller to use that has been defined on the entity.

Type: *string*

### **nextState**
`nextState?: string;`

Specifies the state to transition to. 

Type: *string*

### **players**
`players?: string[];`

A list of players the animation will be visible to.

Type: *string*[]

### **stopExpression**
`stopExpression?: string;`

Specifies a Molang expression for when this animation should complete.

Type: *string*
