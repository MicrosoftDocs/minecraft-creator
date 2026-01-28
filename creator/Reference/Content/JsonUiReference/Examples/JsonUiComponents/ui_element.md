---
author: mammerla
ms.author: mikeam
title: "JSON UI Documentation - minecraft:ui_element"
description: "Describes the minecraft:ui_element json ui component"
ai-usage: ai-assisted
ms.service: minecraft-bedrock-edition
ms.date: 02/11/2025 
---

# JSON UI Documentation - minecraft:ui_element

A UI element definition in a Minecraft Bedrock UI screen file. UI elements define the visual and interactive components of Minecraft's user interface.


## UI Element Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| allow_clipping | *not set* | Boolean true/false | Whether this element can be clipped by parent elements. |  | 
| alpha | *not set* | Decimal number | The opacity of the element, from 0.0 (transparent) to 1.0 (opaque). |  | 
| always_handle_pointer | *not set* | Boolean true/false | Whether pointer events are always handled by this element. |  | 
| anchor_from | *not set* | [Anchor From](#anchor-from-choices) choices | The anchor point on the parent element from which this element is positioned. |  | 
| anchor_to | *not set* | [Anchor To](#anchor-to-choices) choices | The anchor point on this element used for positioning. |  | 
| animation_reset_name | *not set* | String | The name of the animation state to reset to. |  | 
| anims | *not set* | Array of strings | Animation references to apply to this element. |  | 
| bilinear | *not set* | Boolean true/false | Whether to use bilinear filtering for textures. |  | 
| bindings | *not set* | Array of [Bindings](#bindings) items | Data bindings that connect UI element properties to game data. |  | 
| button_mappings | *not set* | Array of [Button Mappings](#button-mappings) items | Mappings from input buttons to actions. |  | 
| clip_pixelperfect | *not set* | Boolean true/false | Whether clipping is pixel-perfect. |  | 
| clips_children | *not set* | Boolean true/false | Whether child elements are clipped to this element's bounds. |  | 
| collection_name | *not set* | String | The name of the collection to use for grid or stack panel items. |  | 
| color | *not set* | Array of numbers | The color tint applied to the element, specified as [r, g, b] with values 0.0-1.0. |  | 
| consume_event | *not set* | Boolean true/false | Whether input events are consumed by this element. |  | 
| controls | *not set* | Array of [Controls](#controls) items | Child elements contained within this element. |  | 
| default_focus_precedence | *not set* | Boolean true/false | Priority for receiving default focus. |  | 
| enabled | *not set* | Boolean true/false | Whether this element is enabled and can be interacted with. |  | 
| factory | *not set* | String | The factory configuration for dynamic element creation. |  | 
| fill | *not set* | String from a list of choices | Whether image fills its container. |  | 
| focus_change_down | *not set* | String from a list of choices | The element to focus when navigating down. |  | 
| focus_change_left | *not set* | String from a list of choices | The element to focus when navigating left. |  | 
| focus_change_right | *not set* | String from a list of choices | The element to focus when navigating right. |  | 
| focus_change_up | *not set* | String from a list of choices | The element to focus when navigating up. |  | 
| focus_enabled | *not set* | Boolean true/false | Whether this element can receive focus. |  | 
| font_scale_factor | *not set* | Boolean true/false | A multiplier for the font size. |  | 
| font_size | *not set* | [Font Size](#font-size-choices) choices | The size of the font for text rendering. |  | 
| font_type | *not set* | [Font Type](#font-type-choices) choices | The font to use for text rendering. |  | 
| grayscale | *not set* | Boolean true/false | Whether the element is rendered in grayscale. |  | 
| grid_dimension_binding | *not set* | String | The binding for determining grid dimensions. |  | 
| grid_item_template | *not set* | Integer number | The template element to use for grid items. |  | 
| grid_rescaling_type | *not set* | [Grid Rescaling Type](#grid-rescaling-type-choices) choices | How the grid resizes its cells. |  | 
| ignored | *not set* | Boolean true/false | If true, this element is ignored during layout and rendering. |  | 
| jump_to_bottom_on_update | *not set* | Boolean true/false | Whether to auto-scroll to bottom when content updates. |  | 
| keep_ratio | *not set* | Boolean true/false | Whether to maintain aspect ratio when scaling. |  | 
| layer | *not set* | Integer number | The rendering layer for this element. Higher values render on top of lower values. |  | 
| locked_control | *not set* | Boolean true/false | The control to display when this element is locked. |  | 
| max_length | *not set* | Integer number | Maximum character length for text input elements. |  | 
| max_size | *not set* | Array of numbers | The maximum size constraints for the UI element. |  | 
| min_size | *not set* | Array of numbers | The minimum size constraints for the UI element. |  | 
| modal | *not set* | Boolean true/false | Whether this element acts as a modal overlay. |  | 
| nine_slice_buttom | *not set* | Integer number | The bottom size for nine-slice image rendering. |  | 
| nine_slice_left | *not set* | Integer number | The left size for nine-slice image rendering. |  | 
| nine_slice_right | *not set* | Integer number | The right size for nine-slice image rendering. |  | 
| nine_slice_top | *not set* | Integer number | The top size for nine-slice image rendering. |  | 
| offset | *not set* | Array of numbers | The offset of the UI element from its anchor position. Specified as [x, y] in pixels. |  | 
| orientation | *not set* | [Orientation](#orientation-choices) choices | The orientation for stack panels, determining the direction children are laid out. |  | 
| place_holder_text | *not set* | String | Placeholder text shown when an input is empty. |  | 
| prevent_touch_input | *not set* | Boolean true/false | Whether touch input is blocked by this element. |  | 
| propagate_alpha | *not set* | Boolean true/false | Whether alpha transparency is propagated to child elements. |  | 
| renderer | *not set* | String | The renderer to use for custom element types. Examples include 'hud_player_renderer', 'inventory_item_renderer', etc. |  | 
| scroll_box_and_track_panel | *not set* | String | Reference to the panel containing scrollbar box and track. |  | 
| scroll_content | *not set* | String | Reference to the scrollable content element. |  | 
| scroll_speed | *not set* | String from a list of choices | The speed of scrolling in scroll views. |  | 
| scroll_view_port | *not set* | String | Reference to the scroll viewport element. |  | 
| scrollbar_box | *not set* | String | Reference to the scrollbar box element. |  | 
| scrollbar_touch_button | *not set* | Boolean true/false | Whether the scrollbar responds to touch. |  | 
| scrollbar_track | *not set* | String | Reference to the scrollbar track element. |  | 
| shadow | *not set* | Boolean true/false | Whether to render a shadow behind text. |  | 
| size | *not set* | Array of numbers | The size of the UI element. Can be specified as [width, height] where each can be a number (pixels), percentage string ('100%'), or special value ('fill', '100%c', '100%cm'). |  | 
| slider_range | *not set* | Decimal number | The range for slider elements. |  | 
| slider_select_on_hover | *not set* | String | Whether the slider value changes on hover. |  | 
| slider_steps | *not set* | Decimal number | The number of discrete steps in a slider. |  | 
| text | *not set* | String | The text content for label elements. Can include localization keys. |  | 
| text_alignment | *not set* | [Text Alignment](#text-alignment-choices) choices | The horizontal alignment of text within a label. |  | 
| text_box_name | *not set* | String | The name identifier for a text box. |  | 
| texture | *not set* | String | The texture path for image elements. Relative to the resource pack textures folder. |  | 
| tiled | *not set* | Boolean true/false | Whether the texture is tiled when rendering. |  | 
| tts_control_type_order_priority | *not set* | String | The priority for ordering elements in text-to-speech. |  | 
| tts_ignore_count | *not set* | Boolean true/false | Whether to ignore this element when counting for text-to-speech. |  | 
| tts_skip_message | *not set* | Boolean true/false | Whether to skip this element in text-to-speech narration. |  | 
| type | *not set* | [Type](#type-choices) choices | The type of UI element. Determines how the element is rendered and behaves. |  | 
| uv | *not set* | Array of numbers | UV coordinates for texture mapping, specified as [u, v]. |  | 
| uv_size | *not set* | Array of numbers | The size of the UV region to sample from the texture. |  | 
| variables | *not set* | Key/item pairs of [Variables](#variables) items | Variable definitions for conditional logic. |  | 
| virtual_keyboard_buffer_control | *not set* | Boolean true/false | Whether this input uses a virtual keyboard buffer. |  | 
| visible | *not set* | Boolean true/false | Whether this element is visible by default. |  | 

### Anchor From choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| undefined |  | |
| undefined |  | |
| undefined |  | |
| undefined |  | |
| undefined |  | |
| undefined |  | |
| undefined |  | |
| undefined |  | |
| undefined |  | |

### Anchor To choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| undefined |  | |
| undefined |  | |
| undefined |  | |
| undefined |  | |
| undefined |  | |
| undefined |  | |
| undefined |  | |
| undefined |  | |
| undefined |  | |

## Bindings

#### Bindings Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| binding_collection_name | *not set* | String | The name of the collection when using collection bindings. |  | 
| binding_condition | *not set* | [Binding Condition](#binding-condition-choices) choices | When the binding should be evaluated. |  | 
| binding_name | *not set* | String | The name of the data source to bind to (e.g., '#player_name'). |  | 
| binding_name_override | *not set* | String | The property on the UI element to bind the value to. |  | 
| binding_type | *not set* | [Binding Type](#binding-type-choices) choices | The type of binding. |  | 
| source_control_name | *not set* | String | The name of the source control for view bindings. |  | 
| source_property_name | *not set* | String | The property name on the source control. |  | 
| target_property_name | *not set* | String | The property name on the target element. |  | 

### Binding Condition choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| undefined |  | |
| undefined |  | |
| undefined |  | |
| undefined |  | |
| undefined |  | |

### Binding Type choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| undefined |  | |
| undefined |  | |
| undefined |  | |
| undefined |  | |
| undefined |  | |

## Button Mappings

#### Button Mappings Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| from_button_id | *not set* | String | The input button that triggers the action. |  | 
| input_mode_condition | *not set* | [Input Mode Condition](#input-mode-condition-choices) choices | The input mode required for this mapping. |  | 
| mapping_type | *not set* | [Mapping Type](#mapping-type-choices) choices | The type of button mapping. |  | 
| to_button_id | *not set* | String | The action button to trigger. |  | 

### Input Mode Condition choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| undefined |  | |
| undefined |  | |

### Mapping Type choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| undefined |  | |
| undefined |  | |
| undefined |  | |
| undefined |  | |

## Controls

#### Controls Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| [a-zA-Z0-9_.:@]+ | *not set* | Object | A child UI element. The key is the element name, optionally with @base_element syntax for inheritance. |  | 

### Font Size choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| undefined |  | |
| undefined |  | |
| undefined |  | |
| undefined |  | |

### Font Type choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| undefined |  | |
| undefined |  | |
| undefined |  | |
| undefined |  | |
| undefined |  | |

### Grid Rescaling Type choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| undefined |  | |
| undefined |  | |
| undefined |  | |

### Orientation choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| undefined |  | |
| undefined |  | |

### Text Alignment choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| undefined |  | |
| undefined |  | |
| undefined |  | |

### Type choices

|Value       |Title |Description |
|:-----------|:-----|:-----------|
| undefined |  | |
| undefined |  | |
| undefined |  | |
| undefined |  | |
| undefined |  | |
| undefined |  | |
| undefined |  | |
| undefined |  | |
| undefined |  | |
| undefined |  | |
| undefined |  | |
| undefined |  | |
| undefined |  | |
| undefined |  | |
| undefined |  | |
| undefined |  | |
| undefined |  | |
| undefined |  | |

## Variables

#### Variables Properties

|Name       |Default Value |Type |Description |Example Values |
|:----------|:-------------|:----|:-----------|:------------- |
| requires | *not set* | Boolean true/false | The condition that must be met for this variable to be active. |  | 