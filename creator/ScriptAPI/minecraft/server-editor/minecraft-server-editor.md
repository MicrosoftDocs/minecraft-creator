---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
ms.date: 02/10/2025
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
This is version 0.x.x of this module, which is the latest as of version 1.21.110-beta.20 of Minecraft.

## Available Versions
- `0.1.0-beta`

## Enumerations
- [ActionTypes](ActionTypes.md)
- [AudioSettingsProperty](AudioSettingsProperty.md)
- [Axis](Axis.md)
- [BlockMaskListType](BlockMaskListType.md)
- [BlockPaletteItemType](BlockPaletteItemType.md)
- [BlockTableOperationType](BlockTableOperationType.md)
- [BoolPropertyItemVariant](BoolPropertyItemVariant.md)
- [BrushDirectionalPlacementMode](BrushDirectionalPlacementMode.md)
- [ButtonPropertyItemVariant](ButtonPropertyItemVariant.md)
- [ColorPickerPropertyItemVariant](ColorPickerPropertyItemVariant.md)
- [ComboBoxPropertyItemDataType](ComboBoxPropertyItemDataType.md)
- [ContiguousSelectionType](ContiguousSelectionType.md)
- [ContinuousActionState](ContinuousActionState.md)
- [CoreActionBarItemType](CoreActionBarItemType.md)
- [CoreBrushShapeType](CoreBrushShapeType.md)
- [CoreMenuType](CoreMenuType.md)
- [CursorControlMode](CursorControlMode.md)
- [CursorTargetMode](CursorTargetMode.md)
- [DaylightCycle](DaylightCycle.md)
- [EditorInputContext](EditorInputContext.md)
- [EditorMode](EditorMode.md)
- [EntityOperationType](EntityOperationType.md)
- [ExportResult](ExportResult.md)
- [GamePublishSetting](GamePublishSetting.md)
- [GraphicsSettingsProperty](GraphicsSettingsProperty.md)
- [ImageResourceType](ImageResourceType.md)
- [InputModifier](InputModifier.md)
- [KeyboardKey](KeyboardKey.md)
- [KeyProcessingState](KeyProcessingState.md)
- [LayoutAlignment](LayoutAlignment.md)
- [LayoutDirection](LayoutDirection.md)
- [LogChannel](LogChannel.md)
- [MouseActionCategory](MouseActionCategory.md)
- [MouseActionType](MouseActionType.md)
- [MouseInputType](MouseInputType.md)
- [NumberPropertyItemVariant](NumberPropertyItemVariant.md)
- [PaintCompletionState](PaintCompletionState.md)
- [PaintMode](PaintMode.md)
- [Plane](Plane.md)
- [PlaytestSessionResult](PlaytestSessionResult.md)
- [PrimitiveType](PrimitiveType.md)
- [ProgressIndicatorPropertyItemVariant](ProgressIndicatorPropertyItemVariant.md)
- [ProjectExportType](ProjectExportType.md)
- [PropertyItemType](PropertyItemType.md)
- [SelectionVolumeEventType](SelectionVolumeEventType.md)
- [SpeedSettingsProperty](SpeedSettingsProperty.md)
- [SplineType](SplineType.md)
- [StatusBarAlignment](StatusBarAlignment.md)
- [StructureSource](StructureSource.md)
- [ThemeSettingsColorKey](ThemeSettingsColorKey.md)
- [WidgetComponentType](WidgetComponentType.md)
- [WidgetGizmoEventType](WidgetGizmoEventType.md)
- [WidgetGroupSelectionMode](WidgetGroupSelectionMode.md)
- [WidgetMouseButtonActionType](WidgetMouseButtonActionType.md)
- [WorldGeneratorType](WorldGeneratorType.md)

