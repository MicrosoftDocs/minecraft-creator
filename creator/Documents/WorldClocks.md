---
author: jacksonhardaway
ms.author: micahm
title: Introduction to World Clocks
description: "Introduction to using the World Clock API for event-driven, time-based changes in Minecraft: Bedrock Edition."
ms.date: 08/31/2026
ms.service: minecraft-bedrock-edition
---

# Introduction to World Clocks

> [!IMPORTANT]
>
> World Clocks are an experimental feature. To use them, enable the **Beta APIs** experiment when you create or edit your world. API signatures and behavior might change before the feature becomes stable.

World Clocks make time in Minecraft event driven. You can register named clocks, subscribe to script events when they reach named moments, and pause or resume them independently with persistence.

This article introduces World Clock concepts and common operations. For the complete API reference, see the [`@minecraft/server` module](../ScriptAPI/minecraft/server/minecraft-server.md).

## Concepts

World Clocks use three main concepts:

- **World Clock**: A named counter that advances by one tick each game tick while it isn't paused. Every world has a built-in `minecraft:overworld` clock that drives the day and night cycle. You can also register custom clocks.
- **Time marker**: A named point in time on a clock. A one-shot marker fires once at a specified tick. A cyclical marker fires once per specified period, such as once per Minecraft day.
- **Clock event**: A script event that fires when a clock reaches a marker, pauses, resumes, restarts, or has its time modified. Subscribe to these events instead of polling with `system.runInterval`.

The `minecraft:overworld` clock includes markers for `minecraft:day`, `minecraft:noon`, `minecraft:sunset`, `minecraft:night`, `minecraft:midnight`, and `minecraft:sunrise`. You can subscribe to these markers to react to the vanilla day and night cycle without polling.

### Persistence

Minecraft saves each registered clock's current time and paused state with the world. It restores that state when the script registers the clock during startup. Only `time` and `isPaused` persist. Time markers exist only at runtime and must be registered again during every startup.

### Names and limitations

Clock and marker names use the standard `namespace:name` identifier format. Use your add-on's namespace for custom clocks and markers. The `minecraft` namespace is reserved for built-in content.

Each world supports:

- Up to 256 registered clocks, including `minecraft:overworld`.
- Up to 256 time markers per clock.
- Up to 128 characters in a clock or marker name.

Clocks are world scoped, not dimension scoped. Every clock advances at the world level, regardless of the dimensions that players are in. Custom clock speeds aren't supported; an unpaused clock always advances by one tick per game tick.

## Creating clocks

Register every clock your add-on uses during the startup event, before the world's saved state loads. Include the clock's time markers in the registration call:

```typescript
import { system } from '@minecraft/server';

system.beforeEvents.startup.subscribe((event) => {
 event.worldClockRegistry.registerClock('mygame:round_timer', {
  timeMarkers: [
   { name: 'mygame:warmup_over', time: 200 },
   { name: 'mygame:round_end', time: 6000 }
  ]
 });
});
```

> [!NOTE]
>
> You can't unregister clocks. After a clock is created, it exists for the lifetime of the world. Register the same clocks during every startup. Otherwise, Minecraft discards their saved time and paused state when the world loads.

After registration, use `world.getClock` to retrieve the clock:

```typescript
import { world } from '@minecraft/server';

const clock = world.getClock('mygame:round_timer');

if (clock) {
 clock.set('mygame:warmup_over');
 console.log(`Clock time: ${clock.time}`);
}
```

### Creating time markers

You can add and remove time markers at runtime:

```typescript
clock.addTimeMarker({
 name: 'mygame:sudden_death',
 time: 5800
});

clock.removeTimeMarker('mygame:warmup_over');
```

> [!NOTE]
>
> The world doesn't save time markers. Re-register every required marker during startup. Declaring markers with `registerClock` is the simplest way to ensure they're available when Minecraft restores the clock's state.

### Repeating time marker

Use `period` to make a marker repeat. This example creates four seasons that each last 30 in-game days:

