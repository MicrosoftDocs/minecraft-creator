---
author: jacksonhardaway
ms.author: micahm
title: Introduction to Points of Interest
description: "Introduction to creating and using points of interest to automate scriptable locations with ticket reservations."
ms.service: minecraft-bedrock-edition
ms.date: 10/23/2026
---

# Introduction to Points of Interest

> [!IMPORTANT]
>
> The creator-facing POI API is an experimental feature. To use it, enable the **POI** experiment when you create or edit your world. API signatures and behavior might change before the feature becomes stable.

Minecraft uses points of interest (POIs) for beds, job sites, meeting bells, and rifts. For example, villagers use POIs to find unclaimed beds and workstations.

The POI API lets you define custom POI types and tags, find nearby POIs from scripts, and reserve access to POIs with tickets.

POIs are currently block-based. A POI represents a block at a specific position in a specific dimension. When you associate a block identifier with a POI type, every existing and future instance of that block becomes a POI after its chunk loads.

## Concepts

The POI API uses four main concepts:

- **POI type**: A namespaced identifier, such as `myworld:quest_board`, that defines the blocks, tags, ticket count, and usable distance for a category of POIs.
- **POI instance**: A specific block, at a set of `x`, `y`, and `z` coordinates in a dimension, that Minecraft recognizes as a POI of a given type. A POI instance is distinct from the POI type that classifies it and from the block that occupies its position.
- **POI tag**: A namespaced label that groups POI types together (`minecraft:acquireable_job`). Tags form a hierarchy through `parents` and `children`, so you can query for a broad category ("any village POI") without listing every specific type.
- **Ticket**: A reservation slot for a POI. You can take and release tickets with scripting so multiple actors don't claim the same slot.

### Namespaces

POI type and tag names use the standard `namespace:name` identifier format. Use a namespace for your add-on, such as `myworld`.

Don't use the `minecraft` namespace for custom types or tags because it's reserved for built-in POIs such as `minecraft:home` and `minecraft:meeting`.

### Storage

Minecraft stores POI data separately from chunk data. This storage method affects when POIs are available:

- A block becomes an indexed POI after its chunk loads at least once and Minecraft evaluates the block's POI type.
- After Minecraft indexes a block POI, queries can find it whether or not its chunk is currently loaded.
- Chunks must load to resynchronize POI data, so a query might not reflect recent changes in terrain that didn't load yet.
- Queries can't find block POIs in chunks that never loaded, because those blocks aren't indexed yet.

Use ticking areas or player-driven chunk loading to load an area at least once if your gameplay must index block POIs in chunks that a player didn't visit.

## Define a POI type

Define each POI type in a separate JSON file in the behavior pack's **poi/blocks** folder. The following example defines quest boards that one actor can reserve at a time:

```json
{
  "format_version": "1.26.40",
  "minecraft:poi_block": {
    "description": {
      "identifier": "myworld:quest_board"
    },
    "tickets": 1,
    "usable_distance": 2,
    "blocks": [
      "myworld:oak_quest_board",
      "myworld:iron_quest_board"
    ],
    "tags": [
      "myworld:interactable"
    ]
  }
}
```

| Field | Required | Description |
|:--|:--:|:--|
| `blocks` | Yes | Block identifiers that become POIs of this type. A block identifier can belong to more than one POI type. |
| `tickets` | No | Number of concurrent reservations the POI supports. The value can range from 0 through 255. Defaults to `0` if omitted. |
| `usable_distance` | No | Distance, in blocks, at which an actor is considered to have reached the POI. The value can range from 0 through 255. Defaults to `1` if omitted. |
| `tags` | No | POI tag identifiers associated with this type. |

You don't need to register each block position. After this type loads, Minecraft automatically indexes every matching quest board block in a loaded chunk.

Each indexed block uses storage and query time, so associate POIs with meaningful, sparse blocks such as quest boards, altars, waypoints, and workstations. Don't associate a common block such as `minecraft:stone` with a POI type.

A block can be associated with only one POI type. If multiple POI types specify the same block, the last type registered wins. If a block needs multiple types, POI tags should be used instead.

## Define POI tags

Define each POI tag in a separate JSON file in the behavior pack's **poi/tags** folder:

```json
{
  "format_version": "1.26.40",
  "minecraft:poi_tag": {
    "description": {
      "identifier": "myworld:interactable"
    },
    "parents": [
      "myworld:village"
    ],
    "children": []
  }
}
```

The `parents` and `children` fields are optional. A query for a parent tag matches POIs associated with any descendant tag. For example, querying for `myworld:village` also finds POIs tagged with `myworld:interactable`.

