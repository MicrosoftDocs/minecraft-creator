---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-ui.ModalFormDataDropdownOptions Interface
description: Contents of the @minecraft/server-ui.ModalFormDataDropdownOptions class.
monikerRange: "=minecraft-bedrock-experimental"
---
# ModalFormDataDropdownOptions Interface

> [!CAUTION]
> This interface is still in pre-release.  Its signature may change or it may be removed in future releases.

An interface that is passed into {@link @minecraft/Server-ui.ModalFormData.dropdown} to provide additional options for the dropdown creation.

## Properties

### **defaultValueIndex**
`defaultValueIndex?: number;`

The default selected item index. It will be zero in case of not setting this value.

Type: *number*

### **tooltip**
`tooltip?: minecraftserver.RawMessage | string;`

It will show an exclamation icon that will display a tooltip if it is hovered.

Type: [*@minecraft/server.RawMessage*](../../../scriptapi/minecraft/server/RawMessage.md) | *string*
