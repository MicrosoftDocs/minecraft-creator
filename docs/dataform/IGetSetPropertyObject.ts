// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { IEvent } from "ste-events";

export default interface IGetSetPropertyObject {
  onPropertyChanged: IEvent<IGetSetPropertyObject, string>;

  getProperty(id: string): any;
  setProperty(id: string, value: any): void;

  setBaseValue(value: any): void;
  getBaseValue(): any;
}
