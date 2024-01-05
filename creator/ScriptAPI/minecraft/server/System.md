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

::: moniker range="=minecraft-bedrock-experimental"
### **beforeEvents**
`read-only beforeEvents: SystemBeforeEvents;`

Returns a collection of before-events for system-level operations.

Type: [*SystemBeforeEvents*](SystemBeforeEvents.md)

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.
::: moniker-end

### **currentTick**
`read-only currentTick: number;`

Represents the current world tick of the server.

Type: *number*

## Methods
::: moniker range="=minecraft-bedrock-experimental"
- [clearJob](#clearjob)
::: moniker-end
- [clearRun](#clearrun)
- [run](#run)
- [runInterval](#runinterval)
::: moniker range="=minecraft-bedrock-experimental"
- [runJob](#runjob)
::: moniker-end
- [runTimeout](#runtimeout)

::: moniker range="=minecraft-bedrock-experimental"
### **clearJob**
`
clearJob(jobId: number): void
`

Cancels the execution of a job queued via System.runJob.

#### **Parameters**
- **jobId**: *number*
  
  The job ID returned from System.runJob.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.
::: moniker-end

### **clearRun**
`
clearRun(runId: number): void
`

Cancels the execution of a function run that was previously scheduled via System.run.

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

#### Examples
##### ***trapTick.ts***
```typescript
  const overworld = mc.world.getDimension("overworld");

  try {
    // Minecraft runs at 20 ticks per second.
    if (mc.system.currentTick % 1200 === 0) {
      mc.world.sendMessage("Another minute passes...");
    }
  } catch (e) {
    console.warn("Error: " + e);
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

::: moniker range="=minecraft-bedrock-experimental"
### **runJob**
`
runJob(generator: Generator<void, void, void>): number
`

Queues a generator to run until completion.  The generator will be given a time slice each tick, and will be run until it yields or completes.

#### **Parameters**
- **generator**: Generator<*void*, *void*, *void*>
  
  The instance of the generator to run.

#### **Returns** *number* - An opaque handle that can be used with System.clearJob to stop the run of this generator.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

#### Examples
##### ***cubeGenerator.ts***
```typescript
import { BlockPermutation, Dimension, Location, world, ButtonPushAfterEvent, system } from "@minecraft/server";

// A simple generator that places blocks in a cube at a specific location
// with a specific size, yielding after every block place.
function* blockPlacingGenerator(
  blockPerm: BlockPermutation,
  dimension: Dimension,
  size: number,
  start: Location,
) {
  for (let x = start.x; x < start.x + size; x++) {
    for (let y = start.y; y < start.y + size; y++) {
      for (let z = start.z; z < start.z + size; z++) {
        const block = dimension.getBlock({ x: x, y: y, z: z });
        if (block) {
          block.setPermutation(blockPerm);
        }
        yield;
      }
    }
  }
}

// When a button is pushed, we will place a 15x15x15 cube of cobblestone 10 blocks above it
world.afterEvents.buttonPush.subscribe((buttonPushEvent: ButtonPushAfterEvent) => {
  const cubePos = buttonPushEvent.block.location;
  cubePos.y += 10;

  const blockPerm = BlockPermutation.resolve("minecraft:cobblestone");
  
  system.runJob(blockPlacingGenerator(blockPerm, buttonPushEvent.dimension, 15, cubePos));
});
```
::: moniker-end

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
