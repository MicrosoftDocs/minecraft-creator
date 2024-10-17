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

##### ***showActionForm.ts***

```typescript
import { world, DimensionLocation } from "@minecraft/server";
import { ActionFormData, ActionFormResponse } from "@minecraft/server-ui";

function showActionForm(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const playerList = world.getPlayers();

  if (playerList.length >= 1) {
    const form = new ActionFormData()
      .title("Test Title")
      .body("Body text here!")
      .button("btn 1")
      .button("btn 2")
      .button("btn 3")
      .button("btn 4")
      .button("btn 5");

    form.show(playerList[0]).then((result: ActionFormResponse) => {
      if (result.canceled) {
        log("Player exited out of the dialog. Note that if the chat window is up, dialogs are automatically canceled.");
        return -1;
      } else {
        log("Your result was: " + result.selection);
      }
    });
  }
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/showActionForm.ts) code sandbox.

##### ***showFavoriteMonth.ts***

```typescript
import { world, DimensionLocation } from "@minecraft/server";
import { ActionFormData, ActionFormResponse } from "@minecraft/server-ui";

function showFavoriteMonth(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const players = world.getPlayers();

  if (players.length >= 1) {
    const form = new ActionFormData()
      .title("Months")
      .body("Choose your favorite month!")
      .button("January")
      .button("February")
      .button("March")
      .button("April")
      .button("May");

    form.show(players[0]).then((response: ActionFormResponse) => {
      if (response.selection === 3) {
        log("I like April too!");
        return -1;
      }
    });
  }
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/showFavoriteMonth.ts) code sandbox.

## Properties

### **selection**
`read-only selection?: number;`

Returns the index of the button that was pushed.

Type: *number*

#### Examples

##### ***showActionForm.ts***

```typescript
import { world, DimensionLocation } from "@minecraft/server";
import { ActionFormData, ActionFormResponse } from "@minecraft/server-ui";

function showActionForm(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const playerList = world.getPlayers();

  if (playerList.length >= 1) {
    const form = new ActionFormData()
      .title("Test Title")
      .body("Body text here!")
      .button("btn 1")
      .button("btn 2")
      .button("btn 3")
      .button("btn 4")
      .button("btn 5");

    form.show(playerList[0]).then((result: ActionFormResponse) => {
      if (result.canceled) {
        log("Player exited out of the dialog. Note that if the chat window is up, dialogs are automatically canceled.");
        return -1;
      } else {
        log("Your result was: " + result.selection);
      }
    });
  }
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/showActionForm.ts) code sandbox.

##### ***showFavoriteMonth.ts***

```typescript
import { world, DimensionLocation } from "@minecraft/server";
import { ActionFormData, ActionFormResponse } from "@minecraft/server-ui";

function showFavoriteMonth(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const players = world.getPlayers();

  if (players.length >= 1) {
    const form = new ActionFormData()
      .title("Months")
      .body("Choose your favorite month!")
      .button("January")
      .button("February")
      .button("March")
      .button("April")
      .button("May");

    form.show(players[0]).then((response: ActionFormResponse) => {
      if (response.selection === 3) {
        log("I like April too!");
        return -1;
      }
    });
  }
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/showFavoriteMonth.ts) code sandbox.
