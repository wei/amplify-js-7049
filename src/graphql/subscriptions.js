/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateRentalUnit = /* GraphQL */ `
  subscription OnCreateRentalUnit {
    onCreateRentalUnit {
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
export const onUpdateRentalUnit = /* GraphQL */ `
  subscription OnUpdateRentalUnit {
    onUpdateRentalUnit {
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
export const onDeleteRentalUnit = /* GraphQL */ `
  subscription OnDeleteRentalUnit {
    onDeleteRentalUnit {
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
