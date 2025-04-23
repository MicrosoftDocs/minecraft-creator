---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-ui.ModalFormDataSliderOptions Interface
description: Contents of the @minecraft/server-ui.ModalFormDataSliderOptions class.
---
# ModalFormDataSliderOptions Interface

An interface that is passed into {@link @minecraft/Server-ui.ModalFormData.slider} to provide additional options for the slider creation.

## Properties

### **defaultValue**
`defaultValue?: number;`

The default value for the slider.

Type: *number*

### **tooltip**
`tooltip?: minecraftserver.RawMessage | string;`

It will show an exclamation icon that will display a tooltip if it is hovered.

Type: [*@minecraft/server.RawMessage*](../../../scriptapi/minecraft/server/RawMessage.md) | *string*

### **valueStep**
`valueStep?: number;`

Defines the increment of values that the slider generates when moved. It will be '1' in case of not providing this.

Type: *number*
