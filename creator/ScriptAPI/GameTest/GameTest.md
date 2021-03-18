---
title: GameTest
description: Contents of the GameTest module
author: jakeshirley
ms.author: jashir
ms.prod: Gaming
---
# GameTest

## Classes
### [RegistrationBuilder](RegistrationBuilder.md)

### [Helper](Helper.md)

### [GameTestSequence](GameTestSequence.md)

### [Tags](Tags.md)


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
