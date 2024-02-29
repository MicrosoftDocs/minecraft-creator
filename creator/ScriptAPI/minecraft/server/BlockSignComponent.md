---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server.BlockSignComponent Class
description: Contents of the @minecraft/server.BlockSignComponent class.
monikerRange: "=minecraft-bedrock-experimental"
---
# BlockSignComponent Class

> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*BlockComponent*](BlockComponent.md)

Represents a block that can display text on it.

## Properties

### **isWaxed**
`read-only isWaxed: boolean;`

Whether or not players can edit the sign. This happens if a sign has had a honeycomb used on it or `setWaxed` was called on the sign.

Type: *boolean*

> [!WARNING]
> This property can throw errors when used.

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

#### **Returns** [*RawText*](RawText.md) | *undefined*

> [!WARNING]
> This function can throw errors.

### **getText**
`
getText(side?: SignSide): string | undefined
`

Returns the text of the sign if `setText` was called with a string, otherwise returns undefined.

#### **Parameters**
- **side**?: [*SignSide*](SignSide.md) = `0`
  
  The side of the sign to read the message from. If not provided, this will return the message from the front side of the sign.

#### **Returns** *string* | *undefined*

> [!WARNING]
> This function can throw errors.

### **getTextDyeColor**
`
getTextDyeColor(side?: SignSide): DyeColor | undefined
`

Gets the dye that is on the text or undefined if the sign has not been dyed.

#### **Parameters**
- **side**?: [*SignSide*](SignSide.md) = `0`
  
  The side of the sign to read the dye from. If not provided, this will return the dye on the front side of the sign.

#### **Returns** [*DyeColor*](DyeColor.md) | *undefined*

> [!WARNING]
> This function can throw errors.

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

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws if the provided message is greater than 512 characters in length.

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

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **setWaxed**
`
setWaxed(waxed: boolean): void
`

Makes it so players cannot edit this sign.

#### **Parameters**
- **waxed**: *boolean*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

## Constants

### **componentId**
`static read-only componentId = "minecraft:sign";`

Type: *string*
