---
author: chmeyer-ms
ms.author: chmeyer
title: Game Loops and Timed Callbacks - a system.run Guide
description: "A guide to system.run and the update loop."
ms.service: minecraft-bedrock-edition
---

# Game Loops and Timed Callbacks - a system.run Guide

This guide will help you get familiar with the system.run APIs, how they work, how to use them, and why you might choose one over the other for a given task. After reading this article, you should have a good understanding of how system.run can be used to create a game loop and how system.runJob can assist you with long running operations.

## The script tick

Before we dive into how to use the system.run APIs, let's first go over the Minecraft script tick. Consider the following outline of operations that occur during a single tick:

#### Tick Start

1) Minecraft simulation begins and before events are triggered.
    - Scripts for these are limited to read-only state. In other words, script is not allowed to alter world state within these callbacks.

1) Start of the "script" tick
    - Execution is now within the script portion of the tick.

1) Process "asynchronous code" continuations
    - Code following await would execute here.

1) Loop over system.run callbacks and after events.
    - Process all system.run callbacks.
    - Process all before and after events.
    - Possibly queue any new before and after events as a result of previous steps.
    - Repeat until no more events or system callbacks are queued for the current tick.

1) Process system job queue with time remaining
    - For generators created with system.runJob.

1) Increment tick and end the script portion of the tick.

#### Tick End

## The system.run family of APIs

You may be familiar with the concept of a game loop from other game engines or modding tools. While other game engines may have a update functions to override or function or tick events to register for, Bedrock takes a slightly different approach. Turning to web development for inspiration, Bedrock per tick APIs are modeled after the web's setInterval and setTimeout functions. The Bedrock equivalents are system.run, system.runTimeout, and system.runInterval. With these methods, you have everything you need to create a game loop.

### A first look at the simplest one - system.run

#### Using system.run to create the game loop

```javascript
import { system } from "@minecraft/server";

function update() {
    // game logic here...

    // queue update function for next tick
    system.run(update);
}

system.run(update);
```

