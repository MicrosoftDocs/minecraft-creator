---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: . Type Alias
description: Contents of the .Ray type alias.
---
# Ray Type Alias

> [!CAUTION]
> This alias is still in pre-release.  Its signature may change or it may be removed in future releases.

Ray representing a direction from a set location. This location typically corresponds to the location of a mouse click performed on the client.

## Declaration
`export type Ray = {
    location: minecraftserver.Vector3;
    direction: minecraftserver.Vector3;
    cursorBlockLocation: minecraftserver.Vector3;
    rayHit: boolean;
};`
