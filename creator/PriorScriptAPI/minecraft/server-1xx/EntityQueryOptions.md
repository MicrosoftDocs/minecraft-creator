---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.EntityQueryOptions Interface
description: Contents of the @minecraft/server.EntityQueryOptions class (Version 1.x.x).
---
# EntityQueryOptions Interface (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/EntityQueryOptions.md).

## Extends
- [*EntityFilter*](EntityFilter.md)

Contains options for selecting entities within an area.

## Properties

### **closest**
`closest?: number;`

Limits the number of entities to return, opting for the closest N entities as specified by this property. The location value must also be specified on the query options object.

Type: *number*

### **farthest**
`farthest?: number;`

Limits the number of entities to return, opting for the farthest N entities as specified by this property. The location value must also be specified on the query options object.

Type: *number*

### **location**
`location?: Vector3;`

Adds a seed location to the query that is used in conjunction with closest, farthest, limit, volume, and distance properties.

Type: [*Vector3*](Vector3.md)

### **maxDistance**
`maxDistance?: number;`

If specified, includes entities that are less than this distance away from the location specified in the location property.

Type: *number*

### **minDistance**
`minDistance?: number;`

If specified, includes entities that are least this distance away from the location specified in the location property.

Type: *number*

### **volume**
`volume?: Vector3;`

In conjunction with location, specified a cuboid volume of entities to include.

Type: [*Vector3*](Vector3.md)

#### Examples

##### ***blockConditional.ts***

```typescript
import { DimensionLocation } from "@minecraft/server";

function blockConditional(targetLocation: DimensionLocation) {
  targetLocation.dimension
    .getEntities({
      type: "fox",
    })
    .filter((entity) => {
      const block = targetLocation.dimension.getBlock({
        x: entity.location.x,
        y: entity.location.y - 1,
        z: entity.location.z,
      });

      return block !== undefined && block.matches("minecraft:stone");
    })
    .forEach((entity) => {
      targetLocation.dimension.spawnEntity("salmon", entity.location);
    });
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/blockConditional.ts) code sandbox.

##### ***findEntitiesHavingPropertyEqualsTo.ts***

```typescript
import { EntityQueryOptions, DimensionLocation } from "@minecraft/server";

function findEntitiesHavingPropertyEqualsTo(
    targetLocation: DimensionLocation
) {
  // Minecraft bees have a has_nectar boolean property
  const queryOption: EntityQueryOptions = {
    propertyOptions: [{ propertyId: "minecraft:has_nectar", value: { equals: true } }],
  };

  const entities = targetLocation.dimension.getEntities(queryOption);
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/findEntitiesHavingPropertyEqualsTo.ts) code sandbox.

##### ***playSoundChained.ts***

```typescript
import { DimensionLocation } from "@minecraft/server";

function playSoundChained(targetLocation: DimensionLocation) {
  const targetPlayers = targetLocation.dimension.getPlayers();
  const originEntities = targetLocation.dimension.getEntities({
    type: "armor_stand",
    name: "myArmorStand",
    tags: ["dummyTag1"],
    excludeTags: ["dummyTag2"],
  });

  originEntities.forEach((entity) => {
    targetPlayers.forEach((player) => {
      player.playSound("raid.horn");
    });
  });
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/playSoundChained.ts) code sandbox.

##### ***setScoreboardChained.ts***

```typescript
import { world, DimensionLocation } from "@minecraft/server";

function setScoreboardChained(
    targetLocation: DimensionLocation
) {
  const objective = world.scoreboard.addObjective("scoreObjective1", "dummy");
  targetLocation.dimension
    .getEntities({
      type: "armor_stand",
      name: "myArmorStand",
    })
    .forEach((entity) => {
      if (entity.scoreboardIdentity !== undefined) {
        objective.setScore(entity.scoreboardIdentity, -1);
      }
    });
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/setScoreboardChained.ts) code sandbox.

##### ***summonMobChained.ts***

```typescript
import { DimensionLocation } from "@minecraft/server";

function summonMobChained(targetLocation: DimensionLocation) {
  const armorStandArray = targetLocation.dimension.getEntities({
    type: "armor_stand",
  });
  const playerArray = targetLocation.dimension.getPlayers({
    location: { x: 0, y: -60, z: 0 },
    closest: 4,
    maxDistance: 15,
  });
  armorStandArray.forEach((entity) => {
    playerArray.forEach((player) => {
      targetLocation.dimension.spawnEntity("pig", {
        x: player.location.x + 1,
        y: player.location.y,
        z: player.location.z,
      });
    });
  });
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/summonMobChained.ts) code sandbox.

##### ***bounceSkeletons.ts***

```typescript
import { EntityQueryOptions, DimensionLocation } from "@minecraft/server";

function bounceSkeletons(targetLocation: DimensionLocation) {
  const mobs = ["creeper", "skeleton", "sheep"];

  // create some sample mob data
  for (let i = 0; i < 10; i++) {
    targetLocation.dimension.spawnEntity(mobs[i % mobs.length], targetLocation);
  }

  const eqo: EntityQueryOptions = {
    type: "skeleton",
  };

  for (const entity of targetLocation.dimension.getEntities(eqo)) {
    entity.applyKnockback(0, 0, 0, 1);
  }
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/bounceSkeletons.ts) code sandbox.

##### ***tagsQuery.ts***

```typescript
import { EntityQueryOptions, DimensionLocation } from "@minecraft/server";

function tagsQuery(targetLocation: DimensionLocation) {
  const mobs = ["creeper", "skeleton", "sheep"];

  // create some sample mob data
  for (let i = 0; i < 10; i++) {
    const mobTypeId = mobs[i % mobs.length];
    const entity = targetLocation.dimension.spawnEntity(mobTypeId, targetLocation);
    entity.addTag("mobparty." + mobTypeId);
  }

  const eqo: EntityQueryOptions = {
    tags: ["mobparty.skeleton"],
  };

  for (const entity of targetLocation.dimension.getEntities(eqo)) {
    entity.kill();
  }
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/tagsQuery.ts) code sandbox.

##### ***testThatEntityIsFeatherItem.ts***

```typescript
import { EntityItemComponent, EntityComponentTypes, DimensionLocation } from "@minecraft/server";

function testThatEntityIsFeatherItem(
  log: (message: string, status?: number) => void,
  targetLocation: DimensionLocation
) {
  const items = targetLocation.dimension.getEntities({
    location: targetLocation,
    maxDistance: 20,
  });

  for (const item of items) {
    const itemComp = item.getComponent(EntityComponentTypes.Item) as EntityItemComponent;

    if (itemComp) {
      if (itemComp.itemStack.typeId.endsWith("feather")) {
        log("Success! Found a feather", 1);
      }
    }
  }
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/testThatEntityIsFeatherItem.ts) code sandbox.
