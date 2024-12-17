---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.ScreenDisplay Class
description: Contents of the @minecraft/server.ScreenDisplay class.
---
# ScreenDisplay Class

Contains information about user interface elements that are showing up on the screen.

#### Examples

##### ***setTitle.ts***

```typescript
import { world, DimensionLocation } from "@minecraft/server";

function setTitle(targetLocation: DimensionLocation) {
  const players = world.getPlayers();

  if (players.length > 0) {
    players[0].onScreenDisplay.setTitle("§o§6Fancy Title§r");
  }
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/setTitle.ts) code sandbox.

##### ***setTitleAndSubtitle.ts***

```typescript
import { world, DimensionLocation } from "@minecraft/server";

function setTitleAndSubtitle(
    targetLocation: DimensionLocation
) {
  const players = world.getPlayers();

  players[0].onScreenDisplay.setTitle("Chapter 1", {
    stayDuration: 100,
    fadeInDuration: 2,
    fadeOutDuration: 4,
    subtitle: "Trouble in Block Town",
  });
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/setTitleAndSubtitle.ts) code sandbox.

##### ***countdown.ts***

```typescript
import { world, system, DimensionLocation } from "@minecraft/server";

function countdown(targetLocation: DimensionLocation) {
  const players = world.getPlayers();

  players[0].onScreenDisplay.setTitle("Get ready!", {
    stayDuration: 220,
    fadeInDuration: 2,
    fadeOutDuration: 4,
    subtitle: "10",
  });

  let countdown = 10;

  const intervalId = system.runInterval(() => {
    countdown--;
    players[0].onScreenDisplay.updateSubtitle(countdown.toString());

    if (countdown == 0) {
      system.clearRun(intervalId);
    }
  }, 20);
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/countdown.ts) code sandbox.

## Methods
- [getHiddenHudElements](#gethiddenhudelements)
- [hideAllExcept](#hideallexcept)
- [isForcedHidden](#isforcedhidden)
- [isValid](#isvalid)
- [resetHudElements](#resethudelements)
- [setActionBar](#setactionbar)
- [setHudVisibility](#sethudvisibility)
- [setTitle](#settitle)
- [updateSubtitle](#updatesubtitle)

### **getHiddenHudElements**
`
getHiddenHudElements(): HudElement[]
`

**Returns** [*HudElement*](HudElement.md)[]
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **hideAllExcept**
`
hideAllExcept(hudElements?: HudElement[]): void
`

#### **Parameters**
- **hudElements**?: [*HudElement*](HudElement.md)[] = `null`
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **isForcedHidden**
`
isForcedHidden(hudElement: HudElement): boolean
`

#### **Parameters**
- **hudElement**: [*HudElement*](HudElement.md)

**Returns** *boolean*
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **isValid**
`
isValid(): boolean
`

Returns true if the current reference to this screen display manager object is valid and functional.

**Returns** *boolean*

### **resetHudElements**
`
resetHudElements(): void
`
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **setActionBar**
`
setActionBar(text: (RawMessage | string)[] | RawMessage | string): void
`

Set the action bar text - a piece of text that displays beneath the title and above the hot-bar.

#### **Parameters**
- **text**: ([*RawMessage*](RawMessage.md) | *string*)[] | [*RawMessage*](RawMessage.md) | *string*
  
  New value for the action bar text.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **setHudVisibility**
`
setHudVisibility(visible: HudVisibility, hudElements?: HudElement[]): void
`

Sets visibility of a particular element of the heads up display (HUD).

#### **Parameters**
- **visible**: [*HudVisibility*](HudVisibility.md)
  
  Whether to set the HUD element to invisible, or to reset it back to its default.
- **hudElements**?: [*HudElement*](HudElement.md)[] = `null`
  
  Optional list of HUD elements to configure visibility for.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **setTitle**
`
setTitle(title: (RawMessage | string)[] | RawMessage | string, options?: TitleDisplayOptions): void
`

Will cause a title to show up on the player's on screen display. Will clear the title if set to empty string. You can optionally specify an additional subtitle as well as fade in, stay and fade out times.

#### **Parameters**
- **title**: ([*RawMessage*](RawMessage.md) | *string*)[] | [*RawMessage*](RawMessage.md) | *string*
- **options**?: [*TitleDisplayOptions*](TitleDisplayOptions.md) = `null`
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

#### Examples

##### ***setTitle.ts***

```typescript
import { world, DimensionLocation } from "@minecraft/server";

