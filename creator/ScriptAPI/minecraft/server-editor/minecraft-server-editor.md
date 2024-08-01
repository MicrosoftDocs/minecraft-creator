---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor Module
description: Contents of the @minecraft/server-editor module
monikerRange: "=minecraft-bedrock-experimental"
---
# `@minecraft/server-editor` Module

> [!CAUTION]
> This module is still in pre-release.  It may change or it may be removed in future releases.

## [Changelog](changelog.md)

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
- [BlockPaletteItemType](BlockPaletteItemType.md)
- [BoolPropertyItemVariant](BoolPropertyItemVariant.md)
- [BrushPipelineOperationType](BrushPipelineOperationType.md)
- [ButtonPropertyItemVariant](ButtonPropertyItemVariant.md)
- [ColorPickerPropertyItemVariant](ColorPickerPropertyItemVariant.md)
- [ComboBoxPropertyItemDataType](ComboBoxPropertyItemDataType.md)
- [CoreActionBarItemType](CoreActionBarItemType.md)
- [CoreMenuType](CoreMenuType.md)
- [CursorControlMode](CursorControlMode.md)
- [CursorTargetMode](CursorTargetMode.md)
- [DaylightCycle](DaylightCycle.md)
- [EditorInputContext](EditorInputContext.md)
- [EditorMode](EditorMode.md)
- [EditorStatusBarAlignment](EditorStatusBarAlignment.md)
- [EntityOperationType](EntityOperationType.md)
- [ExportResult](ExportResult.md)
- [GamePublishSetting](GamePublishSetting.md)
- [GraphicsSettingsProperty](GraphicsSettingsProperty.md)
- [ImageResourceType](ImageResourceType.md)
- [InputModifier](InputModifier.md)
- [KeyboardKey](KeyboardKey.md)
- [LayoutAlignment](LayoutAlignment.md)
- [LayoutDirection](LayoutDirection.md)
- [MouseActionCategory](MouseActionCategory.md)
- [MouseActionType](MouseActionType.md)
- [MouseInputType](MouseInputType.md)
- [NumberPropertyItemVariant](NumberPropertyItemVariant.md)
- [Plane](Plane.md)
- [PlayerPermissionLevel](PlayerPermissionLevel.md)
- [PlaytestSessionResult](PlaytestSessionResult.md)
- [PrimitiveType](PrimitiveType.md)
- [ProjectExportType](ProjectExportType.md)
- [PropertyItemType](PropertyItemType.md)
- [SimpleToolStatusBarVisibility](SimpleToolStatusBarVisibility.md)
- [SplineType](SplineType.md)
- [ThemeSettingsColorKey](ThemeSettingsColorKey.md)
- [WidgetComponentType](WidgetComponentType.md)
- [WidgetGroupSelectionMode](WidgetGroupSelectionMode.md)

