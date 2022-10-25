---
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
- [clearRunSchedule](#clearrunschedule)
- [run](#run)
- [runSchedule](#runschedule)

### **clearRun**
`
clearRun(runId: number): void
`

Cancels the execution of a function run that was previously scheduled via the `run` function.

#### **Parameters**
- **runId**: *number*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.



### **clearRunSchedule**
`
clearRunSchedule(runScheduleId: number): void
`

Cancels the execution of a scheduled function run that was previously scheduled via the `runSchedule` function.

#### **Parameters**
- **runScheduleId**: *number*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.



### **run**
`
run(callback: () => void, tickDelay?: number): number
`

Runs a specified function at a future time. This is frequently used to implement delayed behaviors and game loops.

#### **Parameters**
- **callback**: () => *void*
  
  Function callback to run when the tickDelay time criteria is met.
- **tickDelay**?: *number* = `null`
  
  Number of ticks to wait before running this function. 1 means this function will run on the next tick. A value of 20 means that this function will run in 20 ticks (or approximately one second). When the value of '0' is used within an event handler, this funtion will run later within the tick frame. Using the value of '0' within a System.run function is not supported.

#### **Returns** *number* - An opaque identifier that can be used with the `clearRun` function to cancel the execution of this run.

### **runSchedule**
`
runSchedule(callback: () => void, tickInterval?: number): number
`

Runs a specified function at a scheduled interval. This is frequently used to implement delayed behaviors and game loops.

#### **Parameters**
- **callback**: () => *void*
  
  Function callback to run on the specified schedule.
- **tickInterval**?: *number* = `null`
  
  The number of ticks to run this function within - run this function every `tickInterval` ticks.

#### **Returns** *number* - An opaque identifier that can be used with the `clearRunSchedule` function to cancel the execution of this scheduled run.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.
