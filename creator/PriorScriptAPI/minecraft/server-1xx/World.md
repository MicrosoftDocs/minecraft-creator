---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server-1xx.World Class
description: Contents of the @minecraft/server.World class (Version 1.x.x).
---
# World Class (Version 1.x.x)

> [!IMPORTANT]
> This documentation is for an older version of this module. Go to the latest documentation [*here*](../../../scriptapi/minecraft/server/World.md).

A class that wraps the state of a world - a set of dimensions and the environment of Minecraft.

## Properties

### **afterEvents**
`read-only afterEvents: WorldAfterEvents;`

Contains a set of events that are applicable to the entirety of the world.  Event callbacks are called in a deferred manner. Event callbacks are executed in read-write mode.

Type: [*WorldAfterEvents*](WorldAfterEvents.md)

Notes:
  - This property can be read in early-execution mode.

### **beforeEvents**
`read-only beforeEvents: WorldBeforeEvents;`

Contains a set of events that are applicable to the entirety of the world. Event callbacks are called immediately. Event callbacks are executed in read-only mode.

Type: [*WorldBeforeEvents*](WorldBeforeEvents.md)

Notes:
  - This property can be read in early-execution mode.

#### Examples

##### ***customCommand.ts***

```typescript
import { world, DimensionLocation } from "@minecraft/server";

function customCommand(targetLocation: DimensionLocation) {
  const chatCallback = world.beforeEvents.chatSend.subscribe((eventData) => {
    if (eventData.message.includes("cancel")) {
      // Cancel event if the message contains "cancel"
      eventData.cancel = true;
    } else {
      const args = eventData.message.split(" ");

      if (args.length > 0) {
        switch (args[0].toLowerCase()) {
          case "echo":
            // Send a modified version of chat message
            world.sendMessage(`Echo '${eventData.message.substring(4).trim()}'`);
            break;
          case "help":
            world.sendMessage(`Available commands: echo <message>`);
            break;
        }
      }
    }
  });
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/customCommand.ts) code sandbox.

### **gameRules**
`read-only gameRules: GameRules;`

The game rules that apply to the world.

Type: [*GameRules*](GameRules.md)

### **isHardcore**
`read-only isHardcore: boolean;`

Type: *boolean*

### **scoreboard**
`read-only scoreboard: Scoreboard;`

Returns the general global scoreboard that applies to the world.

Type: [*Scoreboard*](Scoreboard.md)

### **structureManager**
`read-only structureManager: StructureManager;`

Returns the manager for [*@minecraft/server.Structure*](../../../priorscriptapi/minecraft/server-1xx/Structure.md) related APIs.

Type: [*StructureManager*](StructureManager.md)

## Methods
- [clearDynamicProperties](#cleardynamicproperties)
- [getAbsoluteTime](#getabsolutetime)
- [getAllPlayers](#getallplayers)
- [getDay](#getday)
- [getDefaultSpawnLocation](#getdefaultspawnlocation)
- [getDifficulty](#getdifficulty)
- [getDimension](#getdimension)
- [getDynamicProperty](#getdynamicproperty)
- [getDynamicPropertyIds](#getdynamicpropertyids)
- [getDynamicPropertyTotalByteCount](#getdynamicpropertytotalbytecount)
- [getEntity](#getentity)
- [getMoonPhase](#getmoonphase)
- [getPlayers](#getplayers)
- [getTimeOfDay](#gettimeofday)
- [playMusic](#playmusic)
- [playSound](#playsound)
- [queueMusic](#queuemusic)
- [sendMessage](#sendmessage)
- [setAbsoluteTime](#setabsolutetime)
- [setDefaultSpawnLocation](#setdefaultspawnlocation)
- [setDifficulty](#setdifficulty)
- [setDynamicProperty](#setdynamicproperty)
- [setTimeOfDay](#settimeofday)
- [stopMusic](#stopmusic)

### **clearDynamicProperties**
`
clearDynamicProperties(): void
`

Clears the set of dynamic properties declared for this behavior pack within the world.

### **getAbsoluteTime**
`
getAbsoluteTime(): number
`

Returns the absolute time since the start of the world.

**Returns** *number*

### **getAllPlayers**
`
getAllPlayers(): Player[]
`

Returns an array of all active players within the world.

**Returns** [*Player*](Player.md)[]
  
Notes:
- This function can throw errors.
  - Throws [*CommandError*](CommandError.md), [*@minecraft/common.InvalidArgumentError*](../../../scriptapi/minecraft/common/InvalidArgumentError.md)

### **getDay**
`
getDay(): number
`

Returns the current day.

**Returns** *number* - The current day, determined by the world time divided by the number of ticks per day. New worlds start at day 0.

### **getDefaultSpawnLocation**
`
getDefaultSpawnLocation(): Vector3
`

Returns the default Overworld spawn location. 

**Returns** [*Vector3*](Vector3.md) - The default Overworld spawn location. By default, the Y coordinate is 32767, indicating a player's spawn height is not fixed and will be determined by surrounding blocks.

### **getDifficulty**
`
getDifficulty(): Difficulty
`

Gets the difficulty from the world.

**Returns** [*Difficulty*](Difficulty.md) - Returns the world difficulty.

### **getDimension**
`
getDimension(dimensionId: string): Dimension
`

Returns a dimension object.

#### **Parameters**
- **dimensionId**: *string*
  
  The name of the dimension. For example, "overworld", "nether" or "the_end".

**Returns** [*Dimension*](Dimension.md) - The requested dimension
  
Notes:
- This function can throw errors.
  - Throws if the given dimension name is invalid

### **getDynamicProperty**
`
getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined
`

Returns a property value.

#### **Parameters**
- **identifier**: *string*
  
  The property identifier.

**Returns** *boolean* | *number* | *string* | [*Vector3*](Vector3.md) | *undefined* - Returns the value for the property, or undefined if the property has not been set.

#### Examples

##### ***incrementDynamicProperty.ts***

```typescript
import { world, DimensionLocation } from "@minecraft/server";

