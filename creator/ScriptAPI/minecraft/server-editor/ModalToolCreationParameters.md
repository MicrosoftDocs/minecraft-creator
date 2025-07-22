---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-editor.ModalToolCreationParameters Interface
description: Contents of the @minecraft/server-editor.ModalToolCreationParameters class.
---
# ModalToolCreationParameters Interface

Parameters for creating a modal tool in the tool container

## Properties

### **action**
`action?: RegisteredAction<NoArgsAction>;`

Action associated with tool activation

Type: *RegisteredAction<NoArgsAction>*

### **icon**
`icon?: string;`

Icon resource

Type: *string*

### **title**
`title?: string;`

Localized title of the tool

Type: *string*

### **tooltip**
`tooltip?: BasicTooltipContent;`

Tooltip description of the tool

Type: *BasicTooltipContent*
