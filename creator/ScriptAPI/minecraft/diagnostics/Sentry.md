---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/diagnostics.Sentry Class
description: Contents of the @minecraft/diagnostics.Sentry class.
---
# Sentry Class

A class that allows hooking up reporting to Sentry.  See https://sentry.io/ for more information.

## Methods
- [addBreadcrumb](#addbreadcrumb)
- [addTag](#addtag)
- [getTags](#gettags)
- [init](#init)
- [removeTag](#removetag)

### **addBreadcrumb**
`
addBreadcrumb(level: SentryBreadcrumbLevel, message: string, category?: string): void
`

Adds a breadcrumb to the next Sentry error reported.  This can be useful for understanding a "trail" of events leading up to an error.  See Sentry documentation for more details: https://docs.sentry.io/product/issues/issue-details/breadcrumbs/

#### **Parameters**
- **level**: [*SentryBreadcrumbLevel*](SentryBreadcrumbLevel.md)
- **message**: *string*
  
  The message to add to the breadcrumb.
- **category**?: *string* = `null`
  
  The category of the breadcrumb.
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*SentryUninitializedError*](SentryUninitializedError.md)

### **addTag**
`
addTag(name: string, value: string): void
`

Adds a tag to the Sentry session.  See Sentry documentation for more details: https://docs.sentry.io/platforms/javascript/enriching-events/tags/

#### **Parameters**
- **name**: *string*
- **value**: *string*
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*SentryUninitializedError*](SentryUninitializedError.md)

### **getTags**
`
getTags(): Record<string, string>
`

Gets the list of all session tags.  See Sentry documentation for more details: https://docs.sentry.io/platforms/javascript/enriching-events/tags/

**Returns** Record<*string*, *string*>
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*SentryUninitializedError*](SentryUninitializedError.md)

### **init**
`
init(options: SentryOptions): void
`

Initializes Sentry for use.  This must be successfully called before any other Sentry functions are called.

#### **Parameters**
- **options**: [*SentryOptions*](SentryOptions.md)
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*@minecraft/common.InvalidArgumentError*](../../minecraft/common/InvalidArgumentError.md), [*SentryAlreadyInitializedError*](SentryAlreadyInitializedError.md)

### **removeTag**
`
removeTag(name: string): void
`

Removes a tag to the Sentry session.  See Sentry documentation for more details: https://docs.sentry.io/platforms/javascript/enriching-events/tags/

#### **Parameters**
- **name**: *string*
  
Notes:
- This function can't be called in read-only mode.
- This function can throw errors.
  - Throws [*SentryUninitializedError*](SentryUninitializedError.md)
