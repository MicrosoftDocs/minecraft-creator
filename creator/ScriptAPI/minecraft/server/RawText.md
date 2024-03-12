---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.RawText Interface
description: Contents of the @minecraft/server.RawText class.
---
# RawText Interface

A `RawMessage` with only the `rawtext` property. When a `RawMessage` is serialized the contents are put into a rawtext property, so this is useful when reading saved RawMessages. See `BlockSignComponent.setText` and `BlockSignComponent.getRawText` for examples.

## Properties

### **rawtext**
`rawtext?: RawMessage[];`

A serialization of the current value of an associated sign.

Type: [*RawMessage*](RawMessage.md)[]
