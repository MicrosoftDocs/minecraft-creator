---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server-ui Module
description: Contents of the @minecraft/server-ui module
---
# @minecraft/server-ui Module
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
The `@minecraft/server-ui` module contains types for expressing simple dialog-based user experiences.



  * [*@minecraft/server-ui.ActionFormData*](../../minecraft/server-ui/ActionFormData.md) contain a list of buttons with captions and images that can be used for presenting a set of options to a player.

  * [*@minecraft/server-ui.MessageFormData*](../../minecraft/server-ui/MessageFormData.md) are simple two-button message experiences that are functional for Yes/No or OK/Cancel questions.

  * [*@minecraft/server-ui.ModalFormData*](../../minecraft/server-ui/ModalFormData.md) allow for a more flexible "questionnaire-style" list of controls that can be used to take input.

#### **Examples**
##### *createActionForm.js*
```javascript
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

## Manifest Details
```json
{
    "module_name": "@minecraft/server-ui",
    "version": "1.0.0"
}
```

## Available Versions
- `1.1.0-beta`
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

## Change Log
## 1.1.0-beta
#### Changed *[ActionFormData](ActionFormData.md)*
- Changed function *[body](ActionFormData.md#body)*
  - Changed argument `bodyText` type from [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string* to [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*
- Changed function *[button](ActionFormData.md#button)*
  - Changed argument `text` type from [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string* to [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*
- Changed function *[show](ActionFormData.md#show)*
  - Changed argument `player` type from [*@minecraft/server.Player*](../../minecraft/server/Player.md) to [*@minecraft/server.Player*](../../minecraft/server/Player.md)
- Changed function *[title](ActionFormData.md#title)*
  - Changed argument `titleText` type from [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string* to [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*
#### Changed *[FormResponse](FormResponse.md)*
- Added property *[cancelationReason](FormResponse.md#cancelationreason)*
- Added property *[canceled](FormResponse.md#canceled)*
#### Changed *[MessageFormData](MessageFormData.md)*
- Changed function *[body](MessageFormData.md#body)*
  - Changed argument `bodyText` type from [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string* to [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*
- Changed function *[button1](MessageFormData.md#button1)*
  - Changed argument `text` type from [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string* to [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*
- Changed function *[button2](MessageFormData.md#button2)*
  - Changed argument `text` type from [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string* to [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*
- Changed function *[show](MessageFormData.md#show)*
  - Changed argument `player` type from [*@minecraft/server.Player*](../../minecraft/server/Player.md) to [*@minecraft/server.Player*](../../minecraft/server/Player.md)
- Changed function *[title](MessageFormData.md#title)*
  - Changed argument `titleText` type from [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string* to [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*
#### Changed *[ModalFormData](ModalFormData.md)*
- Changed function *[dropdown](ModalFormData.md#dropdown)*
  - Changed argument `label` type from [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string* to [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*
  - Changed argument `options` type from ([*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*)[] to ([*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*)[]
- Changed function *[show](ModalFormData.md#show)*
  - Changed argument `player` type from [*@minecraft/server.Player*](../../minecraft/server/Player.md) to [*@minecraft/server.Player*](../../minecraft/server/Player.md)
- Changed function *[slider](ModalFormData.md#slider)*
  - Changed argument `label` type from [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string* to [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*
- Changed function *[textField](ModalFormData.md#textfield)*
  - Changed argument `label` type from [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string* to [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*
  - Changed argument `placeholderText` type from [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string* to [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*
- Changed function *[title](ModalFormData.md#title)*
  - Changed argument `titleText` type from [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string* to [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*
- Changed function *[toggle](ModalFormData.md#toggle)*
  - Changed argument `label` type from [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string* to [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) | *string*
#### Added enum [FormCancelationReason](FormCancelationReason.md)
## 1.0.0
#### Added `@minecraft/server-ui` Module
