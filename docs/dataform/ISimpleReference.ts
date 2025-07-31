// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export default interface ISimpleReference {
  id: string | number | boolean;
  title?: string;
  description?: string;
  iconImage?: string;
  versionIntroduced?: string;
  versionDeprecated?: string;
  isDeprecated?: boolean;
}
