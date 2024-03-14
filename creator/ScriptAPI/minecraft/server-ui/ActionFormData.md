---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-ui.ActionFormData Class
description: Contents of the @minecraft/server-ui.ActionFormData class.
---
# ActionFormData Class

Builds a simple player form with buttons that let the player take action.

#### Examples
##### ***actionFormAskFavoriteMonth.ts***
```typescript
import { Player } from '@minecraft/server';
import { ActionFormData, ActionFormResponse } from '@minecraft/server-ui';

function askFavoriteMonth(player: Player) {
    const form = new ActionFormData()
        .title('Months')
        .body('Choose your favorite month!')
        .button('January')
        .button('February')
        .button('March')
        .button('April')
        .button('May');

    form.show(player).then((response: ActionFormResponse) => {
        if (response.selection === 3) {
            player.sendMessage('I like April too!');
        } else {
            player.sendMessage('Nah, April is the best.');
        }
    });
}
```

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

**Returns** [*ActionFormData*](ActionFormData.md)

### **body**
`
body(bodyText: minecraftserver.RawMessage | string): ActionFormData
`

Method that sets the body text for the modal form.

#### **Parameters**
- **bodyText**: [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*

**Returns** [*ActionFormData*](ActionFormData.md)

### **button**
`
button(text: minecraftserver.RawMessage | string, iconPath?: string): ActionFormData
`

Adds a button to this form with an icon from a resource pack.

#### **Parameters**
- **text**: [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*
- **iconPath**?: *string* = `null`

**Returns** [*ActionFormData*](ActionFormData.md)

### **show**
`
show(player: minecraftserver.Player): Promise<ActionFormResponse>
`

Creates and shows this modal popup form. Returns asynchronously when the player confirms or cancels the dialog.

#### **Parameters**
- **player**: [*@minecraft/server.Player*](../../minecraft/server/Player.md)
  
  Player to show this dialog to.

**Returns** Promise&lt;[*ActionFormResponse*](ActionFormResponse.md)&gt;

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **title**
`
title(titleText: minecraftserver.RawMessage | string): ActionFormData
`

This builder method sets the title for the modal dialog.

#### **Parameters**
- **titleText**: [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*

**Returns** [*ActionFormData*](ActionFormData.md)

#### Examples
##### ***actionFormAskFavoriteMonth.ts***
```typescript
import { Player } from '@minecraft/server';
import { ActionFormData, ActionFormResponse } from '@minecraft/server-ui';

function askFavoriteMonth(player: Player) {
    const form = new ActionFormData()
        .title('Months')
        .body('Choose your favorite month!')
        .button('January')
        .button('February')
        .button('March')
        .button('April')
        .button('May');

    form.show(player).then((response: ActionFormResponse) => {
        if (response.selection === 3) {
            player.sendMessage('I like April too!');
        } else {
            player.sendMessage('Nah, April is the best.');
        }
    });
}
```
