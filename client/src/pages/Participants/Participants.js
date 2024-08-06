import React from 'react';
import './Participants.css';
import img from "./pers.jpg";

const participants = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Speaker',
    bio: 'John is an experienced software engineer with over 10 years in the industry.',
    image: img
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Organizer',
    bio: 'Jane has been organizing tech events for the past 5 years.',
    image: img
  },
  {
    id: 3,
    name: 'Alice Johnson',
    role: 'Attendee',
    bio: 'Alice is a passionate developer eager to learn new technologies.',
    image: img
  }
];

const Participant = ({ participant }) => {
  return (
    <div className="participant">
      <img src={participant.image} alt={participant.name} className="participant-image" />
      <div className="participant-info">
        <h3 className="participant-name">{participant.name}</h3>
        <p className="participant-role">{participant.role}</p>
        <p className="participant-bio">{participant.bio}</p>
      </div>
    </div>
  );
};

const ParticipantList = () => {
  return (
    <div className="participant-list-container">
      <h2 className="participant-list-title">Participants</h2>
      <div className="participant-list">
        {participants.map(participant => (
          <Participant key={participant.id} participant={participant} />
        ))}
      </div>
    </div>
  );
};

export default ParticipantList;
