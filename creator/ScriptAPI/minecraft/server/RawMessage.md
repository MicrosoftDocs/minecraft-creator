---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.RawMessage Interface
description: Contents of the @minecraft/server.RawMessage class.
---
# RawMessage Interface

Defines a JSON structure that is used for more flexible.

#### Examples

##### ***addTranslatedSign.ts***

```typescript
import { DimensionLocation, world, BlockPermutation, BlockComponentTypes } from '@minecraft/server';

function placeTranslatedSign(location: DimensionLocation, text: string) {
    const signBlock = location.dimension.getBlock(location);

    if (!signBlock) {
        console.warn('Could not find a block at specified location.');
        return;
    }
    const signPerm = BlockPermutation.resolve('minecraft:standing_sign', { ground_sign_direction: 8 });
    signBlock.setPermutation(signPerm);

    const signComponent = signBlock.getComponent(BlockComponentTypes.Sign);
    if (signComponent) {
        signComponent.setText({ translate: 'item.skull.player.name', with: [text] });
    } else {
        console.error('Could not find a sign component on the block.');
    }
}

placeTranslatedSign(
    {
        dimension: world.getDimension('overworld'),
        x: 0,
        y: 0,
        z: 0,
    },
    'Steve',
);
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/addTranslatedSign.ts) code sandbox.

##### ***showTranslatedMessageForm.ts***

```typescript
import { world, DimensionLocation } from "@minecraft/server";
import { MessageFormResponse, MessageFormData } from "@minecraft/server-ui";

function showTranslatedMessageForm(
  log: (message: string, status?: number) => void,
  targetLocation: DimensionLocation
) {
  const players = world.getPlayers();

  const messageForm = new MessageFormData()
    .title({ translate: "permissions.removeplayer" })
    .body({ translate: "accessibility.list.or.two", with: ["Player 1", "Player 2"] })
    .button1("Player 1")
    .button2("Player 2");

  messageForm
    .show(players[0])
    .then((formData: MessageFormResponse) => {
      // player canceled the form, or another dialog was up and open.
      if (formData.canceled || formData.selection === undefined) {
        return;
      }

      log(`You selected ${formData.selection === 0 ? "Player 1" : "Player 2"}`);
    })
    .catch((error: Error) => {
      log("Failed to show form: " + error);
      return -1;
    });
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/showTranslatedMessageForm.ts) code sandbox.

##### ***addTranslatedSign.ts***

```typescript
import { world, BlockPermutation, BlockSignComponent, BlockComponentTypes, DimensionLocation } from "@minecraft/server";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";

function addTranslatedSign(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const players = world.getPlayers();

  const dim = players[0].dimension;

  const signBlock = dim.getBlock(targetLocation);

  if (!signBlock) {
    log("Could not find a block at specified location.");
    return -1;
  }
  const signPerm = BlockPermutation.resolve(MinecraftBlockTypes.StandingSign, { ground_sign_direction: 8 });

  signBlock.setPermutation(signPerm);

  const signComponent = signBlock.getComponent(BlockComponentTypes.Sign) as BlockSignComponent;

  signComponent?.setText({ translate: "item.skull.player.name", with: [players[0].name] });
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/addTranslatedSign.ts) code sandbox.

## Properties

### **rawtext**
`rawtext?: RawMessage[];`

Provides a raw-text equivalent of the current message.

Type: [*RawMessage*](RawMessage.md)[]

### **score**
`score?: RawMessageScore;`

Provides a token that will get replaced with the value of a score.

Type: [*RawMessageScore*](RawMessageScore.md)

### **text**
`text?: string;`

Provides a string literal value to use.

Type: *string*

### **translate**
`translate?: string;`

Provides a translation token where, if the client has an available resource in the players' language which matches the token, will get translated on the client.

Type: *string*

### **with**
`with?: string[] | RawMessage;`

Arguments for the translation token. Can be either an array of strings or RawMessage containing an array of raw text objects.

Type: *string*[] | [*RawMessage*](RawMessage.md)

#### Examples

##### ***addTranslatedSign.ts***

```typescript
import { DimensionLocation, world, BlockPermutation, BlockComponentTypes } from '@minecraft/server';

function placeTranslatedSign(location: DimensionLocation, text: string) {
    const signBlock = location.dimension.getBlock(location);

    if (!signBlock) {
        console.warn('Could not find a block at specified location.');
        return;
    }
    const signPerm = BlockPermutation.resolve('minecraft:standing_sign', { ground_sign_direction: 8 });
    signBlock.setPermutation(signPerm);

    const signComponent = signBlock.getComponent(BlockComponentTypes.Sign);
    if (signComponent) {
        signComponent.setText({ translate: 'item.skull.player.name', with: [text] });
    } else {
        console.error('Could not find a sign component on the block.');
    }
}

placeTranslatedSign(
    {
        dimension: world.getDimension('overworld'),
        x: 0,
        y: 0,
        z: 0,
    },
    'Steve',
);
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/addTranslatedSign.ts) code sandbox.

##### ***showTranslatedMessageForm.ts***

```typescript
import { world, DimensionLocation } from "@minecraft/server";
import { MessageFormResponse, MessageFormData } from "@minecraft/server-ui";

function showTranslatedMessageForm(
  log: (message: string, status?: number) => void,
  targetLocation: DimensionLocation
) {
  const players = world.getPlayers();

  const messageForm = new MessageFormData()
    .title({ translate: "permissions.removeplayer" })
    .body({ translate: "accessibility.list.or.two", with: ["Player 1", "Player 2"] })
    .button1("Player 1")
    .button2("Player 2");

  messageForm
    .show(players[0])
    .then((formData: MessageFormResponse) => {
      // player canceled the form, or another dialog was up and open.
      if (formData.canceled || formData.selection === undefined) {
        return;
      }

      log(`You selected ${formData.selection === 0 ? "Player 1" : "Player 2"}`);
    })
    .catch((error: Error) => {
      log("Failed to show form: " + error);
      return -1;
    });
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/showTranslatedMessageForm.ts) code sandbox.

##### ***addTranslatedSign.ts***

```typescript
import { world, BlockPermutation, BlockSignComponent, BlockComponentTypes, DimensionLocation } from "@minecraft/server";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";

function addTranslatedSign(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const players = world.getPlayers();

  const dim = players[0].dimension;

  const signBlock = dim.getBlock(targetLocation);

  if (!signBlock) {
    log("Could not find a block at specified location.");
    return -1;
  }
  const signPerm = BlockPermutation.resolve(MinecraftBlockTypes.StandingSign, { ground_sign_direction: 8 });

  signBlock.setPermutation(signPerm);

  const signComponent = signBlock.getComponent(BlockComponentTypes.Sign) as BlockSignComponent;

  signComponent?.setText({ translate: "item.skull.player.name", with: [players[0].name] });
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/addTranslatedSign.ts) code sandbox.
