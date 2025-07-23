// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import IGetSetPropertyObject from "./IGetSetPropertyObject";
import IPropertyObject from "./IPropertyObject";

export default interface IDataContainer {
  dataPropertyObject?: IPropertyObject;
  getsetPropertyObject?: IGetSetPropertyObject;
  directObject?: any;
}
