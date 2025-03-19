import { Testimonials, FAQs, FAQVisuals, TeamCard, HeroSection, AboutSection, ServiceSection, WorksSection, FAQSection, TeamSection, TestimonialsSection } from "@/components";
import { FAQ, Services, Team, Testimonial, Work } from "@/utils/types";

import Member1 from "@/assets/member.png"
import Member2 from "@/assets/member2.png"
import Member3 from "@/assets/member3.png"

const works: Work[] = [
  {
    title: "iBlue Concepts",
    description: "",
    image: "https://res.cloudinary.com/dpfonnjv3/image/upload/v1741850572/Pinn/pqhyutublbe3jhm6iu7r.png",
  },
  {
    title: "Fitness Point",
    description: "",
    image: "https://res.cloudinary.com/dpfonnjv3/image/upload/v1741850572/Pinn/fielqz0oem0e6euygujd.png",
  },
  {
    title: "Ku Giti Cyawe",
    description: "",
    image: "https://res.cloudinary.com/dpfonnjv3/image/upload/v1741850571/Pinn/scht82p3op9x9neaz8yg.png",
  },
  {
    title: "Funky Monkey Arcade",
    description: "",
    image: "https://res.cloudinary.com/dpfonnjv3/image/upload/v1741850571/Pinn/qdexqb4pipmjddwmiijw.png",
  },
  {
    title: "Smart Home App",
    description: "",
    image: "https://res.cloudinary.com/dpfonnjv3/image/upload/v1741850573/Pinn/xwibsnb9imged1ebispt.png",
  },
]

const teamImage: string = "https://res.cloudinary.com/dpfonnjv3/image/upload/v1741850753/team_brcb76.png"

const workspaceImage: string = "https://res.cloudinary.com/dpfonnjv3/image/upload/v1741850745/workspace_uhdu9c.png"

const testimonials: Testimonial[] = [
  {
    name: "James M.",
    title: "Marketing Manager, Grow Rwanda",
    testimonial: "Pinn Creatives transformed our brand with stunning visuals and a seamless website. Their attention to detail and creativity exceeded our expectations!",
    image: "https://picsum.photos/200"
  },
  {
    name: "Linda K.",
    title: "Founder, Amarenga App",
    testimonial: "Pinn Creatives transformed our brand with stunning visuals and a seamless website. Their attention to detail and creativity exceeded our expectations!",
    image: "https://picsum.photos/300"
  },
  {
    name: "Sarah D.",
    title: "Creative Director, Funky Monkey Arcade",
    testimonial: "From concept to execution, Pinn Creatives nailed every aspect of our design needs. Their professionalism and creativity are unmatched!",
    image: "https://picsum.photos/400"
  }
]

const services: Services[] = [
  {
    index: 1,
    title: "Brand Identity",
    description: "We create brand identities that reflect your unique story and values, helping you stand out in a crowded marketplace.",
    icon: <div></div>
  },
  {
    index: 2,
    title: "Web Design",
    description: "Our web designs are more than just pretty—they’re intuitive, user-friendly, and built to convert.",
    icon: <div></div>
  },
  {
    index: 3,
    title: "Digital Marketing",
    description: "We help you reach your audience and grow your business with data-driven digital marketing strategies.",
    icon: <div></div>
  }
]

const imageUrls: string[] = [
  'https://randomuser.me/api/portraits/men/4.jpg',
  'https://randomuser.me/api/portraits/women/1.jpg',
  'https://randomuser.me/api/portraits/women/61.jpg',
  'https://randomuser.me/api/portraits/men/15.jpg',
  'https://randomuser.me/api/portraits/men/2.jpg',
];

const faqs: FAQ[] = [
  {
    question: "What services does Pinn Creatives offer?",
    answer: "We specialize in UI/UX design, branding, web development, advertising design, and motion graphics to help businesses create stunning digital experiences."
  },
  {
    question: "How do I start a project with Pinn Creatives?",
    answer: "You can start by reaching out through our contact form or email. We'll discuss your needs, provide a proposal, and begin crafting your design solution."
  },
  {
    question: "How long does a typical design project take?",
    answer: "Project timelines vary based on scope, but branding projects usually take 2-4 weeks, while UI/UX design and web development can range from 4-8 weeks."
  },
  {
    question: "Do you provide website maintenance services?",
    answer: "Yes! We offer website maintenance and support to ensure your site stays up to date, secure, and optimized for performance."
  },
  {
    question: "Can you work with startups and small businesses?",
    answer: "Absolutely! We love helping startups and small businesses establish strong brand identities and digital experiences that drive growth."
  }
];

const faqImage: string = "https://res.cloudinary.com/dpfonnjv3/image/upload/v1741850754/FAQs_bno8wq.png"

const team: Team[] = [
  {
    name: "Dismas Mutambiyineza",
    position: "CEO",
    image: Member1,
  },
  {
    name: "Manzi Regis",
    position: "CTO, Photography",
    image: Member2,
  },
  {
    name: "Ishimwe Clement",
    position: "CTO, UI/UX Design",
    image: Member3,
  }
]

export default function Home() {

  return (
    <div className="flex flex-col gap-4 text-primary dark:text-white px-4 md:px-16 pb-16">
      <HeroSection imageUrls={imageUrls} />

      <AboutSection teamImage={teamImage} workspaceImage={workspaceImage} />

      <ServiceSection services={services} />

      <WorksSection works={works} />

      <TestimonialsSection testimonials={testimonials} />

      <FAQSection faqImage={faqImage} faqs={faqs} />

      <TeamSection team={team} />

    </div>
  );
}
