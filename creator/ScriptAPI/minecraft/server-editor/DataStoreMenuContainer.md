---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.DataStoreMenuContainer Class
description: Contents of the @minecraft/server-editor.DataStoreMenuContainer class.
---
# DataStoreMenuContainer Class

## Methods
- [createItem](#createitem)
- [destroyItem](#destroyitem)
- [getPayload](#getpayload)
- [getProperty](#getproperty)
- [hasPayload](#haspayload)
- [hasProperty](#hasproperty)
- [updateItem](#updateitem)

### **createItem**
`
createItem(id: string, payload: string): void
`

#### **Parameters**
- **id**: *string*
- **payload**: *string*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **destroyItem**
`
destroyItem(id: string): void
`

#### **Parameters**
- **id**: *string*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **getPayload**
`
getPayload(id: string): string
`

#### **Parameters**
- **id**: *string*

#### **Returns** *string*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **getProperty**
`
getProperty(id: string, property: string): boolean | number | string | undefined
`

#### **Parameters**
- **id**: *string*
- **property**: *string*

#### **Returns** *boolean* | *number* | *string* | *undefined*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **hasPayload**
`
hasPayload(id: string): boolean
`

#### **Parameters**
- **id**: *string*

#### **Returns** *boolean*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **hasProperty**
`
hasProperty(id: string, property: string): boolean
`

#### **Parameters**
- **id**: *string*
- **property**: *string*

#### **Returns** *boolean*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **updateItem**
`
updateItem(id: string, payload: string): void
`

#### **Parameters**
- **id**: *string*
- **payload**: *string*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
