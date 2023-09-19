---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.Player Class
description: Contents of the @minecraft/server.Player class.
---
# Player Class

## Extends
- [*Entity*](Entity.md)

## Classes that extend Player
- [*@minecraft/server-gametest.SimulatedPlayer*](../../minecraft/server-gametest/SimulatedPlayer.md)

Represents a player within the world.

## Properties

### **camera**
`read-only camera: Camera;`

The player's Camera.

Type: [*Camera*](Camera.md)

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.
    
> [!WARNING]
> This property can throw errors when used.

### **isEmoting**
`read-only isEmoting: boolean;`

If true, the player is currently emoting.

Type: *boolean*

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.
    
> [!WARNING]
> This property can throw errors when used.

### **isFlying**
`read-only isFlying: boolean;`

Whether the player is flying. For example, in Creative or Spectator mode.

Type: *boolean*

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.
    
> [!WARNING]
> This property can throw errors when used.

### **isGliding**
`read-only isGliding: boolean;`

Whether the player is gliding with Elytra.

Type: *boolean*

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.
    
> [!WARNING]
> This property can throw errors when used.

### **isJumping**
`read-only isJumping: boolean;`

Whether the player is jumping. This will remain true while the player is holding the jump action.

Type: *boolean*

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.
    
> [!WARNING]
> This property can throw errors when used.

### **level**
`read-only level: number;`

The current overall level for the player, based on their experience. 

Type: *number*

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.
    
> [!WARNING]
> This property can throw errors when used.

### **name**
`read-only name: string;`

Name of the player.

Type: *string*
    
> [!WARNING]
> This property can throw errors when used.

### **onScreenDisplay**
`read-only onScreenDisplay: ScreenDisplay;`

Contains methods for manipulating the on-screen display of a Player.

Type: [*ScreenDisplay*](ScreenDisplay.md)
    
> [!WARNING]
> This property can throw errors when used.

### **selectedSlot**
`selectedSlot: number;`

Manages the selected slot in the player's hotbar.

Type: *number*

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

### **totalXpNeededForNextLevel**
`read-only totalXpNeededForNextLevel: number;`

The overall total set of experience needed to achieve the next level for a player.

Type: *number*

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.
    
> [!WARNING]
> This property can throw errors when used.

### **xpEarnedAtCurrentLevel**
`read-only xpEarnedAtCurrentLevel: number;`

The current set of experience achieved for the player.

Type: *number*

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.
    
> [!WARNING]
> This property can throw errors when used.

