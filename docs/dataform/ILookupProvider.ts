import ISimpleReference from "./ISimpleReference";

export default interface ILookupProvider {
  getLookupChoices(lookupId: string): Promise<ISimpleReference[] | undefined>;
}