# Type Aliases
- [Action](Action.md)
- [ActionID](ActionID.md)
- [ActivationFunctionType](ActivationFunctionType.md)
- [AudioSettingsPropertyTypeMap](AudioSettingsPropertyTypeMap.md)
- [BasicTooltipContent](BasicTooltipContent.md)
- [ButtonPropertyItemSupportedActionTypes](ButtonPropertyItemSupportedActionTypes.md)
- [ContinuousAction](ContinuousAction.md)
- [EventHandler](EventHandler.md)
- [GraphicsSettingsPropertyTypeMap](GraphicsSettingsPropertyTypeMap.md)
- [ImageAnimationData](ImageAnimationData.md)
- [ImageResourceData](ImageResourceData.md)
- [IObservableProp](IObservableProp.md)
- [IPlayerUISession](IPlayerUISession.md)
- [KeyBinding](KeyBinding.md)
- [KeyBindingInfo](KeyBindingInfo.md)
- [LocalizedString](LocalizedString.md)
- [ModalToolLifecycleEventPayload](ModalToolLifecycleEventPayload.md)
- [MouseModifiers](MouseModifiers.md)
- [MouseProps](MouseProps.md)
- [MouseRayCastAction](MouseRayCastAction.md)
- [NoArgsAction](NoArgsAction.md)
- [PropertyBag](PropertyBag.md)
- [PropertyPaneVisibilityUpdate](PropertyPaneVisibilityUpdate.md)
- [Ray](Ray.md)
- [RegisteredAction](RegisteredAction.md)
- [ShutdownFunctionType](ShutdownFunctionType.md)
- [SpeedSettingsPropertyTypeMap](SpeedSettingsPropertyTypeMap.md)
- [StatefulAction](StatefulAction.md)
- [SupportedKeyboardActionTypes](SupportedKeyboardActionTypes.md)
- [SupportedMouseActionTypes](SupportedMouseActionTypes.md)
- [TooltipContent](TooltipContent.md)
- [TooltipInteractiveContent](TooltipInteractiveContent.md)
- [TooltipInteractiveContentDescription](TooltipInteractiveContentDescription.md)
- [TooltipLink](TooltipLink.md)
- [UnregisterInputBindingCallback](UnregisterInputBindingCallback.md)

