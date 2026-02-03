---
author: jashir
ms.author: jashir
title: Introduction to DataDriven UI (DDUI)
description: "An introduction to the Data-Driven UI (DDUI) framework."
ms.service: minecraft-bedrock-edition
ms.date: 02/01/2026
---

# Introduction to the Data-Driven UI (DDUI) Framework

The Data-Driven UI (DDUI) framework is a modern approach to building user interfaces in Minecraft Bedrock Edition scripts. It enables dynamic, real-time UI updates without rebuilding forms.  New modal forms is the first step in our UI journey for creators.  Stay tuned for more features in future updates!

This guide introduces the DDUI framework and highlights the key differences from the existing `@minecraft/server-ui` module.

## Summary

The DDUI framework provides a modern, reactive approach to building user interfaces in Minecraft Bedrock scripts. Key advantages include:

- **Reactive data binding**: UI automatically updates when Observable values change
- **Inline callbacks**: Cleaner code with callbacks directly on buttons
- **Dynamic controls**: Show, hide, enable, and disable controls at runtime
- **Unified form type**: `CustomForm` handles most UI scenarios

For API reference documentation, see the `@minecraft/server-ui` module reference.

## Prerequisites

- Basic knowledge of TypeScript and Minecraft scripting
- A behavior pack with scripting enabled

## Overview of the frameworks

### Existing server-ui module

The existing APIs provide three main form types:

| Class | Purpose |
|-------|---------|
| `ActionFormData` | Displays a list of buttons for player selection |
| `MessageFormData` | Shows a simple two-button confirmation dialog |
| `ModalFormData` | Presents a questionnaire with various input controls |

These forms are **static**—once displayed, their content cannot change until the player closes and reopens them.

### DDUI framework

The DDUI framework introduces:

| Class | Purpose |
|-------|---------|
| `CustomForm` | A unified, flexible form with dynamic content and reactive bindings |
| `MessageBox` | A streamlined two-button dialog with enhanced options |
| `Observable` | A reactive wrapper for values that automatically updates the UI |

DDUI forms are **dynamic**—content can update in real-time while the form is open.

## Form types

### CustomForm

`CustomForm` is the primary form type in DDUI. It combines the functionality of all three server-ui form types into a single, flexible class.

```typescript
import { CustomForm, Observable } from "@minecraft/server-ui";

const playerName = Observable.create<string>("Player", { clientWritable: true });
const difficulty = Observable.create<number>(1, { clientWritable: true });
const musicEnabled = Observable.create<boolean>(true, { clientWritable: true });
const volumeLevel = Observable.create<number>(75, { clientWritable: true });

CustomForm.create(player, "Game Settings")
    .closeButton()
    .spacer()
    .label("General Settings")
    .divider()
    .textField("Player Name", playerName, {
        description: "Your display name in-game"
    })
    .spacer()
    .label("Difficulty")
    .dropdown("", difficulty, [
        { label: "Peaceful", value: 0 },
        { label: "Easy", value: 1 },
        { label: "Normal", value: 2 },
        { label: "Hard", value: 3 }
    ])
    .spacer()
    .divider()
    .label("Audio Settings")
    .toggle("Music Enabled", musicEnabled)
    .slider("Volume", volumeLevel, 0, 100, {
        description: "Master volume level",
        step: 5
    })
    .spacer()
    .button("Reset to Defaults", () => resetSettings())
    .show()
    .then(() => {
        console.log(`Settings saved: ${playerName.getData()}`);
    })
    .catch(e => {
        console.error(e);
    });
```

### MessageBox

`MessageBox` provides a streamlined way to create simple two-button dialogs:

```typescript
import { MessageBox } from "@minecraft/server-ui";

MessageBox.create(player)
    .title("Confirm Action")
    .body("Are you sure you want to delete this item? This action cannot be undone.")
    .button1("Delete")
    .button2("Cancel", "Keep the item and close this dialog")
    .show()
    .then((response) => {
        if (response.selection === 0) {
            deleteItem();
        }
    })
    .catch(e => {
        console.error(e);
    });
```

## Working with Observables

### Creating Observables

```typescript
// Read-only Observable (server controls the value)
const status = Observable.create<string>("Loading...");

// Client-writable Observable (UI controls can update it)
const userInput = Observable.create<string>("", { clientWritable: true });
```

### Updating Observable values

```typescript
const entityCount = Observable.create<number>(0);

// Update the value - UI automatically reflects the change
system.runInterval(() => {
    const entities = dimension.getEntities();
    entityCount.setData(entities.length);
}, 20);
```

### Subscribing to changes

```typescript
const selectedOption = Observable.create<number>(0, { clientWritable: true });

selectedOption.subscribe((newValue) => {
    console.log(`Selection changed to: ${newValue}`);
    updatePreview(newValue);
});
```