This hierarchy follows the built-in POI model. The farmer POI type has the `minecraft:acquirable_job_site` tag, which is a child of `minecraft:village`. A query for `minecraft:village` can therefore find village workstations without listing each workstation type.

## Query POIs from a script

Access POI queries through a dimension's POI manager:

```typescript
import { PoiBlockOccupancyFilter, world } from '@minecraft/server';

const overworld = world.getDimension('overworld');
const blocks = overworld.poiManager.blocks;
```

> [!IMPORTANT]
>
> You can't call POI manager methods in restricted-execution mode. If you need to query or update POIs in response to a before event, use `system.run` to defer the operation.

### Type filters

Every query requires a filter that selects eligible POI types.

| Filter | Example | Behavior |
|:--|:--|:--|
| Name | `{ name: 'myworld:quest_board' }` | Matches one POI type. |
| Tags | `{ tags: ['myworld:interactable', 'myworld:village'] }` | Matches types that have all specified tags. |
| Predicate | `(type) => type.tickets > 0` | Includes types when the function returns `true`. |

Queries can also include an occupancy filter.

| Occupancy filter | Behavior |
|:--|:--|
| `PoiBlockOccupancyFilter.Any` | Includes every matching POI. This value is the default. |
| `PoiBlockOccupancyFilter.HasVacancy` | Includes POIs with at least one available ticket. |
| `PoiBlockOccupancyFilter.Full` | Includes POIs with no available tickets. |

### Find the nearest POI

Use `getInRangeSorted` when you need the nearest matching POI or want results in distance order:

```typescript
const results = blocks.getInRangeSorted(
  { name: 'myworld:quest_board' },
  player.location,
  64,
  PoiBlockOccupancyFilter.HasVacancy
);

if (results.length > 0) {
  const { distance: squaredDistance, poi } = results[0];
  const distance = Math.sqrt(squaredDistance);
  player.sendMessage(
    `The nearest available quest board is ${distance.toFixed(1)} blocks away.`
  );
}
```

`getInRangeSorted` returns `PoiDistancePair[]` in order from nearest to farthest. Each `poi` property is a `PoiBlockInstance`, and the `distance` property is the squared three-dimensional distance, in blocks squared. Use `Math.sqrt(distance)` when you need the distance in blocks.

A `PoiBlockInstance` reports both its type and its current state. The instance's `tickets` property is the number of tickets currently available. The instance's `type.tickets` property is the maximum number of tickets for that POI type.

`PoiBlockType` also exposes a `has(tag)` method that tests whether the type has a specific POI tag, and a numeric `id` property, in addition to the `name`, `tickets`, and `usableRange` properties that this article uses elsewhere.

### Choose a query method

| Method | Use it to |
|:--|:--|
| `getInRangeSorted` | Find POIs within a block radius measured from the provided position, ordered from nearest to farthest. |
| `getInRange` | Find POIs within a block radius from the provided position when you don't need sorted results. The result order isn't guaranteed. |
| `getInSquare` | Find POIs inside an axis-aligned search volume with a half-size of `blockRadius` along each axis. |
| `exists` | Check whether a matching POI exists at an exact block position. |
| `at` | Get the `PoiBlockType` at an exact block position, if one exists. |

Query cost scales with the number of chunks in the search area, not only the number of results. Use the smallest practical radius and apply an occupancy filter in the query.

To verify your POI definitions in-game, use the `/locate poi` command. Pass a POI type identifier, such as `/locate poi myworld:quest_board`, or a POI tag prefixed with `#`, such as `/locate poi #myworld:interactable`. The command searches a 256-block radius around the command origin and reports the nearest match.

For example, use `exists` when you need to check one position:

```typescript
const position = { x: 100, y: 64, z: 200 };

if (blocks.exists(position, { name: 'myworld:quest_board' })) {
  // A matching quest board is at this position.
}
```

## Reserve POIs with tickets

Tickets prevent more actors from claiming a POI than it can support. The `take` method finds a matching POI with an available ticket, decreases its available ticket count, and returns its position. The API doesn't guarantee which matching POI it selects, so use `getInRangeSorted` first if your logic must find the nearest POI before claiming a ticket.

```typescript
const claimedPosition = blocks.take(
  { tags: ['myworld:acquireable_job'] },
  npc.location,
  32
);

if (claimedPosition) {
  npc.setDynamicProperty(
    'myworld:claimed_poi',
    JSON.stringify(claimedPosition)
  );
}
```

