---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-ui Module
description: Contents of the @minecraft/server-ui module
---
# `@minecraft/server-ui` Module

The `@minecraft/server-ui` module contains types for expressing simple dialog-based user experiences.



  * [*@minecraft/server-ui.ActionFormData*](../../minecraft/server-ui/ActionFormData.md) contain a list of buttons with captions and images that can be used for presenting a set of options to a player.

  * [*@minecraft/server-ui.MessageFormData*](../../minecraft/server-ui/MessageFormData.md) are simple two-button message experiences that are functional for Yes/No or OK/Cancel questions.

  * [*@minecraft/server-ui.ModalFormData*](../../minecraft/server-ui/ModalFormData.md) allow for a more flexible "questionnaire-style" list of controls that can be used to take input.

## [Changelog](changelog.md)

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
##### ***createActionForm.js***
```typescript
const form = new ActionFormData()
  .title("Months")
  .body("Choose your favorite month!")
  .button("January")
  .button("February")
  .button("March")
  .button("April")
  .button("May");

form.show(players[0]).then((response) => {
  if (response.selection === 3) {
    dimension.runCommand("say I like April too!");
  }
});
```
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

## Manifest Details
```json
{
    "module_name": "@minecraft/server-ui",
    "version": "1.1.0"
}
```

## Available Versions
- `1.2.0-beta`
- `1.1.0`
- `1.0.0`
- `0.1.0`

## Enumerations
- [FormCancelationReason](FormCancelationReason.md)
- [FormRejectReason](FormRejectReason.md)

## Classes
- [ActionFormData](ActionFormData.md)
- [ActionFormResponse](ActionFormResponse.md)
- [FormResponse](FormResponse.md)
- [MessageFormData](MessageFormData.md)
- [MessageFormResponse](MessageFormResponse.md)
- [ModalFormData](ModalFormData.md)
- [ModalFormResponse](ModalFormResponse.md)

## Errors
- [FormRejectError](FormRejectError.md)