## Methods
- [addExperience](#addexperience)
- [addLevels](#addlevels)
- [getItemCooldown](#getitemcooldown)
- [getSpawnPoint](#getspawnpoint)
- [getTotalXp](#gettotalxp)
- [isOp](#isop)
- [playMusic](#playmusic)
- [playSound](#playsound)
- [postClientMessage](#postclientmessage)
- [queueMusic](#queuemusic)
- [resetLevel](#resetlevel)
- [sendMessage](#sendmessage)
- [setOp](#setop)
- [setSpawnPoint](#setspawnpoint)
- [startItemCooldown](#startitemcooldown)
- [stopMusic](#stopmusic)

### **addExperience**
`
addExperience(amount: number): number
`

Adds/removes experience to/from the Player and returns the current experience of the Player.

#### **Parameters**
- **amount**: *number*
  
  Amount of experience to add. Note that this can be negative. Min/max bounds at -2^24 ~ 2^24

#### **Returns** *number* - Returns the current experience of the Player.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **addLevels**
`
addLevels(amount: number): number
`

Adds/removes level to/from the Player and returns the current level of the Player.

#### **Parameters**
- **amount**: *number*
  
  Amount to add to the player. Min/max bounds at -2^24 ~ 2^24

#### **Returns** *number* - Returns the current level of the Player.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **getItemCooldown**
`
getItemCooldown(itemCategory: string): number
`

Gets the current item cooldown time for a particular cooldown category.

#### **Parameters**
- **itemCategory**: *string*
  
  Specifies the cooldown category to retrieve the current cooldown for.

#### **Returns** *number*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This function can throw errors.

### **getSpawnPoint**
`
getSpawnPoint(): DimensionLocation | undefined
`

Gets the current spawn point of the player.

#### **Returns** [*DimensionLocation*](DimensionLocation.md) | *undefined*

> [!WARNING]
> This function can throw errors.

### **getTotalXp**
`
getTotalXp(): number
`

 Gets the total experience of the Player.

#### **Returns** *number*

> [!WARNING]
> This function can throw errors.

### **isOp**
`
isOp(): boolean
`

Returns true if this player has operator-level permissions.

#### **Returns** *boolean*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!WARNING]
> This function can throw errors.

### **playMusic**
`
playMusic(trackId: string, musicOptions?: MusicOptions): void
`

Plays a music track that only this particular player can hear.

#### **Parameters**
- **trackId**: *string*
  
  Identifier of the music track to play.
- **musicOptions**?: [*MusicOptions*](MusicOptions.md) = `null`
  
  Additional options for the music track.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **playSound**
`
playSound(soundId: string, soundOptions?: PlayerSoundOptions): void
`

Plays a sound that only this particular player can hear.

#### **Parameters**
- **soundId**: *string*
- **soundOptions**?: [*PlayerSoundOptions*](PlayerSoundOptions.md) = `null`
  
  Additional optional options for the sound.

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

### **postClientMessage**
`
postClientMessage(id: string, value: string): void
`

This is an internal-facing method for posting a system message to downstream clients.

#### **Parameters**
- **id**: *string*
- **value**: *string*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **queueMusic**
`
queueMusic(trackId: string, musicOptions?: MusicOptions): void
`

Queues an additional music track that only this particular player can hear. If a track is not playing, a music track will play.

#### **Parameters**
- **trackId**: *string*
  
  Identifier of the music track to play.
- **musicOptions**?: [*MusicOptions*](MusicOptions.md) = `null`
  
  Additional options for the music track.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> An error will be thrown if volume is less than 0.0.,An error will be thrown if fade is less than 0.0.,

> [!WARNING]
> An error will be thrown if volume is less than 0.0.,An error will be thrown if fade is less than 0.0.,

> [!WARNING]
> An error will be thrown if volume is less than 0.0.,An error will be thrown if fade is less than 0.0.,

### **resetLevel**
`
resetLevel(): void
`

Resets the level of the player.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **sendMessage**
`
sendMessage(message: (RawMessage | string)[] | RawMessage | string): void
`

Sends a message to the player.

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
player.sendMessage(rawMessage);
```
##### ***scoreWildcard.ts***
```typescript
// Displays the player's score for objective "obj". Each player will see their own score.
const rawMessage = { score: { name: "*", objective: "obj" } };
world.sendMessage(rawMessage);
```
##### ***sendBasicMessage.ts***
```typescript
  let players = mc.world.getPlayers();

  players[0].sendMessage("Hello World!");
```
##### ***sendTranslatedMessage.ts***
```typescript
  let players = mc.world.getPlayers();

  players[0].sendMessage({ translate: "authentication.welcome", with: ["Amazing Player 1"] });
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
player.sendMessage(rawMessage);
```

### **setOp**
`
setOp(isOp: boolean): void
`

Will change the specified players permissions, and whether they are operator or not.

#### **Parameters**
- **isOp**: *boolean*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **setSpawnPoint**
`
setSpawnPoint(spawnPoint?: DimensionLocation): void
`

Sets the current starting spawn point for this particular player.

#### **Parameters**
- **spawnPoint**?: [*DimensionLocation*](DimensionLocation.md) = `null`

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws *Error*, [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

### **startItemCooldown**
`
startItemCooldown(itemCategory: string, tickDuration: number): void
`

Sets the item cooldown time for a particular cooldown category.

#### **Parameters**
- **itemCategory**: *string*
  
  Specifies the cooldown category to retrieve the current cooldown for.
- **tickDuration**: *number*
  
  Duration in ticks of the item cooldown.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **stopMusic**
`
stopMusic(): void
`

Stops any music tracks from playing for this particular player.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