## Classes
- [AudioSettings](AudioSettings.md)
- [BedrockEventSubscriptionCache](BedrockEventSubscriptionCache.md)
- [BlockIdentifierListObservableValidator](BlockIdentifierListObservableValidator.md)
- [BlockIdentifierObservableValidator](BlockIdentifierObservableValidator.md)
- [BlockPalette](BlockPalette.md)
- [BlockPaletteManager](BlockPaletteManager.md)
- [BlockUtilities](BlockUtilities.md)
- [BrushShape](BrushShape.md)
- [BrushShapeManager](BrushShapeManager.md)
- [ClipboardChangeAfterEvent](ClipboardChangeAfterEvent.md)
- [ClipboardChangeAfterEventSignal](ClipboardChangeAfterEventSignal.md)
- [ClipboardItem](ClipboardItem.md)
- [ClipboardManager](ClipboardManager.md)
- [ConeBrushShape](ConeBrushShape.md)
- [CuboidBrushShape](CuboidBrushShape.md)
- [CurrentThemeChangeAfterEvent](CurrentThemeChangeAfterEvent.md)
- [CurrentThemeChangeAfterEventSignal](CurrentThemeChangeAfterEventSignal.md)
- [CurrentThemeColorChangeAfterEvent](CurrentThemeColorChangeAfterEvent.md)
- [CurrentThemeColorChangeAfterEventSignal](CurrentThemeColorChangeAfterEventSignal.md)
- [Cursor](Cursor.md)
- [CursorPropertiesChangeAfterEvent](CursorPropertiesChangeAfterEvent.md)
- [CursorPropertyChangeAfterEventSignal](CursorPropertyChangeAfterEventSignal.md)
- [CylinderBrushShape](CylinderBrushShape.md)
- [EditorConstants](EditorConstants.md)
- [EditorStructure](EditorStructure.md)
- [EditorStructureManager](EditorStructureManager.md)
- [EllipsoidBrushShape](EllipsoidBrushShape.md)
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
- [ProbabilityBlockPaletteItem](ProbabilityBlockPaletteItem.md)
- [PyramidBrushShape](PyramidBrushShape.md)
- [RelativeVolumeListBlockVolume](RelativeVolumeListBlockVolume.md)
- [SelectionChangeAfterEventSignal](SelectionChangeAfterEventSignal.md)
- [SelectionContainerBase](SelectionContainerBase.md)
- [SelectionContainerEntity](SelectionContainerEntity.md)
- [SelectionContainerVolume](SelectionContainerVolume.md)
- [SelectionContainerVolumeEvent](SelectionContainerVolumeEvent.md)
- [SelectionEventAfterEvent](SelectionEventAfterEvent.md)
- [SelectionManager](SelectionManager.md)
- [SettingsManager](SettingsManager.md)
- [SimpleBlockPaletteItem](SimpleBlockPaletteItem.md)
- [SimulationState](SimulationState.md)
- [SingleBlockBrushShape](SingleBlockBrushShape.md)
- [SpeedSettings](SpeedSettings.md)
- [ThemeSettings](ThemeSettings.md)
- [TransactionManager](TransactionManager.md)
- [UserDefinedTransactionHandle](UserDefinedTransactionHandle.md)
- [UserDefinedTransactionHandlerId](UserDefinedTransactionHandlerId.md)
- [Vector3LimitObservableValidator](Vector3LimitObservableValidator.md)
- [Widget](Widget.md)
- [WidgetComponentBase](WidgetComponentBase.md)
- [WidgetComponentBoundingBox](WidgetComponentBoundingBox.md)
- [WidgetComponentBoundingBoxStateChangeEventParameters](WidgetComponentBoundingBoxStateChangeEventParameters.md)
- [WidgetComponentClipboard](WidgetComponentClipboard.md)
- [WidgetComponentEntity](WidgetComponentEntity.md)
- [WidgetComponentGizmo](WidgetComponentGizmo.md)
- [WidgetComponentGizmoStateChangeEventParameters](WidgetComponentGizmoStateChangeEventParameters.md)
- [WidgetComponentGuide](WidgetComponentGuide.md)
- [WidgetComponentRenderPrimitive](WidgetComponentRenderPrimitive.md)
- [WidgetComponentRenderPrimitiveTypeAxialSphere](WidgetComponentRenderPrimitiveTypeAxialSphere.md)
- [WidgetComponentRenderPrimitiveTypeBase](WidgetComponentRenderPrimitiveTypeBase.md)
- [WidgetComponentRenderPrimitiveTypeBox](WidgetComponentRenderPrimitiveTypeBox.md)
- [WidgetComponentRenderPrimitiveTypeDisc](WidgetComponentRenderPrimitiveTypeDisc.md)
- [WidgetComponentRenderPrimitiveTypeLine](WidgetComponentRenderPrimitiveTypeLine.md)
- [WidgetComponentSpline](WidgetComponentSpline.md)
- [WidgetComponentText](WidgetComponentText.md)
- [WidgetComponentVolumeOutline](WidgetComponentVolumeOutline.md)
- [WidgetGroup](WidgetGroup.md)
- [WidgetManager](WidgetManager.md)
- [WidgetMouseButtonEventData](WidgetMouseButtonEventData.md)
- [WidgetStateChangeEventData](WidgetStateChangeEventData.md)

