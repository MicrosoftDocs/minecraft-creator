---
# DO NOT TOUCH — This file was automatically generated by @minecraft/api-docs-generator, to report problems file an issue at https://github.com/Mojang/minecraft-scripting-libraries
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.EntityDefinitionFeedItem Class
description: Contents of the @minecraft/server.EntityDefinitionFeedItem class.
---
# EntityDefinitionFeedItem Class

As part of the Ageable component, represents a set of items that can be fed to an entity and the rate at which that causes them to grow.

## Properties

### **growth**
`read-only growth: number;`

The amount by which an entity's age will increase when fed this item. Values usually range between 0 and 1.

Type: *number*

### **item**
`read-only item: string;`

Identifier of type of item that can be fed. If a namespace is not specified, 'minecraft:' is assumed. Example values include 'wheat' or 'golden_apple'.

Type: *string*
