---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-ui.ModalFormDataTextFieldOptions Interface
description: Contents of the @minecraft/server-ui.ModalFormDataTextFieldOptions class.
monikerRange: "=minecraft-bedrock-experimental"
---
# ModalFormDataTextFieldOptions Interface

> [!CAUTION]
> This interface is still in pre-release.  Its signature may change or it may be removed in future releases.

An interface that is passed into {@link @minecraft/Server-ui.ModalFormData.textField} to provide additional options for the textfield creation.

## Properties

### **defaultValue**
`defaultValue?: string;`

The default value for the textfield.

Type: *string*

### **tooltip**
`tooltip?: minecraftserver.RawMessage | string;`

It will show an exclamation icon that will display a tooltip if it is hovered.

Type: [*@minecraft/server.RawMessage*](../../../scriptapi/minecraft/server/RawMessage.md) | *string*