## Interfaces
- [ActionManager](ActionManager.md)
- [BlockMaskList](BlockMaskList.md)
- [BuiltInUIManager](BuiltInUIManager.md)
- [ClipboardWriteOptions](ClipboardWriteOptions.md)
- [ContiguousSelectionProperties](ContiguousSelectionProperties.md)
- [CursorPosition](CursorPosition.md)
- [CursorProperties](CursorProperties.md)
- [CursorRay](CursorRay.md)
- [EditorStructureSearchOptions](EditorStructureSearchOptions.md)
- [EventSink](EventSink.md)
- [ExtensionOptionalParameters](ExtensionOptionalParameters.md)
- [GameOptions](GameOptions.md)
- [IActionBar](IActionBar.md)
- [IActionBarItem](IActionBarItem.md)
- [IActionBarItemCreationParams](IActionBarItemCreationParams.md)
- [IBlockListPropertyItem](IBlockListPropertyItem.md)
- [IBlockListPropertyItemOptions](IBlockListPropertyItemOptions.md)
- [IBlockTableEntryInfo](IBlockTableEntryInfo.md)
- [IBlockTablePropertyItem](IBlockTablePropertyItem.md)
- [IBlockTablePropertyItemOptions](IBlockTablePropertyItemOptions.md)
- [IBoolPropertyItem](IBoolPropertyItem.md)
- [IBoolPropertyItemOptions](IBoolPropertyItemOptions.md)
- [IButtonPanePropertyItem](IButtonPanePropertyItem.md)
- [IButtonPanePropertyItemOptions](IButtonPanePropertyItemOptions.md)
- [IButtonPropertyItem](IButtonPropertyItem.md)
- [IButtonPropertyItemOptions](IButtonPropertyItemOptions.md)
- [IColorPickerPropertyItem](IColorPickerPropertyItem.md)
- [IColorPickerPropertyItemOptions](IColorPickerPropertyItemOptions.md)
- [IColorTimelinePropertyItem](IColorTimelinePropertyItem.md)
- [IColorTimelinePropertyItemEntry](IColorTimelinePropertyItemEntry.md)
- [IColorTimelinePropertyItemOptions](IColorTimelinePropertyItemOptions.md)
- [IComboBoxPropertyItem](IComboBoxPropertyItem.md)
- [IComboBoxPropertyItemOptions](IComboBoxPropertyItemOptions.md)
- [IDataTablePropertyItem](IDataTablePropertyItem.md)
- [IDataTablePropertyItemEntry](IDataTablePropertyItemEntry.md)
- [IDataTablePropertyItemOptions](IDataTablePropertyItemOptions.md)
- [IDisposable](IDisposable.md)
- [IDropdownPropertyItem](IDropdownPropertyItem.md)
- [IDropdownPropertyItemEntry](IDropdownPropertyItemEntry.md)
- [IDropdownPropertyItemOptions](IDropdownPropertyItemOptions.md)
- [IEventToken](IEventToken.md)
- [IGlobalInputManager](IGlobalInputManager.md)
- [IImagePropertyItem](IImagePropertyItem.md)
- [IImagePropertyItemOptions](IImagePropertyItemOptions.md)
- [ILinkPropertyItem](ILinkPropertyItem.md)
- [ILinkPropertyItemOptions](ILinkPropertyItemOptions.md)
- [IMenu](IMenu.md)
- [IMenuContainer](IMenuContainer.md)
- [IMenuCreationParams](IMenuCreationParams.md)
- [IModalControlPane](IModalControlPane.md)
- [IModalOverlayPane](IModalOverlayPane.md)
- [IModalOverlayPaneOptions](IModalOverlayPaneOptions.md)
- [IModalTool](IModalTool.md)
- [IModalToolContainer](IModalToolContainer.md)
- [INumberPropertyItem](INumberPropertyItem.md)
- [INumberPropertyItemOptions](INumberPropertyItemOptions.md)
- [INumberTimelinePropertyItem](INumberTimelinePropertyItem.md)
- [INumberTimelinePropertyItemEntry](INumberTimelinePropertyItemEntry.md)
- [INumberTimelinePropertyItemOptions](INumberTimelinePropertyItemOptions.md)
- [IObservable](IObservable.md)
- [IPane](IPane.md)
- [IPlayerLogger](IPlayerLogger.md)
- [IPlayerLoggerProperties](IPlayerLoggerProperties.md)
- [IProgressIndicatorPropertyItem](IProgressIndicatorPropertyItem.md)
- [IProgressIndicatorPropertyItemOptions](IProgressIndicatorPropertyItemOptions.md)
- [IPropertyItemBase](IPropertyItemBase.md)
- [IPropertyItemOptionsBase](IPropertyItemOptionsBase.md)
- [IPropertyPane](IPropertyPane.md)
- [IPropertyPaneOptions](IPropertyPaneOptions.md)
- [IRegisteredKeyBinding](IRegisteredKeyBinding.md)
- [IRegisterExtensionOptionalParameters](IRegisterExtensionOptionalParameters.md)
- [IRootPropertyPane](IRootPropertyPane.md)
- [IRootPropertyPaneHeaderAction](IRootPropertyPaneHeaderAction.md)
- [IRootPropertyPaneOptions](IRootPropertyPaneOptions.md)
- [IStatusBar](IStatusBar.md)
- [IStatusBarItem](IStatusBarItem.md)
- [IStatusBarItemCreationParams](IStatusBarItemCreationParams.md)
- [IStringPropertyItem](IStringPropertyItem.md)
- [IStringPropertyItemOptions](IStringPropertyItemOptions.md)
- [ISubPanePropertyItem](ISubPanePropertyItem.md)
- [ISubPanePropertyItemOptions](ISubPanePropertyItemOptions.md)
- [ITextPropertyItem](ITextPropertyItem.md)
- [ITextPropertyItemOptions](ITextPropertyItemOptions.md)
- [IToggleGroupPropertyItem](IToggleGroupPropertyItem.md)
- [IToggleGroupPropertyItemEntry](IToggleGroupPropertyItemEntry.md)
- [IToggleGroupPropertyItemOptions](IToggleGroupPropertyItemOptions.md)
- [IVector3PropertyItem](IVector3PropertyItem.md)
- [IVector3PropertyItemOptions](IVector3PropertyItemOptions.md)
- [LogProperties](LogProperties.md)
- [ModalToolCreationParameters](ModalToolCreationParameters.md)
- [ProjectExportOptions](ProjectExportOptions.md)
- [QuickExtrudeProperties](QuickExtrudeProperties.md)
- [WeightedBlock](WeightedBlock.md)
- [WidgetComponentBaseOptions](WidgetComponentBaseOptions.md)
- [WidgetComponentBoundingBoxOptions](WidgetComponentBoundingBoxOptions.md)
- [WidgetComponentClipboardOptions](WidgetComponentClipboardOptions.md)
- [WidgetComponentEntityOptions](WidgetComponentEntityOptions.md)
- [WidgetComponentGizmoOptions](WidgetComponentGizmoOptions.md)
- [WidgetComponentGuideOptions](WidgetComponentGuideOptions.md)
- [WidgetComponentRenderPrimitiveOptions](WidgetComponentRenderPrimitiveOptions.md)
- [WidgetComponentSplineOptions](WidgetComponentSplineOptions.md)
- [WidgetComponentTextOptions](WidgetComponentTextOptions.md)
- [WidgetComponentVolumeOutlineOptions](WidgetComponentVolumeOutlineOptions.md)
- [WidgetCreateOptions](WidgetCreateOptions.md)
- [WidgetGroupCreateOptions](WidgetGroupCreateOptions.md)