### Using Observables for dynamic labels

```typescript
const statusLabel = Observable.create<string>("Ready");
const itemCount = Observable.create<number>(0);

// Update label based on data changes
itemCount.subscribe((count) => {
    statusLabel.setData(`Found ${count} items`);
});

CustomForm.create(player, "Inventory")
    .label(statusLabel) // Label updates automatically
    .button("Refresh", () => refreshInventory())
    .show()
    .catch(e => {
        console.error(e);
    });
```

## Localization support

DDUI supports localized text using the RawMessage format:

```typescript
CustomForm.create(player, { translate: "ui.settings.title" })
    .label({ translate: "ui.settings.description", with: ["value1", "value2"] })
    .button({ translate: "ui.button.save" }, () => save())
    .show()
    .catch(e => {
        console.error(e);
    });
```

## Examples

### Example 1: Simple action menu

```typescript
import { CustomForm } from "@minecraft/server-ui";

function showMenu(player: Player) {
    CustomForm.create(player, "Main Menu")
        .label("What would you like to do?")
        .spacer()
        .button("Play Game", () => startGame(player))
        .button("Settings", () => openSettings(player))
        .button("Exit", () => exitGame(player))
        .show()
        .catch(e => {
            console.error(e);
        });
}
```

### Example 2: Settings form with validation

```typescript
import { CustomForm, Observable } from "@minecraft/server-ui";

function showSettings(player: Player) {
    const username = Observable.create<string>("", { clientWritable: true });
    const renderDistance = Observable.create<number>(12, { clientWritable: true });
    const showParticles = Observable.create<boolean>(true, { clientWritable: true });
    const language = Observable.create<number>(0, { clientWritable: true });

    CustomForm.create(player, "Settings")
        .textField("Username", username, {
            description: "Your display name"
        })
        .slider("Render Distance", renderDistance, 2, 32, {
            step: 1,
            description: "Higher values may impact performance"
        })
        .toggle("Show Particles", showParticles, {
            description: "Display particle effects"
        })
        .dropdown("Language", language, [
            { label: "English", value: 0 },
            { label: "Spanish", value: 1 },
            { label: "French", value: 2 }
        ])
        .closeButton()
        .show()
        .then(() => {
            applySettings(
                username.getData(),
                renderDistance.getData(),
                showParticles.getData(),
                language.getData()
            );
        })
        .catch(e => {
            console.error(e);
        });
}
```

### Example 3: Real-time updating form

This example demonstrates a capability unique to DDUI—updating form content while it's open:

```typescript
import { CustomForm, Observable } from "@minecraft/server-ui";
import { system, TicksPerSecond } from "@minecraft/server";

function showEntityMonitor(player: Player) {
    const entityStatus = Observable.create<string>("Scanning...");
    const killButtonDisabled = Observable.create<boolean>(true);
    const statusMessage = Observable.create<string>("");

    // Update entity count every 4 seconds while form is open
    const intervalId = system.runInterval(() => {
        const nearbyEntities = player.dimension.getEntities({
            location: player.location,
            maxDistance: 20
        });

        entityStatus.setData(`Found ${nearbyEntities.length} entities within 20 blocks`);
        killButtonDisabled.setData(nearbyEntities.length === 0);
    }, TicksPerSecond * 4);

    CustomForm.create(player, "Entity Monitor")
        .spacer()
        .label(entityStatus)
        .spacer()
        .button("Remove All Entities", () => {
            const entities = player.dimension.getEntities({
                location: player.location,
                maxDistance: 20,
                excludeTypes: ["minecraft:player"]
            });

            let count = 0;
            for (const entity of entities) {
                entity.kill();
                count++;
            }

            statusMessage.setData(`Removed ${count} entities`);
        }, {
            tooltip: "Removes all non-player entities within range",
            disabled: killButtonDisabled
        })
        .spacer()
        .divider()
        .label(statusMessage)
        .closeButton()
        .show()
        .then(() => {
            // Clean up interval when form closes
            system.clearRun(intervalId);
        })
        .catch(e => {
            console.error(e);
        });
}
```

## Migration guide

When migrating from `@minecraft/server-ui` to DDUI:

| Server-ui | DDUI | Notes |
|-----------|------|-------|
| `new ActionFormData()` | `CustomForm.create(player, title)` | Player passed at creation |
| `new ModalFormData()` | `CustomForm.create(player, title)` | Unified form type |
| `new MessageFormData()` | `MessageBox.create(player)` | Simplified message dialogs |
| `.show(player)` | `.show()` | Player already provided |
| `.button("text")` | `.button("text", callback)` | Inline callbacks |
| `response.formValues[0]` | `observable.getData()` | Direct value access |
| Static content only | Dynamic with Observable | Real-time updates |

