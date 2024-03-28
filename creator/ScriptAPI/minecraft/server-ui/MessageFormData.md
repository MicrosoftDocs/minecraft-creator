---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-ui.MessageFormData Class
description: Contents of the @minecraft/server-ui.MessageFormData class.
---
# MessageFormData Class

Builds a simple two-button modal dialog.

#### Examples
##### ***messageFormSimple.ts***
```typescript
import { Player } from '@minecraft/server';
import { MessageFormResponse, MessageFormData } from '@minecraft/server-ui';

function showMessage(player: Player) {
    const messageForm = new MessageFormData()
        .title({ translate: 'permissions.removeplayer' }) // "Remove player"
        .body({ translate: 'accessibility.list.or.two', with: ['Player 1', 'Player 2'] }) // "Player 1 or Player 2"
        .button1('Player 1')
        .button2('Player 2');

    messageForm
        .show(player)
        .then((formData: MessageFormResponse) => {
            // player canceled the form, or another dialog was up and open.
            if (formData.canceled || formData.selection === undefined) {
                return;
            }

            player.sendMessage(`You selected ${formData.selection === 0 ? 'Player 1' : 'Player 2'}`);
        })
        .catch((error: Error) => {
            player.sendMessage('Failed to show form: ' + error);
        });
}
```

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

**Returns** [*MessageFormData*](MessageFormData.md)

### **body**
`
body(bodyText: minecraftserver.RawMessage | string): MessageFormData
`

Method that sets the body text for the modal form.

#### **Parameters**
- **bodyText**: [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*

**Returns** [*MessageFormData*](MessageFormData.md)

### **button1**
`
button1(text: minecraftserver.RawMessage | string): MessageFormData
`

Method that sets the text for the first button of the dialog.

#### **Parameters**
- **text**: [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*

**Returns** [*MessageFormData*](MessageFormData.md)

### **button2**
`
button2(text: minecraftserver.RawMessage | string): MessageFormData
`

This method sets the text for the second button on the dialog.

#### **Parameters**
- **text**: [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*

**Returns** [*MessageFormData*](MessageFormData.md)

### **show**
`
show(player: minecraftserver.Player): Promise<MessageFormResponse>
`

Creates and shows this modal popup form. Returns asynchronously when the player confirms or cancels the dialog.

#### **Parameters**
- **player**: [*@minecraft/server.Player*](../../minecraft/server/Player.md)
  
  Player to show this dialog to.

**Returns** Promise&lt;[*MessageFormResponse*](MessageFormResponse.md)&gt;

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **title**
`
title(titleText: minecraftserver.RawMessage | string): MessageFormData
`

This builder method sets the title for the modal dialog.

#### **Parameters**
- **titleText**: [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*

**Returns** [*MessageFormData*](MessageFormData.md)

#### Examples
##### ***messageFormSimple.ts***
```typescript
import { Player } from '@minecraft/server';
import { MessageFormResponse, MessageFormData } from '@minecraft/server-ui';

function showMessage(player: Player) {
    const messageForm = new MessageFormData()
        .title({ translate: 'permissions.removeplayer' }) // "Remove player"
        .body({ translate: 'accessibility.list.or.two', with: ['Player 1', 'Player 2'] }) // "Player 1 or Player 2"
        .button1('Player 1')
        .button2('Player 2');

    messageForm
        .show(player)
        .then((formData: MessageFormResponse) => {
            // player canceled the form, or another dialog was up and open.
            if (formData.canceled || formData.selection === undefined) {
                return;
            }

            player.sendMessage(`You selected ${formData.selection === 0 ? 'Player 1' : 'Player 2'}`);
        })
        .catch((error: Error) => {
            player.sendMessage('Failed to show form: ' + error);
        });
}
```
