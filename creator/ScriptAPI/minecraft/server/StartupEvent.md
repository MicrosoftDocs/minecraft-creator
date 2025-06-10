---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.StartupEvent Class
description: Contents of the @minecraft/server.StartupEvent class.
---
# StartupEvent Class

## Properties

### **blockComponentRegistry**
`read-only blockComponentRegistry: BlockComponentRegistry;`

Type: [*BlockComponentRegistry*](BlockComponentRegistry.md)

Notes:
  - This property can be read in early-execution mode.

::: moniker range="=minecraft-bedrock-experimental"
### **customCommandRegistry**
`read-only customCommandRegistry: CustomCommandRegistry;`

Type: [*CustomCommandRegistry*](CustomCommandRegistry.md)

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.

Notes:
  - This property can be read in early-execution mode.
::: moniker-end

### **itemComponentRegistry**
`read-only itemComponentRegistry: ItemComponentRegistry;`

Type: [*ItemComponentRegistry*](ItemComponentRegistry.md)

Notes:
  - This property can be read in early-execution mode.
