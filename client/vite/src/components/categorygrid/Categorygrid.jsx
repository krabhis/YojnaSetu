import React from 'react';
import './Categorygrid.css';
import {
  FaGraduationCap,
  FaHeart,
  FaUsers,
  FaBriefcase,
  FaHome,
  FaLeaf,
  FaBook,
  FaTruck
} from 'react-icons/fa';

const categories = [
  { name: 'Education', count: '50+', icon: <FaGraduationCap />, color: '#7b61ff' },
  { name: 'Healthcare', count: '40+', icon: <FaHeart />, color: '#ff3b30' },
  { name: 'Women Empowerment', count: '30+', icon: <FaUsers />, color: '#d633ff' },
  { name: 'Employment', count: '45+', icon: <FaBriefcase />, color: '#f5c518' },
  { name: 'Housing', count: '25+', icon: <FaHome />, color: '#00cc66' },
  { name: 'Agriculture', count: '35+', icon: <FaLeaf />, color: '#66cc00' },
  { name: 'Skill Development', count: '20+', icon: <FaBook />, color: '#a855f7' },
  { name: 'Transportation', count: '15+', icon: <FaTruck />, color: '#ff8000' },
];

function Categorygrid() {
  return (
    <section className="category-section">
      <h2 className="category-heading">Browse by Category</h2>
      <div className="category-grid">
        {categories.map((cat, index) => (
          <div className="category-card" key={index}>
            <div className="category-icon" style={{ color: cat.color }}>
              {cat.icon}
            </div>
            <div className="category-info">
              <h3>{cat.name}</h3>
              <p>{cat.count} schemes available</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categorygrid;
