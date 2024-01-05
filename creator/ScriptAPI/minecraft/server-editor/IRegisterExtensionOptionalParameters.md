---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.IRegisterExtensionOptionalParameters Interface
description: Contents of the @minecraft/server-editor.IRegisterExtensionOptionalParameters class.
---
# IRegisterExtensionOptionalParameters Interface

Optional parameter definition for RegisterEditorExtension function Allows the extension registrar to specify optional textual description and notes which would be visible through the extension manager

## Properties

### **description**
`description: string;`

Description of the extension.

Type: *string*

### **notes**
`notes: string;`

Additional notes and description of the extension.

Type: *string*

### **toolGroupId**
`toolGroupId: string;`

An optional custom group identifier that will be used for all Modal Tools created from the registered extension.

Type: *string*
