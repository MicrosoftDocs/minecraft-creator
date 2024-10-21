---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-ui Module
description: Contents of the @minecraft/server-ui module
---
# `@minecraft/server-ui` Module

The `@minecraft/server-ui` module contains types for expressing simple dialog-based user experiences.



  * [*@minecraft/server-ui.ActionFormData*](../../minecraft/server-ui/ActionFormData.md) contain a list of buttons with captions and images that can be used for presenting a set of options to a player.

  * [*@minecraft/server-ui.MessageFormData*](../../minecraft/server-ui/MessageFormData.md) are simple two-button message experiences that are functional for Yes/No or OK/Cancel questions.

  * [*@minecraft/server-ui.ModalFormData*](../../minecraft/server-ui/ModalFormData.md) allow for a more flexible "questionnaire-style" list of controls that can be used to take input.

## [Changelog](changelog.md)

## Manifest Details
```json
{
    "module_name": "@minecraft/server-ui",
    "version": "1.3.0"
}
```

## Available Versions
- `1.4.0-beta`
- `1.3.0`
- `1.2.0`
- `1.1.0`
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
- [UIManager](UIManager.md)

## Errors
- [FormRejectError](FormRejectError.md)

## Objects
  
### **uiManager**
`static read-only uiManager: UIManager;`

Type: [*UIManager*](UIManager.md)
