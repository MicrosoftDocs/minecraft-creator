---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.InputEventOptions Interface
description: Contents of the @minecraft/server.InputEventOptions class (Version 1.x.x).
---
# InputEventOptions Interface (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/InputEventOptions.md).

An interface that is passed into {@link @minecraft/Server.PlayerButtonInputAfterEventSignal.subscribe} that filters out which events are passed to the provided callback.

## Properties

### **buttons**
`buttons?: InputButton[];`

The buttons the callback should be called for. If undefined, the callback will be called for all buttons.

Type: [*InputButton*](InputButton.md)[]

### **state**
`state?: ButtonState;`

The state the callback should be called for. If undefined, the callback will be called for all button states.

Type: [*ButtonState*](ButtonState.md)
