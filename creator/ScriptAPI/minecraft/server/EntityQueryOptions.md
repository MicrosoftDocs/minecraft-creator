---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EntityQueryOptions Interface
description: Contents of the @minecraft/server.EntityQueryOptions class.
---
# EntityQueryOptions Interface

## Extends
- [*EntityFilter*](EntityFilter.md)

Contains options for selecting entities within an area.

#### Examples
##### ***testBlockConditional.ts***
```typescript
import { Dimension } from '@minecraft/server';

// Having this command:

// execute as @e[type=fox] positioned as @s if block ^ ^-1 ^ stone run summon salmon

// Equivalent scripting code would be:
function spawnFish(dimension: Dimension) {
    dimension
        .getEntities({
            type: 'fox',
        })
        .filter(entity => {
            const block = dimension.getBlock({
                x: entity.location.x,
                y: entity.location.y - 1,
                z: entity.location.z,
            });

            return block !== undefined && block.matches('minecraft:stone');
        })
        .forEach(entity => {
            dimension.spawnEntity('salmon', entity.location);
        });
}
```
##### ***testPlaySoundChained.ts***
```typescript
import { Dimension } from '@minecraft/server';

// Having this command:

// execute as @e[type=armor_stand,name=myArmorStand,tag=dummyTag1,tag=!dummyTag2] run playsound raid.horn @a

// Equivalent scripting code would be:
function playSounds(dimension: Dimension) {
    const targetPlayers = dimension.getPlayers();
    const originEntities = dimension.getEntities({
        type: 'armor_stand',
        name: 'myArmorStand',
        tags: ['dummyTag1'],
        excludeTags: ['dummyTag2'],
    });

    originEntities.forEach(entity => {
        targetPlayers.forEach(player => {
            player.playSound('raid.horn');
        });
    });
}
```
##### ***testPropertyOptionsWithEqualsComparison.ts***
```typescript
import { world, EntityQueryOptions } from '@minecraft/server';

// Having this command:

// execute as @e[has_property={propId=propValue}]

// Equivalent scripting code would be:
function findEntitiesHavingPropertyEqualsTo(propId: string, propValue: boolean | number | string) {
    const queryOption: EntityQueryOptions = {
        propertyOptions: [{ propertyId: propId, value: { equals: propValue } }]
    };

    const overworld = world.getDimension('overworld');
    const entities = overworld.getEntities(queryOption);
}
```
##### ***testPropertyOptionsWithGreaterThanComparison.ts***
```typescript
import { world, EntityQueryOptions } from '@minecraft/server';

// No equivalent commands as `propValue..` is inclusive in commands 

function findEntitiesHavingPropertyGreaterThan(propId: string, propValue: number) {
    const queryOption: EntityQueryOptions = {
        propertyOptions: [{ propertyId: propId, value: { greaterThan: propValue } }]
    };

    const overworld = world.getDimension('overworld');
    const entities = overworld.getEntities(queryOption);
}
```
##### ***testPropertyOptionsWithGreaterThanOrEqualsComparison.ts***
```typescript
import { world, EntityQueryOptions } from '@minecraft/server';

// Having this command:

// execute as @e[has_property={propId=propValue..}]

// Equivalent scripting code would be:
function findEntitiesHavingPropertyGreaterThanOrEqualsTo(propId: string, propValue: number) {
    const queryOption: EntityQueryOptions = {
        propertyOptions: [{ propertyId: propId, value: { greaterThanOrEquals: propValue } }]
    };

    const overworld = world.getDimension('overworld');
    const entities = overworld.getEntities(queryOption);
}
```
##### ***testPropertyOptionsWithHavingAProperty.ts***
```typescript
import { world, EntityQueryOptions } from '@minecraft/server';

// Having this command:

// execute as @e[has_property={property=propId}]

// Equivalent scripting code would be:
function findEntitiesHavingAProperty(propId: string) {
    const queryOption: EntityQueryOptions = {
        propertyOptions: [{ propertyId: propId }]
    };

    const overworld = world.getDimension('overworld');
    const entities = overworld.getEntities(queryOption);
}
```
##### ***testPropertyOptionsWithLessThanComparison.ts***
```typescript
import { world, EntityQueryOptions } from '@minecraft/server';

// No equivalent commands as `..propValue` is inclusive in commands 

function findEntitiesHavingPropertyLessThan(propId: string, propValue: number) {
    const queryOption: EntityQueryOptions = {
        propertyOptions: [{ propertyId: propId, value: { lessThan: propValue } }]
    };

    const overworld = world.getDimension('overworld');
    const entities = overworld.getEntities(queryOption);
}
```
##### ***testPropertyOptionsWithLessThanOrEqualsComparison.ts***
```typescript
import { world, EntityQueryOptions } from '@minecraft/server';

// Having this command:

// execute as @e[has_property={propId=..propValue}]

// Equivalent scripting code would be:
function findEntitiesHavingPropertyLessThanOrEqualsTo(propId: string, propValue: number) {
    const queryOption: EntityQueryOptions = {
        propertyOptions: [{ propertyId: propId, value: { lessThanOrEquals: propValue } }]
    };

    const overworld = world.getDimension('overworld');
    const entities = overworld.getEntities(queryOption);
}
```
##### ***testPropertyOptionsWithNotEqualsComparison.ts***
```typescript
import { world, EntityQueryOptions } from '@minecraft/server';

// Having this command:

// execute as @e[has_property={propId=!propValue}]

// Equivalent scripting code would be:
function findEntitiesHavingPropertyNotEqualsTo(propId: string, propValue: boolean | number | string) {
    const queryOption: EntityQueryOptions = {
        propertyOptions: [{ propertyId: propId, value: { notEquals: propValue } }]
    };

    const overworld = world.getDimension('overworld');
    const entities = overworld.getEntities(queryOption);
}
```
##### ***testPropertyOptionsWithNotHavingAProperty.ts***
```typescript
import { world, EntityQueryOptions } from '@minecraft/server';

// Having this command:

// execute as @e[has_property={property=!propId}]

// Equivalent scripting code would be:
function findEntitiesNotHavingAProperty(propId: string) {
    const queryOption: EntityQueryOptions = {
        propertyOptions: [{ propertyId: propId, exclude: true }]
    };

    const overworld = world.getDimension('overworld');
    const entities = overworld.getEntities(queryOption);
}
```
##### ***testPropertyOptionsWithRangeComparison.ts***
```typescript
import { world, EntityQueryOptions } from '@minecraft/server';

// Having this command:

// execute as @e[has_property={propId=lowerBoundValue..upperBoundValue}]

// Equivalent scripting code would be:
function findEntitiesHavingPropertyWithinRange(propId: string, lowerBoundValue: number, upperBoundValue: number) {
    const queryOption: EntityQueryOptions = {
        propertyOptions: [{ propertyId: propId, value: { lowerBound: lowerBoundValue, upperBound: upperBoundValue } }]
    };

    const overworld = world.getDimension('overworld');
    const entities = overworld.getEntities(queryOption);
}
```
##### ***testSendMessageAllPlayers.ts***
```typescript
import { Dimension } from '@minecraft/server';

// Having this command:

// execute as @e[type=armor_stand,name=myArmorStand,tag=dummyTag1,tag=!dummyTag2] run tellraw @a { "rawtext": [{"translate": "hello.world" }] }

// Equivalent scripting code would be:
function sendMessagesToPlayers(dimension: Dimension) {
    const targetPlayers = dimension.getPlayers();
    const originEntities = dimension.getEntities({
        type: 'armor_stand',
        name: 'myArmorStand',
        tags: ['dummyTag1'],
        excludeTags: ['dummyTag2'],
    });

    originEntities.forEach(entity => {
        targetPlayers.forEach(player => {
            player.sendMessage({ rawtext: [{ translate: 'hello.world' }] });
        });
    });
}
```
##### ***testSetScoreBoardChained.ts***
```typescript
import { Dimension, world } from '@minecraft/server';

// Having these commands:

// scoreboard objectives add scoreObjective1 dummy
// scoreboard players set @e[type=armor_stand,name=myArmorStand] scoreObjective1 -1

// Equivalent scripting code would be:
function setScores(dimension: Dimension) {
    const objective = world.scoreboard.addObjective('scoreObjective1', 'dummy');
    dimension
        .getEntities({
            type: 'armor_stand',
            name: 'myArmorStand',
        })
        .forEach(entity => {
            if (entity.scoreboardIdentity !== undefined) {
                objective.setScore(entity.scoreboardIdentity, -1);
            }
        });
}
```
##### ***testSummonMobChained.ts***
```typescript
import { Dimension } from '@minecraft/server';

// Having this command:

// execute as @e[type=armor_stand] run execute as @a[x=0,y=-60,z=0,c=4,r=15] run summon pig ~1 ~ ~

// Equivalent scripting code would be:
function spawnPigs(dimension: Dimension) {
    const armorStandArray = dimension.getEntities({
        type: 'armor_stand',
    });
    const playerArray = dimension.getPlayers({
        location: { x: 0, y: -60, z: 0 },
        closest: 4,
        maxDistance: 15,
    });
    armorStandArray.forEach(entity => {
        playerArray.forEach(player => {
            dimension.spawnEntity('pig', {
                x: player.location.x + 1,
                y: player.location.y,
                z: player.location.z,
            });
        });
    });
}
```

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

