---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/Mojang/MinecraftApiDocsGenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.prod: gaming
title: HttpRequestMethod Enumeration
description: Contents of the HttpRequestMethod enumeration.
---
# HttpRequestMethod Enumeration
>[!IMPORTANT]
>These APIs are experimental as part of GameTest Framework. As with all experiments, you may see changes in functionality in updated Minecraft versions. Check the Minecraft Changelog for details on any changes to GameTest Framework APIs. Where possible, this documentation reflects the latest updates to APIs in Minecraft beta versions.

## Constants
### **DELETE**
`DELETE = "DELETE"`

Represents the method for an HTTP HEAD request. HEAD requests are similar to a GET request, but are commonly used to retrieve just the HTTP response headers from the specified URI, and not the body contents.
### **GET**
`GET = "GET"`

Represents the method for an HTTP PUT request. POST requests are commonly used to create a new resource that is a subordinate of the specified URI.
### **HEAD**
`HEAD = "HEAD"`

Represents the method for an HTTP PUT request. GET requests are commonly used to retrieve information about a resource at the specified URI.
### **POST**
`POST = "POST"`

Represents the method for an HTTP PUT request. GET requests are commonly used to retrieve information about a resource at the specified URI.
### **PUT**
`PUT = "PUT"`

Represents the method for an HTTP PUT request. PUT requests are commonly used to update a single resource that already exists in a resource collection.
