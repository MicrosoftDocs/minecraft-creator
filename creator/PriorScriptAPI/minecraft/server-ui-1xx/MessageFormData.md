---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-ui-1xx.MessageFormData Class
description: Contents of the @minecraft/server-ui.MessageFormData class (Version 1.x.x).
---
# MessageFormData Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server-ui/MessageFormData.md).

Builds a simple two-button modal dialog.

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
- **bodyText**: [*@minecraft/server.RawMessage*](../../../priorscriptapi/minecraft/server-1xx/RawMessage.md) | *string*

**Returns** [*MessageFormData*](MessageFormData.md)

### **button1**
`
button1(text: minecraftserver.RawMessage | string): MessageFormData
`

Method that sets the text for the first button of the dialog.

#### **Parameters**
- **text**: [*@minecraft/server.RawMessage*](../../../priorscriptapi/minecraft/server-1xx/RawMessage.md) | *string*

**Returns** [*MessageFormData*](MessageFormData.md)

### **button2**
`
button2(text: minecraftserver.RawMessage | string): MessageFormData
`

This method sets the text for the second button on the dialog.

#### **Parameters**
- **text**: [*@minecraft/server.RawMessage*](../../../priorscriptapi/minecraft/server-1xx/RawMessage.md) | *string*

**Returns** [*MessageFormData*](MessageFormData.md)

### **show**
`
show(player: minecraftserver.Player): Promise<MessageFormResponse>
`

Creates and shows this modal popup form. Returns asynchronously when the player confirms or cancels the dialog.

#### **Parameters**
- **player**: [*@minecraft/server.Player*](../../../priorscriptapi/minecraft/server-1xx/Player.md)
  
  Player to show this dialog to.

**Returns** Promise&lt;[*MessageFormResponse*](MessageFormResponse.md)&gt;
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **title**
`
title(titleText: minecraftserver.RawMessage | string): MessageFormData
`

This builder method sets the title for the modal dialog.

#### **Parameters**
- **titleText**: [*@minecraft/server.RawMessage*](../../../priorscriptapi/minecraft/server-1xx/RawMessage.md) | *string*

**Returns** [*MessageFormData*](MessageFormData.md)

#### Examples

##### ***showBasicMessageForm.ts***

```typescript
import { world, DimensionLocation } from "@minecraft/server";
import { MessageFormResponse, MessageFormData } from "@minecraft/server-ui";

function showBasicMessageForm(
  log: (message: string, status?: number) => void,
  targetLocation: DimensionLocation
) {
  const players = world.getPlayers();

  const messageForm = new MessageFormData()
    .title("Message Form Example")
    .body("This shows a simple example using §o§7MessageFormData§r.")
    .button1("Button 1")
    .button2("Button 2");

  messageForm
    .show(players[0])
    .then((formData: MessageFormResponse) => {
      // player canceled the form, or another dialog was up and open.
      if (formData.canceled || formData.selection === undefined) {
        return;
      }

      log(`You selected ${formData.selection === 0 ? "Button 1" : "Button 2"}`);
    })
    .catch((error: Error) => {
      log("Failed to show form: " + error);
      return -1;
    });
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/showBasicMessageForm.ts) code sandbox.

##### ***showTranslatedMessageForm.ts***

```typescript
import { world, DimensionLocation } from "@minecraft/server";
import { MessageFormResponse, MessageFormData } from "@minecraft/server-ui";

function showTranslatedMessageForm(
  log: (message: string, status?: number) => void,
  targetLocation: DimensionLocation
) {
  const players = world.getPlayers();

  const messageForm = new MessageFormData()
    .title({ translate: "permissions.removeplayer" })
    .body({ translate: "accessibility.list.or.two", with: ["Player 1", "Player 2"] })
    .button1("Player 1")
    .button2("Player 2");

  messageForm
    .show(players[0])
    .then((formData: MessageFormResponse) => {
      // player canceled the form, or another dialog was up and open.
      if (formData.canceled || formData.selection === undefined) {
        return;
      }

      log(`You selected ${formData.selection === 0 ? "Player 1" : "Player 2"}`);
    })
    .catch((error: Error) => {
      log("Failed to show form: " + error);
      return -1;
    });
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/showTranslatedMessageForm.ts) code sandbox.
