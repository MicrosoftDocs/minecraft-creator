---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server-ui.MessageFormData Class
description: Contents of the @minecraft/server-ui.MessageFormData class.
---
# MessageFormData Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
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

#### **Returns** [*MessageFormData*](MessageFormData.md)

### **body**
`
body(bodyText: minecraftserver.RawMessage | string): MessageFormData
`

Method that sets the body text for the modal form.

#### **Parameters**
- **bodyText**: [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*

#### **Returns** [*MessageFormData*](MessageFormData.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **button1**
`
button1(text: minecraftserver.RawMessage | string): MessageFormData
`

Method that sets the text for the first button of the dialog.

#### **Parameters**
- **text**: [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*

#### **Returns** [*MessageFormData*](MessageFormData.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **button2**
`
button2(text: minecraftserver.RawMessage | string): MessageFormData
`

This method sets the text for the second button on the dialog.

#### **Parameters**
- **text**: [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*

#### **Returns** [*MessageFormData*](MessageFormData.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **show**
`
show(player: minecraftserver.Player): Promise<MessageFormResponse>
`

Creates and shows this modal popup form. Returns asynchronously when the player confirms or cancels the dialog.

#### **Parameters**
- **player**: [*@minecraft/server.Player*](../../minecraft/server/Player.md)
  
  Player to show this dialog to.

#### **Returns** Promise&lt;[*MessageFormResponse*](MessageFormResponse.md)&gt;

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

#### **Returns** [*MessageFormData*](MessageFormData.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

#### Examples
##### ***showBasicMessageForm.ts***
```typescript
  const players = mc.world.getPlayers();

  const messageForm = new mcui.MessageFormData()
    .title("Message Form Example")
    .body("This shows a simple example using §o§7MessageFormData§r.")
    .button1("Button 1")
    .button2("Button 2");

  messageForm
    .show(players[0])
    .then((formData: mcui.MessageFormResponse) => {
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
```
##### ***showTranslatedMessageForm.ts***
```typescript
  const players = mc.world.getPlayers();

  const messageForm = new mcui.MessageFormData()
    .title({ translate: "permissions.removeplayer" })
    .body({ translate: "accessibility.list.or.two", with: ["Player 1", "Player 2"] })
    .button1("Player 1")
    .button2("Player 2");

  messageForm
    .show(players[0])
    .then((formData: mcui.MessageFormResponse) => {
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
```
