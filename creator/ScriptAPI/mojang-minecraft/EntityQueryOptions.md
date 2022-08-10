---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.EntityQueryOptions Interface
description: Contents of the mojang-minecraft.EntityQueryOptions class.
---
# EntityQueryOptions Interface
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

Contains options for selecting entities within an area.

## Properties

### **closest**
`closest: number;`

Limits the number of entities to return, opting for the closest N entities as specified by this property. The location value must also be specified on the query options object.

Type: *number*

### **excludeFamilies**
`excludeFamilies: string[];`

Excludes entities that match one or more of the specified families.

Type: *string*[]

### **excludeGameModes**
`excludeGameModes: GameMode[];`

Excludes entities if have a specific gamemode that matches the specified gamemode.

Type: [*GameMode*](GameMode.md)[]

### **excludeNames**
`excludeNames: string[];`

Excludes entities that have a name that match one of the specified values.

Type: *string*[]

### **excludeTags**
`excludeTags: string[];`

Excludes entities with a tag that matches one of the specified values.

Type: *string*[]

### **excludeTypes**
`excludeTypes: string[];`

Excludes entities if they are one of the specified types.

Type: *string*[]

### **families**
`families: string[];`

If specified, includes entities that match all of the specified families.

Type: *string*[]

### **farthest**
`farthest: number;`

Limits the number of entities to return, opting for the farthest N entities as specified by this property. The location value must also be specified on the query options object.

Type: *number*

### **gameMode**
`gameMode: GameMode;`

If specified, includes entities with a gamemode that matches the specified gamemode.

Type: [*GameMode*](GameMode.md)

### **location**
`location: Location;`

Adds a seed location to the query that is used in conjunction with closest, farthest, limit, volume, and distance properties.

Type: [*Location*](Location.md)

### **maxDistance**
`maxDistance: number;`

If specified, includes entities that are less than this distance away from the location specified in the location property.

Type: *number*

### **maxHorizontalRotation**
`maxHorizontalRotation: number;`

If specified, will only include entities that have at most this horizontal rotation.

Type: *number*

### **maxLevel**
`maxLevel: number;`

If defined, only players that have at most this level are returned.

Type: *number*

### **maxVerticalRotation**
`maxVerticalRotation: number;`

If specified, only entities that have at most this vertical rotation are returned.

Type: *number*

### **minDistance**
`minDistance: number;`

If specified, includes entities that are least this distance away from the location specified in the location property.

Type: *number*

### **minHorizontalRotation**
`minHorizontalRotation: number;`

If specified, will only include entities that have at a minimum this horizontal rotation.

Type: *number*

### **minLevel**
`minLevel: number;`

If defined, only players that have at least this level are returned.

Type: *number*

### **minVerticalRotation**
`minVerticalRotation: number;`

If specified, will only include entities that have at least this vertical rotation.

Type: *number*

### **name**
`name: string;`

Includes entities with the specified name.

Type: *string*

### **scoreOptions**
`scoreOptions: EntityQueryScoreOptions[];`

Gets/sets a collection of EntityQueryScoreOptions objects with filters for specific scoreboard objectives.

Type: [*EntityQueryScoreOptions*](EntityQueryScoreOptions.md)[]

### **tags**
`tags: string[];`

Includes entities that match all of the specified tags.

Type: *string*[]

### **type**
`type: string;`

If defined, entities that match this type are included.

Type: *string*

### **volume**
`volume: BlockAreaSize;`

In conjunction with location, specified a cuboid volume of entities to include.

Type: [*BlockAreaSize*](BlockAreaSize.md)

#### **Examples**
##### *testThatEntityIsFeatherItem.ts*
```javascript
  const query = new mc.EntityQueryOptions();
  query.type = "item";
  query.location = targetLocation;
  const items = overworld.getEntities(query);
  for (const item of items) {
    const itemComp = item.getComponent("item") as any;
    if (itemComp) {
      if (itemComp.itemStack.id.endsWith("feather")) {
        console.log("Success! Found a feather", 1);
      }
    }
  }
```