function setTitle(targetLocation: DimensionLocation) {
  const players = world.getPlayers();

  if (players.length > 0) {
    players[0].onScreenDisplay.setTitle("§o§6Fancy Title§r");
  }
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/setTitle.ts) code sandbox.

##### ***setTitleAndSubtitle.ts***

```typescript
import { world, DimensionLocation } from "@minecraft/server";

function setTitleAndSubtitle(
    targetLocation: DimensionLocation
) {
  const players = world.getPlayers();

  players[0].onScreenDisplay.setTitle("Chapter 1", {
    stayDuration: 100,
    fadeInDuration: 2,
    fadeOutDuration: 4,
    subtitle: "Trouble in Block Town",
  });
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/setTitleAndSubtitle.ts) code sandbox.

##### ***countdown.ts***

```typescript
import { world, system, DimensionLocation } from "@minecraft/server";

function countdown(targetLocation: DimensionLocation) {
  const players = world.getPlayers();

  players[0].onScreenDisplay.setTitle("Get ready!", {
    stayDuration: 220,
    fadeInDuration: 2,
    fadeOutDuration: 4,
    subtitle: "10",
  });

  let countdown = 10;

  const intervalId = system.runInterval(() => {
    countdown--;
    players[0].onScreenDisplay.updateSubtitle(countdown.toString());

    if (countdown == 0) {
      system.clearRun(intervalId);
    }
  }, 20);
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/countdown.ts) code sandbox.

### **updateSubtitle**
`
updateSubtitle(subtitle: (RawMessage | string)[] | RawMessage | string): void
`

Updates the subtitle if the subtitle was previously displayed via the setTitle method.

#### **Parameters**
- **subtitle**: ([*RawMessage*](RawMessage.md) | *string*)[] | [*RawMessage*](RawMessage.md) | *string*
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

#### Examples

##### ***countdown.ts***

```typescript
import { world, system, DimensionLocation } from "@minecraft/server";

function countdown(targetLocation: DimensionLocation) {
  const players = world.getPlayers();

  players[0].onScreenDisplay.setTitle("Get ready!", {
    stayDuration: 220,
    fadeInDuration: 2,
    fadeOutDuration: 4,
    subtitle: "10",
  });

  let countdown = 10;

  const intervalId = system.runInterval(() => {
    countdown--;
    players[0].onScreenDisplay.updateSubtitle(countdown.toString());

    if (countdown == 0) {
      system.clearRun(intervalId);
    }
  }, 20);
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/countdown.ts) code sandbox.

#### Examples

##### ***setTitle.ts***

```typescript
import { world, DimensionLocation } from "@minecraft/server";

function setTitle(targetLocation: DimensionLocation) {
  const players = world.getPlayers();

  if (players.length > 0) {
    players[0].onScreenDisplay.setTitle("§o§6Fancy Title§r");
  }
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/setTitle.ts) code sandbox.

##### ***setTitleAndSubtitle.ts***

```typescript
import { world, DimensionLocation } from "@minecraft/server";

function setTitleAndSubtitle(
    targetLocation: DimensionLocation
) {
  const players = world.getPlayers();

  players[0].onScreenDisplay.setTitle("Chapter 1", {
    stayDuration: 100,
    fadeInDuration: 2,
    fadeOutDuration: 4,
    subtitle: "Trouble in Block Town",
  });
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/setTitleAndSubtitle.ts) code sandbox.

##### ***countdown.ts***

```typescript
import { world, system, DimensionLocation } from "@minecraft/server";

function countdown(targetLocation: DimensionLocation) {
  const players = world.getPlayers();

  players[0].onScreenDisplay.setTitle("Get ready!", {
    stayDuration: 220,
    fadeInDuration: 2,
    fadeOutDuration: 4,
    subtitle: "10",
  });

  let countdown = 10;

  const intervalId = system.runInterval(() => {
    countdown--;
    players[0].onScreenDisplay.updateSubtitle(countdown.toString());

    if (countdown == 0) {
      system.clearRun(intervalId);
    }
  }, 20);
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/countdown.ts) code sandbox.
