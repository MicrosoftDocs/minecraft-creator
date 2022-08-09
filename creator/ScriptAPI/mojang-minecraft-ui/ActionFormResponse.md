---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft-ui.ActionFormResponse Class
description: Contents of the mojang-minecraft-ui.ActionFormResponse class.
---
# ActionFormResponse Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Extends
- [*FormResponse*](FormResponse.md)

Returns data about the player results from a modal action form.

## Properties

### **cancelationReason**
`read-only cancelationReason: FormCancelationReason;`

Contains additional details as to why a form was canceled.

Type: [*FormCancelationReason*](FormCancelationReason.md)

### **canceled**
`read-only canceled: boolean;`

If true, the form was canceled by the player (e.g., they selected the pop-up X close button).

Type: *boolean*

### **selection**
`read-only selection: number;`

Returns the index of the button that was pushed.

Type: *number*

#### **Examples**
##### *showActionForm.ts*
```javascript
  const players = mc.world.getPlayers();
  const playerList = Array.from(players);
  if (playerList.length >= 1) {
    const form = new mcui.ActionFormData()
      .title("Test Title")
      .body("Body text here!")
      .button("btn 1")
      .button("btn 2")
      .button("btn 3")
      .button("btn 4")
      .button("btn 5");
    const result = await form.show(playerList[0]);
    if (result.isCanceled) {
      log("Player exited out of the dialog.");
    } else {
      log("Your result was: " + result.selection);
    }
  }
```
##### *showFavoriteMonth.ts*
```javascript
  const players = mc.world.getPlayers();
  const playerList = Array.from(players);
  if (playerList.length >= 1) {
    const form = new mcui.ActionFormData()
      .title("Months")
      .body("Choose your favorite month!")
      .button("January")
      .button("February")
      .button("March")
      .button("April")
      .button("May");
    form.show(playerList[0]).then((response: mcui.ActionFormResponse) => {
      if (response.selection === 3) {
        log("I like April too!");
      }
    });
  }
```
