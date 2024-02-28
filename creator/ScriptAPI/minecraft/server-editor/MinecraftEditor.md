---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.MinecraftEditor Class
description: Contents of the @minecraft/server-editor.MinecraftEditor class.
---
# MinecraftEditor Class

The MinecraftEditor class is a namespace container for Editor functionality which does not have any player context.

## Properties

### **log**
`read-only log: Logger;`

A global instance of the log output class object.  This is not contextualized to any particular player, and any messages sent to this instance will be broadcast to all connected editor client sessions

Type: [*Logger*](Logger.md)

> [!WARNING]
> This property can throw errors when used.

### **simulation**
`read-only simulation: SimulationState;`

Allows querying and modifying some properties of the simulation.

Type: [*SimulationState*](SimulationState.md)

## Methods
- [registerExtension_Internal](#registerextension_internal)

### **registerExtension_Internal**
`
registerExtension_Internal(extensionName: string, activationFunction: (arg: ExtensionContext) => void, shutdownFunction: (arg: ExtensionContext) => void, options?: ExtensionOptionalParameters): Extension
`

This is an internal command which interfaces with the native C++ extension bindings and should not be used by creators.

Using this command directly will not provide any of the additional functionality and wrappings that the TypeScript layer will provide.

Creators should use the TypeScript binding `registerEditorExtension` instead

#### **Parameters**
- **extensionName**: *string*
  
  Unique name of the editor extension being registered
- **activationFunction**: (arg: [*ExtensionContext*](ExtensionContext.md)) => *void*
  
  A code closure which is called during the activation process and is responsible for setting up all of the extension internal settings and UI definitions
- **shutdownFunction**: (arg: [*ExtensionContext*](ExtensionContext.md)) => *void*
  
  A code closure which is called during the deactivation process (when the player disconnects) and is responsible for cleaning up any settings or allocations
- **options**?: [*ExtensionOptionalParameters*](ExtensionOptionalParameters.md) = `null`
  
  [ExtensionOptionalParameters] describes an optional object which contains a number of optional parameters which is used to register an extension with additional information

#### **Returns** [*Extension*](Extension.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.
