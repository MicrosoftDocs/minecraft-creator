---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.BookErrorReason Enumeration
description: Contents of the @minecraft/server.BookErrorReason enumeration.
monikerRange: "=minecraft-bedrock-experimental"
---
# BookErrorReason Enumeration

> [!CAUTION]
> This enum is still in pre-release.  Its signature may change or it may be removed in future releases.

An enum of error reasons relating to using [*@minecraft/server.ItemBookComponent*](../../../scriptapi/minecraft/server/ItemBookComponent.md).

## Constants
### **ExceedsMaxPageLength**
`ExceedsMaxPageLength = "ExceedsMaxPageLength"`

The requested page content exceeds the max page length of 256.
### **ExceedsMaxPages**
`ExceedsMaxPages = "ExceedsMaxPages"`

The page could not be created as it would exceed the max page count of 50.
### **ExceedsTitleLength**
`ExceedsTitleLength = "ExceedsTitleLength"`

The title being signed exceeds the maximum title length of 16.
