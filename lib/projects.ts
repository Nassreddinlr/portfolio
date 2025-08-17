export interface Project {
  title: string;
  description: string;
  keyFeatures: string[];
  technologiesUsed: string[];
  projectLink?: string; // Optional link to the hosted project
  images?: string[]; // Optional array of image URLs for a gallery
}

export const projects: Project[] = [
  {
    title: "Events Management & Tickets Platform",
    description:
      "This project is a comprehensive web platform for event management and ticket sales developed for New World Digital Agency. It features three distinct panels: an admin panel for overall management, an event organizer panel for event creators, and a user panel for ticket purchasers. The project took 4 months to complete and showcases advanced Front-enddevelopment skills.",
    keyFeatures: [
      "Multi-role authentication system",
      "Real-time ticket booking and management",
      "3D interactive elements using Spline",
      "Custom React components (no external libraries)",
      "Responsive design with TypeScript",
      "Deployed on Ubuntu VPS with Nginx and Docker",
    ],
    technologiesUsed: ["React", "TypeScript", "Django", "PostgreSQL", "Tailwind CSS", "Spline.com", "Docker", "Nginx"],
    images: [
      "/ticketster_landing.jpg",       
      "/ticketster_browse.jpg",
      "/ticketster_3d.jpg",
      "/ticketster_ticket.jpg",
    ],
  },
  {
    title: "Professional Domain Name Consultation Platform",
    description:
      "A modern web application that helps users find, inquire about, and purchase premium domain names with expert guidance. The platform features comprehensive domain search functionality, detailed domain listings with pricing and categories, inquiry forms for specific domains, and professional consultation services.",
    keyFeatures: [
      "Advanced domain search with filters",
      "Real-time domain availability checking",
      "Detailed domain analytics and pricing",
      "Professional consultation booking system",
      "Responsive user-friendly interface",
      "Secure payment integration",
    ],
    technologiesUsed: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS", "React", "Supabase"],
    projectLink: "https://www.nassreddinelr.site/",
  },
  {
    title: "Rechart a Data visualization platform",
    description:
      "A modern web application that helps users turn there data into charts, export the charts, and minuplate the data inside the chart creatore.",
    keyFeatures: [
      "Data source uploade and managment",
      "app creation",
      "data menuplation and querying",
      "App saving and sharing",
    ],
    technologiesUsed: ["Next.js", "TypeScript", "chart.js", "Tailwind CSS", "React", "Figma"],
    projectLink: "https://rechart.app/",
  },
  {
    title: "DAR EL FARAH - Wedding Venue Marketplace",
    description:
      "DAR EL FARAH is a wedding venue marketplace specifically designed for the Algerian market, connecting couples with venue owners. The platform offers a comprehensive solution for wedding venue discovery and booking, featuring advanced search capabilities, interactive maps, and detailed venue showcases.",
    keyFeatures: [
      "Secure user authentication with JWT",
      "Advanced venue search with multiple filters",
      "Interactive Google Maps integration",
      "Detailed venue listings with photo galleries",
      "Venue comparison functionality",
      "Owner dashboard for property management",
    ],
    technologiesUsed: ["React", "TypeScript", "Django REST", "PostgreSQL", "Tailwind CSS", "Google Maps API", "JWT"],
  },
  {
    title: "Moneytool landing page upgrade",
    description:
      "a big ui upgrade for moneytool.com added language toggle and better ui and animations",
    keyFeatures: [
      "UI upgrade",
    ],
    technologiesUsed: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Figma"],
    projectLink: "https://moneytool-one.vercel.app/",
  },
];