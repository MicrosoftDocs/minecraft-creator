---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-ui.ModalFormData Class
description: Contents of the @minecraft/server-ui.ModalFormData class.
---
# ModalFormData Class

Used to create a fully customizable pop-up form for a player.

#### Examples
##### ***modalFormSimple.ts***
```typescript
import { Player } from '@minecraft/server';
import { ModalFormData } from '@minecraft/server-ui';

function showExampleModal(player: Player) {
    const modalForm = new ModalFormData().title('Example Modal Controls for §o§7ModalFormData§r');

    modalForm.toggle('Toggle w/o default');
    modalForm.toggle('Toggle w/ default', true);

    modalForm.slider('Slider w/o default', 0, 50, 5);
    modalForm.slider('Slider w/ default', 0, 50, 5, 30);

    modalForm.dropdown('Dropdown w/o default', ['option 1', 'option 2', 'option 3']);
    modalForm.dropdown('Dropdown w/ default', ['option 1', 'option 2', 'option 3'], 2);

    modalForm.textField('Input w/o default', 'type text here');
    modalForm.textField('Input w/ default', 'type text here', 'this is default');

    modalForm
        .show(player)
        .then(formData => {
            player.sendMessage(`Modal form results: ${JSON.stringify(formData.formValues, undefined, 2)}`);
        })
        .catch((error: Error) => {
            player.sendMessage('Failed to show form: ' + error);
            return -1;
        });
}
```

## Methods
- [constructor](#constructor)
- [dropdown](#dropdown)
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

### **dropdown**
`
dropdown(label: minecraftserver.RawMessage | string, options: (minecraftserver.RawMessage | string)[], defaultValueIndex?: number): ModalFormData
`

Adds a dropdown with choices to the form.

#### **Parameters**
- **label**: [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*
- **options**: ([*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*)[]
- **defaultValueIndex**?: *number* = `null`

**Returns** [*ModalFormData*](ModalFormData.md)

### **show**
`
show(player: minecraftserver.Player): Promise<ModalFormResponse>
`

Creates and shows this modal popup form. Returns asynchronously when the player confirms or cancels the dialog.

#### **Parameters**
- **player**: [*@minecraft/server.Player*](../../minecraft/server/Player.md)
  
  Player to show this dialog to.

**Returns** Promise&lt;[*ModalFormResponse*](ModalFormResponse.md)&gt;

> [!IMPORTANT]
> This function can't be called in read-only mode.

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

**Returns** [*ModalFormData*](ModalFormData.md)

### **submitButton**
`
submitButton(submitButtonText: minecraftserver.RawMessage | string): ModalFormData
`

#### **Parameters**
- **submitButtonText**: [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*

**Returns** [*ModalFormData*](ModalFormData.md)

### **textField**
`
textField(label: minecraftserver.RawMessage | string, placeholderText: minecraftserver.RawMessage | string, defaultValue?: minecraftserver.RawMessage | string): ModalFormData
`

Adds a textbox to the form.

#### **Parameters**
- **label**: [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*
- **placeholderText**: [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*
- **defaultValue**?: [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string* = `null`

**Returns** [*ModalFormData*](ModalFormData.md)

### **title**
`
title(titleText: minecraftserver.RawMessage | string): ModalFormData
`

This builder method sets the title for the modal dialog.

#### **Parameters**
- **titleText**: [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*

**Returns** [*ModalFormData*](ModalFormData.md)

### **toggle**
`
toggle(label: minecraftserver.RawMessage | string, defaultValue?: boolean): ModalFormData
`

Adds a toggle checkbox button to the form.

#### **Parameters**
- **label**: [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*
- **defaultValue**?: *boolean* = `null`

**Returns** [*ModalFormData*](ModalFormData.md)

#### Examples
##### ***modalFormSimple.ts***
```typescript
import { Player } from '@minecraft/server';
import { ModalFormData } from '@minecraft/server-ui';

function showExampleModal(player: Player) {
    const modalForm = new ModalFormData().title('Example Modal Controls for §o§7ModalFormData§r');

    modalForm.toggle('Toggle w/o default');
    modalForm.toggle('Toggle w/ default', true);

    modalForm.slider('Slider w/o default', 0, 50, 5);
    modalForm.slider('Slider w/ default', 0, 50, 5, 30);

    modalForm.dropdown('Dropdown w/o default', ['option 1', 'option 2', 'option 3']);
    modalForm.dropdown('Dropdown w/ default', ['option 1', 'option 2', 'option 3'], 2);

    modalForm.textField('Input w/o default', 'type text here');
    modalForm.textField('Input w/ default', 'type text here', 'this is default');

    modalForm
        .show(player)
        .then(formData => {
            player.sendMessage(`Modal form results: ${JSON.stringify(formData.formValues, undefined, 2)}`);
        })
        .catch((error: Error) => {
            player.sendMessage('Failed to show form: ' + error);
            return -1;
        });
}
```
