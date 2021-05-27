---
# DO NOT TOUCH — This file was automatically generated.  See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: GameTest.RegistrationBuilder Class
description: Contents of the GameTest.RegistrationBuilder class.
---
# RegistrationBuilder Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.A utility class to set GameTest parameters for a test


## Methods
- [batch](#batch)
- [required](#required)
- [requiredSuccessfulAttempts](#requiredsuccessfulattempts)
- [maxAttempts](#maxattempts)
- [maxTicks](#maxticks)
- [setupTicks](#setupticks)
- [structureName](#structurename)
- [padding](#padding)
- [tag](#tag)
  
### **batch**
`
batch(batchName: ('night'|'day')): RegistrationBuilder
`

Sets the batch for the test to run in
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **batchName** | `'night'`, `'day'` | Name of the batch for the test |

Returns [*RegistrationBuilder*](RegistrationBuilder.md)


### **required**
`
required(isRequired: boolean): RegistrationBuilder
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **isRequired** | *boolean* | - |

Returns [*RegistrationBuilder*](RegistrationBuilder.md)


### **requiredSuccessfulAttempts**
`
requiredSuccessfulAttempts(attemptCount: number): RegistrationBuilder
`

Sets the number of successful test runs to be considered successful
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **attemptCount** | *number* | - |

Returns [*RegistrationBuilder*](RegistrationBuilder.md)


### **maxAttempts**
`
maxAttempts(attemptCount: number): RegistrationBuilder
`

Sets the maximum number of times a test will try to rerun if it fails
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **attemptCount** | *number* | - |

Returns [*RegistrationBuilder*](RegistrationBuilder.md)


### **maxTicks**
`
maxTicks(tickCount: number): RegistrationBuilder
`

Sets the maximum number of ticks a test will run for before timing out and failing
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **tickCount** | *number* | - |

Returns [*RegistrationBuilder*](RegistrationBuilder.md)


### **setupTicks**
`
setupTicks(tickCount: number): RegistrationBuilder
`

Sets the number of ticks for a test to wait before executing when the structure is spawned
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **tickCount** | *number* | - |

Returns [*RegistrationBuilder*](RegistrationBuilder.md)


### **structureName**
`
structureName(structureName: string): RegistrationBuilder
`

Sets the name of the structure for a test to use.  "Foo:bar" will load `/structures/Foo/bar.mcstructure` from the behavior pack stack
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **structureName** | *string* | - |

Returns [*RegistrationBuilder*](RegistrationBuilder.md)


### **padding**
`
padding(paddingBlocks: number): RegistrationBuilder
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **paddingBlocks** | *number* | - |

Returns [*RegistrationBuilder*](RegistrationBuilder.md)


### **tag**
`
tag(tag: string): RegistrationBuilder
`

Adds a tag to a test.  You can run all tests with a given tag with `/gametest runall <tag>`
#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **tag** | *string* | - |

Returns [*RegistrationBuilder*](RegistrationBuilder.md)


