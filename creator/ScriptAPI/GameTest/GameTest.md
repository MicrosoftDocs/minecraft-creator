---
# DO NOT TOUCH — This file was automatically generated.  See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: Gaming
title: GameTest Module
description: Contents of the GameTest module
---
# GameTest Module

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