## Key differences

### 1. Reactive data binding with Observable

The most significant difference is the introduction of the `Observable` class. Instead of passing static values to form controls, you pass reactive Observable wrappers that can update the UI automatically.

#### Server-ui (static)

```typescript
import { ModalFormData } from "@minecraft/server-ui";

const form = new ModalFormData()
        .title('Settings')
        .slider('Volume', 0, 100, { valueStep: 5, defaultValue: 50 }); // Static default of 50

form.show(player).then((response) => {
        if (!response.canceled) {
            const volume = response.formValues[0]; // Access by index
        }
    })
    .catch(e => {
        console.error(e);
    });
```

#### DDUI (reactive)

```typescript
import { CustomForm, Observable } from "@minecraft/server-ui";

const volume = Observable.create<number>(50, { clientWritable: true });

CustomForm.create(player, 'Settings')
    .slider('Volume', volume, 0, 100, { step: 5 })
    .show()
    .then(() => {
        const currentVolume = volume.getData(); // Access via Observable
    })
    .catch(e => {
        console.error(e);
    });
```

> [!TIP]
> The `clientWritable: true` option allows the client to update the Observable value when the player interacts with the control.

### 2. Form creation pattern

#### Server-ui

Forms are created with a constructor and the player is passed to `show()`:

```typescript
const form = new ActionFormData()
    .title("My Form")
    .body("Select an option")
    .button("Option 1");

form.show(player)
    .catch(e => {
        console.error(e);
    });
```

#### DDUI

Forms are created with a static factory method that accepts both the player and title:

```typescript
const form = CustomForm.create(player, "My Form")
    .label("Select an option")
    .button("Option 1", () => handleOption1());

form.show()
    .catch(e => {
        console.error(e);
    });
```

### 3. Button callbacks vs. selection indices

#### Server-ui

Button selection is determined by checking an index in the response:

```typescript
import { ActionFormData } from "@minecraft/server-ui";

new ActionFormData()
    .title("Actions")
    .button("Save")
    .button("Load")
    .button("Exit")
    .show(player)
    .then((response) => {
        if (response.canceled) return;

        switch (response.selection) {
            case 0: save(); break;
            case 1: load(); break;
            case 2: exit(); break;
        }
    })
    .catch(e => {
        console.error(e);
    });
```

#### DDUI

Buttons accept inline callback functions that execute when pressed:

```typescript
import { CustomForm } from "@minecraft/server-ui";

CustomForm.create(player, "Actions")
    .button("Save", () => save())
    .button("Load", () => load())
    .button("Exit", () => exit())
    .show()
    .catch(e => {
        console.error(e);
    });
```

> [!NOTE]
> DDUI callbacks execute immediately when the button is pressed, while the form remains open. This enables multi-action forms where users can interact multiple times before closing.

### 4. Dynamic form controls

DDUI forms can dynamically enable, disable, show, or hide controls based on Observable values.

```typescript
const isAdvancedMode = Observable.create<boolean>(false, { clientWritable: true });
const isNotAdvancedMode = Observable.create<boolean>(true, { clientWritable: true });
const showAdvancedOptions = Observable.create<boolean>(false, { clientWritable: true });

isAdvancedMode.subscribe(newVal => {
    isNotAdvancedMode.setData(!newVal);
});

CustomForm.create(player, "Settings")
    .toggle("Enable Advanced Mode", isAdvancedMode)
    .toggle("Show Advanced Options", showAdvancedOptions)
    .button("Advanced Settings", () => openAdvancedSettings(), {
        visible: showAdvancedOptions,
        disabled: isNotAdvancedMode // Disabled when advanced mode is off
    })
    .show()
    .catch(e => {
        console.error(e);
    });
```

### 5. Enhanced control options

DDUI controls support additional options like descriptions and tooltips:

```typescript
CustomForm.create(player, "Player Settings")
    .textField("Display Name", playerName, {
        description: "Enter the name shown to other players",
        disabled: isLocked
    })
    .button("Apply Changes", () => applyChanges(), {
        tooltip: "Save your current settings"
    })
    .dropdown("Difficulty", selectedDifficulty, [
        { label: "Easy", value: 0, description: "Reduced enemy damage" },
        { label: "Normal", value: 1, description: "Standard gameplay" },
        { label: "Hard", value: 2, description: "Increased challenge" }
    ])
    .show()
    .catch(e => {
        console.error(e);
    });
```

## See also

- [@minecraft/server-ui module reference](../../ScriptAPI/minecraft/server-ui/minecraft-server-ui.md)
- [Script API overview](./next-steps.md)
