---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-ui-1xx.FormResponse Class
description: Contents of the @minecraft/server-ui.FormResponse class (Version 1.x.x).
---
# FormResponse Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server-ui/FormResponse.md).

## Classes that extend FormResponse
- [*ActionFormResponse*](ActionFormResponse.md)
- [*MessageFormResponse*](MessageFormResponse.md)
- [*ModalFormResponse*](ModalFormResponse.md)

Base type for a form response.

## Properties

### **cancelationReason**
`read-only cancelationReason?: FormCancelationReason;`

Contains additional details as to why a form was canceled.

Type: [*FormCancelationReason*](FormCancelationReason.md)

### **canceled**
`read-only canceled: boolean;`

If true, the form was canceled by the player (e.g., they selected the pop-up X close button).

Type: *boolean*
