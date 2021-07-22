---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-gametest Module
description: Contents of the mojang-gametest module
---
# mojang-gametest Module
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.


## Classes
- [FenceConnectivity](FenceConnectivity.md)
- [GameTestSequence](GameTestSequence.md)
- [RegistrationBuilder](RegistrationBuilder.md)
- [Tags](Tags.md)
- [Test](Test.md)

## Functions
### **register**
`
register(testClassName: string, testName: string, testFunction: (arg: Test) => undefined): RegistrationBuilder
`

Registers a new GameTest function. This GameTest will become available in Minecraft via /gametest run [testClassName]:[testName].
#### Arguments
| Param | Type | Default Value | Description |
| :--- | :--- | :--- | :---: |
| **testClassName** | *string* | n/a | Name of the class of tests this test should be a part of. |
| **testName** | *string* | n/a | Name of this specific test. |
| **testFunction** | (arg: Test) => undefined | n/a | Implementation of the test function. |

Returns [*RegistrationBuilder*](RegistrationBuilder.md) - Returns a @GameTest.RegistrationBuilder object where additional options for this test can be specified via builder methods.


#### Examples
##### ***example1.js***
```javascript
GameTest.register("ExampleTests", "alwaysFail", (test) => {
  test.fail("This test, runnable via '/gametest run ExampleTests:alwaysFail', will always fail");
});

```


