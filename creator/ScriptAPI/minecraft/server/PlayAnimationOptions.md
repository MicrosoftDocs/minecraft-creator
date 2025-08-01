---
# DO NOT TOUCH — This file was automatically generated by @minecraft/api-docs-generator, to report problems file an issue at https://github.com/Mojang/minecraft-scripting-libraries
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.PlayAnimationOptions Interface
description: Contents of the @minecraft/server.PlayAnimationOptions class.
---
# PlayAnimationOptions Interface

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
`players?: Player[];`

A list of players the animation will be visible to.

Type: [*Player*](Player.md)[]

### **stopExpression**
`stopExpression?: string;`

Specifies a Molang expression for when this animation should complete.

Type: *string*
