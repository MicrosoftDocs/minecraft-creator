---
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server-ui.ModalFormResponse Class
description: Contents of the @minecraft/server-ui.ModalFormResponse class.
---
# ModalFormResponse Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Extends
- [*FormResponse*](FormResponse.md)

Returns data about player responses to a modal form.

## Properties

### **cancelationReason**
`read-only cancelationReason?: FormCancelationReason;`

Contains additional details as to why a form was canceled.

Type: [*FormCancelationReason*](FormCancelationReason.md)

### **canceled**
`read-only canceled: boolean;`

If true, the form was canceled by the player (e.g., they selected the pop-up X close button).

Type: *boolean*

### **formValues**
`read-only formValues?: any[];`

An ordered set of values based on the order of controls specified by ModalFormData.

Type: *any*[]