This will execute the `update()` function for each iteration of the Minecraft simulation. This occurs during section [4](#tick-start) from above.

As shown in this example, it is acceptable to queue another callback from within an existing system.run callback. This works because system.run will mark the new callback to execute during the following tick. This is an important concept to understand. It ensures that the system.run method cannot call itself infinitely within a single tick, which would trigger a watchdog shutdown event.

#### Using system.run to queue work for later in the frame

Another interesting use case for system.run is to schedule work from a before event to later in the frame. As you may know, before events execute in 'read-only' mode. In this mode, functions that change Minecraft world state (such as spawning entities, or setting blocks) are not allowed. By using system.run, you can defer these operations until later in the tick. Consider the following script.

```typescript
import { 
    ExplosionBeforeEvent,
    system,
    world
} from "@minecraft/server";

function explosionBeforeEventHandler(e: ExplosionBeforeEvent) {
    // cannot spawn a pig in the event handler, 
    // read-only operations only
    
    // queue for later in the current tick
    system.run(() => {
        e.dimension.spawnEntity('pig', { x: 1, y: 4, z: 1 });
    })
}

world.beforeEvents.explosion.subscribe(explosionBeforeEventHandler);
```

In this example, the work being done by the event handler alters world state so it must be deferred until later in the frame. Referencing the script tick from above, the event happens at section [1](#tick-start), and is deferred to section [4](#tick-start) using system.run.

Keep in mind that you would not be able to put event cancelation logic in the deferred portion of the event, as the event will have already happened by the time the system.run callback executes.

### Next up: the one with a tick parameter - system.runTimeout

The system.runTimeout function behaves much like system.run except that it offers a new parameter that lets you indicate how many ticks into the future it should run. If that future tick is 0, it means the current tick or as soon as possible. If the parameter is 1, it behaves much like the standard system.run. A value of 2 means to skip the next tick and execute on the one after.

As stated above, system.runTimeout with a tick parameter of 1 is equivalent to system.run. And just like system.run, if called from within a system.run callback a value of 1 means the next tick. Only if called at the beginning of the tick, or otherwise outside of any system.run* callbacks would a value of 1 execute in the current tick.

A call to system.runTimeout with a tick parameter of 0 means to execute as soon as possible. And unlike system.run, if called from within a system.run callback a value of 0 means to execute within the current tick. This version does not stop you from creating infinite callbacks so be careful when using it in this way.

Here are some example usages:

```javascript
// execute as soon as possible, the next time system.run events are processed
system.runTimeout(() => {}, 0);

// execute this tick if we haven't yet processed system.run events, 
// otherwise execute next tick
system.runTimeout(() => {}, 1);

// execute the tick after next
system.runTimeout(() => {}, 2);
```

When using system.runTimeout with a tick parameter of 0 or 1 it can sometimes be tricky to know exactly which tick that will execute on - either the current tick or the next. In most cases it is simpler to use system.run, knowing that it will execute as soon as possible while being safe enough to not cause infinite recursion.

### Then the one that keeps going on its own - system.runInterval

Next we have system.runInterval. This method is similar to system.runTimeout except that it will re-queue the same callback on your behalf until you call system.clearRun. Much like system.runTimeout, system.runInterval with a tick parameter of 1 will run the first time on the next tick, and then again each subsequent tick until it is cleared. And system.runInterval with a tick parameter of 2 means to run every other tick. A value of 0 for the tick parameter is effectively the same as system.runInterval with a tick parameter of 1 - there is no way to get a runInterval to infinitely queue itself into a watchdog event.

```javascript
import { system } from "@minecraft/server";

function tick() {
    // called every tick
}
system.runInterval(tick, 0);
```

Could you use system.runInterval to create a game loop? Absolutely. But `system.run` is arguably more flexible. Perhaps there's a condition within the tick function that you are waiting on, and you don't need any additional tick callbacks until that condition is true. At that point, you can make the call to `system.run` to queue the next tick.
However, with system.runInterval your tick function will be called every tick, whether you want it to or not.

### And finally - system.runJob

The system.runJob method is different from the other system.run methods in a number of ways. It is not well suited for event deferral or game loops. It is best for handling long running tasks that don't need to finish on a specific tick.

It can be difficult to know how much work can be done in a given tick without slowing down the simulation. If you do too little, the results of the operation could take longer than necessary in terms of real game time. But if you do too much work it may trigger a watchdog event, or cause another aspect of the game to appear broken or slow to the user. Hardware differences make matters even worse: what is performant on a PC may be slow on a mobile device or console.

The system.runJob method aims to provide a mechanism for performing long running tasks on your behalf without the need to micromanage the amount of work that occurs each tick. It does this by performing work in small increments while closely monitoring how much time has been used, and how much time is left. When approaching the limit, it will stop and continue the remainder of the work next tick, or the tick after, or some future tick until all the work is completed.

How does it work? With the help of JavaScript generator functions. For example, let's say you want to place a 10x10x10 structure of blocks. If you attempt do this in a single tick, you risk running into a watchdog limit and a simulation slowdown. When using system.runJob, you can rely on the job system to only do as much work as the tick will allow. This may mean that your cube of blocks can be completed within a single frame, but more likely it will take a few frames to get the job done on anything less than the fastest PC hardware. Keep in mind that this is a tradeoff with system.runJob. You allow the job system to keep the simulation running at a consistent rate, but with the understanding that your task may not finish in the same number of ticks on all devices, or even on the same device depending on how much time is allotted to the job queue in a given tick.

```javascript
import {
    system, 
    world,
    BlockPermutation
} from "@minecraft/server";

function* blockPlacingGenerator(size, startX, startY, startZ) {
    const overworld = world.getDimension('overworld');
    const perm = BlockPermutation.resolve("minecraft:planks");
    for (let x = startX; x < startX + size; x++) {
        for (let y = startY; y < startY + size; y++) {
            for (let z = startZ; z < startZ + size; z++) {
                const block = overworld.getBlock({ x: x, y: y, z: z });
                if (block) {
                    block.setPermutation(perm);
                }
                // yield back to job coordinator after ever place
                yield;
            }
        }
    }
}
// build a 10x10x10 cube of plank blocks starting at world location -2, -60, 1.
system.runJob(generator(10, -2, -60, 1));
```

In this example, the generator yields execution after every block place operation. This means that the job queue is the deciding factor for how many block place operations execute each tick. It is a best practice to author generator functions with a high level of granularity. That means generator functions should be authored such that a single iteration of the generator (a single block place in this example) would be unlikely to exceed the frame time. This enables the job system to scale based on the performance of the device. On a fast PC it may be able to do 30 block place operations, but on mobile that number drops to 5. A poorly authored generator function may perform 5 iterations on a fast PC but on a mobile device it can only do 1 and that single operation triggers a watchdog warning.  

It is important to keep in mind that the job system will not starve your generators. At a minimum, every generator for every script behavior pack that has generators will be allowed to execute at least 1 iteration every tick. It is therefore up to the author to ensure a single iteration does not exceed the time allotment of the script tick.

#### Best practices when writing generator functions for system.runJob

- Choose a high level of granularity in your generator functions. This offers the most flexibility when the job system has to scale to the performance of different devices.
- Try to keep the amount of work consistent between iterations. This helps the job system correctly estimate how much time to give each generator per tick.

## Wrapping up

Hopefully you have enough information to get started using the system.run APIs, when to choose one over the other and how to know when a given callback will execute.