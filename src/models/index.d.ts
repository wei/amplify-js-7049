import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class User {
  readonly id: string;
  readonly username: string;
  readonly email: string;
  readonly rentalUnits?: (RentalUnit | null)[];
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class RentalUnit {
  readonly id: string;
  readonly ownerID: string;
  readonly unitType: string;
  constructor(init: ModelInit<RentalUnit>);
  static copyOf(source: RentalUnit, mutator: (draft: MutableModel<RentalUnit>) => MutableModel<RentalUnit> | void): RentalUnit;
}