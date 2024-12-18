---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-editor.IGlobalInputManager Interface
description: Contents of the @minecraft/server-editor.IGlobalInputManager class.
---
# IGlobalInputManager Interface

## Methods
- [registerKeyBinding](#registerkeybinding)

### **registerKeyBinding**
`
registerKeyBinding(inputContextId: EditorInputContext, action: SupportedKeyboardActionTypes, binding: KeyBinding, info: KeyBindingInfo): void
`

Register a key press binding for an action which will be handled by the specified input context.

#### **Parameters**
- **inputContextId**: *EditorInputContext*
  
  Id of the UI context to handle this binding.
- **action**: *SupportedKeyboardActionTypes*
  
  Action to register the binding for.
- **binding**: *KeyBinding*
- **info**: *KeyBindingInfo*
  
  Additional information about key binding.

**Returns** *void*