## Errors
- [InvalidWidgetComponentError](InvalidWidgetComponentError.md)
- [InvalidWidgetError](InvalidWidgetError.md)
- [InvalidWidgetGroupError](InvalidWidgetGroupError.md)

## Functions

### **deserialize**
`
deserialize(s: string): unknown
`

Deserialize anything, defaults to the same behavior as JSON.parse but will use custom deserializers passed into {@link registerSerializationForType}.

#### **Parameters**
- **s**: *string*

**Returns** *unknown*

### **executeLargeOperation**
`
executeLargeOperation(volume: RelativeVolumeListBlockVolume, operation: () => void): Promise<void>
`

Executes an operation over a selection via chunks to allow splitting operation over multiple game ticks

#### **Parameters**
- **volume**: *RelativeVolumeListBlockVolume*
- **operation**: () => void
  
  the operation to apply over each block location

**Returns** *Promise<void>*

### **executeLargeOperationFromIterator**
`
executeLargeOperationFromIterator(blockLocationIterator: minecraftserver.BlockLocationIterator, operation: () => void): Promise<void>
`

Executes an operation over a BlockLocationIterator via chunks to allow splitting operation over multiple game ticks

#### **Parameters**
- **blockLocationIterator**: *minecraftserver.BlockLocationIterator*
  
  the selection to iterator over
- **operation**: () => void
  
  the operation to apply over each block location

**Returns** *Promise<void>*

### **getDefaultAllowBlockList**
`
getDefaultAllowBlockList(): string[]
`

Returns a string array of the default block types for editor operations. Can be used to further filter blocks. This will throw if called in early execution.

**Returns** *string*[] - Default allowed block list

