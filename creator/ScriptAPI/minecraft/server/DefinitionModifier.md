---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.DefinitionModifier Interface
description: Contents of the @minecraft/server.DefinitionModifier class.
---
# DefinitionModifier Interface

Contains a set of updates to the component definition state of an entity.

## Properties

### **addedComponentGroups**
`addedComponentGroups: string[];`

Retrieves the list of component groups that will be added via this definition modification.

Type: *string*[]

### **removedComponentGroups**
`removedComponentGroups: string[];`

The list of component groups that will be removed via this definition modification.

Type: *string*[]

::: moniker range="=minecraft-bedrock-experimental"
### **triggers**
`triggers: Trigger[];`

The list of entity definition events that will be fired via this update.

Type: [*Trigger*](Trigger.md)[]

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.
::: moniker-end
