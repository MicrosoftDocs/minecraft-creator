---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft-ui.MessageFormData Class
description: Contents of the mojang-minecraft-ui.MessageFormData class.
---
# MessageFormData Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Builds a simple two-button modal dialog.

## Methods
- [constructor](#constructor)
- [body](#body)
- [button1](#button1)
- [button2](#button2)
- [show](#show)
- [title](#title)

### **constructor**
`
new MessageFormData()
`
Creates a new modal form builder.

#### **Returns** [*MessageFormData*](MessageFormData.md)

### **body**
`
body(bodyText: string): MessageFormData
`
Method that sets the body text for the modal form.

#### **Parameters**
- **bodyText**: *string*

#### **Returns** [*MessageFormData*](MessageFormData.md)

### **button1**
`
button1(text: string): MessageFormData
`
Method that sets the text for the first button of the dialog.

#### **Parameters**
- **text**: *string*

#### **Returns** [*MessageFormData*](MessageFormData.md)

### **button2**
`
button2(text: string): MessageFormData
`
This method sets the text for the second button on the dialog.

#### **Parameters**
- **text**: *string*

#### **Returns** [*MessageFormData*](MessageFormData.md)

### **show**
`
show(player: mojang-minecraft.Player): Promise<MessageFormResponse>
`
Creates and shows this modal popup form. Returns asynchronously when the player confirms or cancels the dialog.

#### **Parameters**
- **player**: [*mojang-minecraft.Player*](../mojang-minecraft/Player.md)
  
  Player to show this dialog to.

#### **Returns** Promise&lt;[*MessageFormResponse*](MessageFormResponse.md)&gt;
> [!WARNING]
> This function can throw errors.

### **title**
`
title(titleText: string): MessageFormData
`
This builder method sets the title for the modal dialog.

#### **Parameters**
- **titleText**: *string*

#### **Returns** [*MessageFormData*](MessageFormData.md)