function incrementDynamicProperty(
  log: (message: string, status?: number) => void,
  targetLocation: DimensionLocation
) {
  let number = world.getDynamicProperty("samplelibrary:number");

  log("Current value is: " + number);

  if (number === undefined) {
    number = 0;
  }

  if (typeof number !== "number") {
    log("Number is of an unexpected type.");
    return -1;
  }

  world.setDynamicProperty("samplelibrary:number", number + 1);
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/incrementDynamicProperty.ts) code sandbox.

##### ***incrementDynamicPropertyInJsonBlob.ts***

```typescript
import { world, DimensionLocation } from "@minecraft/server";

function incrementDynamicPropertyInJsonBlob(
  log: (message: string, status?: number) => void,
  targetLocation: DimensionLocation
) {
  let paintStr = world.getDynamicProperty("samplelibrary:longerjson");
  let paint: { color: string; intensity: number } | undefined = undefined;

  log("Current value is: " + paintStr);

  if (paintStr === undefined) {
    paint = {
      color: "purple",
      intensity: 0,
    };
  } else {
    if (typeof paintStr !== "string") {
      log("Paint is of an unexpected type.");
      return -1;
    }

    try {
      paint = JSON.parse(paintStr);
    } catch (e) {
      log("Error parsing serialized struct.");
      return -1;
    }
  }

  if (!paint) {
    log("Error parsing serialized struct.");
    return -1;
  }

  paint.intensity++;
  paintStr = JSON.stringify(paint); // be very careful to ensure your serialized JSON str cannot exceed limits
  world.setDynamicProperty("samplelibrary:longerjson", paintStr);
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/incrementDynamicPropertyInJsonBlob.ts) code sandbox.

### **getDynamicPropertyIds**
`
getDynamicPropertyIds(): string[]
`

Gets a set of dynamic property identifiers that have been set in this world.

**Returns** *string*[] - A string array of active dynamic property identifiers.

### **getDynamicPropertyTotalByteCount**
`
getDynamicPropertyTotalByteCount(): number
`

Gets the total byte count of dynamic properties. This could potentially be used for your own analytics to ensure you're not storing gigantic sets of dynamic properties.

**Returns** *number*

### **getEntity**
`
getEntity(id: string): Entity | undefined
`

Returns an entity based on the provided id.

#### **Parameters**
- **id**: *string*
  
  The id of the entity.

**Returns** [*Entity*](Entity.md) | *undefined* - The requested entity object.
  
Notes:
- This function can throw errors.
  - Throws if the given entity id is invalid.

### **getMoonPhase**
`
getMoonPhase(): MoonPhase
`

Returns the MoonPhase for the current time.

**Returns** [*MoonPhase*](MoonPhase.md)

### **getPlayers**
`
getPlayers(options?: EntityQueryOptions): Player[]
`

Returns a set of players based on a set of conditions defined via the EntityQueryOptions set of filter criteria.

#### **Parameters**
- **options**?: [*EntityQueryOptions*](EntityQueryOptions.md) = `null`
  
  Additional options that can be used to filter the set of players returned.

**Returns** [*Player*](Player.md)[] - A player array.
  
Notes:
- This function can throw errors.
  - Throws [*CommandError*](CommandError.md), [*@minecraft/common.InvalidArgumentError*](../../../scriptapi/minecraft/common/InvalidArgumentError.md)

### **getTimeOfDay**
`
getTimeOfDay(): number
`

Returns the time of day.

**Returns** *number* - The time of day, in ticks, between 0 and 24000.

### **playMusic**
`
playMusic(trackId: string, musicOptions?: MusicOptions): void
`

Plays a particular music track for all players.

#### **Parameters**
- **trackId**: *string*
- **musicOptions**?: [*MusicOptions*](MusicOptions.md) = `null`
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*@minecraft/common.PropertyOutOfBoundsError*](../../../scriptapi/minecraft/common/PropertyOutOfBoundsError.md)

#### Examples

##### ***playMusicAndSound.ts***

```typescript
import { world, MusicOptions, WorldSoundOptions, PlayerSoundOptions, DimensionLocation } from "@minecraft/server";

