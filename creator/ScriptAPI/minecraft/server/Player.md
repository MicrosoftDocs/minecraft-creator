---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.Player Class
description: Contents of the @minecraft/server.Player class.
---
# Player Class

## Extends
- [*Entity*](Entity.md)

Represents a player within the world.

## Properties

### **camera**
`read-only camera: Camera;`

The player's Camera.

Type: [*Camera*](Camera.md)

Notes:
  - This property can throw errors when used.

### **clientSystemInfo**
`read-only clientSystemInfo: ClientSystemInfo;`

Contains the player's device information.

Type: [*ClientSystemInfo*](ClientSystemInfo.md)

Notes:
  - This property can throw errors when used.
    - Throws *Error*

::: moniker range="=minecraft-bedrock-experimental"
### **inputInfo**
`read-only inputInfo: InputInfo;`

Contains the player's input information.

Type: [*InputInfo*](InputInfo.md)

> [!CAUTION]
> This property is still in pre-release.  Its signature may change or it may be removed in future releases.
::: moniker-end

### **inputPermissions**
`read-only inputPermissions: PlayerInputPermissions;`

Input permissions of the player.

Type: [*PlayerInputPermissions*](PlayerInputPermissions.md)

### **isEmoting**
`read-only isEmoting: boolean;`

If true, the player is currently emoting.

Type: *boolean*

Notes:
  - This property can throw errors when used.

### **isFlying**
`read-only isFlying: boolean;`

Whether the player is flying. For example, in Creative or Spectator mode.

Type: *boolean*

Notes:
  - This property can throw errors when used.

### **isGliding**
`read-only isGliding: boolean;`

Whether the player is gliding with Elytra.

Type: *boolean*

Notes:
  - This property can throw errors when used.

### **isJumping**
`read-only isJumping: boolean;`

Whether the player is jumping. This will remain true while the player is holding the jump action.

Type: *boolean*

Notes:
  - This property can throw errors when used.

### **level**
`read-only level: number;`

The current overall level for the player, based on their experience. 

Type: *number*

Notes:
  - This property can throw errors when used.

### **name**
`read-only name: string;`

Name of the player.

Type: *string*

Notes:
  - This property can throw errors when used.

### **onScreenDisplay**
`read-only onScreenDisplay: ScreenDisplay;`

Contains methods for manipulating the on-screen display of a Player.

Type: [*ScreenDisplay*](ScreenDisplay.md)

Notes:
  - This property can throw errors when used.

### **selectedSlotIndex**
`selectedSlotIndex: number;`

Type: *number*

Notes:
  - This property can't be edited in read-only mode.

### **totalXpNeededForNextLevel**
`read-only totalXpNeededForNextLevel: number;`

The overall total set of experience needed to achieve the next level for a player.

Type: *number*

Notes:
  - This property can throw errors when used.

### **xpEarnedAtCurrentLevel**
`read-only xpEarnedAtCurrentLevel: number;`

The current set of experience achieved for the player.

Type: *number*

Notes:
  - This property can throw errors when used.

