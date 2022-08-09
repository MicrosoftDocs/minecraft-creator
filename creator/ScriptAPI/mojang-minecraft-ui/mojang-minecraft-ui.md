---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft-ui Module
description: Contents of the mojang-minecraft-ui module
---
# mojang-minecraft-ui Module
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

The `mojang-minecraft-ui` module contains types for expressing simple dialog-based user experiences.



  * [*mojang-minecraft-ui.ActionFormData*](../mojang-minecraft-ui/ActionFormData.md) contain a list of buttons with captions and images that can be used for presenting a set of options to a player.

  * [*mojang-minecraft-ui.MessageFormData*](../mojang-minecraft-ui/MessageFormData.md) are simple two-button message experiences that are functional for Yes/No or OK/Cancel questions.

  * [*mojang-minecraft-ui.ModalFormData*](../mojang-minecraft-ui/ModalFormData.md) allow for a more flexible "questionnaire-style" list of controls that can be used to take input.

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
    // mojang-minecraft-ui
    "uuid": "2bd50a27-ab5f-4f40-a596-3641627c635e",
    "version": "1.0.0-beta"
}
```

## Available Versions
- 1.0.0-beta

## Enumerations
- [FormCancelationReason](FormCancelationReason.md)

## Classes
- [ActionFormData](ActionFormData.md)
- [ActionFormResponse](ActionFormResponse.md)
- [FormResponse](FormResponse.md)
- [MessageFormData](MessageFormData.md)
- [MessageFormResponse](MessageFormResponse.md)
- [ModalFormData](ModalFormData.md)
- [ModalFormResponse](ModalFormResponse.md)
