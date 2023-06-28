import './App.css'
import { useState } from 'react'
import SelectedContact from './components/SelectedContact.jsx'
import ContactList from './components/ContactList'

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <div>
      {selectedContactId ? (
        <SelectedContact
          selectedContactId={selectedContactId}
          setSelectedContactId={setSelectedContactId}
        />
      ) : (<ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </div>
  );
};

export default App
