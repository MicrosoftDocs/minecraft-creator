---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
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

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **maxAttempts**
`
maxAttempts(attemptCount: number): RegistrationBuilder
`

Sets the maximum number of times a test will try to rerun if it fails.

#### **Parameters**
- **attemptCount**: *number*

**Returns** [*RegistrationBuilder*](RegistrationBuilder.md) - RegistrationBuilder object where additional configuration methods can be called.

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **maxTicks**
`
maxTicks(tickCount: number): RegistrationBuilder
`

Sets the maximum number of ticks a test will run for before timing out and failing.

#### **Parameters**
- **tickCount**: *number*

**Returns** [*RegistrationBuilder*](RegistrationBuilder.md) - RegistrationBuilder object where additional configuration methods can be called.

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **padding**
`
padding(paddingBlocks: number): RegistrationBuilder
`

Size around the GameTest, in blocks, that should be reserved for the test when running multiple tests together.

#### **Parameters**
- **paddingBlocks**: *number*
  
  Size, in blocks, around the GameTest where additional GameTests should not be created.

**Returns** [*RegistrationBuilder*](RegistrationBuilder.md) - RegistrationBuilder object where additional configuration methods can be called.

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **required**
`
required(isRequired: boolean): RegistrationBuilder
`

Whether this test is required to pass as part of its broader set of tests.

#### **Parameters**
- **isRequired**: *boolean*
  
  If set to true, the test must pass in order for the entire run of tests to pass.

**Returns** [*RegistrationBuilder*](RegistrationBuilder.md) - RegistrationBuilder object where additional configuration methods can be called.

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **requiredSuccessfulAttempts**
`
requiredSuccessfulAttempts(attemptCount: number): RegistrationBuilder
`

Sets the number of successful test runs to be considered successful.

#### **Parameters**
- **attemptCount**: *number*

**Returns** [*RegistrationBuilder*](RegistrationBuilder.md) - RegistrationBuilder object where additional configuration methods can be called.

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **rotateTest**
`
rotateTest(rotate: boolean): RegistrationBuilder
`

If true, runs the test in all four rotations when run via /gametest runset.

#### **Parameters**
- **rotate**: *boolean*

**Returns** [*RegistrationBuilder*](RegistrationBuilder.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **setupTicks**
`
setupTicks(tickCount: number): RegistrationBuilder
`

Sets the number of ticks for a test to wait before executing when the structure is spawned.

#### **Parameters**
- **tickCount**: *number*

**Returns** [*RegistrationBuilder*](RegistrationBuilder.md) - RegistrationBuilder object where additional configuration methods can be called.

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **structureName**
`
structureName(structureName: string): RegistrationBuilder
`

Sets the name of the structure for a test to use. "xyz:bar" will load `/structures/xyz/bar.mcstructure` from the behavior pack stack.

#### **Parameters**
- **structureName**: *string*

**Returns** [*RegistrationBuilder*](RegistrationBuilder.md) - RegistrationBuilder object where additional configuration methods can be called.

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **tag**
`
tag(tag: string): RegistrationBuilder
`

Adds a tag to a test. You can run all tests with a given tag with `/gametest runset <tag>`.

#### **Parameters**
- **tag**: *string*

**Returns** [*RegistrationBuilder*](RegistrationBuilder.md) - RegistrationBuilder object where additional configuration methods can be called.

> [!IMPORTANT]
> This function can't be called in read-only mode.
