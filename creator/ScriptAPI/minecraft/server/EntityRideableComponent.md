---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.EntityRideableComponent Class
description: Contents of the @minecraft/server.EntityRideableComponent class.
---
# EntityRideableComponent Class

## Extends
- [*EntityComponent*](EntityComponent.md)

When added, this component adds the capability that an entity can be ridden by another entity.

#### Examples

##### ***minibiomes.ts***

```typescript
import { EntityComponentTypes } from "@minecraft/server";
import { Test, register } from "@minecraft/server-gametest";
import { MinecraftBlockTypes, MinecraftEntityTypes } from "@minecraft/vanilla-data";

function minibiomes(test: Test) {
  const minecart = test.spawn(MinecraftEntityTypes.Minecart, { x: 9, y: 7, z: 7 });
  const pig = test.spawn(MinecraftEntityTypes.Pig, { x: 9, y: 7, z: 7 });

  test.setBlockType(MinecraftBlockTypes.Cobblestone, { x: 10, y: 7, z: 7 });

  const minecartRideableComp = minecart.getComponent(EntityComponentTypes.Rideable);

  minecartRideableComp?.addRider(pig);

  test.succeedWhenEntityPresent(MinecraftEntityTypes.Pig, { x: 8, y: 3, z: 1 }, true);
}
register("ChallengeTests", "minibiomes", minibiomes).structureName("gametests:minibiomes").maxTicks(160);
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/minibiomes.ts) code sandbox.

## Properties

### **controllingSeat**
`read-only controllingSeat: number;`

Zero-based index of the seat that can used to control this entity.

Type: *number*

Notes:
  - This property can throw errors when used.

### **crouchingSkipInteract**
`read-only crouchingSkipInteract: boolean;`

Determines whether interactions are not supported if the entity is crouching.

Type: *boolean*

Notes:
  - This property can throw errors when used.

### **interactText**
`read-only interactText: string;`

Set of text that should be displayed when a player is looking to ride on this entity (commonly with touch-screen controls).

Type: *string*

Notes:
  - This property can throw errors when used.

### **passengerMaxWidth**
`read-only passengerMaxWidth: number;`

The max width a mob can be to be a passenger.

Type: *number*

Notes:
  - This property can throw errors when used.

### **pullInEntities**
`read-only pullInEntities: boolean;`

If true, this entity will pull in entities that are in the correct family_types into any available seat.

Type: *boolean*

Notes:
  - This property can throw errors when used.

### **riderCanInteract**
`read-only riderCanInteract: boolean;`

If true, this entity will be picked when looked at by the rider.

Type: *boolean*

Notes:
  - This property can throw errors when used.

### **seatCount**
`read-only seatCount: number;`

Number of seats for riders defined for this entity.

Type: *number*

Notes:
  - This property can throw errors when used.

## Methods
- [addRider](#addrider)
- [ejectRider](#ejectrider)
- [ejectRiders](#ejectriders)
- [getFamilyTypes](#getfamilytypes)
- [getRiders](#getriders)
- [getSeats](#getseats)

### **addRider**
`
addRider(rider: Entity): boolean
`

Adds an entity to this entity as a rider.

#### **Parameters**
- **rider**: [*Entity*](Entity.md)
  
  Entity that will become the rider of this entity.

**Returns** *boolean* - True if the rider entity was successfully added.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

#### Examples

##### ***minibiomes.ts***

```typescript
import { EntityComponentTypes } from "@minecraft/server";
import { Test, register } from "@minecraft/server-gametest";
import { MinecraftBlockTypes, MinecraftEntityTypes } from "@minecraft/vanilla-data";

function minibiomes(test: Test) {
  const minecart = test.spawn(MinecraftEntityTypes.Minecart, { x: 9, y: 7, z: 7 });
  const pig = test.spawn(MinecraftEntityTypes.Pig, { x: 9, y: 7, z: 7 });

  test.setBlockType(MinecraftBlockTypes.Cobblestone, { x: 10, y: 7, z: 7 });

  const minecartRideableComp = minecart.getComponent(EntityComponentTypes.Rideable);

  minecartRideableComp?.addRider(pig);

  test.succeedWhenEntityPresent(MinecraftEntityTypes.Pig, { x: 8, y: 3, z: 1 }, true);
}
register("ChallengeTests", "minibiomes", minibiomes).structureName("gametests:minibiomes").maxTicks(160);
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/minibiomes.ts) code sandbox.

### **ejectRider**
`
ejectRider(rider: Entity): void
`

Ejects the specified rider of this entity.

#### **Parameters**
- **rider**: [*Entity*](Entity.md)
  
  Entity that should be ejected from this entity.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **ejectRiders**
`
ejectRiders(): void
`

Ejects all riders of this entity.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **getFamilyTypes**
`
getFamilyTypes(): string[]
`

A string-list of entity types that this entity can support as riders.

**Returns** *string*[]
  
Notes:
- This function can throw errors.

### **getRiders**
`
getRiders(): Entity[]
`

Gets a list of the all the entities currently riding this entity.

**Returns** [*Entity*](Entity.md)[]
  
Notes:
- This function can throw errors.

### **getSeats**
`
getSeats(): Seat[]
`

Gets a list of positions and number of riders for each position for entities riding this entity.

**Returns** [*Seat*](Seat.md)[]
  
Notes:
- This function can throw errors.

## Constants

### **componentId**
`static read-only componentId = "minecraft:rideable";`

Type: *string*

#### Examples

##### ***minibiomes.ts***

```typescript
import { EntityComponentTypes } from "@minecraft/server";
import { Test, register } from "@minecraft/server-gametest";
import { MinecraftBlockTypes, MinecraftEntityTypes } from "@minecraft/vanilla-data";

function minibiomes(test: Test) {
  const minecart = test.spawn(MinecraftEntityTypes.Minecart, { x: 9, y: 7, z: 7 });
  const pig = test.spawn(MinecraftEntityTypes.Pig, { x: 9, y: 7, z: 7 });

  test.setBlockType(MinecraftBlockTypes.Cobblestone, { x: 10, y: 7, z: 7 });

  const minecartRideableComp = minecart.getComponent(EntityComponentTypes.Rideable);

  minecartRideableComp?.addRider(pig);

  test.succeedWhenEntityPresent(MinecraftEntityTypes.Pig, { x: 8, y: 3, z: 1 }, true);
}
register("ChallengeTests", "minibiomes", minibiomes).structureName("gametests:minibiomes").maxTicks(160);
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/minibiomes.ts) code sandbox.
