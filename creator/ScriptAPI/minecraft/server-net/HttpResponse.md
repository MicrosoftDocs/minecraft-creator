---
# DO NOT TOUCH — This file was automatically generated. See https://github.com/mojang/minecraftapidocsgenerator to modify descriptions, examples, etc.
author: jakeshirley
ms.author: jashir
ms.service: minecraft-bedrock-edition
title: minecraft/server-net.HttpResponse Class
description: Contents of the @minecraft/server-net.HttpResponse class.
---
# HttpResponse Class

Main object that contains result information from a request.

## Properties

### **body**
`read-only body: string;`

Body content of the HTTP response.

Type: *string*

### **headers**
`read-only headers: HttpHeader[];`

A collection of HTTP response headers returned from the request.

Type: [*HttpHeader*](HttpHeader.md)[]

### **request**
`read-only request: HttpRequest;`

Information that was used to formulate the HTTP response that this object represents.

Type: [*HttpRequest*](HttpRequest.md)

### **status**
`read-only status: number;`

HTTP response code for the request. For example, 404 represents resource not found, and 500 represents an internal server error.

Type: *number*
