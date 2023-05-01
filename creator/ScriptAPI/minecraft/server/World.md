---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.World Class
description: Contents of the @minecraft/server.World class.
---
# World Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
A class that wraps the state of a world - a set of dimensions and the environment of Minecraft.

## Properties

### **afterEvents**
`read-only afterEvents: AfterEvents;`

Contains a set of events that are applicable to the entirety of the world.

Event callbacks are called in a deferred manner.

Event callbacks are executed in read-write mode.

Type: [*AfterEvents*](AfterEvents.md)

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.

### **beforeEvents**
`read-only beforeEvents: BeforeEvents;`

Contains a set of events that are applicable to the entirety of the world.

Event callbacks are called immediately.

Event callbacks are executed in read-only mode.

Type: [*BeforeEvents*](BeforeEvents.md)

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
- [getDefaultSpawnPosition](#getdefaultspawnposition)
- [getDimension](#getdimension)
- [getDynamicProperty](#getdynamicproperty)
- [getEntity](#getentity)
- [getPlayers](#getplayers)
- [getTime](#gettime)
- [playMusic](#playmusic)
- [playSound](#playsound)
- [queueMusic](#queuemusic)
- [removeDynamicProperty](#removedynamicproperty)
- [sendMessage](#sendmessage)
- [setDefaultSpawn](#setdefaultspawn)
- [setDynamicProperty](#setdynamicproperty)
- [setTime](#settime)
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

### **getAbsoluteTime**
`
getAbsoluteTime(): number
`

Returns the absolute time since the start of the world.

#### **Returns** *number*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

### **getAllPlayers**
`
getAllPlayers(): Player[]
`

Returns an array of all active players within the world.

#### **Returns** [*Player*](Player.md)[]

> [!WARNING]
> This function can throw errors.

### **getDefaultSpawnPosition**
`
getDefaultSpawnPosition(): Vector3
`

Returns the default spawn position within the world where players are spawned if they don't have a specific spawn position set.

#### **Returns** [*Vector3*](Vector3.md) - Returns the default spawn position.

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
getDynamicProperty(identifier: string): boolean | number | string | undefined
`

Returns a property value.

#### **Parameters**
- **identifier**: *string*

#### **Returns** *boolean* | *number* | *string* | *undefined* - Returns the value for the property, or undefined if the property has not been set.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This function can throw errors.

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

### **getTime**
`
getTime(): number
`

Sets the current game time of the day.

#### **Returns** *number*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

### **playMusic**
`
playMusic(trackID: string, musicOptions?: MusicOptions): void
`

Plays a particular music track for all players.

#### **Parameters**
- **trackID**: *string*
- **musicOptions**?: [*MusicOptions*](MusicOptions.md) = `null`

> [!WARNING]
> This function can throw errors.

### **playSound**
`
playSound(soundID: string, location: Vector3, soundOptions?: WorldSoundOptions): void
`

Plays a sound for all players.

#### **Parameters**
- **soundID**: *string*
- **location**: [*Vector3*](Vector3.md)
- **soundOptions**?: [*WorldSoundOptions*](WorldSoundOptions.md) = `null`

> [!WARNING]
> This function can throw errors.

### **queueMusic**
`
queueMusic(trackID: string, musicOptions?: MusicOptions): void
`

Queues an additional music track for players. If a track is not playing, a music track will play.

#### **Parameters**
- **trackID**: *string*
- **musicOptions**?: [*MusicOptions*](MusicOptions.md) = `null`

> [!WARNING]
> This function can throw errors.

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

#### **Examples**
##### *nestedTranslation.ts*
```javascript
// Displays "Apple or Coal"
let rawMessage = {
  translate: "accessibility.list.or.two",
  with: { rawtext: [{ translate: "item.apple.name" }, { translate: "item.coal.name" }] },
};
world.sendMessage(rawMessage);
```
##### *scoreWildcard.ts*
```javascript
// Displays the player's score for objective "obj". Each player will see their own score.
const rawMessage = { score: { name: "*", objective: "obj" } };
world.sendMessage(rawMessage);
```
##### *simpleString.ts*
```javascript
// Displays "Hello, world!"
world.sendMessage("Hello, world!");
```
##### *translation.ts*
```javascript
// Displays "First or Second"
const rawMessage = { translate: "accessibility.list.or.two", with: ["First", "Second"] };
world.sendMessage(rawMessage);
```

### **setDefaultSpawn**
`
setDefaultSpawn(spawnPosition: Vector3): void
`

Sets the default spawn location for players within the world. Note that players can override this with their own spawn position. Note also that the default spawn position must be in the overworld dimension.

#### **Parameters**
- **spawnPosition**: [*Vector3*](Vector3.md)
  
  Location within the overworld where a player will spawn.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This function can throw errors.

### **setDynamicProperty**
`
setDynamicProperty(identifier: string, value: boolean | number | string): void
`

Sets a specified property to a value.

#### **Parameters**
- **identifier**: *string*
- **value**: *boolean* | *number* | *string*
  
  Data value of the property to set.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This function can throw errors.

### **setTime**
`
setTime(timeOfDay: number): void
`

Returns the current game time of the day.

#### **Parameters**
- **timeOfDay**: *number*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

### **stopMusic**
`
stopMusic(): void
`

Stops any music tracks from playing.
