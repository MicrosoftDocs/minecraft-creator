---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft-ui.FormResponse Class
description: Contents of the mojang-minecraft-ui.FormResponse class.
---
# FormResponse Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Classes that extend FormResponse
- [*ActionFormResponse*](ActionFormResponse.md)
- [*MessageFormResponse*](MessageFormResponse.md)
- [*ModalFormResponse*](ModalFormResponse.md)

Base type for a form response.

## Properties

### **cancelationReason**
`read-only cancelationReason: FormCancelationReason;`

Contains additional details as to why a form was canceled.

Type: [*FormCancelationReason*](FormCancelationReason.md)

### **canceled**
`read-only canceled: boolean;`

If true, the form was canceled by the player (e.g., they selected the pop-up X close button).

Type: *boolean*
