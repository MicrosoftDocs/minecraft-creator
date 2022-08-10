---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-minecraft.World Class
description: Contents of the mojang-minecraft.World class.
---
# World Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

A class that wraps the state of a world - a set of dimensions and the environment of Minecraft.

## Properties

### **events**
`read-only events: Events;`

Contains a set of events that are applicable to the entirety of the world.

Type: [*Events*](Events.md)

### **scoreboard**
`read-only scoreboard: Scoreboard;`

Returns the general global scoreboard that applies to the world.

Type: [*Scoreboard*](Scoreboard.md)

## Methods
- [getDimension](#getdimension)
- [getDynamicProperty](#getdynamicproperty)
- [getPlayers](#getplayers)
- [playMusic](#playmusic)
- [playSound](#playsound)
- [queueMusic](#queuemusic)
- [removeDynamicProperty](#removedynamicproperty)
- [say](#say)
- [setDynamicProperty](#setdynamicproperty)
- [stopMusic](#stopmusic)

### **getDimension**
`
getDimension(dimensionId: string): Dimension
`

#### **Parameters**
- **dimensionId**: *string*

#### **Returns** [*Dimension*](Dimension.md) - The requested dimension

> [!WARNING]
> Throws if the given dimension name is invalid

### **getDynamicProperty**
`
getDynamicProperty(identifier: string): boolean | number | string
`
Returns a property value.

#### **Parameters**
- **identifier**: *string*

#### **Returns** *boolean* | *number* | *string* - Returns the value for the property, or undefined if the property has not been set.
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
> [!WARNING]
> This function can throw errors.

### **playMusic**
`
playMusic(trackID: string, musicOptions?: MusicOptions): void
`
Plays a particular music track for all players.

#### **Parameters**
- **trackID**: *string*
- **musicOptions**?: [*MusicOptions*](MusicOptions.md) = `null`

### **playSound**
`
playSound(soundID: string, soundOptions?: SoundOptions): void
`
Plays a sound for all players.

#### **Parameters**
- **soundID**: *string*
- **soundOptions**?: [*SoundOptions*](SoundOptions.md) = `null`

### **queueMusic**
`
queueMusic(trackID: string, musicOptions?: MusicOptions): void
`
Queues an additional music track for players. If a track is not playing, a music track will play.

#### **Parameters**
- **trackID**: *string*
- **musicOptions**?: [*MusicOptions*](MusicOptions.md) = `null`

### **removeDynamicProperty**
`
removeDynamicProperty(identifier: string): boolean
`
Removes a specified property.

#### **Parameters**
- **identifier**: *string*

#### **Returns** *boolean*
> [!WARNING]
> This function can throw errors.

### **say**
`
say(message: IRawMessage | string): void
`
Broadcasts a message that is displayed on all connected clients.

#### **Parameters**
- **message**: [*IRawMessage*](IRawMessage.md) | *string*
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
> [!WARNING]
> This function can throw errors.

### **stopMusic**
`
stopMusic(): void
`
Stops any music tracks from playing.
