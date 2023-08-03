---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: .EntityLifetimeState Enumeration
description: Contents of the .EntityLifetimeState enumeration.
---
# EntityLifetimeState Enumeration

> [!CAUTION]
> This enum is still in pre-release.  Its signature may change or it may be removed in future releases.

Describes the lifetime state of an Entity. For example, Entities can be loaded or unloaded depending on whether their chunks are loaded or when they move across dimensions.

## Constants
### **Loaded**
`Loaded = "Loaded"`

Corresponding object is loaded.
### **Unloaded**
`Unloaded = "Unloaded"`

Corresponding object is now unloaded. Unloaded entities cannot be manipulated. However, if an unloaded Entity later reloads, it becomes valid and can once again be manipulated.
