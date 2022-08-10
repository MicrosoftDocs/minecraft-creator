---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-gametest.RegistrationBuilder Class
description: Contents of the mojang-gametest.RegistrationBuilder class.
---
# RegistrationBuilder Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

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
batch(batchName: ('night'|'day')): RegistrationBuilder
`
Sets the batch for the test to run in.

#### **Parameters**
- **batchName**: `'night'`, `'day'`
  
  Name of the batch for the test.

#### **Returns** [*RegistrationBuilder*](RegistrationBuilder.md) - RegistrationBuilder object where additional configuration methods can be called.

### **maxAttempts**
`
maxAttempts(attemptCount: number): RegistrationBuilder
`
Sets the maximum number of times a test will try to rerun if it fails.

#### **Parameters**
- **attemptCount**: *number*

#### **Returns** [*RegistrationBuilder*](RegistrationBuilder.md) - RegistrationBuilder object where additional configuration methods can be called.

### **maxTicks**
`
maxTicks(tickCount: number): RegistrationBuilder
`
Sets the maximum number of ticks a test will run for before timing out and failing.

#### **Parameters**
- **tickCount**: *number*

#### **Returns** [*RegistrationBuilder*](RegistrationBuilder.md) - RegistrationBuilder object where additional configuration methods can be called.

### **padding**
`
padding(paddingBlocks: number): RegistrationBuilder
`
Size around the GameTest, in blocks, that should be reserved for the test when running multiple tests together.

#### **Parameters**
- **paddingBlocks**: *number*
  
  Size, in blocks, around the GameTest where additional GameTests should not be created.

#### **Returns** [*RegistrationBuilder*](RegistrationBuilder.md) - RegistrationBuilder object where additional configuration methods can be called.

### **required**
`
required(isRequired: boolean): RegistrationBuilder
`
Whether this test is required to pass as part of its broader set of tests.

#### **Parameters**
- **isRequired**: *boolean*
  
  If set to true, the test must pass in order for the entire run of tests to pass.

#### **Returns** [*RegistrationBuilder*](RegistrationBuilder.md) - RegistrationBuilder object where additional configuration methods can be called.

### **requiredSuccessfulAttempts**
`
requiredSuccessfulAttempts(attemptCount: number): RegistrationBuilder
`
Sets the number of successful test runs to be considered successful.

#### **Parameters**
- **attemptCount**: *number*

#### **Returns** [*RegistrationBuilder*](RegistrationBuilder.md) - RegistrationBuilder object where additional configuration methods can be called.

### **rotateTest**
`
rotateTest(rotate: boolean): RegistrationBuilder
`
If true, runs the test in all four rotations when run via /gametest runset.

#### **Parameters**
- **rotate**: *boolean*

#### **Returns** [*RegistrationBuilder*](RegistrationBuilder.md)

### **setupTicks**
`
setupTicks(tickCount: number): RegistrationBuilder
`
Sets the number of ticks for a test to wait before executing when the structure is spawned.

#### **Parameters**
- **tickCount**: *number*

#### **Returns** [*RegistrationBuilder*](RegistrationBuilder.md) - RegistrationBuilder object where additional configuration methods can be called.

### **structureName**
`
structureName(structureName: string): RegistrationBuilder
`
Sets the name of the structure for a test to use. "xyz:bar" will load `/structures/xyz/bar.mcstructure` from the behavior pack stack.

#### **Parameters**
- **structureName**: *string*

#### **Returns** [*RegistrationBuilder*](RegistrationBuilder.md) - RegistrationBuilder object where additional configuration methods can be called.

### **tag**
`
tag(tag: string): RegistrationBuilder
`
Adds a tag to a test. You can run all tests with a given tag with `/gametest runset <tag>`.

#### **Parameters**
- **tag**: *string*

#### **Returns** [*RegistrationBuilder*](RegistrationBuilder.md) - RegistrationBuilder object where additional configuration methods can be called.
