---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.InventoryItemEventOptions Interface
description: Contents of the @minecraft/server.InventoryItemEventOptions class.
---
# InventoryItemEventOptions Interface

Contains additional filtering options for inventory item events.

## Properties

### **allowedSlots**
`allowedSlots?: number[];`

The slot indexes to consider. Values should be positive numbers. If not specified, all slots are considered.

Type: *number*[]

### **excludeItems**
`excludeItems?: string[];`

The names for the items to exclude.

Type: *string*[]

### **excludeTags**
`excludeTags?: string[];`

The item tags to exclude.

Type: *string*[]

### **ignoreQuantityChange**
`ignoreQuantityChange?: boolean;`

Flag to specify to ignore quantity changes only. True to ignore quantity changes, false to not ignore quantity changes.

Type: *boolean*

### **includeItems**
`includeItems?: string[];`

The item names to consider.

Type: *string*[]

### **includeTags**
`includeTags?: string[];`

The item tags to consider.

Type: *string*[]

### **inventoryType**
`inventoryType?: PlayerInventoryType;`

The player inventory type to consider.

Type: [*PlayerInventoryType*](PlayerInventoryType.md)