function playMusicAndSound(targetLocation: DimensionLocation) {
  const players = world.getPlayers();

  const musicOptions: MusicOptions = {
    fade: 0.5,
    loop: true,
    volume: 1.0,
  };
  world.playMusic("music.menu", musicOptions);

  const worldSoundOptions: WorldSoundOptions = {
    pitch: 0.5,
    volume: 4.0,
  };
  world.playSound("ambient.weather.thunder", targetLocation, worldSoundOptions);

  const playerSoundOptions: PlayerSoundOptions = {
    pitch: 1.0,
    volume: 1.0,
  };

  players[0].playSound("bucket.fill_water", playerSoundOptions);
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/playMusicAndSound.ts) code sandbox.

### **playSound**
`
playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): void
`

Plays a sound for all players. DEPRECATED: Use Dimension.playSound.

#### **Parameters**
- **soundId**: *string*
- **location**: [*Vector3*](Vector3.md)
- **soundOptions**?: [*WorldSoundOptions*](WorldSoundOptions.md) = `null`

> [!CAUTION]
> This function is deprecated and will be removed in 2.0.0.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*@minecraft/common.PropertyOutOfBoundsError*](../../../scriptapi/minecraft/common/PropertyOutOfBoundsError.md)

#### Examples

##### ***playMusicAndSound.ts***

