---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: minecraft/server-editor.IModalTool Interface
description: Contents of the @minecraft/server-editor.IModalTool class.
---
# IModalTool Interface

@beta

## Properties

### **id**
`read-only id: string;`

Unique ID for the tool

Type: *string*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

### **onModalToolActivation**
`onModalToolActivation: EventSink<ModalToolLifecycleEventPayload>;`

Provides lifecycle activation events for a modal tool

Type: *EventSink<ModalToolLifecycleEventPayload>*
  
> [!IMPORTANT]
> This property can't be edited in read-only mode.

## Methods
- [bindPropertyPane](#bindpropertypane)
- [dispose](#dispose)
- [hide](#hide)
- [registerKeyBinding](#registerkeybinding)
- [registerMouseButtonBinding](#registermousebuttonbinding)
- [registerMouseDragBinding](#registermousedragbinding)
- [registerMouseWheelBinding](#registermousewheelbinding)
- [show](#show)
- [unregisterInputBindings](#unregisterinputbindings)

### **bindPropertyPane**
`
bindPropertyPane(pane: IPropertyPane): void
`

Binds a property pane to the toggle option. Show/hide will be handle depending selection state.

#### **Parameters**
- **pane**: *IPropertyPane*

#### **Returns** *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **dispose**
`
dispose(): void
`

Destroy the tool.

#### **Returns** *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **hide**
`
hide(): void
`

Hide the tool.

#### **Returns** *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **registerKeyBinding**
`
registerKeyBinding(action: SupportedKeyboardActionTypes, button: KeyboardKey, modifier: InputModifier): void
`

Register a key press binding for an action which will be handled by the tool input context.

#### **Parameters**
- **action**: *SupportedKeyboardActionTypes*
  
  Action to register the binding for.
- **button**: *KeyboardKey*
  
  Keyboard key to invoke action.
- **modifier**: *InputModifier*
  
  Modifiers to create an input binding chord (Default: None).

#### **Returns** *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **registerMouseButtonBinding**
`
registerMouseButtonBinding(action: SupportedMouseActionTypes): void
`

Register an action to be called when mouse left/middle/right buttons are pressed or released.

#### **Parameters**
- **action**: *SupportedMouseActionTypes*
  
  Action to register the binding for.

#### **Returns** *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **registerMouseDragBinding**
`
registerMouseDragBinding(action: SupportedMouseActionTypes): void
`

Register an action to be called when mouse is dragged while left mouse button is down.

#### **Parameters**
- **action**: *SupportedMouseActionTypes*
  
  Action to register the binding for.

#### **Returns** *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **registerMouseWheelBinding**
`
registerMouseWheelBinding(action: SupportedMouseActionTypes): void
`

Register an action to be called when mouse wheel is scrolled.

#### **Parameters**
- **action**: *SupportedMouseActionTypes*
  
  Action to register the binding for.

#### **Returns** *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **show**
`
show(): void
`

Show the tool.

#### **Returns** *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.

### **unregisterInputBindings**
`
unregisterInputBindings(): void
`

Unregister all input binding for this toggle.

#### **Returns** *void*

> [!IMPORTANT]
> This function can't be called in read-only mode.
