import './App.css'
import UserCard from './usercard'

const users = [
  {
    id: 1,
    name: 'Aisha Khan',
    age: 28,
    city: 'Karachi',
    email: 'aisha.khan@example.com',
    phone: '+92 300 1234567',
    occupation: 'Frontend Developer',
    address: 'Block 6, Gulshan-e-Iqbal, Karachi',
    hobbies: 'Reading, traveling, photography',
    status: 'Available',
  },
  {
    id: 2,
    name: 'Hamza Ali',
    age: 31,
    city: 'Lahore',
    email: 'hamza.ali@example.com',
    phone: '+92 321 7654321',
    occupation: 'Product Manager',
    address: 'Model Town, Lahore',
    hobbies: 'Cycling, chess, podcasts',
    status: 'Busy',
  },
  {
    id: 3,
    name: 'Sara Ahmed',
    age: 25,
    city: 'Islamabad',
    email: 'sara.ahmed@example.com',
    phone: '+92 333 9876543',
    occupation: 'UI/UX Designer',
    address: 'F-7, Islamabad',
    hobbies: 'Sketching, coffee tasting, hiking',
    status: 'Available',
  },
  {
    id: 4,
    name: 'Bilal Hassan',
    age: 29,
    city: 'Peshawar',
    email: 'bilal.hassan@example.com',
    phone: '+92 322 4567890',
    occupation: 'Data Analyst',
    address: 'University Town, Peshawar',
    hobbies: 'Running, data visualization, gaming',
    status: 'Working',
  },
  {
    id: 5,
    name: 'Maryam Noor',
    age: 27,
    city: 'Quetta',
    email: 'maryam.noor@example.com',
    phone: '+92 345 1122334',
    occupation: 'Mobile App Developer',
    address: 'Samungli Road, Quetta',
    hobbies: 'Swimming, cooking, journaling',
    status: 'Available',
  },
]

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <p className="eyebrow">React Props Demo</p>
        <h1>User Profiles</h1>
        <p className="subtitle">
          Parent component sends user data to the child component using props.
        </p>
      </header>

      <main className="user-grid">
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </main>
    </div>
  )
}

export default App
