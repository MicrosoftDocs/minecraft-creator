---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.WorldInitializeBeforeEvent Class
description: Contents of the @minecraft/server.WorldInitializeBeforeEvent class.
monikerRange: "=minecraft-bedrock-experimental"
---
# WorldInitializeBeforeEvent Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Contains information and methods that can be used at the initialization of the scripting environment for a World. Also, use the supplied blockRegistry object to register block custom components within the scope of the World Initialize execution.

## Properties

### **blockTypeRegistry**
`read-only blockTypeRegistry: BlockTypeRegistry;`

Type: [*BlockTypeRegistry*](BlockTypeRegistry.md)
