import ISimpleReference from "./ISimpleReference";

/**
 * Result of an add item operation from a lookup provider.
 */
export interface ILookupAddResult {
  /**
   * Whether the add operation succeeded.
   */
  success: boolean;

  /**
   * The ID of the newly created item (if successful).
   * This ID can be used to immediately select the new item.
   */
  newItemId?: string;

  /**
   * Optional error message if the add failed.
   */
  errorMessage?: string;
}

/**
 * Provides lookup choices for form fields, with optional support for adding new items.
 */
export default interface ILookupProvider {
  /**
   * Gets the available choices for a given lookup type.
   */
  getLookupChoices(lookupId: string): Promise<ISimpleReference[] | undefined>;

  /**
   * Returns true if this provider supports adding new items for the given lookup type.
   * Used to show/hide "Add" buttons in the UI.
   */
  canAddItem?(lookupId: string): boolean;

  /**
   * Initiates an add item flow for the given lookup type.
   * The provider should handle showing any dialogs/pickers needed.
   * Returns the result of the add operation, including the new item's ID if successful.
   */
  addItem?(lookupId: string): Promise<ILookupAddResult | undefined>;
}
