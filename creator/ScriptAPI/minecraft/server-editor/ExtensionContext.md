---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
title: minecraft/server-editor.ExtensionContext Class
description: Contents of the @minecraft/server-editor.ExtensionContext class.
ms.service: minecraft-bedrock-edition
---
# ExtensionContext Class

The extension context is a native (C++) object created for each registered Editor Extension, when a player connection is established with the server.  

A registered extension activation or deactivation closure is accompanied by an [ExtensionContext] object, which provides a player specific, editor extension specific context.

The Extension Context is the main interface to all the bound Editor Services.

As more player services are added to the editor, they will be exposed through this object

## Properties

### **clipboardManager**
`read-only clipboardManager: ClipboardManager;`

This is used to access the players Clipboard Manager and the main interface through which the player can create, modify and apply clipboard items

Type: [*ClipboardManager*](ClipboardManager.md)

### **cursor**
`read-only cursor: Cursor;`

This is used to access the players 3D block cursor and it's properties

Type: [*Cursor*](Cursor.md)

### **extensionName**
`read-only extensionName: string;`

The short unique name with which this extension was registered

Type: *string*

### **player**
`read-only player: minecraftserver.Player;`

The current player which is the subject of the extension invocation

Type: [*@minecraft/server.Player*](../../minecraft/server/Player.md)

### **playtest**
`read-only playtest: PlaytestManager;`

Type: [*PlaytestManager*](PlaytestManager.md)

### **selectionManager**
`read-only selectionManager: SelectionManager;`

The instance of the players Selection Manager and the main interface through which the player can create/modify selections

Type: [*SelectionManager*](SelectionManager.md)

### **transactionManager**
`read-only transactionManager: TransactionManager;`

The instance of the players Transaction Manager and the main interface through which the creator can create transaction records, and undo/redo previous transactions

Type: [*TransactionManager*](TransactionManager.md)
