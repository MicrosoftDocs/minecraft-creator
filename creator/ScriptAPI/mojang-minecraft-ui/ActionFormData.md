---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft-ui.ActionFormData Class
description: Contents of the mojang-minecraft-ui.ActionFormData class.
---
# ActionFormData Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Builds a simple player form with buttons that let the player take action.

## Methods
- [constructor](#constructor)
- [body](#body)
- [button](#button)
- [show](#show)
- [title](#title)
  
### **constructor**
`
new ActionFormData()
`

Creates a new modal form builder.

#### **Returns** [*ActionFormData*](ActionFormData.md)


### **body**
`
body(bodyText: string): ActionFormData
`

Method that sets the body text for the modal form.
#### **Parameters**
- **bodyText**: *string*

#### **Returns** [*ActionFormData*](ActionFormData.md)


### **button**
`
button(text: string, iconPath?: string): ActionFormData
`

Adds a button to this form with an icon from a resource pack.
#### **Parameters**
- **text**: *string*
- **iconPath**?: *string* = `null`

#### **Returns** [*ActionFormData*](ActionFormData.md)


### **show**
`
show(player: mojang-minecraft.Player): Promise<ActionFormResponse>
`

Creates and shows this modal popup form. Returns asynchronously when the player confirms or cancels the dialog.
#### **Parameters**
- **player**: [*mojang-minecraft.Player*](../mojang-minecraft/Player.md)
  
  Player to show this dialog to.

#### **Returns** Promise&lt;[*ActionFormResponse*](ActionFormResponse.md)&gt;

> [!WARNING]
> This function can throw errors.

### **title**
`
title(titleText: string): ActionFormData
`

This builder method sets the title for the modal dialog.
#### **Parameters**
- **titleText**: *string*

#### **Returns** [*ActionFormData*](ActionFormData.md)


