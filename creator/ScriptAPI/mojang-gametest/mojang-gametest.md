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
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

GameTest provides scriptable APIs for scaffolding and testing content experiences in Minecraft.

## Manifest Details
```json
{
    // mojang-gametest
    "uuid": "6f4b6893-1bb6-42fd-b458-7fa3d0c89616",
    "version": [ 0, 1, 0 ]
}
```

## Enumerations
- [FluidType](FluidType.md)

## Classes
- [FenceConnectivity](FenceConnectivity.md)
- [GameTestSequence](GameTestSequence.md)
- [RegistrationBuilder](RegistrationBuilder.md)
- [SimulatedPlayer](SimulatedPlayer.md)
- [Tags](Tags.md)
- [Test](Test.md)

## Functions
### **register**
`
register(testClassName: string, testName: string, testFunction: (arg: Test) => void): RegistrationBuilder
`

Registers a new GameTest function. This GameTest will become available in Minecraft via /gametest run [testClassName]:[testName].
#### **Parameters**
- **testClassName**: *string*
  
  Name of the class of tests this test should be a part of.
- **testName**: *string*
  
  Name of this specific test.
- **testFunction**: (arg: [*Test*](Test.md)) => *void*
  
  Implementation of the test function.

#### **Returns** [*RegistrationBuilder*](RegistrationBuilder.md) - Returns a [*mojang-gametest.RegistrationBuilder*](../mojang-gametest/RegistrationBuilder.md) object where additional options for this test can be specified via builder methods.


#### **Examples**
##### *example1.js*
```javascript
GameTest.register("ExampleTests", "alwaysFail", (test) => {
  test.fail("This test, runnable via '/gametest run ExampleTests:alwaysFail', will always fail");
});
```
### **registerAsync**
`
registerAsync(testClassName: string, testName: string, testFunction: (arg: Test) => Promise<void>): RegistrationBuilder
`

Registers a new GameTest function that is designed for asynchronous execution. This GameTest will become available in Minecraft via /gametest run [testClassName]:[testName].
#### **Parameters**
- **testClassName**: *string*
  
  Name of the class of tests this test should be a part of.
- **testName**: *string*
  
  Name of this specific test.
- **testFunction**: (arg: [*Test*](Test.md)) => Promise&lt;*void*&gt;
  
  Implementation of the test function.

#### **Returns** [*RegistrationBuilder*](RegistrationBuilder.md) - Returns a [*mojang-gametest.RegistrationBuilder*](../mojang-gametest/RegistrationBuilder.md) object where additional options for this test can be specified via builder methods.


