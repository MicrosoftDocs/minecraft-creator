---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.RawText Interface
description: Contents of the @minecraft/server.RawText class.
---
# RawText Interface
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This interface is still in pre-release.  Its signature may change or it may be removed in future releases.

A `RawMessage` with only the `rawtext` property. When a `RawMessage` is serialized the contents are put into a rawtext property, so this is useful when reading saved RawMessages. See `BlockSignComponent.setText` and `BlockSignComponent.getRawText` for examples.

## Properties

### **rawtext**
`rawtext?: RawMessage[];`

Type: [*RawMessage*](RawMessage.md)[]
