// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export default interface IProperty {
  id: string | undefined;
  value: string | string[] | number | number[] | bigint | bigint[] | object | object[] | boolean | undefined | null;
}
