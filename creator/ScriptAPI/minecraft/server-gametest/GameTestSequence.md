---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-gametest.GameTestSequence Class
description: Contents of the @minecraft/server-gametest.GameTestSequence class.
---
# GameTestSequence Class

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

**Returns** [*GameTestSequence*](GameTestSequence.md) - Returns a GameTestSequence object where additional .thenXyz method steps can be added.

> [!IMPORTANT]
> This function can't be called in read-only mode.

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

**Returns** [*GameTestSequence*](GameTestSequence.md) - Returns a GameTestSequence object where additional .thenXyz method steps can be added.

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **thenExecuteFor**
`
thenExecuteFor(tickCount: number, callback: () => void): GameTestSequence
`

Runs the given callback every tick for the given number of ticks.

#### **Parameters**
- **tickCount**: *number*
- **callback**: () => *void*
  
  Callback function to execute.

**Returns** [*GameTestSequence*](GameTestSequence.md) - Returns a GameTestSequence object where additional .thenXyz method steps can be added.

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **thenFail**
`
thenFail(errorMessage: string): void
`

Causes the test to fail if this step in the GameTest sequence is reached.

#### **Parameters**
- **errorMessage**: *string*
  
  Error message summarizing the failure condition.

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **thenIdle**
`
thenIdle(delayTicks: number): GameTestSequence
`

Idles the GameTest sequence for the specified delayTicks.

#### **Parameters**
- **delayTicks**: *number*
  
  Number of ticks to delay for this step in the GameTest sequence.

**Returns** [*GameTestSequence*](GameTestSequence.md) - Returns a GameTestSequence object where additional .thenXyz method steps can be added.

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **thenSucceed**
`
thenSucceed(): void
`

Marks the GameTest a success if this step is reached in the GameTest sequence.

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **thenWait**
`
thenWait(callback: () => void): GameTestSequence
`

Executes the given callback every tick until it succeeds. Exceptions thrown within the callback will end sequence execution.

#### **Parameters**
- **callback**: () => *void*
  
  Testing callback function to execute. Typically, this function will have .assertXyz functions within it.

**Returns** [*GameTestSequence*](GameTestSequence.md) - Returns a GameTestSequence object where additional .thenXyz method steps can be added.

> [!IMPORTANT]
> This function can't be called in read-only mode.

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

**Returns** [*GameTestSequence*](GameTestSequence.md) - Returns a GameTestSequence object where additional .thenXyz method steps can be added.

> [!IMPORTANT]
> This function can't be called in read-only mode.
