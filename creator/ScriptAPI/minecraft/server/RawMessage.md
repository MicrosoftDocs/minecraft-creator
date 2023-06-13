---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.RawMessage Interface
description: Contents of the @minecraft/server.RawMessage class.
---
# RawMessage Interface
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
Defines a JSON structure that is used for more flexible 

## Properties

### **rawtext**
`rawtext?: RawMessage[];`

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

Type: *string*[] | [*RawMessage*](RawMessage.md)

#### Examples
##### ***addTranslatedSign.ts***
```typescript
  const players = mc.world.getPlayers();

  const dim = players[0].dimension;

  const signBlock = dim.getBlock(targetLocation);

  if (!signBlock) {
    log("Could not find a block at specified location.");
    return -1;
  }
  let signPerm = mc.BlockPermutation.resolve("minecraft:standing_sign", { ground_sign_direction: 8 });

  signBlock.setPermutation(signPerm);

  const signComponent = signBlock.getComponent("minecraft:sign") as mc.BlockSignComponent;

  signComponent.setText({ translate: "item.skull.player.name", with: [players[0].name] });
```
##### ***showTranslatedMessageForm.ts***
```typescript
  const players = mc.world.getPlayers();

  const messageForm = new mcui.MessageFormData()
    .title({ translate: "permissions.removeplayer" })
    .body({ translate: "accessibility.list.or.two", with: ["Player 1", "Player 2"] })
    .button1("Player 1")
    .button2("Player 2");

  messageForm
    .show(players[0])
    .then((formData: mcui.MessageFormResponse) => {
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
```
