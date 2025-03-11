---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-gametest.RegistrationBuilder Class
description: Contents of the @minecraft/server-gametest.RegistrationBuilder class.
---
# RegistrationBuilder Class

A utility class to set GameTest parameters for a test. Methods can be chained together to set multiple properties.

## Methods
- [batch](#batch)
- [maxAttempts](#maxattempts)
- [maxTicks](#maxticks)
- [padding](#padding)
- [required](#required)
- [requiredSuccessfulAttempts](#requiredsuccessfulattempts)
- [rotateTest](#rotatetest)
- [setupTicks](#setupticks)
- [structureLocation](#structurelocation)
- [structureName](#structurename)
- [tag](#tag)

### **batch**
`
batch(batchName: string): RegistrationBuilder
`

Sets the batch for the test to run in.

#### **Parameters**
- **batchName**: *string*
  
  Name of the batch for the test.

**Returns** [*RegistrationBuilder*](RegistrationBuilder.md) - RegistrationBuilder object where additional configuration methods can be called.
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

### **maxAttempts**
`
maxAttempts(attemptCount: number): RegistrationBuilder
`

Sets the maximum number of times a test will try to rerun if it fails.

#### **Parameters**
- **attemptCount**: *number*

**Returns** [*RegistrationBuilder*](RegistrationBuilder.md) - RegistrationBuilder object where additional configuration methods can be called.
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

### **maxTicks**
`
maxTicks(tickCount: number): RegistrationBuilder
`

Sets the maximum number of ticks a test will run for before timing out and failing.

#### **Parameters**
- **tickCount**: *number*

**Returns** [*RegistrationBuilder*](RegistrationBuilder.md) - RegistrationBuilder object where additional configuration methods can be called.
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

### **padding**
`
padding(paddingBlocks: number): RegistrationBuilder
`

Size around the GameTest, in blocks, that should be reserved for the test when running multiple tests together.

#### **Parameters**
- **paddingBlocks**: *number*
  
  Size, in blocks, around the GameTest where additional GameTests should not be created.

**Returns** [*RegistrationBuilder*](RegistrationBuilder.md) - RegistrationBuilder object where additional configuration methods can be called.
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

### **required**
`
required(isRequired: boolean): RegistrationBuilder
`

Whether this test is required to pass as part of its broader set of tests.

#### **Parameters**
- **isRequired**: *boolean*
  
  If set to true, the test must pass in order for the entire run of tests to pass.

**Returns** [*RegistrationBuilder*](RegistrationBuilder.md) - RegistrationBuilder object where additional configuration methods can be called.
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

### **requiredSuccessfulAttempts**
`
requiredSuccessfulAttempts(attemptCount: number): RegistrationBuilder
`

Sets the number of successful test runs to be considered successful.

#### **Parameters**
- **attemptCount**: *number*

**Returns** [*RegistrationBuilder*](RegistrationBuilder.md) - RegistrationBuilder object where additional configuration methods can be called.
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

### **rotateTest**
`
rotateTest(rotate: boolean): RegistrationBuilder
`

If true, runs the test in all four rotations when run via /gametest runset.

#### **Parameters**
- **rotate**: *boolean*

**Returns** [*RegistrationBuilder*](RegistrationBuilder.md)
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

### **setupTicks**
`
setupTicks(tickCount: number): RegistrationBuilder
`

Sets the number of ticks for a test to wait before executing when the structure is spawned.

#### **Parameters**
- **tickCount**: *number*

**Returns** [*RegistrationBuilder*](RegistrationBuilder.md) - RegistrationBuilder object where additional configuration methods can be called.
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

### **structureLocation**
`
structureLocation(structureLocation: minecraftserver.Vector3, structureDimension?: minecraftserver.DimensionType | string): RegistrationBuilder
`

Overrides the default structure placement with a specific location and dimension. If height (y) is set to Dimension.heightRange.max, the structure will snap to the ground. If the dimension is not specified, it will run in the dimension the command was run from.

#### **Parameters**
- **structureLocation**: [*@minecraft/server.Vector3*](../../../scriptapi/minecraft/server/Vector3.md)
- **structureDimension**?: [*@minecraft/server.DimensionType*](../../../scriptapi/minecraft/server/DimensionType.md) | *string* = `null`

**Returns** [*RegistrationBuilder*](RegistrationBuilder.md) - RegistrationBuilder object where additional configuration methods can be called.
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.
- This function can throw errors.
  - Throws [*@minecraft/common.EngineError*](../../../scriptapi/minecraft/common/EngineError.md), [*@minecraft/common.InvalidArgumentError*](../../../scriptapi/minecraft/common/InvalidArgumentError.md)

### **structureName**
`
structureName(structureName: string): RegistrationBuilder
`

Sets the name of the structure for a test to use. "xyz:bar" will load `/structures/xyz/bar.mcstructure` from the behavior pack stack.

#### **Parameters**
- **structureName**: *string*

**Returns** [*RegistrationBuilder*](RegistrationBuilder.md) - RegistrationBuilder object where additional configuration methods can be called.
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

#### Examples

##### ***phantomsShouldFlyFromCats.ts***

```typescript
import { Test, register } from "@minecraft/server-gametest";
import { MinecraftEntityTypes } from "@minecraft/vanilla-data";

function phantomsShouldFlyFromCats(test: Test) {
  test.spawn(MinecraftEntityTypes.Cat, { x: 4, y: 3, z: 3 });
  test.spawn(MinecraftEntityTypes.Phantom, { x: 4, y: 3, z: 3 });

  test.succeedWhenEntityPresent(MinecraftEntityTypes.Phantom, { x: 4, y: 6, z: 3 }, true);
}

register("MobBehaviorTests", "phantoms_should_fly_from_cats", phantomsShouldFlyFromCats)
  .structureName("gametests:glass_cells");
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/phantomsShouldFlyFromCats.ts) code sandbox.

### **tag**
`
tag(tag: string): RegistrationBuilder
`

Adds a tag to a test. You can run all tests with a given tag with `/gametest runset <tag>`.

#### **Parameters**
- **tag**: *string*

**Returns** [*RegistrationBuilder*](RegistrationBuilder.md) - RegistrationBuilder object where additional configuration methods can be called.
  
Notes:
- This function can't be called in read-only mode.
- This function can be called in early-execution mode.

#### Examples

##### ***phantomsShouldFlyFromCats.ts***

```typescript
import { Test, register } from "@minecraft/server-gametest";
import { MinecraftEntityTypes } from "@minecraft/vanilla-data";

function phantomsShouldFlyFromCats(test: Test) {
  test.spawn(MinecraftEntityTypes.Cat, { x: 4, y: 3, z: 3 });
  test.spawn(MinecraftEntityTypes.Phantom, { x: 4, y: 3, z: 3 });

  test.succeedWhenEntityPresent(MinecraftEntityTypes.Phantom, { x: 4, y: 6, z: 3 }, true);
}

register("MobBehaviorTests", "phantoms_should_fly_from_cats", phantomsShouldFlyFromCats)
  .structureName("gametests:glass_cells");
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/phantomsShouldFlyFromCats.ts) code sandbox.
