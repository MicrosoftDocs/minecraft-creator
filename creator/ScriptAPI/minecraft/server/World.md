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

### **events**
`read-only events: Events;`

Contains a set of events that are applicable to the entirety of the world.

Type: [*Events*](Events.md)

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
- [getDimension](#getdimension)
- [getDynamicProperty](#getdynamicproperty)
- [getPlayers](#getplayers)
- [getTime](#gettime)
- [playMusic](#playmusic)
- [playSound](#playsound)
- [queueMusic](#queuemusic)
- [removeDynamicProperty](#removedynamicproperty)
- [say](#say)
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

### **getPlayers**
`
getPlayers(options?: EntityQueryOptions): PlayerIterator
`

Returns all players currently in the world.

#### **Parameters**
- **options**?: [*EntityQueryOptions*](EntityQueryOptions.md) = `null`

#### **Returns** [*PlayerIterator*](PlayerIterator.md) - All players currently in the world.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

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

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

### **playSound**
`
playSound(soundID: string, soundOptions?: SoundOptions): void
`

Plays a sound for all players.

#### **Parameters**
- **soundID**: *string*
- **soundOptions**?: [*SoundOptions*](SoundOptions.md) = `null`

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

### **queueMusic**
`
queueMusic(trackID: string, musicOptions?: MusicOptions): void
`

Queues an additional music track for players. If a track is not playing, a music track will play.

#### **Parameters**
- **trackID**: *string*
- **musicOptions**?: [*MusicOptions*](MusicOptions.md) = `null`

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

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

### **say**
`
say(message: (RawMessage | string)[] | RawMessage | string): void
`

Broadcasts a message that is displayed on all connected clients.

#### **Parameters**
- **message**: ([*RawMessage*](RawMessage.md) | *string*)[] | [*RawMessage*](RawMessage.md) | *string*

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

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.
