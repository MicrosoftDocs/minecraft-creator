---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
title: minecraft/server.BlockSignComponent Class
description: Contents of the @minecraft/server.BlockSignComponent class.
---
# BlockSignComponent Class

## Extends
- [*BlockComponent*](BlockComponent.md)

Represents a block that can display text on it.

## Properties

### **isWaxed**
`read-only isWaxed: boolean;`

Whether or not players can edit the sign. This happens if a sign has had a honeycomb used on it or `setWaxed` was called on the sign.

Type: *boolean*

Notes:
  - This property can throw errors when used.

## Methods
- [getRawText](#getrawtext)
- [getText](#gettext)
- [getTextDyeColor](#gettextdyecolor)
- [setText](#settext)
- [setTextDyeColor](#settextdyecolor)
- [setWaxed](#setwaxed)

### **getRawText**
`
getRawText(side?: SignSide): RawText | undefined
`

Returns the RawText of the sign if `setText` was called with a RawMessage or a RawText object, otherwise returns undefined.

#### **Parameters**
- **side**?: [*SignSide*](SignSide.md) = `0`
  
  The side of the sign to read the message from. If not provided, this will return the message from the front side of the sign.

**Returns** [*RawText*](RawText.md) | *undefined*
  
Notes:
- This function can throw errors.

### **getText**
`
getText(side?: SignSide): string | undefined
`

Returns the text of the sign if `setText` was called with a string, otherwise returns undefined.

#### **Parameters**
- **side**?: [*SignSide*](SignSide.md) = `0`
  
  The side of the sign to read the message from. If not provided, this will return the message from the front side of the sign.

**Returns** *string* | *undefined*
  
Notes:
- This function can throw errors.

### **getTextDyeColor**
`
getTextDyeColor(side?: SignSide): DyeColor | undefined
`

Gets the dye that is on the text or undefined if the sign has not been dyed.

#### **Parameters**
- **side**?: [*SignSide*](SignSide.md) = `0`
  
  The side of the sign to read the dye from. If not provided, this will return the dye on the front side of the sign.

**Returns** [*DyeColor*](DyeColor.md) | *undefined*
  
Notes:
- This function can throw errors.

### **setText**
`
setText(message: RawMessage | RawText | string, side?: SignSide): void
`

Sets the text of the sign component.

#### **Parameters**
- **message**: [*RawMessage*](RawMessage.md) | [*RawText*](RawText.md) | *string*
  
  The message to set on the sign. If set to a string, then call `getText` to read that string. If set to a RawMessage, then calling `getRawText` will return a RawText. If set to a RawText, then calling `getRawText` will return the same object that was passed in.
- **side**?: [*SignSide*](SignSide.md) = `0`
  
  The side of the sign the message will be set on. If not provided, the message will be set on the front side of the sign.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws if the provided message is greater than 512 characters in length.

### **setTextDyeColor**
`
setTextDyeColor(color?: DyeColor, side?: SignSide): void
`

Sets the dye color of the text.

#### **Parameters**
- **color**?: [*DyeColor*](DyeColor.md) = `null`
  
  The dye color to apply to the sign or undefined to clear the dye on the sign.
- **side**?: [*SignSide*](SignSide.md) = `0`
  
  The side of the sign the color will be set on. If not provided, the color will be set on the front side of the sign.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

### **setWaxed**
`
setWaxed(waxed: boolean): void
`

Makes it so players cannot edit this sign.

#### **Parameters**
- **waxed**: *boolean*
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.

## Constants

### **componentId**
`static read-only componentId = "minecraft:sign";`

Type: *string*

#### Examples

##### ***addSign.ts***

```typescript
import { world, BlockPermutation, BlockSignComponent, BlockComponentTypes, DimensionLocation } from "@minecraft/server";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";

function addSign(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
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

  signComponent?.setText(`Basic sign!\nThis is green on the front.`);
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/addSign.ts) code sandbox.

##### ***addTwoSidedSign.ts***

```typescript
import { BlockPermutation, BlockSignComponent, SignSide, DyeColor, BlockComponentTypes, DimensionLocation } from "@minecraft/server";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";

function addTwoSidedSign(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const signBlock = targetLocation.dimension.getBlock(targetLocation);

  if (!signBlock) {
    log("Could not find a block at specified location.");
    return -1;
  }
  const signPerm = BlockPermutation.resolve(MinecraftBlockTypes.StandingSign, { ground_sign_direction: 8 });

  signBlock.setPermutation(signPerm);

  const signComponent = signBlock.getComponent(BlockComponentTypes.Sign) as BlockSignComponent;

  if (signComponent) {
    signComponent.setText(`Party Sign!\nThis is green on the front.`);
    signComponent.setText(`Party Sign!\nThis is red on the back.`, SignSide.Back);
    signComponent.setTextDyeColor(DyeColor.Green);
    signComponent.setTextDyeColor(DyeColor.Red, SignSide.Back);

    // players cannot edit sign!
    signComponent.setWaxed(true);
  } else {
    log("Could not find sign component.");
  }
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/addTwoSidedSign.ts) code sandbox.

##### ***updateSignText.ts***

```typescript
import { BlockSignComponent, BlockComponentTypes, DimensionLocation, RawMessage, RawText } from "@minecraft/server";

function updateSignText(targetLocation: DimensionLocation) {
  const block = targetLocation.dimension.getBlock(targetLocation);
  if (!block) {
    console.warn("Could not find a block at specified location.");
    return;
  }

  const sign = block.getComponent(BlockComponentTypes.Sign) as BlockSignComponent;
  if (sign) {
    // RawMessage
    const helloWorldMessage: RawMessage = { text: "Hello World" };
    sign.setText(helloWorldMessage);

    // RawText
    const helloWorldText: RawText = { rawtext: [{ text: "Hello World" }] };
    sign.setText(helloWorldText);

    // Regular string
    sign.setText("Hello World");
  } else {
    console.warn("Could not find a sign component on the block.");
  }
}
```

(preview) Work with this sample on the [MCTools.dev](https://mctools.dev/?open=gp/updateSignText.ts) code sandbox.

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
