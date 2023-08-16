---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server-editor Module
description: Contents of the @minecraft/server-editor module
---
# @minecraft/server-editor Module

> [!CAUTION]
> This module is still in pre-release.  It may change or it may be removed in future releases.

## Manifest Details
```json
{
    "module_name": "@minecraft/server-editor",
    "version": "0.1.0-beta"
}
```

## Available Versions
- `0.1.0-beta`

## Enumerations
- [ActionTypes](ActionTypes.md)
- [ClipboardMirrorAxis](ClipboardMirrorAxis.md)
- [ClipboardRotation](ClipboardRotation.md)
- [CursorControlMode](CursorControlMode.md)
- [CursorTargetMode](CursorTargetMode.md)
- [EDITOR_PANE_PROPERTY_ITEM_TYPE](EDITOR_PANE_PROPERTY_ITEM_TYPE.md)
- [EditorInputContext](EditorInputContext.md)
- [EditorStatusBarAlignment](EditorStatusBarAlignment.md)
- [InputModifier](InputModifier.md)
- [KeyboardKey](KeyboardKey.md)
- [KeyInputType](KeyInputType.md)
- [MouseActionCategory](MouseActionCategory.md)
- [MouseActionType](MouseActionType.md)
- [MouseInputType](MouseInputType.md)

# Type Aliases
- [Action](Action.md)
- [ActionID](ActionID.md)
- [ActivationFunctionType](ActivationFunctionType.md)
- [ButtonVariant](ButtonVariant.md)
- [EventHandler](EventHandler.md)
- [IActionPropertyItem](IActionPropertyItem.md)
- [IPlayerUISession](IPlayerUISession.md)
- [ModalToolLifecycleEventPayload](ModalToolLifecycleEventPayload.md)
- [MouseModifiers](MouseModifiers.md)
- [MouseProps](MouseProps.md)
- [MouseRayCastAction](MouseRayCastAction.md)
- [NoArgsAction](NoArgsAction.md)
- [OnChangeCallback](OnChangeCallback.md)
- [PropertyBag](PropertyBag.md)
- [PropertyPaneVisibilityUpdate](PropertyPaneVisibilityUpdate.md)
- [Ray](Ray.md)
- [RegisteredAction](RegisteredAction.md)
- [ShutdownFunctionType](ShutdownFunctionType.md)
- [SupportedKeyboardActionTypes](SupportedKeyboardActionTypes.md)
- [SupportedMouseActionTypes](SupportedMouseActionTypes.md)
- [UnregisterInputBindingCallback](UnregisterInputBindingCallback.md)

## Classes
- [BedrockEventSubscriptionCache](BedrockEventSubscriptionCache.md)
- [ClipboardItem](ClipboardItem.md)
- [ClipboardManager](ClipboardManager.md)
- [Cursor](Cursor.md)
- [Extension](Extension.md)
- [ExtensionContext](ExtensionContext.md)
- [Logger](Logger.md)
- [MinecraftEditor](MinecraftEditor.md)
- [Selection](Selection.md)
- [SelectionManager](SelectionManager.md)
- [TransactionManager](TransactionManager.md)

## Interfaces
- [ClipboardWriteOptions](ClipboardWriteOptions.md)
- [CursorProperties](CursorProperties.md)
- [ExtensionOptionalParameters](ExtensionOptionalParameters.md)
- [LogProperties](LogProperties.md)
- [ActionManager](ActionManager.md)
- [BuiltInUIManager](BuiltInUIManager.md)
- [EventSink](EventSink.md)
- [IDisposable](IDisposable.md)
- [IDropdownItem](IDropdownItem.md)
- [IEventToken](IEventToken.md)
- [IGlobalInputManager](IGlobalInputManager.md)
- [IMenu](IMenu.md)
- [IMenuCreationParams](IMenuCreationParams.md)
- [IModalTool](IModalTool.md)
- [IModalToolContainer](IModalToolContainer.md)
- [IPlayerLogger](IPlayerLogger.md)
- [IPropertyItem](IPropertyItem.md)
- [IPropertyItemOptions](IPropertyItemOptions.md)
- [IPropertyItemOptionsBlocks](IPropertyItemOptionsBlocks.md)
- [IPropertyItemOptionsButton](IPropertyItemOptionsButton.md)
- [IPropertyItemOptionsDropdown](IPropertyItemOptionsDropdown.md)
- [IPropertyItemOptionsNumber](IPropertyItemOptionsNumber.md)
- [IPropertyItemOptionsSubPane](IPropertyItemOptionsSubPane.md)
- [IPropertyItemOptionsVector3](IPropertyItemOptionsVector3.md)
- [IPropertyPane](IPropertyPane.md)
- [IPropertyPaneOptions](IPropertyPaneOptions.md)
- [IRegisterExtensionOptionalParameters](IRegisterExtensionOptionalParameters.md)
- [IStatusBarItem](IStatusBarItem.md)
- [ModalToolCreationParameters](ModalToolCreationParameters.md)

## Functions

### **bindDataSource**
`
bindDataSource(propertyPane: IPropertyPane, target: T): T
`

Takes the input object (a property bag of values) and bind it to the pane as a data source. UI child elements of the pane will be updated when the values in the object change, and vice versa.

#### **Parameters**
- **propertyPane**: *IPropertyPane*
  
  The property pane to bind the property bag to.
- **target**: *T*
  
  The property bag to bind to the pane.

#### **Returns** *T*

### **executeLargeOperation**
`
executeLargeOperation(selection: Selection, operation: (blockLocation: Vector3) => void): Promise<void>
`

Executes an operation over a selection via chunks to allow splitting operation over multiple game ticks

#### **Parameters**
- **selection**: *Selection*
  
  the selection to iterator over
- **operation**: *(blockLocation: Vector3) => void*
  
  the operation to apply over each block location

#### **Returns** *Promise<void>*

### **getLocalizationId**
`
getLocalizationId(locId: string): string
`

Adds the resource pack editor prefix and returns the full localization ID

#### **Parameters**
- **locId**: *string*

#### **Returns** *string*

### **registerEditorExtension**
`
registerEditorExtension(extensionName: string, activationFunction: ActivationFunctionType<PerPlayerStorageType>, shutdownFunction: ShutdownFunctionType<PerPlayerStorageType>, options: IRegisterExtensionOptionalParameters): Extension
`

Registers an editor extension into Minecraft. This function calls underlying functionality to register an extension but provides helpful and contextual wrappers for individual client lifetimes. The onActivation function is called whenever a client joins a session, while the shutdown is called when a client leaves. There may be other circumstances in which these are called as well based on client state that is an implementation detail of the system.

#### **Parameters**
- **extensionName**: *string*
- **activationFunction**: *ActivationFunctionType<PerPlayerStorageType>*
- **shutdownFunction**: *ShutdownFunctionType<PerPlayerStorageType>*
- **options**: *IRegisterExtensionOptionalParameters*

#### **Returns** *Extension*

## Objects
  
### **editor**
`static read-only editor: MinecraftEditor;`

Type: [*MinecraftEditor*](MinecraftEditor.md)

## Change Log
## 0.1.0-beta
#### Added `@minecraft/server-editor` Module
