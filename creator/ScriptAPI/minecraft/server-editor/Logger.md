---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.Logger Class
description: Contents of the @minecraft/server-editor.Logger class.
---
# Logger Class

The logger class is a utility class which allows editor extensions to communicate with the player from the server to the client log window.

The logger class presents 4 different output channels which can be used to send information to the client/player, depending on the context of the information.

## Methods
- [debug](#debug)
- [error](#error)
- [info](#info)
- [warning](#warning)

### **debug**
`
debug(message: string, properties?: LogProperties): void
`

A `debug` output channel generally used during the development process of editor extensions.  This channel defaults to `hidden` in the log window (unless explicitly enabled).

Once your editor extension development process is complete, and you're ready to ship/share your extension - we generally recommend that you remove any references to this log channel to avoid a noisy experience for other users

#### **Parameters**
- **message**: *string*
  
  The message string to send to the log window
- **properties**?: [*LogProperties*](LogProperties.md) = `null`

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **error**
`
error(message: string, properties?: LogProperties): void
`

The error channel is generally used when the editor extension experiences an error (either a program error in executing logic unexpectedly, or an error in the input or output to/from a player).  Use this channel sparingly - it's meant to communicate important problems to the player

#### **Parameters**
- **message**: *string*
  
  The message string to send to the log window
- **properties**?: [*LogProperties*](LogProperties.md) = `null`

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **info**
`
info(message: string, properties?: LogProperties): void
`

The info channel is intended to communicate general, non-fatal or non-erroneous information to the player that can generally be safely ignored if they choose to do so.

#### **Parameters**
- **message**: *string*
  
  The message string to send to the log window
- **properties**?: [*LogProperties*](LogProperties.md) = `null`

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **warning**
`
warning(message: string, properties?: LogProperties): void
`

The warning channel is intended to inform the user of "potential" issues (missing inputs, values out of range, things that cannot be found) but are not fatal and execution can still be completed.

#### **Parameters**
- **message**: *string*
  
  The message string to send to the log window
- **properties**?: [*LogProperties*](LogProperties.md) = `null`

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
