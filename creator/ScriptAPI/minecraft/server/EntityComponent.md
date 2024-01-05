---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EntityComponent Class
description: Contents of the @minecraft/server.EntityComponent class.
---
# EntityComponent Class

## Extends
- [*Component*](Component.md)

Base class for downstream entity components.

## Properties

::: moniker range="=minecraft-bedrock-experimental"
### **entity**
`read-only entity?: Entity;`

The entity that owns this component. The entity will be undefined if it has been removed.

Type: [*Entity*](Entity.md)

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.
::: moniker-end
