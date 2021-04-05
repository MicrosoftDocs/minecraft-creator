---
# DO NOT TOUCH — This file was automatically generated.  See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: Gaming
title: GameTest Module
description: Contents of the GameTest module
---
# GameTest Module

>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.

## Classes
- [RegistrationBuilder](RegistrationBuilder.md)
- [Helper](Helper.md)
- [GameTestSequence](GameTestSequence.md)
- [Tags](Tags.md)

## Functions
### **register**
`
register(): RegistrationBuilder
`

Registers a game test

Returns [*RegistrationBuilder*](RegistrationBuilder.md)

#### Examples
##### ***example1.js***
```javascript
GameTest.register(
  "ExampleTests",
  "example1",
  (test) => {
    test.fail("This test will always fail");
  }
)
```
