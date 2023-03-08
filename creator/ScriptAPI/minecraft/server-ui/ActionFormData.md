---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server-ui.ActionFormData Class
description: Contents of the @minecraft/server-ui.ActionFormData class.
---
# ActionFormData Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
Builds a simple player form with buttons that let the player take action.

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

#### **Returns** [*ActionFormData*](ActionFormData.md)

### **body**
`
body(bodyText: minecraftserver.RawMessage | string): ActionFormData
`

Method that sets the body text for the modal form.

#### **Parameters**
- **bodyText**: [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*

#### **Returns** [*ActionFormData*](ActionFormData.md)

### **button**
`
button(text: minecraftserver.RawMessage | string, iconPath?: string): ActionFormData
`

Adds a button to this form with an icon from a resource pack.

#### **Parameters**
- **text**: [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*
- **iconPath**?: *string* = `null`

#### **Returns** [*ActionFormData*](ActionFormData.md)

### **show**
`
show(player: minecraftserver.Player): Promise<ActionFormResponse>
`

Creates and shows this modal popup form. Returns asynchronously when the player confirms or cancels the dialog.

#### **Parameters**
- **player**: [*@minecraft/server.Player*](../../minecraft/server/Player.md)
  
  Player to show this dialog to.

#### **Returns** Promise&lt;[*ActionFormResponse*](ActionFormResponse.md)&gt;

> [!WARNING]
> This function can throw errors.

### **title**
`
title(titleText: minecraftserver.RawMessage | string): ActionFormData
`

This builder method sets the title for the modal dialog.

#### **Parameters**
- **titleText**: [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*

#### **Returns** [*ActionFormData*](ActionFormData.md)

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
  if (result.canceled) {
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
