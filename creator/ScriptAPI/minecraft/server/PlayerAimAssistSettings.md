---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.PlayerAimAssistSettings Interface
description: Contents of the @minecraft/server.PlayerAimAssistSettings class.
monikerRange: "=minecraft-bedrock-experimental"
---
# PlayerAimAssistSettings Interface

> [!CAUTION]
> This interface is still in pre-release.  Its signature may change or it may be removed in future releases.
 
## Required Experiments
- Camera Aim Assist


Settings relating to a player's aim-assist targeting.

## Properties

### **distance**
`distance?: number;`

The view distance limit to use for aim-assist targeting.

Type: *number*

### **presetId**
`presetId: string;`

The Id of the aim-assist preset to activate. Must have a namespace.

Type: *string*

### **targetMode**
`targetMode?: AimAssistTargetMode;`

The mode to use for aim-assist targeting.

Type: [*AimAssistTargetMode*](AimAssistTargetMode.md)

### **viewAngle**
`viewAngle?: Vector2;`

The view angle limit to use for aim-assist targeting.

Type: [*Vector2*](Vector2.md)