`take` returns `undefined` if no matching POI has an available ticket. Store the returned position so you can release the ticket when the actor no longer needs the POI:

```typescript
const storedPosition = npc.getDynamicProperty('myworld:claimed_poi');

if (typeof storedPosition === 'string') {
  const position = JSON.parse(storedPosition);

  blocks.release(position);
  npc.setDynamicProperty('myworld:claimed_poi', undefined);
}
```

`release` returns `true` if it releases a ticket. It returns `false` if the position has no POI or no outstanding reservation.

> [!IMPORTANT]
>
> Ticket reservations don't persist across sessions. Minecraft releases reservations when the world unloads. To restore a reservation after `/reload` or a new session, store its position in a dynamic property or scoreboard and call `take` again when your script starts.

To find available POIs without reserving one, use `PoiBlockOccupancyFilter.HasVacancy` with a query method.

Custom POIs don't connect directly to entity behavior trees. Use the returned POI positions with your own navigation and behavior logic.

## Add a POI at runtime

In most cases, define a block in a POI type and place that block in the world. This approach is durable and doesn't require your script to run when you place the block.

For temporary cases, such as encounter markers or debug positions, use `addTemporary`:

```typescript
blocks.addTemporary(
  { x: 100, y: 64, z: 200 },
  'myworld:encounter_marker'
);
```

`addTemporary` accepts a numeric POI type ID, type name, or `PoiBlockType`. A runtime POI is temporary and disappears when its chunk reloads. Because a temporary POI lives in the POI index rather than in chunk data, queries can find it even in unloaded or ungenerated locations. For a durable POI, include the block identifier in the POI type's `blocks` field.

## Common patterns

### RPG quest boards that NPCs can find

Define a `myworld:quest_board` POI type in JSON and list your quest-board block IDs in it. That's the entire registration. Every quest board a builder places anywhere in the world is automatically a POI. 

Your NPC only needs to query:

```typescript
system.runInterval(() => {
  const dim = world.getDimension('overworld');

  for (const npc of dim.getEntities({ type: 'myworld:quest_giver' })) {
    const nearest = dim.poiManager.blocks.getInRangeSorted(
      { name: 'myworld:quest_board' },
      npc.location,
      32,
      PoiBlockOccupancyFilter.HasVacancy
    );

    if (nearest.length > 0) {
      const { poi } = nearest[0];

      // Walk the NPC toward poi.position with your existing movement code.
    }
  }
}, 40);
```

### Shared workstations with occupancy
For a system-survival scenario where every NPC needs an unclaimed workstation, use `take` and `release`:

```typescript
function assignJob(npc) {
  const claimed = dim.poiManager.blocks.take(
    { tags: ['myworld:acquireable_job'] },
    npc.location,
    48
  );

  if (claimed) {
    npc.setDynamicProperty('myworld:job_poi', JSON.stringify(claimed));
    return claimed;
  }

  return null; // Nothing free within range.
}

function retireJob(npc) {
  const raw = npc.getDynamicProperty('myworld:job_poi');

  if (typeof raw === 'string') {
    dim.poiManager.blocks.release(JSON.parse(raw));
    npc.setDynamicProperty('myworld:job_poi', undefined);
  }
}
```

Because the engine manages tickets, two NPCs running this logic in parallel can't claim the same workstation.

### Fast-travel network

Tag every waypoint block with a POI type. A waypoint that doesn't support reservations can set `tickets` to `0`. Ordinary queries still return it when you omit the occupancy filter or set it to `PoiBlockOccupancyFilter.Any`.

To fast-travel a player, pass the source waypoint position, exclude that position from the results, and teleport to the nearest remaining waypoint:

```json
{
  "format_version": "1.26.40",
  "minecraft:poi_block": {
    "description": { "identifier": "myworld:waypoint" },
    "tickets": 0,
    "usable_distance": 2,
    "blocks": ["myworld:waypoint_stone"],
    "tags": ["myworld:travel"]
  }
}
```

```typescript
function fastTravelFrom(player, sourcePosition) {
  const results = player.dimension.poiManager.blocks.getInRangeSorted(
    { name: 'myworld:waypoint' },
    player.location,
    2000
  );

  const destination = results.find(({ poi }) =>
    poi.position.x !== sourcePosition.x ||
    poi.position.y !== sourcePosition.y ||
    poi.position.z !== sourcePosition.z
  );

  if (destination) {
    player.teleport(destination.poi.position);
  } else {
    player.sendMessage('No other waypoints found within range.');
  }
}
```

This example finds the closest waypoint POI within 2000 blocks from the player and then teleports them to that position.
