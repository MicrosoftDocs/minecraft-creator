---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.ContainerRulesErrorReason Enumeration
description: Contents of the @minecraft/server.ContainerRulesErrorReason enumeration.
monikerRange: "=minecraft-bedrock-experimental"
---
# ContainerRulesErrorReason Enumeration

> [!CAUTION]
> This enum is still in pre-release.  Its signature may change or it may be removed in future releases.

Reasons that the {@link @minecraft/server.ContainerRulesError} was thrown.

## Constants
### **BannedItem**
`BannedItem = "BannedItem"`

Thrown when trying to add item that was defined in [*@minecraft/server.ContainerRules.bannedItems*](../../../scriptapi/minecraft/server/ContainerRules.md#banneditems).
### **NestedStorageItem**
`NestedStorageItem = "NestedStorageItem"`

Thrown when trying to add item with `Storage Item` component to container with [*@minecraft/server.ContainerRules.allowNestedStorageItems*](../../../scriptapi/minecraft/server/ContainerRules.md#allownestedstorageitems) set to false.
### **NotAllowedItem**
`NotAllowedItem = "NotAllowedItem"`

Thrown when trying to add item not defined in non-empty [*@minecraft/server.ContainerRules.allowedItems*](../../../scriptapi/minecraft/server/ContainerRules.md#alloweditems).
### **OverWeightLimit**
`OverWeightLimit = "OverWeightLimit"`

Thrown when trying to add item that pushed the containers weight over the [*@minecraft/server.ContainerRules.weightLimit*](../../../scriptapi/minecraft/server/ContainerRules.md#weightlimit).
### **ZeroWeightItem**
`ZeroWeightItem = "ZeroWeightItem"`

Thrown when trying to add item with zero weight defined by the `Storage Weight Modifier` component to container with a defined [*@minecraft/server.ContainerRules.weightLimit*](../../../scriptapi/minecraft/server/ContainerRules.md#weightlimit)
