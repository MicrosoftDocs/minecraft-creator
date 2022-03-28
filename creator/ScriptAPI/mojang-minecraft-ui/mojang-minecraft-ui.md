---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
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

  * ActionForms contain a list of buttons with captions and images that can be used for presenting a set of options to a player.
  * MessageForms are simple two-button message experiences that are functional for Yes/No or OK/Cancel questions.
  * ModalForms allow for a more flexible "questionnaire-style" list of controls that can be used to take input.

These APIs are expressed as "builder style" to allow you to create quick forms in code.  For example, this code creates an action button form:

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

NOTE: A dependency reference to this module must be declared within the `manifest.json` file of your behavior pack.  The module identifier UUID is `2BD50A27-AB5F-4F40-A596-3641627C635E`. 

For example: 

```json
 "dependencies": [
      {
        "uuid": "b26a4d4c-afdf-4690-88f8-931846312678",
        "version": [ 0, 1, 0 ]
      },
      {
        "uuid": "6f4b6893-1bb6-42fd-b458-7fa3d0c89616",
        "version": [ 0, 1, 0 ]
      },
      {
        "uuid": "2BD50A27-AB5F-4F40-A596-3641627C635E",
        "version": [ 0, 1, 0 ]
      }
    ]
```

## Classes
- [ActionFormData](ActionFormData.md)
- [ActionFormResponse](ActionFormResponse.md)
- [FormResponse](FormResponse.md)
- [MessageFormData](MessageFormData.md)
- [MessageFormResponse](MessageFormResponse.md)
- [ModalFormData](ModalFormData.md)
- [ModalFormResponse](ModalFormResponse.md)
