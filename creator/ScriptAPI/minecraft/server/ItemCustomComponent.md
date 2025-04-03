---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.ItemCustomComponent Interface
description: Contents of the @minecraft/server.ItemCustomComponent class.
---
# ItemCustomComponent Interface

Contains a set of events that will be raised for an item. This object must be bound using the ItemComponentRegistry.

## Properties

### **onBeforeDurabilityDamage**
`onBeforeDurabilityDamage?: (arg0: ItemComponentBeforeDurabilityDamageEvent, arg1: CustomComponentParameters) => void;`

This function will be called when an item containing this component is hitting an entity and about to take durability damage.

Type: (arg0: [*ItemComponentBeforeDurabilityDamageEvent*](ItemComponentBeforeDurabilityDamageEvent.md), arg1: [*CustomComponentParameters*](CustomComponentParameters.md)) => *void*

### **onCompleteUse**
`onCompleteUse?: (arg0: ItemComponentCompleteUseEvent, arg1: CustomComponentParameters) => void;`

This function will be called when an item containing this component's use duration was completed.

Type: (arg0: [*ItemComponentCompleteUseEvent*](ItemComponentCompleteUseEvent.md), arg1: [*CustomComponentParameters*](CustomComponentParameters.md)) => *void*

### **onConsume**
`onConsume?: (arg0: ItemComponentConsumeEvent, arg1: CustomComponentParameters) => void;`

This function will be called when an item containing this component is eaten by an entity.

Type: (arg0: [*ItemComponentConsumeEvent*](ItemComponentConsumeEvent.md), arg1: [*CustomComponentParameters*](CustomComponentParameters.md)) => *void*

### **onHitEntity**
`onHitEntity?: (arg0: ItemComponentHitEntityEvent, arg1: CustomComponentParameters) => void;`

This function will be called when an item containing this component is used to hit another entity.

Type: (arg0: [*ItemComponentHitEntityEvent*](ItemComponentHitEntityEvent.md), arg1: [*CustomComponentParameters*](CustomComponentParameters.md)) => *void*

### **onMineBlock**
`onMineBlock?: (arg0: ItemComponentMineBlockEvent, arg1: CustomComponentParameters) => void;`

This function will be called when an item containing this component is used to mine a block.

Type: (arg0: [*ItemComponentMineBlockEvent*](ItemComponentMineBlockEvent.md), arg1: [*CustomComponentParameters*](CustomComponentParameters.md)) => *void*

### **onUse**
`onUse?: (arg0: ItemComponentUseEvent, arg1: CustomComponentParameters) => void;`

This function will be called when an item containing this component is used by a player.

Type: (arg0: [*ItemComponentUseEvent*](ItemComponentUseEvent.md), arg1: [*CustomComponentParameters*](CustomComponentParameters.md)) => *void*

### **onUseOn**
`onUseOn?: (arg0: ItemComponentUseOnEvent, arg1: CustomComponentParameters) => void;`

This function will be called when an item containing this component is used on a block.

Type: (arg0: [*ItemComponentUseOnEvent*](ItemComponentUseOnEvent.md), arg1: [*CustomComponentParameters*](CustomComponentParameters.md)) => *void*
