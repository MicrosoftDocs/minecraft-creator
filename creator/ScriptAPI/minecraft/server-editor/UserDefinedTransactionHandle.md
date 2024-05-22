---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.UserDefinedTransactionHandle Class
description: Contents of the @minecraft/server-editor.UserDefinedTransactionHandle class.
---
# UserDefinedTransactionHandle Class

A strongly typed transaction handle to enforce type safety when adding user defined transactions.<br> This transaction handle becomes the context for adding the transaction to the transaction manager.<br> You can obtain one of these handles by calling {@link registerUserDefinedTransactionHandler}

## Methods
- [constructor](#(constructor))
- [addUserDefinedOperation](#adduserdefinedoperation)

### **constructor**
`
new UserDefinedTransactionHandle(nativeHandle: UserDefinedTransactionHandlerId, transactionManager: TransactionManager)
`

Constructs a new instance of the `UserDefinedTransactionHandle` class

#### **Parameters**
- **nativeHandle**: *UserDefinedTransactionHandlerId*
- **transactionManager**: *TransactionManager*

**Returns** *UserDefinedTransactionHandle*

### **addUserDefinedOperation**
`
addUserDefinedOperation(payload: T, transactionName: string): void
`

Add a user defined transaction operation to the transaction manager with a payload of the specified type. This allows the extension to open a transaction, and insert custom data objects into the transaction log which are stored until an undo or redo event occurs. The payload data added here is stored and then passed to the undo/redo handlers (registered with {@link registerUserDefinedTransactionHandler}) when an undo/redo event is requested. NOTE:<br> Transactions can contain multiple operations - you can open a transaction and add any (reasonable) number of operations to it (of the same or differing types) before committing to the transaction log. NOTE/WARNING:<br> The payload data is serialized to JSON before being inserted into the transaction log and the underlying implementation uses the JSON.stringify() function to serialize the data. Any non-primitive data, such as classes or minecraft native objects will not serialize to JSON properly, so you should avoid using them as payload data.

#### **Parameters**
- **payload**: *T*
  
  The data object to be inserted into the transaction log.
- **transactionName**: *string*
  
  A string name that will be associated with this operation

**Returns** *void*
