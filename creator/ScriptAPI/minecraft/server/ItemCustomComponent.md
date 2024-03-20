---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ItemCustomComponent Interface
description: Contents of the @minecraft/server.ItemCustomComponent class.
monikerRange: "=minecraft-bedrock-experimental"
---
# ItemCustomComponent Interface

> [!CAUTION]
> This interface is still in pre-release.  Its signature may change or it may be removed in future releases.

Contains a set of events that will be raised for an item. This object must be bound using the ItemComponentRegistry.

## Properties

### **onUse**
`onUse?: (arg: ItemComponentUseEvent) => void;`

This function will be called when an item containing this component is used by a player.

Type: (arg: [*ItemComponentUseEvent*](ItemComponentUseEvent.md)) => *void*
