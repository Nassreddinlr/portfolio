export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nassreddine Larbi Aissa",
    "url": "https://web01.tech",
    "image": "https://web01.tech/profileimage.jpg",
    "sameAs": [
      "https://linkedin.com/in/nassreddine-larbi-aissa",
      "https://github.com/nassreddine-larbi-aissa"
    ],
    "jobTitle": "Full Stack Web Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance"
    },
    "description": "Passionate web developer with 3+ years of experience in React, TypeScript, and Front-enddevelopment. Based in Blida, Algeria.",
    "knowsAbout": ["React", "TypeScript", "JavaScript", "Next.js", "Node.js", "Web Development"]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}