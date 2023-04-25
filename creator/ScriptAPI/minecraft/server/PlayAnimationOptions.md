---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.PlayAnimationOptions Interface
description: Contents of the @minecraft/server.PlayAnimationOptions class.
---
# PlayAnimationOptions Interface
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This interface is still in pre-release.  Its signature may change or it may be removed in future releases.

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

### **stopExpression**
`stopExpression?: string;`

Specifies a Molang expression for when this animation should complete.

Type: *string*