# Type Aliases
- [GraphicsSettingsPropertyTypeMap](GraphicsSettingsPropertyTypeMap.md)
- [Action](Action.md)
- [ActionID](ActionID.md)
- [ActivationFunctionType](ActivationFunctionType.md)
- [EventHandler](EventHandler.md)
- [IBlockListPropertyItem](IBlockListPropertyItem.md)
- [IDropdownPropertyItem_deprecated](IDropdownPropertyItem_deprecated.md)
- [ImageResourceData](ImageResourceData.md)
- [IObservableProp](IObservableProp.md)
- [IPlayerUISession](IPlayerUISession.md)
- [ITablePropertyItem](ITablePropertyItem.md)
- [IVector3PropertyItem_deprecated](IVector3PropertyItem_deprecated.md)
- [KeyBinding](KeyBinding.md)
- [KeyBindingInfo](KeyBindingInfo.md)
- [LocalizedString](LocalizedString.md)
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
- [BlockIdentifierObservableValidator](BlockIdentifierObservableValidator.md)
- [BlockPalette](BlockPalette.md)
- [BlockPaletteManager](BlockPaletteManager.md)
- [BrushShapeManager](BrushShapeManager.md)
- [ClipboardChangeAfterEvent](ClipboardChangeAfterEvent.md)
- [ClipboardChangeAfterEventSignal](ClipboardChangeAfterEventSignal.md)
- [ClipboardItem](ClipboardItem.md)
- [ClipboardManager](ClipboardManager.md)
- [Cursor](Cursor.md)
- [CursorAttachmentPropertiesChangeAfterEvent](CursorAttachmentPropertiesChangeAfterEvent.md)
- [CursorAttachmentPropertyChangeAfterEventSignal](CursorAttachmentPropertyChangeAfterEventSignal.md)
- [CursorPropertiesChangeAfterEvent](CursorPropertiesChangeAfterEvent.md)
- [CursorPropertyChangeAfterEventSignal](CursorPropertyChangeAfterEventSignal.md)
- [EntityIdentifierObservableValidator](EntityIdentifierObservableValidator.md)
- [ExportManager](ExportManager.md)
- [Extension](Extension.md)
- [ExtensionContext](ExtensionContext.md)
- [ExtensionContextAfterEvents](ExtensionContextAfterEvents.md)
- [GraphicsSettings](GraphicsSettings.md)
- [IBlockPaletteItem](IBlockPaletteItem.md)
- [Logger](Logger.md)
- [MinecraftEditor](MinecraftEditor.md)
- [ModeChangeAfterEvent](ModeChangeAfterEvent.md)
- [ModeChangeAfterEventSignal](ModeChangeAfterEventSignal.md)
- [NumberLimitObservableValidator](NumberLimitObservableValidator.md)
- [ObservableValidator](ObservableValidator.md)
- [PlaytestManager](PlaytestManager.md)
- [PrimarySelectionChangeAfterEventSignal](PrimarySelectionChangeAfterEventSignal.md)
- [PrimarySelectionChangedEvent](PrimarySelectionChangedEvent.md)
- [ProbabilityBlockPaletteItem](ProbabilityBlockPaletteItem.md)
- [Selection](Selection.md)
- [SelectionEventAfterEvent](SelectionEventAfterEvent.md)
- [SelectionManager](SelectionManager.md)
- [SettingsManager](SettingsManager.md)
- [SettingsUIElement](SettingsUIElement.md)
- [SimpleBlockPaletteItem](SimpleBlockPaletteItem.md)
- [SimpleToolWrapper](SimpleToolWrapper.md)
- [SimulationState](SimulationState.md)
- [ThemeSettings](ThemeSettings.md)
- [TransactionManager](TransactionManager.md)
- [UserDefinedTransactionHandle](UserDefinedTransactionHandle.md)
- [UserDefinedTransactionHandlerId](UserDefinedTransactionHandlerId.md)
- [Vector3LimitObservableValidator](Vector3LimitObservableValidator.md)
- [Widget](Widget.md)
- [WidgetComponentBase](WidgetComponentBase.md)
- [WidgetComponentEntity](WidgetComponentEntity.md)
- [WidgetComponentGizmo](WidgetComponentGizmo.md)
- [WidgetComponentGuide](WidgetComponentGuide.md)
- [WidgetComponentRenderPrimitive](WidgetComponentRenderPrimitive.md)
- [WidgetComponentRenderPrimitiveAxialSphere](WidgetComponentRenderPrimitiveAxialSphere.md)
- [WidgetComponentRenderPrimitiveBox](WidgetComponentRenderPrimitiveBox.md)
- [WidgetComponentRenderPrimitiveDisc](WidgetComponentRenderPrimitiveDisc.md)
- [WidgetComponentRenderPrimitiveLine](WidgetComponentRenderPrimitiveLine.md)
- [WidgetComponentSpline](WidgetComponentSpline.md)
- [WidgetComponentText](WidgetComponentText.md)
- [WidgetGroup](WidgetGroup.md)
- [WidgetManager](WidgetManager.md)
- [WidgetStateChangeEventData](WidgetStateChangeEventData.md)

