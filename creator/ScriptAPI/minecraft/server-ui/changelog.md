---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-ui Changelog
description: Changelog of the `@minecraft/server-ui` module
---
# `@minecraft/server-ui` Changelog

## Version Changes
- [2.0.0-beta](#200-beta)
- [1.3.0](#130)
- [1.2.0](#120)
- [1.1.0](#110)
- [1.0.0](#100)

## 2.0.0-beta
#### Added module dependency `@minecraft/server@2.0.0-beta` 
#### Removed module dependency `@minecraft/server@1.3.0` 
#### Changed *[`ActionFormData`](ActionFormData.md)*
- Added function *[`divider`](ActionFormData.md#divider)*
- Added function *[`header`](ActionFormData.md#header)*
- Added function *[`label`](ActionFormData.md#label)*
#### Changed *[`MessageFormData`](MessageFormData.md)*
- Changed function *[`show`](MessageFormData.md#show)*
  - Changed return type from Promise&lt;[*MessageFormResponse*](MessageFormResponse.md)&gt; (throws exceptions) to Promise&lt;[*MessageFormResponse*](MessageFormResponse.md)&gt; (throws exceptions)
#### Changed *[`ModalFormData`](ModalFormData.md)*
- Added function *[`divider`](ModalFormData.md#divider)*
- Changed function *[`dropdown`](ModalFormData.md#dropdown)*
  - Added argument `items`
  - Added argument `dropdownOptions`
  - Removed argument `options`
  - Removed argument `defaultValueIndex`
- Added function *[`header`](ModalFormData.md#header)*
- Added function *[`label`](ModalFormData.md#label)*
- Changed function *[`slider`](ModalFormData.md#slider)*
  - Added argument `sliderOptions`
  - Removed argument `valueStep`
  - Removed argument `defaultValue`
- Changed function *[`textField`](ModalFormData.md#textfield)*
  - Added argument `textFieldOptions`
  - Removed argument `defaultValue`
- Changed function *[`toggle`](ModalFormData.md#toggle)*
  - Added argument `toggleOptions`
  - Removed argument `defaultValue`
#### Changed *[`ModalFormResponse`](ModalFormResponse.md)*
- Changed type for *[`formValues`](ModalFormResponse.md#formvalues)* from (*boolean* | *number* | *string*)[] to (*boolean* | *number* | *string* | *undefined*)[]
## 1.3.0
#### Added module dependency `@minecraft/server@1.3.0` 
#### Removed module dependency `@minecraft/server@1.2.0` 
#### Added *[`UIManager`](UIManager.md)*
#### Added object `uiManager`
## 1.2.0
#### Changed *[`ModalFormData`](ModalFormData.md)*
- Added function *[`submitButton`](ModalFormData.md#submitbutton)*
## 1.1.0
#### Changed *[`FormResponse`](FormResponse.md)*
- Added property *[`cancelationReason`](FormResponse.md#cancelationreason)*
- Added property *[`canceled`](FormResponse.md#canceled)*
#### Added enum [`FormCancelationReason`](FormCancelationReason.md)
## 1.0.0
#### Added `@minecraft/server-ui` Module
