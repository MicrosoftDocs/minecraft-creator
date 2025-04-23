---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-ui.ActionFormData Class
description: Contents of the @minecraft/server-ui.ActionFormData class.
---
# ActionFormData Class

Builds a simple player form with buttons that let the player take action.

## Methods
- [constructor](#constructor)
- [body](#body)
- [button](#button)
- [divider](#divider)
- [header](#header)
- [label](#label)
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
- **bodyText**: [*@minecraft/server.RawMessage*](../../../scriptapi/minecraft/server/RawMessage.md) | *string*

**Returns** [*ActionFormData*](ActionFormData.md)

### **button**
`
button(text: minecraftserver.RawMessage | string, iconPath?: string): ActionFormData
`

Adds a button to this form with an icon from a resource pack.

#### **Parameters**
- **text**: [*@minecraft/server.RawMessage*](../../../scriptapi/minecraft/server/RawMessage.md) | *string*
- **iconPath**?: *string* = `null`

**Returns** [*ActionFormData*](ActionFormData.md)

### **divider**
`
divider(): ActionFormData
`

Adds a section divider to the form.

**Returns** [*ActionFormData*](ActionFormData.md)

### **header**
`
header(text: minecraftserver.RawMessage | string): ActionFormData
`

Adds a header to the form.

#### **Parameters**
- **text**: [*@minecraft/server.RawMessage*](../../../scriptapi/minecraft/server/RawMessage.md) | *string*
  
  Text to display.

**Returns** [*ActionFormData*](ActionFormData.md)

### **label**
`
label(text: minecraftserver.RawMessage | string): ActionFormData
`

Adds a label to the form.

#### **Parameters**
- **text**: [*@minecraft/server.RawMessage*](../../../scriptapi/minecraft/server/RawMessage.md) | *string*
  
  Text to display.

**Returns** [*ActionFormData*](ActionFormData.md)

### **show**
`
show(player: minecraftserver.Player): Promise<ActionFormResponse>
`

Creates and shows this modal popup form. Returns asynchronously when the player confirms or cancels the dialog.

#### **Parameters**
- **player**: [*@minecraft/server.Player*](../../../scriptapi/minecraft/server/Player.md)
  
  Player to show this dialog to.

**Returns** Promise&lt;[*ActionFormResponse*](ActionFormResponse.md)&gt;
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*@minecraft/common.EngineError*](../../../scriptapi/minecraft/common/EngineError.md), [*@minecraft/server.InvalidEntityError*](../../../scriptapi/minecraft/server/InvalidEntityError.md), [*@minecraft/server.RawMessageError*](../../../scriptapi/minecraft/server/RawMessageError.md)

### **title**
`
title(titleText: minecraftserver.RawMessage | string): ActionFormData
`

This builder method sets the title for the modal dialog.

#### **Parameters**
- **titleText**: [*@minecraft/server.RawMessage*](../../../scriptapi/minecraft/server/RawMessage.md) | *string*

**Returns** [*ActionFormData*](ActionFormData.md)

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
