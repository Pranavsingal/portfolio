import { User, Code, Database, Brain, Terminal, Server, GraduationCap, Award, Briefcase } from 'lucide-react';

export const ROLES = {
  GENERAL: 'General',
  SWE: 'Software Engineer',
  DSE: 'Data Science Engineer'
};

export const resumeData = {
  personal: {
    name: 'Pranav Singal',
    title: 'Computer Science Undergraduate',
    university: 'VIT Bhopal University',
    location: 'Faridabad, Haryana',
    phone: '+91 8920606146',
    email: 'pranavkumarsinghal@gmail.com',
    linkedin: 'linkedin.com/in/pranav-singal',
    github: 'github.com/Pranavsingal',
    leetcode: 'leetcode.com/u/pranavsingal',
    codolio: 'codolio.com/profile/Pranav%20Singal/card',
    instagram: 'instagram.com/pranav_singal'
  },
  summary: {
    [ROLES.GENERAL]: 'Computer Science undergraduate at VIT Bhopal with hands-on experience in machine learning and AI-enabled software systems. Strong foundation in Data Structures, Object-Oriented Programming, and backend development. Seeking internship opportunities.',
    [ROLES.SWE]: 'Computer Science undergraduate at VIT Bhopal with hands-on experience building AI-enabled software systems. Proficient in Python, C++, and JavaScript. Strong foundation in Data Structures, Object-Oriented Programming, and backend development using Flask. Seeking Software Engineering internship opportunities.',
    [ROLES.DSE]: 'Computer Science undergraduate at VIT Bhopal with hands-on experience in machine learning. Proficient in Python, Pandas, NumPy, and scikit-learn with experience building ML pipelines for analytics and prediction. Seeking Data Science / AI/ML internship opportunities.'
  },
  education: [
    {
      institution: 'VIT Bhopal University',
      degree: 'B.Tech in Computer Science and Engineering',
      graduation: 'Expected September 2028',
      icon: GraduationCap
    }
  ],
  skills: [
    { name: 'Python', category: 'Programming', roles: [ROLES.SWE, ROLES.DSE, ROLES.GENERAL], icon: Code },
    { name: 'C / C++', category: 'Programming', roles: [ROLES.SWE, ROLES.GENERAL], icon: Code },
    { name: 'JavaScript', category: 'Programming', roles: [ROLES.SWE, ROLES.GENERAL], icon: Code },
    { name: 'scikit-learn', category: 'Machine Learning', roles: [ROLES.DSE, ROLES.GENERAL], icon: Brain },
    { name: 'CNNs', category: 'Machine Learning', roles: [ROLES.DSE], icon: Brain },
    { name: 'Feature Engineering', category: 'Machine Learning', roles: [ROLES.DSE], icon: Brain },
    { name: 'Pandas', category: 'Data Analysis', roles: [ROLES.DSE, ROLES.GENERAL], icon: Database },
    { name: 'NumPy', category: 'Data Analysis', roles: [ROLES.DSE, ROLES.GENERAL], icon: Database },
    { name: 'Flask', category: 'Backend Development', roles: [ROLES.SWE, ROLES.GENERAL], icon: Server },
    { name: 'Data Structures & Algorithms', category: 'Core CS', roles: [ROLES.SWE, ROLES.GENERAL], icon: Terminal },
    { name: 'Object-Oriented Programming', category: 'Core CS', roles: [ROLES.SWE, ROLES.GENERAL], icon: Terminal },
    { name: 'Git & GitHub', category: 'Tools', roles: [ROLES.SWE, ROLES.DSE, ROLES.GENERAL], icon: Terminal },
    { name: 'VS Code', category: 'Tools', roles: [ROLES.SWE, ROLES.DSE, ROLES.GENERAL], icon: Terminal }
  ],
  projects: [
    {
      title: 'Dokan - AI-Powered Grocery Inventory & Billing System',
      subtitle: 'Galgotias International Hackathon 2.0',
      description: 'Designed a Flask-based backend system for inventory and billing management for small retail stores. Built a data processing pipeline using Python and Pandas to analyze sales and inventory trends. Implemented machine learning models to support demand prediction and smarter inventory decisions. Integrated analytics insights into the web application for better business decision-making.',
      technologies: ['Python', 'Flask', 'Pandas', 'scikit-learn'],
      roles: [ROLES.SWE, ROLES.DSE, ROLES.GENERAL],
      icon: Briefcase,
      image: '/img/dokan.png'
    },
    {
      title: 'VIT Hostel Food Rating System',
      subtitle: 'Web Application',
      description: 'Developed a Flask-based web application enabling hostel residents to rate and review daily meals. Implemented user feedback collection and real-time rating display. Designed responsive frontend using HTML, CSS, and JavaScript. Created a structured feedback database for analyzing food quality trends.',
      technologies: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript'],
      roles: [ROLES.SWE, ROLES.GENERAL],
      icon: Briefcase,
      image: '/img/hostel.png'
    },
    {
      title: 'A.W.A.R.E - Artificial Waste Analysis and Recycling Engine',
      subtitle: 'Machine Learning Project',
      description: 'Built a waste classification system using a Convolutional Neural Network model. Trained the model using TensorFlow to classify six waste categories with 87% accuracy. Created a Flask-based interface for real-time waste image recognition. Integrated the system with a simple web interface to promote sustainable recycling.',
      technologies: ['Python', 'TensorFlow', 'Flask'],
      roles: [ROLES.DSE, ROLES.SWE, ROLES.GENERAL],
      icon: Briefcase,
      image: '/img/aware.png'
    }
  ],
  extracurricular: [
    {
      title: 'Andy Haryana Club',
      role: 'Co-Lead, Technical Team',
      date: 'Sep 2025 - Present',
      description: 'Led technical initiatives and coordinated student developers within the club. Managed technical infrastructure and supported organization of technical events.',
      icon: User
    }
  ],
  certifications: [
    { name: 'Supervised ML: Regression and Classification', issuer: 'DeepLearning.AI', icon: Award },
    { name: 'Cloud Computing', issuer: 'NPTEL', icon: Award },
    { name: 'JavaScript Programming Essentials', issuer: 'IBM', icon: Award },
    { name: 'Python Programming', issuer: 'HackerRank', icon: Award },
    { name: 'MATLAB Certification', issuer: 'MathWorks', icon: Award }
  ]
};
