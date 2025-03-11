---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.InputEventOptions Interface
description: Contents of the @minecraft/server.InputEventOptions class.
monikerRange: "=minecraft-bedrock-experimental"
---
# InputEventOptions Interface

> [!CAUTION]
> This interface is still in pre-release.  Its signature may change or it may be removed in future releases.

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
