---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: mojang-gametest.Tags Class
description: Contents of the mojang-gametest.Tags class.
---
# Tags Class
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

These well-known tags can be used to classify different tests into suites to run.

## Constants

### **suiteAll**
`static read-only suiteAll = "suite:all";`

Indicates that the tagged test should be a part of all suites.

Type: *string*

### **suiteDebug**
`static read-only suiteDebug = "suite:debug";`

Indicates that the tagged test should be a part of an internal (debug) test suite.

Type: *string*

### **suiteDefault**
`static read-only suiteDefault = "suite:default";`

Indicates that the tagged test should be a part of the default test suite.

Type: *string*

### **suiteDisabled**
`static read-only suiteDisabled = "suite:disabled";`

Indicates that the tagged test should be a part of a suite of disabled tests.

Type: *string*
