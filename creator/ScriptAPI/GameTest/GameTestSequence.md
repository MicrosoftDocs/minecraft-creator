---
# DO NOT TOUCH — This file was automatically generated.  See https://github.com/Mojang/MinecraftScriptingApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: Gaming
title: GameTest.GameTestSequence Class
description: Contents of the GameTest.GameTestSequence class.
---
# GameTestSequence Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs.

## Methods
- [thenExecute](#thenexecute)
- [thenExecuteAfter](#thenexecuteafter)
- [thenFail](#thenfail)
- [thenIdle](#thenidle)
- [thenSucceed](#thensucceed)
- [thenWait](#thenwait)
- [thenWaitWithDelay](#thenwaitwithdelay)
  
### **thenExecute**
`
thenExecute(callback: () => undefined): GameTestSequence
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **callback** | () => undefined | - |

Returns [*GameTestSequence*](GameTestSequence.md)


### **thenExecuteAfter**
`
thenExecuteAfter(delayTicks: number, callback: () => undefined): GameTestSequence
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **delayTicks** | *number* | - |
| **callback** | () => undefined | - |

Returns [*GameTestSequence*](GameTestSequence.md)


### **thenFail**
`
thenFail(errorMessage: string): void
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **errorMessage** | *string* | - |

Returns *undefined*


### **thenIdle**
`
thenIdle(delayTicks: number): GameTestSequence
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **delayTicks** | *number* | - |

Returns [*GameTestSequence*](GameTestSequence.md)


### **thenSucceed**
`
thenSucceed(): void
`


Returns *undefined*


### **thenWait**
`
thenWait(callback: () => undefined): GameTestSequence
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **callback** | () => undefined | - |

Returns [*GameTestSequence*](GameTestSequence.md)


### **thenWaitWithDelay**
`
thenWaitWithDelay(delayTicks: number, callback: () => undefined): GameTestSequence
`

#### Arguments
| Param | Type | Description |
| :--- | :--- | :---: |
| **delayTicks** | *number* | - |
| **callback** | () => undefined | - |

Returns [*GameTestSequence*](GameTestSequence.md)