## Interfaces
- [BrushPipelineOperation](BrushPipelineOperation.md)
- [BrushShape](BrushShape.md)
- [ClipboardWriteOptions](ClipboardWriteOptions.md)
- [CursorAttachmentProperties](CursorAttachmentProperties.md)
- [CursorProperties](CursorProperties.md)
- [ExtensionOptionalParameters](ExtensionOptionalParameters.md)
- [GameOptions](GameOptions.md)
- [LogProperties](LogProperties.md)
- [ProjectExportOptions](ProjectExportOptions.md)
- [SettingsUIElementOptions](SettingsUIElementOptions.md)
- [WeightedBlock](WeightedBlock.md)
- [WidgetComponentBaseOptions](WidgetComponentBaseOptions.md)
- [WidgetComponentEntityOptions](WidgetComponentEntityOptions.md)
- [WidgetComponentGizmoOptions](WidgetComponentGizmoOptions.md)
- [WidgetComponentGuideOptions](WidgetComponentGuideOptions.md)
- [WidgetComponentRenderPrimitiveOptions](WidgetComponentRenderPrimitiveOptions.md)
- [WidgetComponentSplineOptions](WidgetComponentSplineOptions.md)
- [WidgetComponentTextOptions](WidgetComponentTextOptions.md)
- [WidgetGroupCreateOptions](WidgetGroupCreateOptions.md)
- [ActionManager](ActionManager.md)
- [BuiltInUIManager](BuiltInUIManager.md)
- [EventSink](EventSink.md)
- [IActionBar](IActionBar.md)
- [IActionBarItem](IActionBarItem.md)
- [IActionBarItemCreationParams](IActionBarItemCreationParams.md)
- [IBoolPropertyItem](IBoolPropertyItem.md)
- [IBoolPropertyItemOptions](IBoolPropertyItemOptions.md)
- [IButtonPropertyItem](IButtonPropertyItem.md)
- [IButtonPropertyItemOptions](IButtonPropertyItemOptions.md)
- [IColorPickerPropertyItem](IColorPickerPropertyItem.md)
- [IColorPickerPropertyItemOptions](IColorPickerPropertyItemOptions.md)
- [IComboBoxPropertyItem](IComboBoxPropertyItem.md)
- [IComboBoxPropertyItemOptions](IComboBoxPropertyItemOptions.md)
- [IDisposable](IDisposable.md)
- [IDropdownItem](IDropdownItem.md)
- [IDropdownPropertyItem](IDropdownPropertyItem.md)
- [IDropdownPropertyItemEntry](IDropdownPropertyItemEntry.md)
- [IDropdownPropertyItemMixIn](IDropdownPropertyItemMixIn.md)
- [IDropdownPropertyItemOptions](IDropdownPropertyItemOptions.md)
- [IEventToken](IEventToken.md)
- [IGlobalInputManager](IGlobalInputManager.md)
- [IImagePropertyItem](IImagePropertyItem.md)
- [IImagePropertyItemOptions](IImagePropertyItemOptions.md)
- [IMenu](IMenu.md)
- [IMenuContainer](IMenuContainer.md)
- [IMenuCreationParams](IMenuCreationParams.md)
- [IModalTool](IModalTool.md)
- [IModalToolContainer](IModalToolContainer.md)
- [INumberPropertyItem](INumberPropertyItem.md)
- [INumberPropertyItemOptions](INumberPropertyItemOptions.md)
- [IObservable](IObservable.md)
- [IPlayerLogger](IPlayerLogger.md)
- [IPropertyItem](IPropertyItem.md)
- [IPropertyItemBase](IPropertyItemBase.md)
- [IPropertyItemOptions](IPropertyItemOptions.md)
- [IPropertyItemOptionsBase](IPropertyItemOptionsBase.md)
- [IPropertyItemOptionsBlockList](IPropertyItemOptionsBlockList.md)
- [IPropertyItemOptionsBool](IPropertyItemOptionsBool.md)
- [IPropertyItemOptionsColorPicker_deprecated](IPropertyItemOptionsColorPicker_deprecated.md)
- [IPropertyItemOptionsDropdown](IPropertyItemOptionsDropdown.md)
- [IPropertyItemOptionsNumber](IPropertyItemOptionsNumber.md)
- [IPropertyItemOptionsSubPane](IPropertyItemOptionsSubPane.md)
- [IPropertyItemOptionsTable](IPropertyItemOptionsTable.md)
- [IPropertyItemOptionsVector3](IPropertyItemOptionsVector3.md)
- [IPropertyPane](IPropertyPane.md)
- [IPropertyPaneOptions](IPropertyPaneOptions.md)
- [IPropertyTableCellItem](IPropertyTableCellItem.md)
- [IRegisterExtensionOptionalParameters](IRegisterExtensionOptionalParameters.md)
- [ISimpleTool](ISimpleTool.md)
- [ISimpleToolKeyBinding](ISimpleToolKeyBinding.md)
- [ISimpleToolOptions](ISimpleToolOptions.md)
- [ISimpleToolPaneComponent](ISimpleToolPaneComponent.md)
- [ISimpleToolPaneOptions](ISimpleToolPaneOptions.md)
- [ISimpleToolRailComponent](ISimpleToolRailComponent.md)
- [ISimpleToolRailOptions](ISimpleToolRailOptions.md)
- [ISimpleToolStatusBarComponent](ISimpleToolStatusBarComponent.md)
- [ISimpleToolStatusBarOptions](ISimpleToolStatusBarOptions.md)
- [IStatusBarItem](IStatusBarItem.md)
- [IStringPropertyItem](IStringPropertyItem.md)
- [IStringPropertyItemOptions](IStringPropertyItemOptions.md)
- [ITextPropertyItem](ITextPropertyItem.md)
- [ITextPropertyItemOptions](ITextPropertyItemOptions.md)
- [IVector3PropertyItem](IVector3PropertyItem.md)
- [IVector3PropertyItemOptions](IVector3PropertyItemOptions.md)
- [ModalToolCreationParameters](ModalToolCreationParameters.md)

