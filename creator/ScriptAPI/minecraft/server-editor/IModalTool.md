---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.IModalTool Interface
description: Contents of the @minecraft/server-editor.IModalTool class.
---
# IModalTool Interface

## Properties

### **id**
`read-only id: string;`

Unique ID for the tool

Type: *string*

### **onModalToolActivation**
`onModalToolActivation: EventSink<ModalToolLifecycleEventPayload>;`

Provides lifecycle activation events for a modal tool

Type: *EventSink<ModalToolLifecycleEventPayload>*

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

**Returns** *void*

### **dispose**
`
dispose(): void
`

Destroy the tool.

**Returns** *void*

### **hide**
`
hide(): void
`

Hide the tool.

**Returns** *void*

### **registerKeyBinding**
`
registerKeyBinding(action: SupportedKeyboardActionTypes, binding: KeyBinding, info: KeyBindingInfo): void
`

Register a key press binding for an action which will be handled by the tool input context.

#### **Parameters**
- **action**: *SupportedKeyboardActionTypes*
  
  Action to register the binding for.
- **binding**: *KeyBinding*
  
  Keyboard binding to invoke action.
- **info**: *KeyBindingInfo*
  
  Additional information about key binding.

**Returns** *void*

### **registerMouseButtonBinding**
`
registerMouseButtonBinding(action: SupportedMouseActionTypes): void
`

Register an action to be called when mouse left/middle/right buttons are pressed or released.

#### **Parameters**
- **action**: *SupportedMouseActionTypes*
  
  Action to register the binding for.

**Returns** *void*

### **registerMouseDragBinding**
`
registerMouseDragBinding(action: SupportedMouseActionTypes): void
`

Register an action to be called when mouse is dragged while left mouse button is down.

#### **Parameters**
- **action**: *SupportedMouseActionTypes*
  
  Action to register the binding for.

**Returns** *void*

### **registerMouseWheelBinding**
`
registerMouseWheelBinding(action: SupportedMouseActionTypes): void
`

Register an action to be called when mouse wheel is scrolled.

#### **Parameters**
- **action**: *SupportedMouseActionTypes*
  
  Action to register the binding for.

**Returns** *void*

### **show**
`
show(): void
`

Show the tool.

**Returns** *void*

### **unregisterInputBindings**
`
unregisterInputBindings(): void
`

Unregister all input binding for this toggle.

**Returns** *void*
