---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-ui.MessageFormResponse Class
description: Contents of the @minecraft/server-ui.MessageFormResponse class.
---
# MessageFormResponse Class

## Extends
- [*FormResponse*](FormResponse.md)

Returns data about the player results from a modal message form.

## Properties

### **selection**
`read-only selection?: number;`

Returns the index of the button that was pushed.

Type: *number*

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
