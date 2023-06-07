---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.ScreenDisplay Class
description: Contents of the @minecraft/server.ScreenDisplay class.
---
# ScreenDisplay Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

Contains information about user interface elements that are showing up on the screen.

## Methods
- [isValid](#isvalid)
- [setActionBar](#setactionbar)
- [setTitle](#settitle)
- [updateSubtitle](#updatesubtitle)

### **isValid**
`
isValid(): boolean
`

Returns true if the current reference to this screen display manager object is valid and functional.

#### **Returns** *boolean*

### **setActionBar**
`
setActionBar(text: (RawMessage | string)[] | RawMessage | string): void
`

Set the action bar text - a piece of text that displays beneath the title and above the hot-bar.

#### **Parameters**
- **text**: ([*RawMessage*](RawMessage.md) | *string*)[] | [*RawMessage*](RawMessage.md) | *string*
  
  New value for the action bar text.

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **setTitle**
`
setTitle(title: (RawMessage | string)[] | RawMessage | string, options?: TitleDisplayOptions): void
`

Will cause a title to show up on the player's on screen display. Will clear the title if set to empty string. You can optionally specify an additional subtitle as well as fade in, stay and fade out times.

#### **Parameters**
- **title**: ([*RawMessage*](RawMessage.md) | *string*)[] | [*RawMessage*](RawMessage.md) | *string*
- **options**?: [*TitleDisplayOptions*](TitleDisplayOptions.md) = `null`

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

#### Examples
##### ***countdown.ts***
```typescript
  let players = mc.world.getPlayers();

  players[0].onScreenDisplay.setTitle("Get ready!", {
    stayDuration: 220,
    fadeInDuration: 2,
    fadeOutDuration: 4,
    subtitle: "10",
  });

  let countdown = 10;

  let intervalId = mc.system.runInterval(() => {
    countdown--;
    players[0].onScreenDisplay.updateSubtitle(countdown.toString());

    if (countdown == 0) {
      mc.system.clearRun(intervalId);
    }
  }, 20);
```
##### ***setTitle.ts***
```typescript
  let players = mc.world.getPlayers();

  players[0].onScreenDisplay.setTitle("§o§6Fancy Title§r");
```
##### ***setTitleAndSubtitle.ts***
```typescript
  let players = mc.world.getPlayers();

  players[0].onScreenDisplay.setTitle("Chapter 1", {
    stayDuration: 100,
    fadeInDuration: 2,
    fadeOutDuration: 4,
    subtitle: "Trouble in Block Town",
  });
```

### **updateSubtitle**
`
updateSubtitle(subtitle: (RawMessage | string)[] | RawMessage | string): void
`

Updates the subtitle if the subtitle was previously displayed via the setTitle method.

#### **Parameters**
- **subtitle**: ([*RawMessage*](RawMessage.md) | *string*)[] | [*RawMessage*](RawMessage.md) | *string*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

#### Examples
##### ***countdown.ts***
```typescript
  let players = mc.world.getPlayers();

  players[0].onScreenDisplay.setTitle("Get ready!", {
    stayDuration: 220,
    fadeInDuration: 2,
    fadeOutDuration: 4,
    subtitle: "10",
  });

  let countdown = 10;

  let intervalId = mc.system.runInterval(() => {
    countdown--;
    players[0].onScreenDisplay.updateSubtitle(countdown.toString());

    if (countdown == 0) {
      mc.system.clearRun(intervalId);
    }
  }, 20);
```

#### Examples
##### ***countdown.ts***
```typescript
  let players = mc.world.getPlayers();

  players[0].onScreenDisplay.setTitle("Get ready!", {
    stayDuration: 220,
    fadeInDuration: 2,
    fadeOutDuration: 4,
    subtitle: "10",
  });

  let countdown = 10;

  let intervalId = mc.system.runInterval(() => {
    countdown--;
    players[0].onScreenDisplay.updateSubtitle(countdown.toString());

    if (countdown == 0) {
      mc.system.clearRun(intervalId);
    }
  }, 20);
```
##### ***setTitle.ts***
```typescript
  let players = mc.world.getPlayers();

  players[0].onScreenDisplay.setTitle("§o§6Fancy Title§r");
```
##### ***setTitleAndSubtitle.ts***
```typescript
  let players = mc.world.getPlayers();

  players[0].onScreenDisplay.setTitle("Chapter 1", {
    stayDuration: 100,
    fadeInDuration: 2,
    fadeOutDuration: 4,
    subtitle: "Trouble in Block Town",
  });
```
