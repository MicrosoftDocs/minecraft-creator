---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.WorldInitializeBeforeEvent Class
description: Contents of the @minecraft/server.WorldInitializeBeforeEvent class.
---
# WorldInitializeBeforeEvent Class

Contains information and methods that can be used at the initialization of the scripting environment for a World. Also, use the supplied blockRegistry object to register block custom components within the scope of the World Initialize execution.

## Properties

### **blockComponentRegistry**
`read-only blockComponentRegistry: BlockComponentRegistry;`

Type: [*BlockComponentRegistry*](BlockComponentRegistry.md)

### **itemComponentRegistry**
`read-only itemComponentRegistry: ItemComponentRegistry;`

Provides the functionality for registering custom components for items.

Type: [*ItemComponentRegistry*](ItemComponentRegistry.md)
