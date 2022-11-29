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

> [!CAUTION]
> This module is still in pre-release.  It may change or it may be removed in future releases.

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
    "version": "1.0.0-beta"
}
```

## Available Versions
- `1.0.0-beta`

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

## Change Log
## 1.0.0-beta
#### Added `@minecraft/server-ui` Module
