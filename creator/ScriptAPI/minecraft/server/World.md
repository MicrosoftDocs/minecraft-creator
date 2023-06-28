---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.World Class
description: Contents of the @minecraft/server.World class.
---
# World Class

A class that wraps the state of a world - a set of dimensions and the environment of Minecraft.

## Properties

### **afterEvents**
`read-only afterEvents: WorldAfterEvents;`

Contains a set of events that are applicable to the entirety of the world.  Event callbacks are called in a deferred manner. Event callbacks are executed in read-write mode.

Type: [*WorldAfterEvents*](WorldAfterEvents.md)

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.

### **beforeEvents**
`read-only beforeEvents: WorldBeforeEvents;`

Contains a set of events that are applicable to the entirety of the world. Event callbacks are called immediately. Event callbacks are executed in read-only mode.

Type: [*WorldBeforeEvents*](WorldBeforeEvents.md)

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.

### **scoreboard**
`read-only scoreboard: Scoreboard;`

Returns the general global scoreboard that applies to the world.

Type: [*Scoreboard*](Scoreboard.md)

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.

## Methods
- [broadcastClientMessage](#broadcastclientmessage)
- [getAbsoluteTime](#getabsolutetime)
- [getAllPlayers](#getallplayers)
- [getDay](#getday)
- [getDefaultSpawnLocation](#getdefaultspawnlocation)
- [getDimension](#getdimension)
- [getDynamicProperty](#getdynamicproperty)
- [getEntity](#getentity)
- [getPlayers](#getplayers)
- [getTimeOfDay](#gettimeofday)
- [playMusic](#playmusic)
- [playSound](#playsound)
- [queueMusic](#queuemusic)
- [removeDynamicProperty](#removedynamicproperty)
- [sendMessage](#sendmessage)
- [setAbsoluteTime](#setabsolutetime)
- [setDefaultSpawnLocation](#setdefaultspawnlocation)
- [setDynamicProperty](#setdynamicproperty)
- [setTimeOfDay](#settimeofday)
- [stopMusic](#stopmusic)

### **broadcastClientMessage**
`
broadcastClientMessage(id: string, value: string): void
`

A method that is internal-only, used for broadcasting specific messages between client and server.

#### **Parameters**
- **id**: *string*
- **value**: *string*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **getAbsoluteTime**
`
getAbsoluteTime(): number
`

Returns the absolute time since the start of the world.

#### **Returns** *number*

### **getAllPlayers**
`
getAllPlayers(): Player[]
`

Returns an array of all active players within the world.

#### **Returns** [*Player*](Player.md)[]

> [!WARNING]
> This function can throw errors.

### **getDay**
`
getDay(): number
`

Returns the day number of the current world.

#### **Returns** *number*

### **getDefaultSpawnLocation**
`
getDefaultSpawnLocation(): Vector3
`

Returns the default spawn location within the world.

#### **Returns** [*Vector3*](Vector3.md)

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

### **getDimension**
`
getDimension(dimensionId: string): Dimension
`

Returns a dimension object.

#### **Parameters**
- **dimensionId**: *string*

#### **Returns** [*Dimension*](Dimension.md) - The requested dimension

> [!WARNING]
> Throws if the given dimension name is invalid

### **getDynamicProperty**
`
getDynamicProperty(identifier: string): boolean | number | string | Vector3 | undefined
`

Returns a property value.

#### **Parameters**
- **identifier**: *string*

#### **Returns** *boolean* | *number* | *string* | [*Vector3*](Vector3.md) | *undefined* - Returns the value for the property, or undefined if the property has not been set.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This function can throw errors.

#### Examples
##### ***incrementProperty.ts***
```typescript
  let number = mc.world.getDynamicProperty("samplelibrary:number");

  log("Current value is: " + number);

  if (number === undefined) {
    number = 0;
  }

  if (typeof number !== "number") {
    log("Number is of an unexpected type.");
    return -1;
  }

  mc.world.setDynamicProperty("samplelibrary:number", number + 1);
```
##### ***incrementPropertyInJsonBlob.ts***
```typescript
  let paintStr = mc.world.getDynamicProperty("samplelibrary:longerjson");
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
  mc.world.setDynamicProperty("samplelibrary:longerjson", paintStr);
```

### **getEntity**
`
getEntity(id: string): Entity | undefined
`

Returns an entity based on the provided id.

#### **Parameters**
- **id**: *string*
  
  The id of the entity.

#### **Returns** [*Entity*](Entity.md) | *undefined* - The requested entity object.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> Throws if the given entity id is invalid.

### **getPlayers**
`
getPlayers(options?: EntityQueryOptions): Player[]
`

Returns a set of players based on a set of conditions defined via the EntityQueryOptions set of filter criteria.

#### **Parameters**
- **options**?: [*EntityQueryOptions*](EntityQueryOptions.md) = `null`
  
  Additional options that can be used to filter the set of players returned.

#### **Returns** [*Player*](Player.md)[] - A player array.

> [!WARNING]
> This function can throw errors.

### **getTimeOfDay**
`
getTimeOfDay(): number
`

Gets the current time within the current day.

#### **Returns** *number*

### **playMusic**
`
playMusic(trackID: string, musicOptions?: MusicOptions): void
`

Plays a particular music track for all players.

#### **Parameters**
- **trackID**: *string*
- **musicOptions**?: [*MusicOptions*](MusicOptions.md) = `null`

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

#### Examples
##### ***playMusicAndSound.ts***
```typescript
  let players = mc.world.getPlayers();

  const musicOptions: mc.MusicOptions = {
    fade: 0.5,
    loop: true,
    volume: 1.0,
  };
  mc.world.playMusic("music.menu", musicOptions);

  const worldSoundOptions: mc.WorldSoundOptions = {
    pitch: 0.5,
    volume: 4.0,
  };
  mc.world.playSound("ambient.weather.thunder", targetLocation, worldSoundOptions);

  const playerSoundOptions: mc.PlayerSoundOptions = {
    pitch: 1.0,
    volume: 1.0,
  };

  players[0].playSound("bucket.fill_water", playerSoundOptions);
```

### **playSound**
`
playSound(soundID: string, location: Vector3, soundOptions?: WorldSoundOptions): void
`

Plays a sound for all players.

#### **Parameters**
- **soundID**: *string*
- **location**: [*Vector3*](Vector3.md)
- **soundOptions**?: [*WorldSoundOptions*](WorldSoundOptions.md) = `null`

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> An error will be thrown if volume is less than 0.0.,An error will be thrown if fade is less than 0.0.,An error will be thrown if pitch is less than 0.01.,An error will be thrown if volume is less than 0.0.

> [!WARNING]
> An error will be thrown if volume is less than 0.0.,An error will be thrown if fade is less than 0.0.,An error will be thrown if pitch is less than 0.01.,An error will be thrown if volume is less than 0.0.

> [!WARNING]
> An error will be thrown if volume is less than 0.0.,An error will be thrown if fade is less than 0.0.,An error will be thrown if pitch is less than 0.01.,An error will be thrown if volume is less than 0.0.

> [!WARNING]
> An error will be thrown if volume is less than 0.0.,An error will be thrown if fade is less than 0.0.,An error will be thrown if pitch is less than 0.01.,An error will be thrown if volume is less than 0.0.

#### Examples
##### ***playMusicAndSound.ts***
```typescript
  let players = mc.world.getPlayers();

  const musicOptions: mc.MusicOptions = {
    fade: 0.5,
    loop: true,
    volume: 1.0,
  };
  mc.world.playMusic("music.menu", musicOptions);

  const worldSoundOptions: mc.WorldSoundOptions = {
    pitch: 0.5,
    volume: 4.0,
  };
  mc.world.playSound("ambient.weather.thunder", targetLocation, worldSoundOptions);

  const playerSoundOptions: mc.PlayerSoundOptions = {
    pitch: 1.0,
    volume: 1.0,
  };

  players[0].playSound("bucket.fill_water", playerSoundOptions);
```

### **queueMusic**
`
queueMusic(trackID: string, musicOptions?: MusicOptions): void
`

Queues an additional music track for players. If a track is not playing, a music track will play.

#### **Parameters**
- **trackID**: *string*
- **musicOptions**?: [*MusicOptions*](MusicOptions.md) = `null`

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> An error will be thrown if volume is less than 0.0.,An error will be thrown if fade is less than 0.0.,

> [!WARNING]
> An error will be thrown if volume is less than 0.0.,An error will be thrown if fade is less than 0.0.,

> [!WARNING]
> An error will be thrown if volume is less than 0.0.,An error will be thrown if fade is less than 0.0.,

### **removeDynamicProperty**
`
removeDynamicProperty(identifier: string): boolean
`

Removes a specified property.

#### **Parameters**
- **identifier**: *string*

#### **Returns** *boolean*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **sendMessage**
`
sendMessage(message: (RawMessage | string)[] | RawMessage | string): void
`

Sends a message to all players.

#### **Parameters**
- **message**: ([*RawMessage*](RawMessage.md) | *string*)[] | [*RawMessage*](RawMessage.md) | *string*
  
  The message to be displayed.

> [!WARNING]
> This method can throw if the provided [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) is in an invalid format. For example, if an empty `name` string is provided to `score`.

#### Examples
##### ***nestedTranslation.ts***
```typescript
// Displays "Apple or Coal"
let rawMessage = {
  translate: "accessibility.list.or.two",
  with: { rawtext: [{ translate: "item.apple.name" }, { translate: "item.coal.name" }] },
};
world.sendMessage(rawMessage);
```
##### ***scoreWildcard.ts***
```typescript
// Displays the player's score for objective "obj". Each player will see their own score.
const rawMessage = { score: { name: "*", objective: "obj" } };
world.sendMessage(rawMessage);
```
##### ***simpleString.ts***
```typescript
// Displays "Hello, world!"
world.sendMessage("Hello, world!");
```
##### ***translation.ts***
```typescript
// Displays "First or Second"
const rawMessage = { translate: "accessibility.list.or.two", with: ["First", "Second"] };
world.sendMessage(rawMessage);
```

### **setAbsoluteTime**
`
setAbsoluteTime(absoluteTime: number): void
`

Sets the overall absolute time within the world. This can advance the number of effective days that are considered within the world.

#### **Parameters**
- **absoluteTime**: *number*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **setDefaultSpawnLocation**
`
setDefaultSpawnLocation(spawnLocation: Vector3): void
`

Sets a default spawn location for all players.

#### **Parameters**
- **spawnLocation**: [*Vector3*](Vector3.md)
  
  Location of the spawn point. Note that this is assumed to be within the overworld dimension.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **setDynamicProperty**
`
setDynamicProperty(identifier: string, value: boolean | number | string | Vector3): void
`

Sets a specified property to a value.

#### **Parameters**
- **identifier**: *string*
- **value**: *boolean* | *number* | *string* | [*Vector3*](Vector3.md)
  
  Data value of the property to set.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

#### Examples
##### ***incrementProperty.ts***
```typescript
  let number = mc.world.getDynamicProperty("samplelibrary:number");

  log("Current value is: " + number);

  if (number === undefined) {
    number = 0;
  }

  if (typeof number !== "number") {
    log("Number is of an unexpected type.");
    return -1;
  }

  mc.world.setDynamicProperty("samplelibrary:number", number + 1);
```
##### ***incrementPropertyInJsonBlob.ts***
```typescript
  let paintStr = mc.world.getDynamicProperty("samplelibrary:longerjson");
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
  mc.world.setDynamicProperty("samplelibrary:longerjson", paintStr);
```

### **setTimeOfDay**
`
setTimeOfDay(timeOfDay: number | TimeOfDay): void
`

Sets the current time within the current day.

#### **Parameters**
- **timeOfDay**: *number* | [*TimeOfDay*](TimeOfDay.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **stopMusic**
`
stopMusic(): void
`

Stops any music tracks from playing.

> [!IMPORTANT]
> This function can't be called in read-only mode.
