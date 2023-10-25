---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.System Class
description: Contents of the @minecraft/server.System class.
---
# System Class

A class that provides system-level events and functions.

## Properties

### **afterEvents**
`read-only afterEvents: SystemAfterEvents;`

Returns a collection of after-events for system-level operations.

Type: [*SystemAfterEvents*](SystemAfterEvents.md)

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.

### **beforeEvents**
`read-only beforeEvents: SystemBeforeEvents;`

Returns a collection of before-events for system-level operations.

Type: [*SystemBeforeEvents*](SystemBeforeEvents.md)

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.

### **currentTick**
`read-only currentTick: number;`

Represents the current world tick of the server.

Type: *number*

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
  
  Function callback to run at the next game tick.

#### **Returns** *number* - An opaque identifier that can be used with the `clearRun` function to cancel the execution of this run.

#### Examples
##### ***trapTick.ts***
```typescript
  const overworld = mc.world.getDimension("overworld");

  function trapTick() {
    try {
      // Minecraft runs at 20 ticks per second.
      if (mc.system.currentTick % 1200 === 0) {
        mc.world.sendMessage("Another minute passes...");
      }
    } catch (e) {
      console.warn("Error: " + e);
    }
    mc.system.run(trapTick);
  }
  mc.system.run(trapTick);
```

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

#### Examples
##### ***every30Seconds.ts***
```typescript
  let intervalRunIdentifier = Math.floor(Math.random() * 10000);

  mc.system.runInterval(() => {
    mc.world.sendMessage("This is an interval run " + intervalRunIdentifier + " sending a message every 30 seconds.");
  }, 600);
```

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
