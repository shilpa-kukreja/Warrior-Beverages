export const newsArticles = [
  {
    id: 1,
    title: "Wather Launches 100% Ocean-Bound Plastic Bottle",
    slug: "wather-launches-ocean-bound-plastic-bottle",
    excerpt:
      "Our new EcoCollect series turns ocean waste into premium branded bottles, reducing marine plastic by 2 million kg annually.",
    fullContent: `
      <p>In a groundbreaking move for sustainable packaging, Wather has unveiled the EcoCollect series — the first branded water bottle made entirely from ocean-bound plastic. This initiative aims to remove over 2 million kilograms of plastic from coastal areas each year.</p>
      
      <h2>Turning Pollution into Purpose</h2>
      <p>Each EcoCollect bottle is crafted from plastic waste collected within 50km of shorelines in Southeast Asia. The material is sorted, cleaned, and transformed into high-grade rPET that meets food-contact safety standards.</p>
      
      <blockquote>
        “We're proving that sustainability and premium branding can coexist. Our clients no longer have to choose between eco-consciousness and beautiful design.”
        — Sarah Chen, CEO of Wather
      </blockquote>
      
      <h2>Key Features</h2>
      <ul>
        <li>100% ocean-bound plastic (OBP) certified</li>
        <li>Leak-proof, vacuum-insulated options</li>
        <li>Full-color wrap printing available</li>
        <li>Donates 5% of profits to ocean cleanup</li>
      </ul>
      
      <p>The EcoCollect series is available for corporate pre-orders starting June 2025. Early partners include几家 Fortune 500 companies committed to eliminating single-use plastics from their events.</p>
    `,
    date: "May 28, 2025",
    category: "Sustainability",
    image: "/news/2.webp",
    readTime: "4 min read",
    featured: true,
    author: {
      name: "Emma Rodriguez",
      avatar: "/authors/emma.jpg",
      title: "Sustainability Editor"
    }
  },
  {
    id: 2,
    title: "How Hydration Branding Boosts Employee Wellness",
    slug: "hydration-branding-boosts-employee-wellness",
    excerpt:
      "Latest study shows companies using custom water bottles see 34% higher engagement in wellness programs.",
    fullContent: `
      <p>A new study conducted by the Corporate Wellness Institute reveals that branded reusable water bottles are among the most effective low-cost tools for improving employee health metrics.</p>
      
      <h2>The Data Speaks</h2>
      <p>Over 12 months, researchers tracked 5,000 employees across 20 companies. Those who received custom Wather bottles with their company logo showed:</p>
      <ul>
        <li><strong>34% higher participation</strong> in wellness challenges</li>
        <li><strong>28% reduction</strong> in single-use plastic bottle purchases</li>
        <li><strong>41% improvement</strong> in daily water intake goals</li>
      </ul>
      
      <h2>Why It Works</h2>
      <p>Branded bottles act as constant visual reminders. When employees feel connected to their company's wellness mission, they're more likely to adopt healthy habits. Plus, the pride of carrying a sleek, eco-friendly bottle boosts morale.</p>
      
      <p>Download the full case study to learn how to implement a hydration wellness program at your organization.</p>
    `,
    date: "May 22, 2025",
    category: "Insights",
    image: "/news/3.webp",
    readTime: "3 min read",
    featured: false,
    author: {
      name: "Dr. Michael Lee",
      avatar: "/authors/michael.jpg",
      title: "Workplace Psychologist"
    }
  },
  {
    id: 3,
    title: "Wather Partners with Global Climate Summit 2025",
    slug: "wather-partners-global-climate-summit-2025",
    excerpt:
      "Providing 50,000 reusable bottles to delegates, eliminating single-use plastic at the world's largest climate event.",
    fullContent: `
      <p>The Global Climate Summit 2025 has chosen Wather as its official hydration partner. The event, expected to draw 50,000 attendees from 150+ countries, will be completely single-use plastic free.</p>
      
      <h2>Leading by Example</h2>
      <p>Each delegate will receive a custom Wather bottle made from 70% recycled stainless steel. Refill stations powered by solar energy will be placed throughout the venue.</p>
      
      <p>“This partnership demonstrates that large-scale events can be both sustainable and stylish,” said Summit Director Maria Gonzalez.</p>
      
      <h2>Impact Projection</h2>
      <p>By eliminating single-use plastic bottles, the summit will prevent approximately 1.5 million plastic bottles from entering landfills and oceans. The initiative is expected to inspire other global events to follow suit.</p>
    `,
    date: "May 18, 2025",
    category: "Partnership",
    image: "/news/4.webp",
    readTime: "5 min read",
    featured: false,
    author: {
      name: "James Okafor",
      avatar: "/authors/james.jpg",
      title: "Partnerships Lead"
    }
  },
  // Add remaining articles (4,5,6) with similar fullContent
  {
    id: 4,
    title: "New Customization Tech: Full-Color Wrap Printing",
    slug: "full-color-wrap-printing-technology",
    excerpt: "Revolutionary 360° printing allows unlimited color designs with zero waste – perfect for complex brand identities.",
    fullContent: `<p>Wather has unveiled a patent-pending printing technology that wraps full-color designs seamlessly around cylindrical bottles...</p>`,
    date: "May 10, 2025",
    category: "Innovation",
    image: "/news/6.webp",
    readTime: "3 min read",
    featured: false,
    author: { name: "Lisa Wang", title: "Product Innovation Director" }
  },
  {
    id: 5,
    title: "Case Study: How a Startup Gained 10k Instagram Followers",
    slug: "startup-gained-10k-instagram-followers",
    excerpt: "One branded bottle campaign generated over 5,000 user-generated posts and a 240% ROI for a fitness brand.",
    fullContent: `<p>When fitness startup “PureMove” launched their branded Wather bottles, they didn't expect a viral explosion...</p>`,
    date: "May 5, 2025",
    category: "Success Stories",
    image: "/news/marketing-case-study.webp",
    readTime: "6 min read",
    featured: false,
    author: { name: "Ryan Patel", title: "Marketing Analyst" }
  },
  {
    id: 6,
    title: "Wather Receives B Corp Certification",
    slug: "wather-b-corp-certification",
    excerpt: "Recognized for meeting highest standards of social and environmental performance, transparency, and accountability.",
    fullContent: `<p>After a rigorous 18-month assessment, Wather has officially joined the B Corp community...</p>`,
    date: "April 28, 2025",
    category: "Company News",
    image: "/news/2.webp",
    readTime: "2 min read",
    featured: false,
    author: { name: "Nadia Khan", title: "Impact Officer" }
  }
];

export function getNewsArticle(id) {
  return newsArticles.find(article => article.id === parseInt(id));
}

export function getRelatedArticles(currentId, limit = 3) {
  return newsArticles
    .filter(article => article.id !== parseInt(currentId))
    .slice(0, limit);
}