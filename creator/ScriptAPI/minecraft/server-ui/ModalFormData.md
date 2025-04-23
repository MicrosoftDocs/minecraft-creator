---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-ui.ModalFormData Class
description: Contents of the @minecraft/server-ui.ModalFormData class.
---
# ModalFormData Class

Used to create a fully customizable pop-up form for a player.

## Methods
- [constructor](#constructor)
- [divider](#divider)
- [dropdown](#dropdown)
- [header](#header)
- [label](#label)
- [show](#show)
- [slider](#slider)
- [submitButton](#submitbutton)
- [textField](#textfield)
- [title](#title)
- [toggle](#toggle)

### **constructor**
`
new ModalFormData()
`

Creates a new modal form builder.

**Returns** [*ModalFormData*](ModalFormData.md)

### **divider**
`
divider(): ModalFormData
`

Adds a section divider to the form.

**Returns** [*ModalFormData*](ModalFormData.md)

### **dropdown**
`
dropdown(label: minecraftserver.RawMessage | string, items: (minecraftserver.RawMessage | string)[], dropdownOptions?: ModalFormDataDropdownOptions): ModalFormData
`

Adds a dropdown with choices to the form.

#### **Parameters**
- **label**: [*@minecraft/server.RawMessage*](../../../scriptapi/minecraft/server/RawMessage.md) | *string*
  
  The label to display for the dropdown.
- **items**: ([*@minecraft/server.RawMessage*](../../../scriptapi/minecraft/server/RawMessage.md) | *string*)[]
  
  The selectable items for the dropdown.
- **dropdownOptions**?: [*ModalFormDataDropdownOptions*](ModalFormDataDropdownOptions.md) = `null`
  
  The optional additional values for the dropdown creation.

**Returns** [*ModalFormData*](ModalFormData.md)

### **header**
`
header(text: minecraftserver.RawMessage | string): ModalFormData
`

Adds a header to the form.

#### **Parameters**
- **text**: [*@minecraft/server.RawMessage*](../../../scriptapi/minecraft/server/RawMessage.md) | *string*
  
  Text to display.

**Returns** [*ModalFormData*](ModalFormData.md)

### **label**
`
label(text: minecraftserver.RawMessage | string): ModalFormData
`

Adds a label to the form.

#### **Parameters**
- **text**: [*@minecraft/server.RawMessage*](../../../scriptapi/minecraft/server/RawMessage.md) | *string*
  
  Text to display.

**Returns** [*ModalFormData*](ModalFormData.md)

### **show**
`
show(player: minecraftserver.Player): Promise<ModalFormResponse>
`

Creates and shows this modal popup form. Returns asynchronously when the player confirms or cancels the dialog.

#### **Parameters**
- **player**: [*@minecraft/server.Player*](../../../scriptapi/minecraft/server/Player.md)
  
  Player to show this dialog to.

**Returns** Promise&lt;[*ModalFormResponse*](ModalFormResponse.md)&gt;
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*@minecraft/common.EngineError*](../../../scriptapi/minecraft/common/EngineError.md), [*@minecraft/server.InvalidEntityError*](../../../scriptapi/minecraft/server/InvalidEntityError.md), [*@minecraft/server.RawMessageError*](../../../scriptapi/minecraft/server/RawMessageError.md)

### **slider**
`
slider(label: minecraftserver.RawMessage | string, minimumValue: number, maximumValue: number, sliderOptions?: ModalFormDataSliderOptions): ModalFormData
`

Adds a numeric slider to the form.

#### **Parameters**
- **label**: [*@minecraft/server.RawMessage*](../../../scriptapi/minecraft/server/RawMessage.md) | *string*
  
  The label to display for the slider.
- **minimumValue**: *number*
  
  The minimum selectable possible value.
- **maximumValue**: *number*
  
  The maximum selectable possible value.
- **sliderOptions**?: [*ModalFormDataSliderOptions*](ModalFormDataSliderOptions.md) = `null`
  
  The optional additional values for the slider creation.

**Returns** [*ModalFormData*](ModalFormData.md)

### **submitButton**
`
submitButton(submitButtonText: minecraftserver.RawMessage | string): ModalFormData
`

#### **Parameters**
- **submitButtonText**: [*@minecraft/server.RawMessage*](../../../scriptapi/minecraft/server/RawMessage.md) | *string*

**Returns** [*ModalFormData*](ModalFormData.md)

### **textField**
`
textField(label: minecraftserver.RawMessage | string, placeholderText: minecraftserver.RawMessage | string, textFieldOptions?: ModalFormDataTextFieldOptions): ModalFormData
`

Adds a textbox to the form.

#### **Parameters**
- **label**: [*@minecraft/server.RawMessage*](../../../scriptapi/minecraft/server/RawMessage.md) | *string*
  
  The label to display for the textfield.
- **placeholderText**: [*@minecraft/server.RawMessage*](../../../scriptapi/minecraft/server/RawMessage.md) | *string*
  
  The place holder text to display.
- **textFieldOptions**?: [*ModalFormDataTextFieldOptions*](ModalFormDataTextFieldOptions.md) = `null`
  
  The optional additional values for the textfield creation.

**Returns** [*ModalFormData*](ModalFormData.md)

### **title**
`
title(titleText: minecraftserver.RawMessage | string): ModalFormData
`

This builder method sets the title for the modal dialog.

#### **Parameters**
- **titleText**: [*@minecraft/server.RawMessage*](../../../scriptapi/minecraft/server/RawMessage.md) | *string*

**Returns** [*ModalFormData*](ModalFormData.md)

### **toggle**
`
toggle(label: minecraftserver.RawMessage | string, toggleOptions?: ModalFormDataToggleOptions): ModalFormData
`

Adds a toggle checkbox button to the form.

#### **Parameters**
- **label**: [*@minecraft/server.RawMessage*](../../../scriptapi/minecraft/server/RawMessage.md) | *string*
  
  The label to display for the toggle.
- **toggleOptions**?: [*ModalFormDataToggleOptions*](ModalFormDataToggleOptions.md) = `null`
  
  The optional additional values for the toggle creation.

**Returns** [*ModalFormData*](ModalFormData.md)

#### Examples

##### ***showBasicModalForm.ts***

```typescript
import { world, DimensionLocation } from "@minecraft/server";
import { ModalFormData } from "@minecraft/server-ui";

function showBasicModalForm(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const players = world.getPlayers();

  const modalForm = new ModalFormData().title("Example Modal Controls for §o§7ModalFormData§r");

  modalForm.toggle("Toggle w/o default");
  modalForm.toggle("Toggle w/ default", true);

  modalForm.slider("Slider w/o default", 0, 50, 5);
  modalForm.slider("Slider w/ default", 0, 50, 5, 30);

  modalForm.dropdown("Dropdown w/o default", ["option 1", "option 2", "option 3"]);
  modalForm.dropdown("Dropdown w/ default", ["option 1", "option 2", "option 3"], 2);

  modalForm.textField("Input w/o default", "type text here");
  modalForm.textField("Input w/ default", "type text here", "this is default");

  modalForm
    .show(players[0])
    .then((formData) => {
      players[0].sendMessage(`Modal form results: ${JSON.stringify(formData.formValues, undefined, 2)}`);
    })
    .catch((error: Error) => {
      log("Failed to show form: " + error);
      return -1;
    });
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/showBasicModalForm.ts) code sandbox.
