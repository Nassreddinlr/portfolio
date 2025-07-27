import { WaitlistWrapper } from "@/components/box"
import { PortfolioTabs } from "@/components/portfolio-tabs"
import type { Metadata } from "next"

export const dynamic = "force-static"
export const revalidate = 30

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Nassreddine Larbi Aissa - Full Stack Web Developer",
    description:
      "Passionate web developer with 3+ years of experience in React, TypeScript, and full-stack development. Based in Blida, Algeria.",
    keywords: ["web developer", "full stack developer", "React", "TypeScript", "JavaScript", "Next.js", "Blida", "Algeria", "frontend developer", "backend developer"],
    authors: [{ name: "Nassreddine Larbi Aissa" }],
    creator: "Nassreddine Larbi Aissa",
    publisher: "Nassreddine Larbi Aissa",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://web01.tech",
      title: "Nassreddine Larbi Aissa - Full Stack Web Developer",
      description:
        "Passionate web developer with 3+ years of experience in React, TypeScript, and full-stack development. Based in Blida, Algeria.",
      siteName: "Nassreddine Larbi Aissa Portfolio",
      images: [
        {
          url: "https://web01.tech/profileimage.jpg",
          width: 800,
          height: 600,
          alt: "Nassreddine Larbi Aissa",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Nassreddine Larbi Aissa - Full Stack Web Developer",
      description:
        "Passionate web developer with 3+ years of experience in React, TypeScript, and full-stack development. Based in Blida, Algeria.",
      creator: "@nassreddine",
      images: ["https://web01.tech/profileimage.jpg"],
    },
    alternates: {
      canonical: "https://web01.tech",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default function Home() {
  return (
    <WaitlistWrapper>
      <PortfolioTabs initialTab="home" />
    </WaitlistWrapper>
  )
}
