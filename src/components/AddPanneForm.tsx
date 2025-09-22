import React, { useState } from 'react';
import { addPanne } from '../services/firestoreService';
import { Panne } from '../types/types';

const AddPanneForm: React.FC = () => {
  const [description, setDescription] = useState('');
  const [equipmentId, setEquipmentId] = useState('');
  const [technicianId, setTechnicianId] = useState('');
  const [status, setStatus] = useState<'pending' | 'in-progress' | 'resolved'>('pending');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const panneData: Omit<Panne, 'id'> = {
      description,
      date: new Date(),
      equipmentId,
      technicianId,
      status,
    };
    try {
      const id = await addPanne(panneData);
      alert(`Panne added with ID: ${id}`);
      // Reset form
      setDescription('');
      setEquipmentId('');
      setTechnicianId('');
      setStatus('pending');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to add panne');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <input
        type="text"
        value={equipmentId}
        onChange={(e) => setEquipmentId(e.target.value)}
        placeholder="Equipment ID"
        required
      />
      <input
        type="text"
        value={technicianId}
        onChange={(e) => setTechnicianId(e.target.value)}
        placeholder="Technician ID"
        required
      />
      <select value={status} onChange={(e) => setStatus(e.target.value as 'pending' | 'in-progress' | 'resolved')}>
        <option value="pending">Pending</option>
        <option value="in-progress">In Progress</option>
        <option value="resolved">Resolved</option>
      </select>
      <button type="submit">Add Panne</button>
    </form>
  );
};

export default AddPanneForm;