```typescript
import { world, MusicOptions, WorldSoundOptions, PlayerSoundOptions, DimensionLocation } from "@minecraft/server";

function playMusicAndSound(targetLocation: DimensionLocation) {
  const players = world.getPlayers();

  const musicOptions: MusicOptions = {
    fade: 0.5,
    loop: true,
    volume: 1.0,
  };
  world.playMusic("music.menu", musicOptions);

  const worldSoundOptions: WorldSoundOptions = {
    pitch: 0.5,
    volume: 4.0,
  };
  world.playSound("ambient.weather.thunder", targetLocation, worldSoundOptions);

  const playerSoundOptions: PlayerSoundOptions = {
    pitch: 1.0,
    volume: 1.0,
  };

  players[0].playSound("bucket.fill_water", playerSoundOptions);
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/playMusicAndSound.ts) code sandbox.

### **queueMusic**
`
queueMusic(trackId: string, musicOptions?: MusicOptions): void
`

Queues an additional music track for players. If a track is not playing, a music track will play.

#### **Parameters**
- **trackId**: *string*
  
  Identifier of the music track to play.
- **musicOptions**?: [*MusicOptions*](MusicOptions.md) = `null`
  
  Additional options for the music track.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*@minecraft/common.PropertyOutOfBoundsError*](../../../scriptapi/minecraft/common/PropertyOutOfBoundsError.md)

### **sendMessage**
`
sendMessage(message: (RawMessage | string)[] | RawMessage | string): void
`

Sends a message to all players.

#### **Parameters**
- **message**: ([*RawMessage*](RawMessage.md) | *string*)[] | [*RawMessage*](RawMessage.md) | *string*
  
  The message to be displayed.
  
Notes:
- This function can throw errors.
  - This method can throw if the provided [*@minecraft/server.RawMessage*](../../../priorscriptapi/minecraft/server-1xx/RawMessage.md) is in an invalid format. For example, if an empty `name` string is provided to `score`.

### **setAbsoluteTime**
`
setAbsoluteTime(absoluteTime: number): void
`

Sets the world time.

#### **Parameters**
- **absoluteTime**: *number*
  
  The world time, in ticks.
  
Notes:
- This function can't be called in read-only mode.

### **setDefaultSpawnLocation**
`
setDefaultSpawnLocation(spawnLocation: Vector3): void
`

Sets a default spawn location for all players.

#### **Parameters**
- **spawnLocation**: [*Vector3*](Vector3.md)
  
  Location of the spawn point. Note that this is assumed to be within the overworld dimension.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws *Error*, [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

### **setDifficulty**
`
setDifficulty(difficulty: Difficulty): void
`

Sets the worlds difficulty.

#### **Parameters**
- **difficulty**: [*Difficulty*](Difficulty.md)
  
  The difficulty we want to set the world to.
  
Notes:
- This function can't be called in read-only mode.

### **setDynamicProperty**
`
setDynamicProperty(identifier: string, value?: boolean | number | string | Vector3): void
`

Sets a specified property to a value.

#### **Parameters**
- **identifier**: *string*
  
  The property identifier.
- **value**?: *boolean* | *number* | *string* | [*Vector3*](Vector3.md) = `null`
  
  Data value of the property to set.
  
Notes:
- This function can throw errors.
  - Throws [*@minecraft/common.ArgumentOutOfBoundsError*](../../../scriptapi/minecraft/common/ArgumentOutOfBoundsError.md)

#### Examples

##### ***incrementDynamicProperty.ts***

```typescript
import { world, DimensionLocation } from "@minecraft/server";

function incrementDynamicProperty(
  log: (message: string, status?: number) => void,
  targetLocation: DimensionLocation
) {
  let number = world.getDynamicProperty("samplelibrary:number");

  log("Current value is: " + number);

  if (number === undefined) {
    number = 0;
  }

  if (typeof number !== "number") {
    log("Number is of an unexpected type.");
    return -1;
  }

  world.setDynamicProperty("samplelibrary:number", number + 1);
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/incrementDynamicProperty.ts) code sandbox.

##### ***incrementDynamicPropertyInJsonBlob.ts***

```typescript
import { world, DimensionLocation } from "@minecraft/server";

function incrementDynamicPropertyInJsonBlob(
  log: (message: string, status?: number) => void,
  targetLocation: DimensionLocation
) {
  let paintStr = world.getDynamicProperty("samplelibrary:longerjson");
  let paint: { color: string; intensity: number } | undefined = undefined;

  log("Current value is: " + paintStr);

  if (paintStr === undefined) {
    paint = {
      color: "purple",
      intensity: 0,
    };
  } else {
    if (typeof paintStr !== "string") {
      log("Paint is of an unexpected type.");
      return -1;
    }

    try {
      paint = JSON.parse(paintStr);
    } catch (e) {
      log("Error parsing serialized struct.");
      return -1;
    }
  }

  if (!paint) {
    log("Error parsing serialized struct.");
    return -1;
  }

  paint.intensity++;
  paintStr = JSON.stringify(paint); // be very careful to ensure your serialized JSON str cannot exceed limits
  world.setDynamicProperty("samplelibrary:longerjson", paintStr);
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/incrementDynamicPropertyInJsonBlob.ts) code sandbox.

### **setTimeOfDay**
`
setTimeOfDay(timeOfDay: number | TimeOfDay): void
`

Sets the time of day.

#### **Parameters**
- **timeOfDay**: *number* | [*TimeOfDay*](TimeOfDay.md)
  
  The time of day, in ticks, between 0 and 24000.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws if the provided time of day is not within the valid range.

### **stopMusic**
`
stopMusic(): void
`

Stops any music tracks from playing.
  
Notes:
- This function can't be called in read-only mode.
