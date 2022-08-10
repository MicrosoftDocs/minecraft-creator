---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft-ui.ModalFormData Class
description: Contents of the mojang-minecraft-ui.ModalFormData class.
---
# ModalFormData Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Used to create a fully customizable pop-up form for a player.

## Methods
- [constructor](#constructor)
- [dropdown](#dropdown)
- [icon](#icon)
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
dropdown(label: string, options: string[], defaultValueIndex?: number): ModalFormData
`
Adds a dropdown with choices to the form.

#### **Parameters**
- **label**: *string*
- **options**: *string*[]
- **defaultValueIndex**?: *number* = `null`

#### **Returns** [*ModalFormData*](ModalFormData.md)

### **icon**
`
icon(iconPath: string): ModalFormData
`
Adds an icon to the form using a graphic resource from a resource pack.

#### **Parameters**
- **iconPath**: *string*

#### **Returns** [*ModalFormData*](ModalFormData.md)

### **show**
`
show(player: mojang-minecraft.Player): Promise<ModalFormResponse>
`
Creates and shows this modal popup form. Returns asynchronously when the player confirms or cancels the dialog.

#### **Parameters**
- **player**: [*mojang-minecraft.Player*](../mojang-minecraft/Player.md)
  
  Player to show this dialog to.

#### **Returns** Promise&lt;[*ModalFormResponse*](ModalFormResponse.md)&gt;
> [!WARNING]
> This function can throw errors.

### **slider**
`
slider(label: string, minimumValue: number, maximumValue: number, valueStep: number, defaultValue?: number): ModalFormData
`
Adds a numeric slider to the form.

#### **Parameters**
- **label**: *string*
- **minimumValue**: *number*
- **maximumValue**: *number*
- **valueStep**: *number*
- **defaultValue**?: *number* = `null`

#### **Returns** [*ModalFormData*](ModalFormData.md)

### **textField**
`
textField(label: string, placeholderText: string, defaultValue?: string): ModalFormData
`
Adds a textbox to the form.

#### **Parameters**
- **label**: *string*
- **placeholderText**: *string*
- **defaultValue**?: *string* = `null`

#### **Returns** [*ModalFormData*](ModalFormData.md)

### **title**
`
title(titleText: string): ModalFormData
`
This builder method sets the title for the modal dialog.

#### **Parameters**
- **titleText**: *string*

#### **Returns** [*ModalFormData*](ModalFormData.md)

### **toggle**
`
toggle(label: string, defaultValue?: boolean): ModalFormData
`
Adds a toggle checkbox button to the form.

#### **Parameters**
- **label**: *string*
- **defaultValue**?: *boolean* = `null`

#### **Returns** [*ModalFormData*](ModalFormData.md)
