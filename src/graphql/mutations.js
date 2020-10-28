/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      email
      rentalUnits {
        items {
          id
          ownerID
          unitType
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      email
      rentalUnits {
        items {
          id
          ownerID
          unitType
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      email
      rentalUnits {
        items {
          id
          ownerID
          unitType
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createRentalUnit = /* GraphQL */ `
  mutation CreateRentalUnit(
    $input: CreateRentalUnitInput!
    $condition: ModelRentalUnitConditionInput
  ) {
    createRentalUnit(input: $input, condition: $condition) {
      id
      ownerID
      unitType
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateRentalUnit = /* GraphQL */ `
  mutation UpdateRentalUnit(
    $input: UpdateRentalUnitInput!
    $condition: ModelRentalUnitConditionInput
  ) {
    updateRentalUnit(input: $input, condition: $condition) {
      id
      ownerID
      unitType
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteRentalUnit = /* GraphQL */ `
  mutation DeleteRentalUnit(
    $input: DeleteRentalUnitInput!
    $condition: ModelRentalUnitConditionInput
  ) {
    deleteRentalUnit(input: $input, condition: $condition) {
      id
      ownerID
      unitType
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
