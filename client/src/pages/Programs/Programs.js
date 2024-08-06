import React from 'react';
import './Programs.css';

function Programs() {
  const programs = [
    {
      title: 'Program 1',
      description: 'Description of Event 1',
      date: '2024-08-01',
      time: '10:00 AM',
    },
    {
      title: 'Program 2',
      description: 'Description of Event 2',
      date: '2024-08-02',
      time: '02:00 PM',
    },
    {
      title: 'Program 3',
      description: 'Description of Event 1',
      date: '2024-08-01',
      time: '10:00 AM',
    },
    {
      title: 'Program 4',
      description: 'Description of Event 2',
      date: '2024-08-02',
      time: '02:00 PM',
    },   {
      title: 'Program 5',
      description: 'Description of Event 1',
      date: '2024-08-01',
      time: '10:00 AM',
    },
    {
      title: 'Program 6',
      description: 'Description of Event 2',
      date: '2024-08-02',
      time: '02:00 PM',
    },
    // Add more events as needed
  ];

  return (
    <div className="programs-container">
      <h1 className="programs-title">Upcoming Programs</h1>
      <div className="programs-list">
        {programs.map((program, index) => (
          <div key={index} className="program-card">
            <h2 className="program-title">{program.title}</h2>
            <p className="program-description">{program.description}</p>
            <p className="program-date">{program.date}</p>
            <p className="program-time">{program.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programs;