### **getDefaultBrushShapes**
`
getDefaultBrushShapes(excludeList?: CoreBrushShapeType[]): BrushShape[]
`

Returns a list of default core brush shapes

#### **Parameters**
- **excludeList**?: *CoreBrushShapeType*[]
  
  List of shape types to exclude

**Returns** *BrushShape*[]

### **makeObservable**
`
makeObservable(initialValue: T, validator?: ObservableValidator<T>): IObservable<T>
`

Creates an observable object that stores a value state.

#### **Parameters**
- **initialValue**: *T*
  
  Initial value of the observable.
- **validator**?: *ObservableValidator<T>*
  
  Optional validator to use for the setter.

**Returns** *IObservable<T>*

### **registerEditorExtension**
`
registerEditorExtension(extensionName: string, activationFunction: ActivationFunctionType<PerPlayerStorageType>, shutdownFunction: ShutdownFunctionType<PerPlayerStorageType>, options?: IRegisterExtensionOptionalParameters): Extension
`

Registers an editor extension into Minecraft. This function calls underlying functionality to register an extension but provides helpful and contextual wrappers for individual client lifetimes. The onActivation function is called whenever a client joins a session, while the shutdown is called when a client leaves. There may be other circumstances in which these are called as well based on client state that is an implementation detail of the system.

#### **Parameters**
- **extensionName**: *string*
- **activationFunction**: *ActivationFunctionType<PerPlayerStorageType>*
- **shutdownFunction**: *ShutdownFunctionType<PerPlayerStorageType>*
- **options**?: *IRegisterExtensionOptionalParameters*

**Returns** *Extension*

### **registerSerializationForType**
`
registerSerializationForType(typeConstructor: Function, name: string, serializer: () => void, deserializer: () => void): void
`

Register a type to have custom serialization/deserialization when using {@link serialize} and {@link deserialize}.

#### **Parameters**
- **typeConstructor**: *Function*
- **name**: *string*
- **serializer**: () => void
- **deserializer**: () => void

**Returns** *void*

### **registerUserDefinedTransactionHandler**
`
registerUserDefinedTransactionHandler(transactionManager: TransactionManager, undoHandler: () => void, redoHandler: () => void): UserDefinedTransactionHandle<T>
`

Creates a strongly typed transaction handle to enforce type safety when adding user defined transactions. This function is a wrapper around the more generalized transaction manager API for script based transactions. Any Editor Extension that needs to insert data into the transaction log for undo/redo should use this function to create a handler for the specific type of data that needs to be inserted. When a transaction is undone/redone, the associated handler function will be invoked with a copy of the payload data that was inserted into the log. As a general rule, transaction data should contain 2 things:<br> 1. The data that will be used to perform the operation we're trying to record<br> 2. The data that will be used to restore the state of the program to what it was before the operation.<br> NOTE/WARNING:<br> The payload data is serialized to JSON before being inserted into the transaction log and the underlying implementation uses the JSON.stringify() function to serialize the data. Any non-primitive data, such as classes or minecraft native objects will not serialize to JSON properly, so you should avoid using them as payload data.

#### **Parameters**
- **transactionManager**: *TransactionManager*
  
  A reference to the TransactionManager (from the extension context for your extension)
- **undoHandler**: () => void
  
  A function that will be invoked when the transaction is undone. The function will be passed a copy of the payload data that was inserted into the transaction log.
- **redoHandler**: () => void
  
  A function that will be invoked when the transaction is redone. The function will be passed a copy of the payload data that was inserted into the transaction log.

**Returns** *UserDefinedTransactionHandle<T>* - - {@link UserDefinedTransactionHandle} - A strongly typed transaction handle that can be used to add transactions to the transaction manager.

### **serialize**
`
serialize(obj: unknown): string
`

Serialize anything, defaults to the same behavior as JSON.stringify but will use custom serializers passed into {@link registerSerializationForType}.

#### **Parameters**
- **obj**: *unknown*

**Returns** *string*

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

## Peer Dependencies
- [`@minecraft/common`](../../../scriptapi/minecraft/common/minecraft-common.md)
- [`@minecraft/server`](../../../scriptapi/minecraft/server/minecraft-server.md)
