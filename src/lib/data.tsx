import { Github, Linkedin } from 'lucide-react';

import LogoSQL from '/public/images/logos/icon-sql.svg';
import LogoPython from '/public/images/logos/icon-python.svg';
import LogoPowerBI from '/public/images/logos/icon-powerbi.svg';
import LogoTableau from '/public/images/logos/icon-tableau.svg';
import LogoExcel from '/public/images/logos/icon-excel.svg';
import LogoPowerPoint from '/public/images/logos/icon-powerpoint.svg';
import LogoProject from '/public/images/logos/icon-project.svg';
import UnifiedMentors from '/public/images/logos/Unified Mentors.png';
import Jagtamba from '/public/images/logos/Jagtamba.png';

import ProjectReport from '/public/images/Project-Report.png';
import IOT from '/public/images/IOT.jpg';
import MultiVend from '/public/images/MultiVend.jpg';

import { ExperienceDetails, ProjectDetails, TechDetails } from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB_REPO: 'https://github.com/krishna28zorg',
  LINKEDIN: 'https://linkedin.com/in/kshitijhereforit',
  EMAIL: 'kshitijhereforyou@gmail.com',
};

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS = [
  { icon: Github, url: 'https://github.com/krishna28zorg' },
  { icon: Linkedin, url: 'https://linkedin.com/in/kshitijhereforit' },
];

export const TECHNOLOGIES: TechDetails[] = [
  { label: 'SQL', logo: LogoSQL, url: 'https://www.w3schools.com/sql/' },
  { label: 'Python', logo: LogoPython, url: 'https://www.python.org/' },
  { label: 'Power BI', logo: LogoPowerBI, url: 'https://powerbi.microsoft.com/' },
  { label: 'Tableau', logo: LogoTableau, url: 'https://www.tableau.com/' },
  { label: 'Excel', logo: LogoExcel, url: 'https://www.microsoft.com/en-us/microsoft-365/excel' },
  { label: 'MS PowerPoint', logo: LogoPowerPoint, url: 'https://www.microsoft.com/en-us/microsoft-365/powerpoint' },
  { label: 'Project Management', logo: LogoProject, url: '#' },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logoAlt: 'Unified Mentors',
    position: 'Data Analyst Intern (Remote)',
    startDate: new Date(2024, 11),
    endDate: new Date(2025, 1),
    summary: [
      'Analyzed large datasets to uncover actionable insights.',
      'Performed EDA and cleaned/transformed raw data for consistency.',
      'Developed interactive dashboards using Tableau and Power BI.',
    ],
    logo: UnifiedMentors
  },
  {
    logoAlt: 'Jagtamba Enterprise',
    position: 'Accounting Assistant',
    startDate: new Date(2024, 3),
    currentlyWorkHere: true,
    summary: [
      'Managed accounts and created financial performance dashboards.',
      'Automated financial reporting workflows in Excel.',
      'Reduced payment cycle time by 15%.',
    ],
    logo: Jagtamba
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Report Analysis',
    description: 'Analyzed datasets from Netflix, FDI, COVID-19, etc., generating insights using Tableau and Power BI.',
    urls: [
      { label: 'FDI Analysis', url: 'https://github.com/krishna28zorg/FDI_Analysis' },
      { label: 'Netflix Analysis', url: 'https://github.com/krishna28zorg/NetFlix_Analysis' },
      { label: 'COVID-19 Analysis', url: 'https://github.com/krishna28zorg/Covid_Analysis' },
      { label: 'Road Accident Analysis', url: 'https://github.com/krishna28zorg/RoadAccidentAnalysis' },
    ],
    technologies: ['SQL', 'Python', 'Tableau', 'Power BI'],
    previewImage: ProjectReport
  },
  {
    name: 'Wardrobe Marketplace',
    description: 'Developed an e-commerce platform to support local goods. Led data collection and categorization.',
    urls: [
      { label: 'Multi Vendor', url: 'https://github.com/krishna28zorg/Multi-vendor-ecommerce-source-code' },
    ],
    technologies: ['Excel', 'Research', 'Data Categorization'],
    previewImage: MultiVend
  },
  {
    name: 'Newbie Gardener (IoT)',
    description: 'Built a data-driven gardening app using IoT sensors for predictive plant care optimization.',
    urls: [
      { label: '', url: '' },
    ],
    technologies: ['Python', 'IoT Integration', 'Data Visualization'],
    previewImage: IOT
  },
];
