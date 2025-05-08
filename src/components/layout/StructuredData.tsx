// app/components/StructuredData.tsx
export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Minibunn Planner",
    url: "https://www.minibunnplanner.com",
    logo: "https://www.minibunnplanner.com/minibunn-logo.png",
    sameAs: [
      "https://github.com/yangjialin94",
      "https://www.jialinyang.com/",
      // any social profiles
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
