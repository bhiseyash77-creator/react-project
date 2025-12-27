import React from 'react';
import './TrainingSection.css'; // CSS file import kara

const TrainingSection = () => {
  const services = [
    {
      title: "Online Training",
      description: "Access high-quality courses from anywhere, with flexible schedules for convenient learning.",
      icon: "📹", // Tumhi SVG kiva Emoji vaparu shakta
      color: "#4ade80"
    },
    {
      title: "Classroom Training",
      description: "Engage in interactive, instructor-led sessions for a more personalized learning experience.",
      icon: "👥",
      color: "#60a5fa"
    },
    {
      title: "Corporate Training",
      description: "Tailored programs designed to upskill employees and enhance company performance.",
      icon: "🏢",
      color: "#fb923c"
    },
    {
      title: "Weekend Workshops",
      description: "Intensive sessions focused on practical skills, ideal for working professionals.",
      icon: "📅",
      color: "#a855f7"
    },
    {
      title: "Placement Assistance",
      description: "Benefit from dedicated support to secure job opportunities in top companies.",
      icon: "🎓",
      color: "#ea580c"
    },
    {
      title: "Internship Programs",
      description: "Gain hands-on experience and industry exposure through structured internship opportunities.",
      icon: "💼",
      color: "#14b8a6"
    }
  ];

  return (
    <section className="training-container">
      <div className="training-header">
        <h2>The Perfect Place To Build A High-Value Career</h2>
        <p>Top Opportunity To Learn From Active Industry Professionals</p>
      </div>

      <div className="services-grid">
        {services.map((item, index) => (
          <div key={index} className="service-card">
            <div 
              className="icon-box" 
              style={{ backgroundColor: item.color }}
            >
              <span style={{ fontSize: '24px' }}>{item.icon}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrainingSection;