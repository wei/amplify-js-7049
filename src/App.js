import { DataStore } from 'aws-amplify';
import { useState } from 'react';
import './App.css';
import { RentalUnit, User } from './models';

function App() {
  const [user, setUser] = useState()
  const [rentalUnits, setRentalUnits] = useState()

  async function getUser (id) {
    const users = await DataStore.query(User, u => u.id('eq', id))
    setUser(users && users[0])
  }

  async function createUser () {
    const user = await DataStore.save(
      new User({
        username: 'testusername-' + Math.random(),
        email: 'test@example.com',
      })
    )
    await DataStore.save(
      new RentalUnit({
        ownerID: user.id,
        unitType: 'rental-unit-' + Math.random()
      })
    )
    setUser(user)
    await fetchRentalUnits(user.id)
    return user
  }

  async function fetchRentalUnits (id) {
    const rentalUnitsForUser = (await DataStore.query(RentalUnit)).filter(r => r.ownerID === (id || user.id));
    setRentalUnits(rentalUnitsForUser)
  }

  const deleteRecord = (r) => async () => {
    await DataStore.delete(r)
    await getUser(user.id)
    await fetchRentalUnits(user.id)
  }

  const addRentalUnit = async () => {
    await DataStore.save(
      new RentalUnit({
        ownerID: user.id,
        unitType: 'rental-unit-' + Math.random()
      })
    )
    await fetchRentalUnits(user.id)
  }

  return (
    <div className="App">
      <header className="App-header">
        <section>
          {
            !user
              ? <button onClick={createUser}>Create User</button>
              : (
                <div>
                  <h1>User</h1>
                  <pre>{JSON.stringify(user, null, 2)}</pre>
                  <button onClick={deleteRecord(user)}>Delete</button>
                </div>
              )
          }
          <div>
            {user && <>
              <h1>User's Rental Units</h1>
              <button onClick={addRentalUnit}>Add Rental Unit</button>
            </>
            }
            {
              (rentalUnits || []).map(r => <div key={r.id}>
                <pre>{JSON.stringify(r, null, 2)}</pre>
                <button onClick={deleteRecord(r)}>Delete</button>
              </div>)
            }
          </div>
        </section>
      </header>
    </div>
  );
}

export default App;
