---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-ui.ActionFormResponse Class
description: Contents of the @minecraft/server-ui.ActionFormResponse class.
---
# ActionFormResponse Class

## Extends
- [*FormResponse*](FormResponse.md)

Returns data about the player results from a modal action form.

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

## Properties

### **selection**
`read-only selection?: number;`

Returns the index of the button that was pushed.

Type: *number*

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