::: moniker range="=minecraft-bedrock-experimental"
### **volume**
`volume?: Vector3;`

In conjunction with location, specified a cuboid volume of entities to include.

Type: [*Vector3*](Vector3.md)

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.
::: moniker-end

#### Examples
##### ***testBlockConditional.ts***
```typescript
import { Dimension } from '@minecraft/server';

// Having this command:

// execute as @e[type=fox] positioned as @s if block ^ ^-1 ^ stone run summon salmon

// Equivalent scripting code would be:
function spawnFish(dimension: Dimension) {
    dimension
        .getEntities({
            type: 'fox',
        })
        .filter(entity => {
            const block = dimension.getBlock({
                x: entity.location.x,
                y: entity.location.y - 1,
                z: entity.location.z,
            });

            return block !== undefined && block.matches('minecraft:stone');
        })
        .forEach(entity => {
            dimension.spawnEntity('salmon', entity.location);
        });
}
```
##### ***testPlaySoundChained.ts***
```typescript
import { Dimension } from '@minecraft/server';

// Having this command:

// execute as @e[type=armor_stand,name=myArmorStand,tag=dummyTag1,tag=!dummyTag2] run playsound raid.horn @a

// Equivalent scripting code would be:
function playSounds(dimension: Dimension) {
    const targetPlayers = dimension.getPlayers();
    const originEntities = dimension.getEntities({
        type: 'armor_stand',
        name: 'myArmorStand',
        tags: ['dummyTag1'],
        excludeTags: ['dummyTag2'],
    });

    originEntities.forEach(entity => {
        targetPlayers.forEach(player => {
            player.playSound('raid.horn');
        });
    });
}
```
##### ***testPropertyOptionsWithEqualsComparison.ts***
```typescript
import { world, EntityQueryOptions } from '@minecraft/server';

// Having this command:

// execute as @e[has_property={propId=propValue}]

// Equivalent scripting code would be:
function findEntitiesHavingPropertyEqualsTo(propId: string, propValue: boolean | number | string) {
    const queryOption: EntityQueryOptions = {
        propertyOptions: [{ propertyId: propId, value: { equals: propValue } }]
    };

    const overworld = world.getDimension('overworld');
    const entities = overworld.getEntities(queryOption);
}
```
##### ***testPropertyOptionsWithGreaterThanComparison.ts***
```typescript
import { world, EntityQueryOptions } from '@minecraft/server';

// No equivalent commands as `propValue..` is inclusive in commands 

function findEntitiesHavingPropertyGreaterThan(propId: string, propValue: number) {
    const queryOption: EntityQueryOptions = {
        propertyOptions: [{ propertyId: propId, value: { greaterThan: propValue } }]
    };

    const overworld = world.getDimension('overworld');
    const entities = overworld.getEntities(queryOption);
}
```
##### ***testPropertyOptionsWithGreaterThanOrEqualsComparison.ts***
```typescript
import { world, EntityQueryOptions } from '@minecraft/server';

// Having this command:

// execute as @e[has_property={propId=propValue..}]

// Equivalent scripting code would be:
function findEntitiesHavingPropertyGreaterThanOrEqualsTo(propId: string, propValue: number) {
    const queryOption: EntityQueryOptions = {
        propertyOptions: [{ propertyId: propId, value: { greaterThanOrEquals: propValue } }]
    };

    const overworld = world.getDimension('overworld');
    const entities = overworld.getEntities(queryOption);
}
```
##### ***testPropertyOptionsWithHavingAProperty.ts***
```typescript
import { world, EntityQueryOptions } from '@minecraft/server';

// Having this command:

// execute as @e[has_property={property=propId}]

// Equivalent scripting code would be:
function findEntitiesHavingAProperty(propId: string) {
    const queryOption: EntityQueryOptions = {
        propertyOptions: [{ propertyId: propId }]
    };

    const overworld = world.getDimension('overworld');
    const entities = overworld.getEntities(queryOption);
}
```
##### ***testPropertyOptionsWithLessThanComparison.ts***
```typescript
import { world, EntityQueryOptions } from '@minecraft/server';

// No equivalent commands as `..propValue` is inclusive in commands 

function findEntitiesHavingPropertyLessThan(propId: string, propValue: number) {
    const queryOption: EntityQueryOptions = {
        propertyOptions: [{ propertyId: propId, value: { lessThan: propValue } }]
    };

    const overworld = world.getDimension('overworld');
    const entities = overworld.getEntities(queryOption);
}
```
##### ***testPropertyOptionsWithLessThanOrEqualsComparison.ts***
```typescript
import { world, EntityQueryOptions } from '@minecraft/server';

// Having this command:

// execute as @e[has_property={propId=..propValue}]

// Equivalent scripting code would be:
function findEntitiesHavingPropertyLessThanOrEqualsTo(propId: string, propValue: number) {
    const queryOption: EntityQueryOptions = {
        propertyOptions: [{ propertyId: propId, value: { lessThanOrEquals: propValue } }]
    };

    const overworld = world.getDimension('overworld');
    const entities = overworld.getEntities(queryOption);
}
```
##### ***testPropertyOptionsWithNotEqualsComparison.ts***
```typescript
import { world, EntityQueryOptions } from '@minecraft/server';

// Having this command:

// execute as @e[has_property={propId=!propValue}]

// Equivalent scripting code would be:
function findEntitiesHavingPropertyNotEqualsTo(propId: string, propValue: boolean | number | string) {
    const queryOption: EntityQueryOptions = {
        propertyOptions: [{ propertyId: propId, value: { notEquals: propValue } }]
    };

    const overworld = world.getDimension('overworld');
    const entities = overworld.getEntities(queryOption);
}
```
##### ***testPropertyOptionsWithNotHavingAProperty.ts***
```typescript
import { world, EntityQueryOptions } from '@minecraft/server';

// Having this command:

// execute as @e[has_property={property=!propId}]

// Equivalent scripting code would be:
function findEntitiesNotHavingAProperty(propId: string) {
    const queryOption: EntityQueryOptions = {
        propertyOptions: [{ propertyId: propId, exclude: true }]
    };

    const overworld = world.getDimension('overworld');
    const entities = overworld.getEntities(queryOption);
}
```
##### ***testPropertyOptionsWithRangeComparison.ts***
```typescript
import { world, EntityQueryOptions } from '@minecraft/server';

// Having this command:

// execute as @e[has_property={propId=lowerBoundValue..upperBoundValue}]

// Equivalent scripting code would be:
function findEntitiesHavingPropertyWithinRange(propId: string, lowerBoundValue: number, upperBoundValue: number) {
    const queryOption: EntityQueryOptions = {
        propertyOptions: [{ propertyId: propId, value: { lowerBound: lowerBoundValue, upperBound: upperBoundValue } }]
    };

    const overworld = world.getDimension('overworld');
    const entities = overworld.getEntities(queryOption);
}
```
##### ***testSendMessageAllPlayers.ts***
```typescript
import { Dimension } from '@minecraft/server';

// Having this command:

// execute as @e[type=armor_stand,name=myArmorStand,tag=dummyTag1,tag=!dummyTag2] run tellraw @a { "rawtext": [{"translate": "hello.world" }] }

// Equivalent scripting code would be:
function sendMessagesToPlayers(dimension: Dimension) {
    const targetPlayers = dimension.getPlayers();
    const originEntities = dimension.getEntities({
        type: 'armor_stand',
        name: 'myArmorStand',
        tags: ['dummyTag1'],
        excludeTags: ['dummyTag2'],
    });

    originEntities.forEach(entity => {
        targetPlayers.forEach(player => {
            player.sendMessage({ rawtext: [{ translate: 'hello.world' }] });
        });
    });
}
```
##### ***testSetScoreBoardChained.ts***
```typescript
import { Dimension, world } from '@minecraft/server';

// Having these commands:

// scoreboard objectives add scoreObjective1 dummy
// scoreboard players set @e[type=armor_stand,name=myArmorStand] scoreObjective1 -1

// Equivalent scripting code would be:
function setScores(dimension: Dimension) {
    const objective = world.scoreboard.addObjective('scoreObjective1', 'dummy');
    dimension
        .getEntities({
            type: 'armor_stand',
            name: 'myArmorStand',
        })
        .forEach(entity => {
            if (entity.scoreboardIdentity !== undefined) {
                objective.setScore(entity.scoreboardIdentity, -1);
            }
        });
}
```
##### ***testSummonMobChained.ts***
```typescript
import { Dimension } from '@minecraft/server';

// Having this command:

// execute as @e[type=armor_stand] run execute as @a[x=0,y=-60,z=0,c=4,r=15] run summon pig ~1 ~ ~

// Equivalent scripting code would be:
function spawnPigs(dimension: Dimension) {
    const armorStandArray = dimension.getEntities({
        type: 'armor_stand',
    });
    const playerArray = dimension.getPlayers({
        location: { x: 0, y: -60, z: 0 },
        closest: 4,
        maxDistance: 15,
    });
    armorStandArray.forEach(entity => {
        playerArray.forEach(player => {
            dimension.spawnEntity('pig', {
                x: player.location.x + 1,
                y: player.location.y,
                z: player.location.z,
            });
        });
    });
}
```
