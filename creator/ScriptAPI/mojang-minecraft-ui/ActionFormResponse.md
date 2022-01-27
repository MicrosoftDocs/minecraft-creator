---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft-ui.ActionFormResponse Class
description: Contents of the mojang-minecraft-ui.ActionFormResponse class.
---
# ActionFormResponse Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Base Types
- [*FormResponse*](FormResponse.md)

Returns data about the player results from a modal action form.

## Properties
### **isCanceled**
`read-only isCanceled: boolean;`

If true, the form was canceled by the player (e.g., they selected the pop-up X close button).

Type: *boolean*


### **selection**
`read-only selection: number;`

Returns the index of the button that was pushed.

Type: *number*