## Methods
- [addExperience](#addexperience)
- [addLevels](#addlevels)
::: moniker range="=minecraft-bedrock-experimental"
- [eatItem](#eatitem)
::: moniker-end
::: moniker range="=minecraft-bedrock-experimental"
- [getAimAssist](#getaimassist)
::: moniker-end
- [getGameMode](#getgamemode)
- [getItemCooldown](#getitemcooldown)
- [getSpawnPoint](#getspawnpoint)
- [getTotalXp](#gettotalxp)
::: moniker range="=minecraft-bedrock-experimental"
- [isOp](#isop)
::: moniker-end
- [playMusic](#playmusic)
- [playSound](#playsound)
::: moniker range="=minecraft-bedrock-experimental"
- [postClientMessage](#postclientmessage)
::: moniker-end
- [queueMusic](#queuemusic)
- [resetLevel](#resetlevel)
- [sendMessage](#sendmessage)
- [setGameMode](#setgamemode)
::: moniker range="=minecraft-bedrock-experimental"
- [setOp](#setop)
::: moniker-end
- [setSpawnPoint](#setspawnpoint)
::: moniker range="=minecraft-bedrock-experimental"
- [spawnParticle](#spawnparticle)
::: moniker-end
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

**Returns** *number* - Returns the current experience of the Player.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **addLevels**
`
addLevels(amount: number): number
`

Adds/removes level to/from the Player and returns the current level of the Player.

#### **Parameters**
- **amount**: *number*
  
  Amount to add to the player. Min/max bounds at -2^24 ~ 2^24

**Returns** *number* - Returns the current level of the Player.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

::: moniker range="=minecraft-bedrock-experimental"
### **eatItem**
`
eatItem(itemStack: ItemStack): void
`

Eats an item, providing the item's hunger and saturation effects to the player. Can only be used on food items.

#### **Parameters**
- **itemStack**: [*ItemStack*](ItemStack.md)
  
  The item to eat.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws if the item is not a food item.
::: moniker-end

::: moniker range="=minecraft-bedrock-experimental"
### **getAimAssist**
`
getAimAssist(): PlayerAimAssist
`

The player's aim-assist settings.

**Returns** [*PlayerAimAssist*](PlayerAimAssist.md)

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.
 
#### Required Experiments
- Camera Aim Assist

::: moniker-end

### **getGameMode**
`
getGameMode(): GameMode
`

Retrieves the active gamemode for this player, if specified.

**Returns** [*GameMode*](GameMode.md)
  
Notes:
- This function can throw errors.

### **getItemCooldown**
`
getItemCooldown(cooldownCategory: string): number
`

Gets the current item cooldown time for a particular cooldown category.

#### **Parameters**
- **cooldownCategory**: *string*
  
  Specifies the cooldown category to retrieve the current cooldown for.

**Returns** *number*
  
Notes:
- This function can throw errors.

### **getSpawnPoint**
`
getSpawnPoint(): DimensionLocation | undefined
`

Gets the current spawn point of the player.

**Returns** [*DimensionLocation*](DimensionLocation.md) | *undefined*
  
Notes:
- This function can throw errors.

### **getTotalXp**
`
getTotalXp(): number
`

 Gets the total experience of the Player.

**Returns** *number*
  
Notes:
- This function can throw errors.

::: moniker range="=minecraft-bedrock-experimental"
### **isOp**
`
isOp(): boolean
`

Returns true if this player has operator-level permissions.

**Returns** *boolean*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.
  
Notes:
- This function can throw errors.
::: moniker-end

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
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **playSound**
`
playSound(soundId: string, soundOptions?: PlayerSoundOptions): void
`

Plays a sound that only this particular player can hear.

#### **Parameters**
- **soundId**: *string*
- **soundOptions**?: [*PlayerSoundOptions*](PlayerSoundOptions.md) = `null`
  
  Additional optional options for the sound.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

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

::: moniker range="=minecraft-bedrock-experimental"
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
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
::: moniker-end

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
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - An error will be thrown if volume is less than 0.0.
  - An error will be thrown if fade is less than 0.0.
  - 

### **resetLevel**
`
resetLevel(): void
`

Resets the level of the player.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **sendMessage**
`
sendMessage(message: (RawMessage | string)[] | RawMessage | string): void
`

Sends a message to the player.

#### **Parameters**
- **message**: ([*RawMessage*](RawMessage.md) | *string*)[] | [*RawMessage*](RawMessage.md) | *string*
  
  The message to be displayed.
  
Notes:
- This function can throw errors.
  - This method can throw if the provided [*@minecraft/server.RawMessage*](../../minecraft/server/RawMessage.md) is in an invalid format. For example, if an empty `name` string is provided to `score`.

#### Examples

##### ***nestedTranslation.ts***

```typescript
import { world, DimensionLocation } from "@minecraft/server";

function nestedTranslation(targetLocation: DimensionLocation) {
  // Displays "Apple or Coal"
  const rawMessage = {
    translate: "accessibility.list.or.two",
    with: { rawtext: [{ translate: "item.apple.name" }, { translate: "item.coal.name" }] },
  };
  world.sendMessage(rawMessage);
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/nestedTranslation.ts) code sandbox.

##### ***scoreWildcard.ts***

```typescript
import { world, DimensionLocation } from "@minecraft/server";

function scoreWildcard(targetLocation: DimensionLocation) {
  // Displays the player's score for objective "obj". Each player will see their own score.
  const rawMessage = { score: { name: "*", objective: "obj" } };
  world.sendMessage(rawMessage);
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/scoreWildcard.ts) code sandbox.

##### ***sendBasicMessage.ts***

```typescript
import { world, DimensionLocation } from "@minecraft/server";

function sendBasicMessage(targetLocation: DimensionLocation) {
  const players = world.getPlayers();

  players[0].sendMessage("Hello World!");
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/sendBasicMessage.ts) code sandbox.

##### ***sendPlayerMessages.ts***

```typescript
import { world, DimensionLocation } from "@minecraft/server";

function sendPlayerMessages(targetLocation: DimensionLocation) {
  for (const player of world.getAllPlayers()) {
    // Displays "First or Second"
    const rawMessage = { translate: "accessibility.list.or.two", with: ["First", "Second"] };
    player.sendMessage(rawMessage);

    // Displays "Hello, world!"
    player.sendMessage("Hello, world!");

    // Displays "Welcome, Amazing Player 1!"
    player.sendMessage({ translate: "authentication.welcome", with: ["Amazing Player 1"] });

    // Displays the player's score for objective "obj". Each player will see their own score.
    const rawMessageWithScore = { score: { name: "*", objective: "obj" } };
    player.sendMessage(rawMessageWithScore);

    // Displays "Apple or Coal"
    const rawMessageWithNestedTranslations = {
      translate: "accessibility.list.or.two",
      with: { rawtext: [{ translate: "item.apple.name" }, { translate: "item.coal.name" }] },
    };
    player.sendMessage(rawMessageWithNestedTranslations);
  }
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/sendPlayerMessages.ts) code sandbox.

##### ***sendTranslatedMessage.ts***

```typescript
import { world, DimensionLocation } from "@minecraft/server";

function sendTranslatedMessage(
    targetLocation: DimensionLocation
) {
  const players = world.getPlayers();

  players[0].sendMessage({ translate: "authentication.welcome", with: ["Amazing Player 1"] });
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/sendTranslatedMessage.ts) code sandbox.

### **setGameMode**
`
setGameMode(gameMode?: GameMode): void
`

Sets a gamemode override for this player. 

#### **Parameters**
- **gameMode**?: [*GameMode*](GameMode.md) = `null`
  
  Active gamemode.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

::: moniker range="=minecraft-bedrock-experimental"
### **setOp**
`
setOp(isOp: boolean): void
`

Will change the specified players permissions, and whether they are operator or not.

#### **Parameters**
- **isOp**: *boolean*

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
::: moniker-end

### **setSpawnPoint**
`
setSpawnPoint(spawnPoint?: DimensionLocation): void
`

Sets the current starting spawn point for this particular player.

#### **Parameters**
- **spawnPoint**?: [*DimensionLocation*](DimensionLocation.md) = `null`
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws *Error*, [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

::: moniker range="=minecraft-bedrock-experimental"
### **spawnParticle**
`
spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void
`

Creates a new particle emitter at a specified location in the world. Only visible to the target player.

#### **Parameters**
- **effectName**: *string*
  
  Identifier of the particle to create.
- **location**: [*Vector3*](Vector3.md)
  
  The location at which to create the particle emitter.
- **molangVariables**?: [*MolangVariableMap*](MolangVariableMap.md) = `null`
  
  A set of optional, customizable variables that can be adjusted for this particle.

> [!CAUTION]
> This function is still in pre-release.  Its signature may change or it may be removed in future releases.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws *Error*, [*LocationInUnloadedChunkError*](LocationInUnloadedChunkError.md), [*LocationOutOfWorldBoundariesError*](LocationOutOfWorldBoundariesError.md)

#### Examples

##### ***spawnParticle.ts***

```typescript
import { world, MolangVariableMap, Vector3 } from '@minecraft/server';

world.afterEvents.playerSpawn.subscribe(event => {
    const targetLocation = event.player.location;
    for (let i = 0; i < 100; i++) {
        const molang = new MolangVariableMap();

        molang.setColorRGB('variable.color', {
            red: Math.random(),
            green: Math.random(),
            blue: Math.random()
        });

        const newLocation: Vector3 = {
            x: targetLocation.x + Math.floor(Math.random() * 8) - 4,
            y: targetLocation.y + Math.floor(Math.random() * 8) - 4,
            z: targetLocation.z + Math.floor(Math.random() * 8) - 4,
        };
        event.player.spawnParticle('minecraft:colored_flame_particle', newLocation, molang);
    }
});
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/spawnParticle.ts) code sandbox.
::: moniker-end

### **startItemCooldown**
`
startItemCooldown(cooldownCategory: string, tickDuration: number): void
`

Sets the item cooldown time for a particular cooldown category.

#### **Parameters**
- **cooldownCategory**: *string*
  
  Specifies the cooldown category to retrieve the current cooldown for.
- **tickDuration**: *number*
  
  Duration in ticks of the item cooldown.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **stopMusic**
`
stopMusic(): void
`

Stops any music tracks from playing for this particular player.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
