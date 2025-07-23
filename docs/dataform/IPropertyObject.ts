// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import IProperty from "./IProperty";
import { IEvent } from "ste-events";

export default interface IPropertyObject {
  onPropertyChanged: IEvent<IPropertyObject, IProperty>;

  getProperty(id: string): IProperty;
  ensureProperty(id: string): IProperty;
  addProperty(id: string): IProperty;
}
