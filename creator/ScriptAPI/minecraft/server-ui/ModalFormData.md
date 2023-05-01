---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server-ui.ModalFormData Class
description: Contents of the @minecraft/server-ui.ModalFormData class.
---
# ModalFormData Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
Used to create a fully customizable pop-up form for a player.

## Methods
- [constructor](#constructor)
- [dropdown](#dropdown)
- [show](#show)
- [slider](#slider)
- [textField](#textfield)
- [title](#title)
- [toggle](#toggle)

### **constructor**
`
new ModalFormData()
`

Creates a new modal form builder.

#### **Returns** [*ModalFormData*](ModalFormData.md)

### **dropdown**
`
dropdown(label: minecraftserver.RawMessage | string, options: (minecraftserver.RawMessage | string)[], defaultValueIndex?: number): ModalFormData
`

Adds a dropdown with choices to the form.

#### **Parameters**
- **label**: [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*
- **options**: ([*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*)[]
- **defaultValueIndex**?: *number* = `null`

#### **Returns** [*ModalFormData*](ModalFormData.md)

### **show**
`
show(player: minecraftserver.Player): Promise<ModalFormResponse>
`

Creates and shows this modal popup form. Returns asynchronously when the player confirms or cancels the dialog.

#### **Parameters**
- **player**: [*@minecraft/server.Player*](../../minecraft/server/Player.md)
  
  Player to show this dialog to.

#### **Returns** Promise&lt;[*ModalFormResponse*](ModalFormResponse.md)&gt;

> [!WARNING]
> This function can throw errors.

### **slider**
`
slider(label: minecraftserver.RawMessage | string, minimumValue: number, maximumValue: number, valueStep: number, defaultValue?: number): ModalFormData
`

Adds a numeric slider to the form.

#### **Parameters**
- **label**: [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*
- **minimumValue**: *number*
- **maximumValue**: *number*
- **valueStep**: *number*
- **defaultValue**?: *number* = `null`

#### **Returns** [*ModalFormData*](ModalFormData.md)

### **textField**
`
textField(label: minecraftserver.RawMessage | string, placeholderText: minecraftserver.RawMessage | string, defaultValue?: string): ModalFormData
`

Adds a textbox to the form.

#### **Parameters**
- **label**: [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*
- **placeholderText**: [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*
- **defaultValue**?: *string* = `null`

#### **Returns** [*ModalFormData*](ModalFormData.md)

### **title**
`
title(titleText: minecraftserver.RawMessage | string): ModalFormData
`

This builder method sets the title for the modal dialog.

#### **Parameters**
- **titleText**: [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*

#### **Returns** [*ModalFormData*](ModalFormData.md)

### **toggle**
`
toggle(label: minecraftserver.RawMessage | string, defaultValue?: boolean): ModalFormData
`

Adds a toggle checkbox button to the form.

#### **Parameters**
- **label**: [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*
- **defaultValue**?: *boolean* = `null`

#### **Returns** [*ModalFormData*](ModalFormData.md)
