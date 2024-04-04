---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EntityFilter Interface
description: Contents of the @minecraft/server.EntityFilter class.
---
# EntityFilter Interface

Contains options for filtering entities.

## Properties

### **excludeFamilies**
`excludeFamilies?: string[];`

Excludes entities that match one or more of the specified families.

Type: *string*[]

### **excludeGameModes**
`excludeGameModes?: GameMode[];`

Excludes entities if have a specific gamemode that matches the specified gamemode.

Type: [*GameMode*](GameMode.md)[]

### **excludeNames**
`excludeNames?: string[];`

Excludes entities that have a name that match one of the specified values.

Type: *string*[]

### **excludeTags**
`excludeTags?: string[];`

Excludes entities with a tag that matches one of the specified values.

Type: *string*[]

### **excludeTypes**
`excludeTypes?: string[];`

Excludes entities if they are one of the specified types.

Type: *string*[]

### **families**
`families?: string[];`

If specified, includes entities that match all of the specified families.

Type: *string*[]

### **gameMode**
`gameMode?: GameMode;`

If specified, includes entities with a gamemode that matches the specified gamemode.

Type: [*GameMode*](GameMode.md)

### **maxHorizontalRotation**
`maxHorizontalRotation?: number;`

If specified, will only include entities that have at most this horizontal rotation.

Type: *number*

### **maxLevel**
`maxLevel?: number;`

If defined, only players that have at most this level are returned.

Type: *number*

### **maxVerticalRotation**
`maxVerticalRotation?: number;`

If specified, only entities that have at most this vertical rotation are returned.

Type: *number*

### **minHorizontalRotation**
`minHorizontalRotation?: number;`

If specified, will only include entities that have at a minimum this horizontal rotation.

Type: *number*

### **minLevel**
`minLevel?: number;`

If defined, only players that have at least this level are returned.

Type: *number*

### **minVerticalRotation**
`minVerticalRotation?: number;`

If specified, will only include entities that have at least this vertical rotation.

Type: *number*

### **name**
`name?: string;`

Includes entities with the specified name.

Type: *string*

::: moniker range="=minecraft-bedrock-experimental"
### **propertyOptions**
`propertyOptions?: EntityQueryPropertyOptions[];`

Type: [*EntityQueryPropertyOptions*](EntityQueryPropertyOptions.md)[]

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.
::: moniker-end

### **scoreOptions**
`scoreOptions?: EntityQueryScoreOptions[];`

Gets/sets a collection of EntityQueryScoreOptions objects with filters for specific scoreboard objectives.

Type: [*EntityQueryScoreOptions*](EntityQueryScoreOptions.md)[]

### **tags**
`tags?: string[];`

Includes entities that match all of the specified tags.

Type: *string*[]

### **type**
`type?: string;`

If defined, entities that match this type are included.

Type: *string*