```typescript
system.beforeEvents.startup.subscribe((event) => {
 const ticksPerDay = 24000; // A single day in Minecraft is 24,000 ticks.
 const seasonLength = ticksPerDay * 30;
 const yearLength = seasonLength * 4;

 event.worldClockRegistry.registerClock('mygame:seasons', {
  timeMarkers: [
   { name: 'mygame:spring', time: 0, period: yearLength },
   { name: 'mygame:summer', time: seasonLength, period: yearLength },
   { name: 'mygame:autumn', time: seasonLength * 2, period: yearLength },
   { name: 'mygame:winter', time: seasonLength * 3, period: yearLength }
  ]
 });
});
```

Because this clock is separate from `minecraft:overworld`, pausing the day and night cycle doesn't stop the seasons from advancing.

## Clock events

Subscribe to `worldClockOnTimeMarker` to run code when a clock reaches a specific marker:

```typescript
import { world } from '@minecraft/server';

world.afterEvents.worldClockOnTimeMarker.subscribe((event) => {
 if (
  event.clock.name === 'mygame:round_timer' &&
  event.timeMarker.name === 'mygame:round_end'
 ) {
  world.sendMessage('Round over!');
  endRound();
 }
});
```

You can use the same event to react to built-in markers. This example opens shops at sunrise:

```typescript
world.afterEvents.worldClockOnTimeMarker.subscribe((event) => {
 if (
  event.clock.name === 'minecraft:overworld' &&
  event.timeMarker.name === 'minecraft:sunrise'
 ) {
  openShops();
 }
});
```

This code replaces repeatedly checking `world.getTimeOfDay()` with `system.runInterval`.

### Filtering clock events

Every clock event accepts an optional filter, so your handler runs only for specific clocks and time markers.

- All clock events accept a `WorldClockEventOptions` filter that supplies a `clock`. You must supply `clock` whenever you pass a filter.
- The `worldClockOnTimeMarker` event accepts a `WorldClockTimeMarkerEventOptions` filter that supplies a `clock` and an optional `timeMarker`. When you supply a time marker, the event handler runs only when the clock reaches the marker on the supplied clock.

A filter simplifies the previous example:

```typescript
world.afterEvents.worldClockOnTimeMarker.subscribe(
 () => {
  openShops();
 },
 { clock: 'minecraft:overworld', timeMarker: 'minecraft:sunrise' }
);
```

### Fired clock events

| Event | When it fires |
|:--|:--|
| `worldClockOnTimeMarker` (after) | A registered time marker is reached. |
| `worldClockOnPaused` (after) | A clock changes from running to paused. |
| `worldClockOnResumed` (after) | A clock changes from paused to running. |
| `worldClockOnTimeModified` (after) | A clock's time is explicitly set or increased. It doesn't fire during a normal tick or when the clock is set to its current value. |
| `worldClockOnRestart` (before) | A clock is about to wrap past its integer maximum. The event handler can override the wrap target. |

Every event includes `clock`, whose `name` property you can use to filter for clocks your add-on uses.

Setting `time` and calling methods such as `skipTo` and `rewindTo` fire `worldClockOnTimeMarker` for markers on the destination tick. Jumping to a marker counts as reaching it. To move a clock without firing a marker event, choose a destination between markers.

## Pause clocks

You can pause and resume each clock independently, including the Overworld clock:

```typescript
const overworld = world.getClock('minecraft:overworld');
const cinematic = world.getClock('mygame:cinematic');

// Freeze the day and night cycle while the cinematic clock advances.
if (overworld) {
 overworld.isPaused = true;
}

if (cinematic) {
 cinematic.isPaused = false;
}
```

Pausing a clock also pauses its time markers. Markers don't fire until the clock resumes.

## Getting and setting time

Each clock exposes its current tick, paused state, and time markers. You can also move it forward or set it directly:

```typescript
const clock = world.getClock('mygame:round_timer');

if (clock) {
 console.log(clock.time);
 console.log(clock.isPaused);
 console.log(clock.timeMarkers.length);

 clock.time = 0; // Resets the clock to 0
 clock.time += 200; // Adds 200 ticks to the clock
 clock.skipTo('mygame:round_end');
}
```

Use the movement method that matches the intended behavior:

