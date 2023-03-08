---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server-ui.MessageFormData Class
description: Contents of the @minecraft/server-ui.MessageFormData class.
---
# MessageFormData Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
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
body(bodyText: minecraftserver.RawMessage | string): MessageFormData
`

Method that sets the body text for the modal form.

#### **Parameters**
- **bodyText**: [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*

#### **Returns** [*MessageFormData*](MessageFormData.md)

### **button1**
`
button1(text: minecraftserver.RawMessage | string): MessageFormData
`

Method that sets the text for the first button of the dialog.

#### **Parameters**
- **text**: [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*

#### **Returns** [*MessageFormData*](MessageFormData.md)

### **button2**
`
button2(text: minecraftserver.RawMessage | string): MessageFormData
`

This method sets the text for the second button on the dialog.

#### **Parameters**
- **text**: [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*

#### **Returns** [*MessageFormData*](MessageFormData.md)

### **show**
`
show(player: minecraftserver.Player): Promise<MessageFormResponse>
`

Creates and shows this modal popup form. Returns asynchronously when the player confirms or cancels the dialog.

#### **Parameters**
- **player**: [*@minecraft/server.Player*](../../minecraft/server/Player.md)
  
  Player to show this dialog to.

#### **Returns** Promise&lt;[*MessageFormResponse*](MessageFormResponse.md)&gt;

> [!WARNING]
> This function can throw errors.

### **title**
`
title(titleText: minecraftserver.RawMessage | string): MessageFormData
`

This builder method sets the title for the modal dialog.

#### **Parameters**
- **titleText**: [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*

#### **Returns** [*MessageFormData*](MessageFormData.md)
