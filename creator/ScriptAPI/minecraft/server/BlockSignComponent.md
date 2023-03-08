---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server.BlockSignComponent Class
description: Contents of the @minecraft/server.BlockSignComponent class.
---
# BlockSignComponent Class
>[!IMPORTANT]
>These APIs are experimental as part of the Beta APIs experiment. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to Beta APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.
> [!CAUTION]
> This class is still in pre-release.  Its signature may change or it may be removed in future releases.

## Extends
- [*BlockComponent*](BlockComponent.md)

Represents a block that can display text on it.

## Methods
- [getRawText](#getrawtext)
- [getText](#gettext)
- [getTextDyeColor](#gettextdyecolor)
- [setText](#settext)
- [setTextDyeColor](#settextdyecolor)

### **getRawText**
`
getRawText(): RawText | undefined
`

Returns the RawText of the sign if `setText` was called with a RawMessage or a RawText object

#### **Returns** [*RawText*](RawText.md) | *undefined*

> [!WARNING]
> This function can throw errors.

### **getText**
`
getText(): string | undefined
`

Returns the text of the sign if `setText` was called with a string

#### **Returns** *string* | *undefined*

> [!WARNING]
> This function can throw errors.

### **getTextDyeColor**
`
getTextDyeColor(): DyeColor | undefined
`

Gets the dye that is on the text or undefined if the sign has not been dyed

#### **Returns** [*DyeColor*](DyeColor.md) | *undefined*

> [!WARNING]
> This function can throw errors.

### **setText**
`
setText(message: RawMessage | RawText | string): void
`

Sets the text of the sign component

#### **Parameters**
- **message**: [*RawMessage*](RawMessage.md) | [*RawText*](RawText.md) | *string*
  
  The message to set on the sign. If set to a string, then call `getText` to read that string. If set to a RawMessage, then calling `getRawText` will return a RawText. If set to a RawText, then calling `getRawText` will return the same object that was passed in.

> [!WARNING]
> This function can throw errors.

#### **Examples**
##### *SetRawMessage.ts*
```javascript
const helloWorldMessage: RawMessage = { text: 'Hello World' };
sign.setText(helloWorldMessage);
// Sign text will be saved as a RawText
const result: RawText = sign.getRawText(); 
JSON.stringify(result); // { rawtext: [{ text: 'Hello World' }] };
```
##### *SetRawText.ts*
```javascript
const helloWorldText: RawText = { rawtext: [{ text: 'Hello World' }] };
sign.setText(helloWorldText);
// There will be no data transformation unlike calling setText with a RawMessage
const result: RawText = sign.getRawText(); 
JSON.stringify(result); // { rawtext: [{ text: 'Hello World' }] };
```
##### *SetString.ts*
```javascript
// Set sign to say 'Hello'
sign.setText('Hello');
sign.getText(); // 'Hello'
```

### **setTextDyeColor**
`
setTextDyeColor(color?: DyeColor): void
`

Sets the dye color of the text

#### **Parameters**
- **color**?: [*DyeColor*](DyeColor.md) = `null`
  
  The dye color you want or undefined if you want to clear the dye on the sign

> [!WARNING]
> This function can throw errors.

## Constants

### **componentId**
`static read-only componentId = "minecraft:sign";`

Identifier of this component. Should always be minecraft:sign.

Type: *string*
