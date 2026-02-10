import React, { useState, useEffect } from 'react';
import { fetchContacts } from '../services/api';

function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContacts = async () => {
      try {
        const data = await fetchContacts();
        setContacts(data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      } finally {
        setLoading(false);
      }
    };
    loadContacts();
  }, []);

  if (loading) return <p>Loading contacts...</p>;

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-bold mb-4">Emergency Contacts</h2>
      {contacts.map((contact) => (
        <div key={contact.id} className="p-3 bg-white rounded-lg shadow">
          <p className="font-semibold">{contact.name}</p>
          <p className="text-sm text-gray-600">{contact.phone}</p>
        </div>
      ))}
    </div>
  );
}

export default ContactList;