- Assign a value to `time` for an absolute jump.
- Use `set` to jump directly to the marker's base time, the `time` value you passed when the marker was added or registered. `set` ignores the clock's current time and the marker's `period`, so on a cyclical marker it can move the clock backward.
- Use `skipTo` to jump forward to the marker's next occurrence relative to the clock's current time. For a one-shot marker (no `period`), `skipTo` behaves the same as `set` and moves the clock to the marker's base time. For a cyclical marker, `skipTo` moves the clock to the marker's base time if the clock hasn't reached it yet, or to the next future occurrence if the clock already passed it.
- Use `rewindTo` for the inverse of `skipTo`: it moves the clock backward to the marker's most recent occurrence at or before the current time. If the clock's current time is before the marker's first occurrence (its base `time`), `rewindTo` leaves the clock unchanged and throws a `WorldClockRewindError`.

For example, a marker with `time: 0` and `period: 200` on a clock currently at 100 ticks: calling `skipTo` moves the clock to 200 ticks (the next occurrence). Calling `skipTo` again while at 200 ticks moves the clock to 400 ticks, firing the marker again. `rewindTo` does the reverse, moving the clock backward to the previous occurrence.

## Commands

> [!IMPORTANT]
>
> The `/time of` commands are an experimental feature. To use them, enable the **Creator World Clocks Features** experiment when you create or edit your world. Commands and command behavior might change before the feature becomes stable.

The `/time of <clock>` command family lets you inspect and control any registered clock:

```text
/time of <clock> set <timeMarker|time> [next|previous|stay]
/time of <clock> add <time>
/time of <clock> pause
/time of <clock> resume
/time of <clock> query time
```

When you set a clock to a cyclical marker, the optional final argument selects an occurrence:

- `next` moves forward to the next occurrence. This value is the default.
- `previous` moves backward to the most recent occurrence.
- `stay` selects the occurrence in the current period, which might move the clock forward or backward.

All three modes resolve to the same tick for a one-shot marker.

```text
/time of mygame:round_timer set mygame:round_end
/time of mygame:seasons set mygame:winter previous
/time of mygame:cinematic pause
/time of minecraft:overworld query time
```

Existing commands such as `/time set day`, `/time set night`, and `/time query daytime` continue to operate on the Overworld clock.

## Examples

### Persistent mini-game countdown

Register one-shot markers for countdown notifications and the end of a round, then subscribe to their events:

```typescript
import { system, world } from '@minecraft/server';

system.beforeEvents.startup.subscribe((event) => {
  event.worldClockRegistry.registerClock('lobby:countdown', {
    timeMarkers: [
      { name: 'lobby:thirty_seconds', time: 6000 - 600 },
      { name: 'lobby:start', time: 6000 }
    ]
  });
});

world.afterEvents.worldClockOnTimeMarker.subscribe((event) => {
  if (event.clock.name !== 'lobby:countdown') {
    return;
  }

  if (event.timeMarker.name === 'lobby:thirty_seconds') {
    world.sendMessage('30 seconds until the round starts!');
  } else if (event.timeMarker.name === 'lobby:start') {
    startRound();
    world.getClock('lobby:countdown').time = 0;
  }
});
```

### Pause the Overworld day cycle

Pause the Overworld clock while a separate cinematic clock advances, then resume the Overworld when the cinematic reaches its final marker:

```typescript
import { world } from '@minecraft/server';

function playCinematic() {
 world.getClock('minecraft:overworld').isPaused = true;

 const cinematic = world.getClock('mygame:cinematic');
 cinematic.time = 0;
 cinematic.isPaused = false;
}

world.afterEvents.worldClockOnTimeMarker.subscribe((event) => {
 if (
  event.clock.name === 'mygame:cinematic' &&
  event.timeMarker.name === 'mygame:cinematic_end'
 ) {
  world.getClock('minecraft:overworld').isPaused = false;
 }
});
```

## Related content

- [`@minecraft/server.World` class reference](../ScriptAPI/minecraft/server/World.md)
- [`@minecraft/server.WorldClock` class reference](../ScriptAPI/minecraft/server/WorldClock.md)
- [Introduction to Scripting in Minecraft](./scripting/introduction.md)
- [Experimental Features in Minecraft: Bedrock Edition](./ExperimentalFeaturesToggle.md)
