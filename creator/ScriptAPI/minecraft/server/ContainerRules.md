---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.ContainerRules Interface
description: Contents of the @minecraft/server.ContainerRules class.
monikerRange: "=minecraft-bedrock-experimental"
---
# ContainerRules Interface

> [!CAUTION]
> This interface is still in pre-release.  Its signature may change or it may be removed in future releases.

Rules that if broken on container operations will throw an error.

## Properties

### **allowedItems**
`allowedItems: string[];`

Defines the items that are exclusively allowed in the container. If empty all items are allowed in the container.

Type: *string*[]

### **allowNestedStorageItems**
`allowNestedStorageItems: boolean;`

Determines whether other storage items can be placed into the container.

Type: *boolean*

### **bannedItems**
`bannedItems: string[];`

Defines the items that are not allowed in the container.

Type: *string*[]

### **weightLimit**
`weightLimit?: number;`

Defines the maximum allowed total weight of all items in the storage item container. If undefined container has no weight limit.

Type: *number*
