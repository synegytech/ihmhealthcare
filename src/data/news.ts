export interface NewsItem {
  id: number;
  category: string;
  date: string;
  title: string;
  description: string;
  content?: string;
  image: string;
}

export const newsItems: NewsItem[] = [
  {
    id: 1,
    category: 'Philanthropy',
    date: 'January 25, 2025',
    title: 'Mr. Peter Obi, donated N100 million to IHM Health System',
    description: "Former Anambra State governor, Mr. Peter Obi's donation to the IHM Health System, at Mmiata-Anam in Anambra West Local Government, marks a new era in compassionate clinical care.",
    content: `
      <p>The IHM Health System received a transformative boost today as former Anambra State governor, Mr. Peter Obi, announced a generous donation of N100 million. This significant contribution is aimed at enhancing healthcare infrastructure and expanding medical services in underserved communities.</p>
      
      <h3>Enhancing Rural Healthcare</h3>
      <p>The donation will specifically support the development of facilities at Mmiata-Anam in Anambra West Local Government. This area, which has traditionally faced challenges in accessing specialized medical care, will benefit from upgraded diagnostics and treatment capacities.</p>
      
      <h3>A Vision for Health Equity</h3>
      <p>Mr. Peter Obi emphasized the importance of private-sector involvement in bridging the healthcare gap in Nigeria. "Access to quality healthcare is a fundamental right, not a luxury. We must ensure that our brothers and sisters in rural areas are not left behind," he stated during the handover ceremony.</p>
      
      <p>This donation marks a new era in compassionate clinical care for the region, reinforcing IHM's mission to serve the most vulnerable.</p>
    `,
    image: '/images/mrpeterobi.jpg',
  },
  {
    id: 2,
    category: 'Community Engagement',
    date: 'May 10, 2024',
    title: 'Annual Gala Raises Record Funds for Rural Healthcare',
    description: 'Over 1,000 attendees joined us for our yearly celebration of life and generosity, exceeding our fundraising goals.',
    content: `
      <p>Our Annual Charity Gala, held last weekend, was a resounding success, raising a record-breaking amount for our rural healthcare initiatives. The event brought together over 1,000 supporters, including community leaders, medical professionals, and grateful patients.</p>
      
      <h3>Supporting Underserved Communities</h3>
      <p>The funds raised will be directly allocated to expanding our mobile health clinics and supporting rural hospitals that provide essential services to remote areas. These initiatives are critical in ensuring that quality healthcare is accessible to everyone, regardless of their geographic location.</p>
      
      <h3>A Night of Celebration</h3>
      <p>The evening featured inspiring stories of recovery and resilience, highlighting the real-world impact of our donors' generosity. We are deeply grateful to everyone who contributed to making this our most successful gala to date.</p>
    `,
    image: '/images/sr2.jpg',
  },
  {
    id: 3,
    category: 'Medical Innovation',
    date: 'May 14, 2024',
    title: 'New Genomic Center Opens with $20M Grant from IHM',
    description: 'The center will focus on personalized medicine and rare disease research, marking a new era in compassionate clinical care.',
    content: `
      <p>The IHM Healthcare Foundation is proud to announce the opening of its state-of-the-art Genomic Center, made possible by a generous $20 million grant. This landmark facility represents a significant leap forward in our mission to provide cutting-edge, compassionate care to our community.</p>
      
      <h3>A New Era of Personalized Medicine</h3>
      <p>The center will focus on genomic sequencing and personalized medicine, allowing our medical teams to tailor treatments to the unique genetic makeup of each patient. This approach is particularly transformative for patients with rare diseases and complex conditions that have previously been difficult to treat.</p>
      
      <h3>Research and Collaboration</h3>
      <p>Beyond clinical care, the Genomic Center will serve as a hub for international research collaboration. We are partnering with leading academic institutions to accelerate the discovery of new therapies and diagnostic tools.</p>
      
      <p>"This center is more than just a building; it's a promise to our patients that we will never stop searching for better ways to heal," said Dr. Helena Vance, Chief Medical Officer.</p>
    `,
    image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    category: 'Research',
    date: 'April 22, 2024',
    title: 'Breakthrough in Pediatric Cardiac Care',
    description: 'Our research team has published a landmark study on minimally invasive procedures for infants.',
    content: `
      <p>Researchers at IHM Healthcare have achieved a significant breakthrough in pediatric cardiac care, developing a new minimally invasive procedure for treating congenital heart defects in infants. This innovation promises to reduce recovery times and improve long-term outcomes for our youngest patients.</p>
      
      <h3>Landmark Study Published</h3>
      <p>The findings were recently published in a leading medical journal, receiving praise from the international medical community. The study demonstrates that these new procedures are not only safer but also more effective than traditional surgical methods.</p>
      
      <h3>Continuing Our Mission</h3>
      <p>This breakthrough is a testament to our ongoing commitment to research and innovation. We continue to invest in the brightest minds and the latest technology to ensure that our patients receive the best possible care.</p>
    `,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 5,
    category: 'Partnership',
    date: 'April 15, 2024',
    title: 'IHM Partners with Global Health Initiative',
    description: 'Expanding our reach to provide essential medical supplies to underserved regions across the continent.',
    content: `
      <p>IHM Healthcare is excited to announce a new partnership with the Global Health Initiative (GHI). This collaboration will focus on improving access to essential medical supplies and equipment in underserved regions across the continent.</p>
      
      <h3>A Global Impact</h3>
      <p>Through this partnership, we will leverage our logistics network and medical expertise to support GHI's efforts in areas facing healthcare crises. This includes providing vaccines, surgical tools, and diagnostic equipment to local clinics and hospitals.</p>
      
      <h3>Shared Values</h3>
      <p>"We are honored to partner with an organization that shares our commitment to global health equity," said our CEO. "Together, we can make a meaningful difference in the lives of millions."</p>
    `,
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800',
  }
];

