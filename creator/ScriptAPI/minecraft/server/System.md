---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.System Class
description: Contents of the @minecraft/server.System class.
---
# System Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
A class that provides system-level events and functions.

## Properties

### **currentTick**
`read-only currentTick: number;`

Represents the current world tick of the server.

Type: *number*

### **events**
`read-only events: SystemEvents;`

Contains a set of events that are applicable for the lifecycle of items in the Minecraft system.

Type: [*SystemEvents*](SystemEvents.md)

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.

## Methods
- [clearRun](#clearrun)
- [run](#run)
- [runInterval](#runinterval)
- [runTimeout](#runtimeout)

### **clearRun**
`
clearRun(runId: number): void
`

Cancels the execution of a function run that was previously scheduled via the `run` function.

#### **Parameters**
- **runId**: *number*

### **run**
`
run(callback: () => void): number
`

Runs a specified function at a future time. This is frequently used to implement delayed behaviors and game loops.

#### **Parameters**
- **callback**: () => *void*
  
  Function callback to run when the tickDelay time criteria is met.

#### **Returns** *number* - An opaque identifier that can be used with the `clearRun` function to cancel the execution of this run.

### **runInterval**
`
runInterval(callback: () => void, tickInterval?: number): number
`

Runs a set of code on an interval.

#### **Parameters**
- **callback**: () => *void*
  
  Functional code that will run when this interval occurs.
- **tickInterval**?: *number* = `null`
  
  An interval of every N ticks that the callback will be called upon.

#### **Returns** *number* - An opaque handle that can be used with the clearRun method to stop the run of this function on an interval.

### **runTimeout**
`
runTimeout(callback: () => void, tickDelay?: number): number
`

Runs a set of code at a future time specified by tickDelay.

#### **Parameters**
- **callback**: () => *void*
  
  Functional code that will run when this timeout occurs.
- **tickDelay**?: *number* = `null`
  
  Amount of time, in ticks, before the interval will be called.

#### **Returns** *number* - An opaque handle that can be used with the clearRun method to stop the run of this function on an interval.
