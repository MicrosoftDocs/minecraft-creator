// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import IField from "./IField";
import IFormDefinition from "./IFormDefinition";

export default interface IFormField {
  form: IFormDefinition;
  field: IField;
}