## Errors
- [InvalidWidgetComponentError](InvalidWidgetComponentError.md)
- [InvalidWidgetError](InvalidWidgetError.md)
- [InvalidWidgetGroupError](InvalidWidgetGroupError.md)

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

**Returns** *T*

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

**Returns** *Promise<void>*

### **executeLargeOperationFromIterator**
`
executeLargeOperationFromIterator(blockLocationIterator: BlockLocationIterator, operation: (blockLocation: Vector3) => void): Promise<void>
`

Executes an operation over a BlockLocationIterator via chunks to allow splitting operation over multiple game ticks

#### **Parameters**
- **blockLocationIterator**: *BlockLocationIterator*
  
  the selection to iterator over
- **operation**: *(blockLocation: Vector3) => void*
  
  the operation to apply over each block location

**Returns** *Promise<void>*

### **getDefaultAllowBlockList**
`
getDefaultAllowBlockList(): string[]
`

Returns a string array of the default block types for editor operations. Can be used to further filter blocks.

**Returns** *string[]* - Default allowed block list

### **makeObservable**
`
makeObservable(initialValue: T, validator: ObservableValidator<T>): IObservable<T>
`

Creates an observable object that stores a value state.

#### **Parameters**
- **initialValue**: *T*
  
  Initial value of the observable.
- **validator**: *ObservableValidator<T>*
  
  Optional validator to use for the setter.

**Returns** *IObservable<T>*

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

**Returns** *Extension*

### **registerUserDefinedTransactionHandler**
`
registerUserDefinedTransactionHandler(transactionManager: TransactionManager, undoHandler: (payload: T) => void, redoHandler: (payload: T) => void): UserDefinedTransactionHandle<T>
`

Creates a strongly typed transaction handle to enforce type safety when adding user defined transactions. This function is a wrapper around the more generalized transaction manager API for script based transactions. Any Editor Extension that needs to insert data into the transaction log for undo/redo should use this function to create a handler for the specific type of data that needs to be inserted. When a transaction is undone/redone, the associated handler function will be invoked with a copy of the payload data that was inserted into the log. As a general rule, transaction data should contain 2 things:<br> 1. The data that will be used to perform the operation we're trying to record<br> 2. The data that will be used to restore the state of the program to what it was before the operation.<br> NOTE/WARNING:<br> The payload data is serialized to JSON before being inserted into the transaction log and the underlying implementation uses the JSON.stringify() function to serialize the data. Any non-primitive data, such as classes or minecraft native objects will not serialize to JSON properly, so you should avoid using them as payload data.

#### **Parameters**
- **transactionManager**: *TransactionManager*
  
  A reference to the TransactionManager (from the extension context for your extension)
- **undoHandler**: *(payload: T) => void*
  
  A function that will be invoked when the transaction is undone. The function will be passed a copy of the payload data that was inserted into the transaction log.
- **redoHandler**: *(payload: T) => void*
  
  A function that will be invoked when the transaction is redone. The function will be passed a copy of the payload data that was inserted into the transaction log.

**Returns** *UserDefinedTransactionHandle<T>* - - {@link UserDefinedTransactionHandle} - A strongly typed transaction handle that can be used to add transactions to the transaction manager.

### **stringFromException**
`
stringFromException(e: unknown): string
`

Small utility for getting a string from an unknown exception type

#### **Parameters**
- **e**: *unknown*

**Returns** *string*

## Objects
  
### **editor**
`static read-only editor: MinecraftEditor;`

Type: [*MinecraftEditor*](MinecraftEditor.md)
