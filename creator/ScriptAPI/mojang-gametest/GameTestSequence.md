---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-gametest.GameTestSequence Class
description: Contents of the mojang-gametest.GameTestSequence class.
---
# GameTestSequence Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Executes a set of steps defined via chained .thenXyz methods, sequentially. This facilitates a 'script' of GameTest setup methods and assertions over time.

## Methods
- [thenExecute](#thenexecute)
- [thenExecuteAfter](#thenexecuteafter)
- [thenExecuteFor](#thenexecutefor)
- [thenFail](#thenfail)
- [thenIdle](#thenidle)
- [thenSucceed](#thensucceed)
- [thenWait](#thenwait)
- [thenWaitAfter](#thenwaitafter)

### **thenExecute**
`
thenExecute(callback: () => void): GameTestSequence
`
Runs the given callback as a step within a GameTest sequence. Exceptions thrown within the callback will end sequence execution.

#### **Parameters**
- **callback**: () => *void*
  
  Callback function to execute.

#### **Returns** [*GameTestSequence*](GameTestSequence.md) - Returns a GameTestSequence object where additional .thenXyz method steps can be added.

### **thenExecuteAfter**
`
thenExecuteAfter(delayTicks: number, callback: () => void): GameTestSequence
`
After a delay, runs the given callback as a step within a GameTest sequence. Exceptions thrown within the callback will end sequence execution.

#### **Parameters**
- **delayTicks**: *number*
  
  Number of ticks to wait before executing the callback.
- **callback**: () => *void*
  
  Callback function to execute.

#### **Returns** [*GameTestSequence*](GameTestSequence.md) - Returns a GameTestSequence object where additional .thenXyz method steps can be added.

### **thenExecuteFor**
`
thenExecuteFor(tickCount: number, callback: () => void): GameTestSequence
`
Runs the given callback every tick for the given number of ticks.

#### **Parameters**
- **tickCount**: *number*
- **callback**: () => *void*
  
  Callback function to execute.

#### **Returns** [*GameTestSequence*](GameTestSequence.md) - Returns a GameTestSequence object where additional .thenXyz method steps can be added.

### **thenFail**
`
thenFail(errorMessage: string): void
`
Causes the test to fail if this step in the GameTest sequence is reached.

#### **Parameters**
- **errorMessage**: *string*
  
  Error message summarizing the failure condition.

### **thenIdle**
`
thenIdle(delayTicks: number): GameTestSequence
`
Idles the GameTest sequence for the specified delayTicks.

#### **Parameters**
- **delayTicks**: *number*
  
  Number of ticks to delay for this step in the GameTest sequence.

#### **Returns** [*GameTestSequence*](GameTestSequence.md) - Returns a GameTestSequence object where additional .thenXyz method steps can be added.

### **thenSucceed**
`
thenSucceed(): void
`
Marks the GameTest a success if this step is reached in the GameTest sequence.

### **thenWait**
`
thenWait(callback: () => void): GameTestSequence
`
Executes the given callback every tick until it succeeds. Exceptions thrown within the callback will end sequence execution.

#### **Parameters**
- **callback**: () => *void*
  
  Testing callback function to execute. Typically, this function will have .assertXyz functions within it.

#### **Returns** [*GameTestSequence*](GameTestSequence.md) - Returns a GameTestSequence object where additional .thenXyz method steps can be added.

### **thenWaitAfter**
`
thenWaitAfter(delayTicks: number, callback: () => void): GameTestSequence
`
After a delay from the previous step, executes the given callback every tick until it succeeds. Exceptions thrown within the callback will end sequence execution.

#### **Parameters**
- **delayTicks**: *number*
  
  Tick (after the previous step in the GameTest sequence) to run the callback at.
- **callback**: () => *void*
  
  Testing callback function to execute. Typically, this function will have .assertXyz functions within it.

#### **Returns** [*GameTestSequence*](GameTestSequence.md) - Returns a GameTestSequence object where additional .thenXyz method steps can be added.
