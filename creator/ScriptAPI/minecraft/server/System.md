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
- [clearJob](#clearjob)
- [clearRun](#clearrun)
- [run](#run)
- [runInterval](#runinterval)
- [runJob](#runjob)
- [runTimeout](#runtimeout)
- [waitTicks](#waitticks)

### **clearJob**
`
clearJob(jobId: number): void
`

Cancels the execution of a job queued via [*@minecraft/server.System.runJob*](../../minecraft/server/System.md#runjob).

#### **Parameters**
- **jobId**: *number*
  
  The job ID returned from [*@minecraft/server.System.runJob*](../../minecraft/server/System.md#runjob).

### **clearRun**
`
clearRun(runId: number): void
`

Cancels the execution of a function run that was previously scheduled via [*@minecraft/server.System.run*](../../minecraft/server/System.md#run).

#### **Parameters**
- **runId**: *number*

### **run**
`
run(callback: () => void): number
`

Runs a specified function at the next available future time. This is frequently used to implement delayed behaviors and game loops. When run within the context of an event handler, this will generally run the code at the end of the same tick where the event occurred. When run in other code (a system.run callout), this will run the function in the next tick. Note, however, that depending on load on the system, running in the same or next tick is not guaranteed.

#### **Parameters**
- **callback**: () => *void*
  
  Function callback to run at the next game tick.

**Returns** *number* - An opaque identifier that can be used with the `clearRun` function to cancel the execution of this run.

#### Examples
##### ***trapTick.ts***
```typescript
import { system, world } from '@minecraft/server';

function printEveryMinute() {
    try {
        // Minecraft runs at 20 ticks per second.
        if (system.currentTick % 1200 === 0) {
            world.sendMessage('Another minute passes...');
        }
    } catch (e) {
        console.warn('Error: ' + e);
    }

    system.run(printEveryMinute);
}

printEveryMinute();
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

**Returns** *number* - An opaque handle that can be used with the clearRun method to stop the run of this function on an interval.

#### Examples
##### ***every30Seconds.ts***
```typescript
import { system, world } from '@minecraft/server';

const intervalRunIdentifier = Math.floor(Math.random() * 10000);

system.runInterval(() => {
    world.sendMessage('This is an interval run ' + intervalRunIdentifier + ' sending a message every 30 seconds.');
}, 600);
```

### **runJob**
`
runJob(generator: Generator<void, void, void>): number
`

Queues a generator to run until completion.  The generator will be given a time slice each tick, and will be run until it yields or completes.

#### **Parameters**
- **generator**: Generator<*void*, *void*, *void*>
  
  The instance of the generator to run.

**Returns** *number* - An opaque handle that can be used with [*@minecraft/server.System.clearJob*](../../minecraft/server/System.md#clearjob) to stop the run of this generator.

#### Examples
##### ***cubeGenerator.ts***
```typescript
import { BlockPermutation, DimensionLocation, world, ButtonPushAfterEvent, system } from '@minecraft/server';

// A simple generator that places blocks in a cube at a specific location
// with a specific size, yielding after every block place.
function* blockPlacingGenerator(blockPerm: BlockPermutation, startingLocation: DimensionLocation, size: number) {
    for (let x = startingLocation.x; x < startingLocation.x + size; x++) {
        for (let y = startingLocation.y; y < startingLocation.y + size; y++) {
            for (let z = startingLocation.z; z < startingLocation.z + size; z++) {
                const block = startingLocation.dimension.getBlock({ x: x, y: y, z: z });
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

    const blockPerm = BlockPermutation.resolve('minecraft:cobblestone');

    system.runJob(blockPlacingGenerator(blockPerm, { dimension: buttonPushEvent.dimension, ...cubePos }, 15));
});
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

**Returns** *number* - An opaque handle that can be used with the clearRun method to stop the run of this function on an interval.

### **waitTicks**
`
waitTicks(ticks: number): Promise<void>
`

#### **Parameters**
- **ticks**: *number*

**Returns** Promise&lt;*void*&gt;

> [!WARNING]
> This function can throw errors.
>
> Throws [*@minecraft/common.EngineError*](../../minecraft/common/EngineError.md)
