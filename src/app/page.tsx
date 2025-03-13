import { Button, ArrowTilted, ClientAvatars, AboutVisuals, ServiceCard, WorksVisuals, Testimonials, FAQs, FAQVisuals, TeamCard } from "@/components";
import { FAQ, Services, Team, Testimonial, Work } from "@/utils/types";

import Member1 from "@/assets/member.png"
import Member2 from "@/assets/member2.png"
import Member3 from "@/assets/member3.png"

import Link from "next/link";

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
    <div className="flex flex-col gap-4 text-primary px-4 md:px-16 pb-16">
      <section className="flex flex-col gap-4 px-4 md:px-40 py-24 md:py-32 items-center justify-center h-max">
        <h1 className="text-4xl md:text-6xl text-center font-medium text-primary">Creativity That Stands Out, Design That Pinns It Together.</h1>
        <p className="text-center text-primary md:w-8/12">We design with purpose and precision to elevate your brand. From bold ideas to flawless execution, we create experiences that inspire and captivate.</p>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center mt-4">
          <ClientAvatars images={imageUrls} />
          <Link href={"/contact"}>
            <Button variant="dark-outline" icon={<ArrowTilted />} iconPosition="right"> Let&rsquo;s Connect</Button>
          </Link>
        </div>
      </section>

      <section className="flex flex-col gap-8 md:gap-0 md:flex-row px-4 md:px-16 py-16 bg-primary rounded-4xl">
        <div className="flex flex-col items-center md:items-start gap-6 w-full">
          <h2 className="text-center md:text-start text-3xl md:text-5xl font-medium text-white">We Give Your Brand the Design It Deserves</h2>
          <p className="text-center md:text-start text-white w-10/12">We blend strategy with creativity to craft designs that don’t just look good—they drive results. From brand identity to digital experiences, we create with purpose, ensuring every detail aligns with your vision and business goals.</p>
          <Link href={"/about-us"}>
            <Button variant="outline" icon={<ArrowTilted />} iconPosition="right">More About Us</Button>
          </Link>
        </div>
        <AboutVisuals teamImage={teamImage} workspaceImage={workspaceImage} />
      </section>

      <section className="flex flex-col gap-12 px-4 md:px-16 py-12 items-center justify-center h-max">
        <div className="flex flex-col md:px-24 gap-4 items-center justify-center">
          <h2 className="md:w-10/12 text-center text-3xl md:text-5xl font-medium text-primary">Turning Ordinary Into Extraordinary</h2>
          <p className="text-primary md:w-8/12 text-center">Pinn crafts creative solutions that elevate your brand and drive results. Our focus is on delivering designs and strategies that connect with your audience and make a lasting impact.</p>
          <Link href={"/services"}>
            <Button variant="primary" icon={<ArrowTilted />} iconPosition="right">View All</Button>
          </Link>
        </div>
        <div className="flex flex-col md:grid grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.index} index={service.index} title={service.title} description={service.description} icon={service.icon} />
          ))}
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center gap-8 py-8">
        <div className="flex flex-nowrap w-full h-96 rounded-4xl overflow-hidden cursor-pointer">
          {works.map((work, index) => (
            <WorksVisuals key={index} title={work.title} description={work.description} image={work.image} />
          ))}
        </div>
        <div className="flex flex-col items-center md:items-start gap-4">
          <h2 className="md:w-10/12 text-center md:text-start text-3xl md:text-5xl font-medium text-primary">Our Works</h2>
          <p className="text-primary text-center md:text-start md:w-8/12">A showcase of creativity, strategy, and impact. Explore our work and see how we bring brands to life through thoughtful design.</p>
          <Link href={"/works"}>
            <Button variant="dark-outline" icon={<ArrowTilted />} iconPosition="right">View All</Button>
          </Link>
        </div>
      </section>

      <section className="flex flex-col md:flex-row items-center md:gap-8 py-8">
        <div className="flex flex-col items-center w-11/12 md:items-start gap-4">
          <h2 className="md:w-10/12 text-center md:text-start text-3xl md:text-5xl font-medium text-primary">Happy Clients, Even Happier Brands</h2>
          <p className="text-primary text-center md:text-start md:w-8/12">Don’t just take our word for it—see what our clients have to say. Real stories from real brands that have experienced the impact of great design.</p>
        </div>
        <div className="w-full">
          <Testimonials testimonials={testimonials} />
        </div>
      </section>

      <section className="flex flex-col max-h-max gap-16 md:gap-20 md:flex-row px-4 md:px-16 py-12 bg-primary rounded-4xl transition-all">
        <FAQVisuals image={faqImage} />
        <div className="flex w-full flex-col justify-center gap-8 md:gap-4">
          <h2 className="text-center md:text-start md:w-10/12 text-4xl md:text-5xl font-medium text-white">FAQs</h2>

          <div className="flex flex-col gap-2 w-full">
            {faqs.map((faq, index) => (
              <FAQs key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-12 py-12 items-center justify-center h-max">
        <div className="flex flex-col md:px-24 gap-4 items-center justify-center">
          <h2 className="md:w-10/12 text-center text-3xl md:text-5xl font-medium text-primary">Meet the Creatives Making It Happen</h2>
          <p className="text-primary md:w-8/12 text-center">Great design doesn’t happen by accident—it takes a team of creative minds, problem-solvers, and big thinkers. Meet the people behind the work, bringing brands to life with strategy, st yle, and a little bit of magic.</p>
        </div>
        <div className="flex flex-col md:grid grid-cols-3 gap-8">
          {team.map((member, index) => (
            <TeamCard key={index} name={member.name} position={member.position} image={member.image} />
          ))}
        </div>
      </section>

    </div>
  );
}
