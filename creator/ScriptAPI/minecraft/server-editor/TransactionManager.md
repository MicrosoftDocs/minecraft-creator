---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.TransactionManager Class
description: Contents of the @minecraft/server-editor.TransactionManager class.
---
# TransactionManager Class

The Transaction Manager is responsible for tracking and managing all of the registered transaction operations which represent creator changes in the world.

Transaction Manager is the basis of the UNDO and REDO operations, and allows a creator to store the changes made to the world and the state of the world BEFORE those changes were applied, making it possible to UNDO those changes and restore the world state.

The transactions are stored as a stack, and can be undone in stack order to restore the world to it's original state

## Methods
- [addEntityOperation](#addentityoperation)
- [addUserDefinedOperation](#adduserdefinedoperation)
- [commitOpenTransaction](#commitopentransaction)
- [commitTrackedChanges](#committrackedchanges)
- [createUserDefinedTransactionHandler](#createuserdefinedtransactionhandler)
- [discardOpenTransaction](#discardopentransaction)
- [discardTrackedChanges](#discardtrackedchanges)
- [openTransaction](#opentransaction)
- [redo](#redo)
- [redoSize](#redosize)
- [trackBlockChangeArea](#trackblockchangearea)
- [trackBlockChangeCompoundBlockVolume](#trackblockchangecompoundblockvolume)
- [trackBlockChangeList](#trackblockchangelist)
- [trackBlockChangeSelection](#trackblockchangeselection)
- [undo](#undo)
- [undoSize](#undosize)

### **addEntityOperation**
`
addEntityOperation(entity: minecraftserver.Entity, type: EntityOperationType): boolean
`

#### **Parameters**
- **entity**: [*@minecraft/server.Entity*](../../minecraft/server/Entity.md)
- **type**: [*EntityOperationType*](EntityOperationType.md)

**Returns** *boolean*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
>
> Throws *Error*

### **addUserDefinedOperation**
`
addUserDefinedOperation(transactionHandlerId: UserDefinedTransactionHandlerId, operationData: string, operationName?: string): void
`

#### **Parameters**
- **transactionHandlerId**: [*UserDefinedTransactionHandlerId*](UserDefinedTransactionHandlerId.md)
- **operationData**: *string*
- **operationName**?: *string* = `null`

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **commitOpenTransaction**
`
commitOpenTransaction(): boolean
`

Commit all of the transaction operations currently attached to the open transaction record to the manager.  These will be added as a single transaction manager entry.

The open record will be closed and all tracking operations will cease.

**Returns** *boolean*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **commitTrackedChanges**
`
commitTrackedChanges(): number
`

This function will commit the pending changes caused by any of the track changes variants.  The changes will be committed to the currently open transaction, but the transaction will remain open for further records.

Pending block changes from tracking operations will be added to the transaction record before submission to the transaction manager

**Returns** *number* - Returns the number of change requests that were being tracked

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **createUserDefinedTransactionHandler**
`
createUserDefinedTransactionHandler(undoClosure: (arg: string) => void, redoClosure: (arg: string) => void): UserDefinedTransactionHandlerId
`

#### **Parameters**
- **undoClosure**: (arg: *string*) => *void*
- **redoClosure**: (arg: *string*) => *void*

**Returns** [*UserDefinedTransactionHandlerId*](UserDefinedTransactionHandlerId.md)

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **discardOpenTransaction**
`
discardOpenTransaction(): boolean
`

Discard the currently open transaction without committing it to the transaction manager stack.

All records within the transaction will be discarded, and any tracking requests currently active will be stopped

**Returns** *boolean*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **discardTrackedChanges**
`
discardTrackedChanges(): number
`

Discard any pending tracked changes.  This does not affect the current open transaction contents, only the pending tracked block operations

**Returns** *number* - Returns the number of change requests that were discarded

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **openTransaction**
`
openTransaction(name: string): boolean
`

Open a transaction record which will be a container for any number of transaction operations.

All transaction operations within a record are grouped and treated as a single atomic unit

#### **Parameters**
- **name**: *string*
  
  Give the transaction record a name

**Returns** *boolean*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **redo**
`
redo(): void
`

Perform an redo operation.  This will take the last transaction record on the redo stack and store the current world state and then apply the changes in the record.  This will reduce the redo record stack by one.



The transaction record affected by this operation will be transferred to the undo stack in case the creator decides to undo it

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **redoSize**
`
redoSize(): number
`

Return the number of transaction records on the redo stack.

**Returns** *number*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **trackBlockChangeArea**
`
trackBlockChangeArea(from: minecraftserver.Vector3, to: minecraftserver.Vector3): boolean
`

Begin tracking block changes in a specified area.  These will be added to a pending changes list.

The pending list will be added to the open transaction record when a commit has been issued.

#### **Parameters**
- **from**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  Min block location of a bounding area
- **to**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)
  
  Max block location of a bounding area

**Returns** *boolean*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **trackBlockChangeCompoundBlockVolume**
`
trackBlockChangeCompoundBlockVolume(compoundBlockVolume: minecraftserver.CompoundBlockVolume): boolean
`

Begin tracking block changes in an area defined by a [*@minecraft/server.CompoundBlockVolume*](../../minecraft/server/CompoundBlockVolume.md).  These will be added to a pending changes list.

The pending list will be added to the open transaction record when a commit has been issued.

#### **Parameters**
- **compoundBlockVolume**: [*@minecraft/server.CompoundBlockVolume*](../../minecraft/server/CompoundBlockVolume.md)
  
  [*@minecraft/server.CompoundBlockVolume*](../../minecraft/server/CompoundBlockVolume.md) to track.  Only non-void block locations will be tracked -- any changes falling into a void/negative space will not be tracked

**Returns** *boolean*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **trackBlockChangeList**
`
trackBlockChangeList(locations: minecraftserver.Vector3[]): boolean
`

Begin tracking block changes in a list of specified block locations.

#### **Parameters**
- **locations**: [*@minecraft/server.Vector3*](../../minecraft/server/Vector3.md)[]
  
  An array of block locations to monitor for changes

**Returns** *boolean*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **trackBlockChangeSelection**
`
trackBlockChangeSelection(selection: Selection): boolean
`

Begin tracking block changes that may happen in a selection volume.

The volume is copied, so tracking will not move if the selection volume is translated after this instruction is issued.

Selection Volumes can also represent irregular shapes with non-contiguous blocks and this tracking call will honor the actual selected areas in the volume (and not the negative space) (see [*@minecraft/server.CompoundBlockVolume*](../../minecraft/server/CompoundBlockVolume.md) for more details

#### **Parameters**
- **selection**: [*Selection*](Selection.md)
  
  A collection of block location volumes represented by a Selection volume to monitor for changes.
  
  The Selection Volume is copied, so further changes to the volume after this call will not be reflected in the tracking list.

**Returns** *boolean*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **undo**
`
undo(): void
`

Perform an undo operation.  This will take the last transaction record on the stack and apply the stored world state from before the changes were made.  This will reduce the record stack by one.



The transaction record affected by this operation will be transferred to the redo stack in case the creator decides to reapply it

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.

### **undoSize**
`
undoSize(): number
`

Return how many transactions records currently exist on the stack

**Returns** *number*

> [!IMPORTANT]
> This function can't be called in read-only mode.

> [!WARNING]
> This function can throw errors.
