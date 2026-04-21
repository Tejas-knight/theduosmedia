'use client';

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  Palette,
  TrendingUp,
  Video,
  LayoutGrid,
  BadgeCheck,
  MessageSquareMore,
  Handshake,
  SignalHigh,
  Lightbulb,
  Target,
  Users,
  CheckCircle2,
  Sparkles,
  PenTool,
  Megaphone,
} from "lucide-react";

const CONTACT_EMAIL = "services@theduosmedia.in";
const CONTACT_PHONE = "8668895845";
const WHATSAPP_LINK = "https://wa.me/918668895845";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75 },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -28 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75 },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 28 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 0 },
  show: { opacity: 1, y: 0 },
  hover: {
    scale: 1.03,
    y: -6,
    transition: { type: "spring", stiffness: 140, damping: 18 },
  },
};

function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  description?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center" : "text-left"}>
      {eyebrow ? (
        <p className="text-xs md:text-sm tracking-[0.35em] uppercase text-yellow-400/90 mb-4">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-3xl md:text-5xl font-medium leading-[1.1] tracking-tight text-white">
        {title}{" "}
        {accent ? <span className="text-yellow-400">{accent}</span> : null}
      </h2>

      {description ? (
        <p className="mt-5 max-w-3xl mx-auto text-gray-300 leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function Home() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="pt-24 text-white overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-[calc(100vh-6rem)] px-6 md:px-12 flex items-center">
        <div className="mx-auto w-full max-w-7xl grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >
            <p className="text-yellow-400/90 text-xs md:text-sm tracking-[0.35em] uppercase">
              The Duos Media
            </p>

            <h1 className="mt-5 text-4xl md:text-6xl lg:text-[4.6rem] font-medium leading-[1.05] tracking-tight">
              We Build Stories That Make Brands{" "}
              <span className="text-yellow-400">Impossible to Ignore</span>
            </h1>

            <p className="mt-6 max-w-2xl text-gray-300 text-base md:text-lg leading-relaxed">
              We help brands grow through strategic storytelling, performance-driven marketing,
              and creative execution that connects with the right audience.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP_LINK}
                className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-6 py-3 font-medium text-black shadow-lg shadow-yellow-400/20 transition hover:scale-[1.02] hover:shadow-yellow-400/35"
              >
                Start Your Brand Journey
              </a>

              <button
                onClick={() => scrollTo("work")}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.03] px-6 py-3 font-medium text-white transition hover:border-white/40 hover:bg-white/[0.06]"
              >
                View Our Work
              </button>
            </div>

            <p className="mt-8 max-w-2xl text-sm md:text-base text-gray-400 leading-relaxed">
              Helping startups, local businesses, and growing brands create stronger digital
              presence and meaningful visibility.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
                <BadgeCheck className="h-5 w-5 text-yellow-400" />
                <p className="mt-3 text-xl font-semibold text-white">50+</p>
                <p className="mt-1 text-sm text-gray-400">Brands trust us</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
                <Sparkles className="h-5 w-5 text-yellow-400" />
                <p className="mt-3 text-xl font-semibold text-white">Strategy</p>
                <p className="mt-1 text-sm text-gray-400">Our core strength</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4">
                <TrendingUp className="h-5 w-5 text-yellow-400" />
                <p className="mt-3 text-xl font-semibold text-white">100%</p>
                <p className="mt-1 text-sm text-gray-400">Result focussed</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="show"
            whileHover="hover"
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.02] shadow-2xl shadow-black/50">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/hero.jpeg"
                  alt="The Duos Media hero workspace"
                  fill
                  priority
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,200,0,0.20),transparent_35%),radial-gradient(circle_at_80%_80%,rgba(255,200,0,0.12),transparent_35%)]" />
              </div>

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <div className="rounded-2xl border border-white/10 bg-black/45 backdrop-blur-md px-4 py-3">
                  <p className="text-[11px] tracking-[0.28em] uppercase text-yellow-400/90">
                    Story. Strategy. Growth.
                  </p>
                </div>

                <div className="hidden sm:block rounded-2xl border border-white/10 bg-black/45 backdrop-blur-md px-4 py-3">
                  <p className="text-sm text-gray-200">Founder-led</p>
                  <p className="text-xs text-gray-400">Brand direction that feels personal</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-6 py-24 md:py-28">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2 gap-12 items-start">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <SectionHeading
              eyebrow="About"
              title="Creative Thinking Built Around"
              accent="Business Goals"
            />

            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-gray-300">
              <Lightbulb className="h-4 w-4 text-yellow-400" />
              Strategy first. Creative second. Growth always.
            </div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-[28px] border border-white/10 bg-white/[0.02] p-8 md:p-10"
          >
            <p className="text-gray-300 leading-relaxed">
              Every business has a story, but not every story creates impact.
              <br />
              <br />
              We believe strong marketing begins by understanding what makes a brand different,
              then building content, campaigns, and digital presence that make people notice and
              remember.
              <br />
              <br />
              Our work blends strategy, creativity, and execution — so brands do not just appear
              online, they stand out.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-24 md:py-28">
        <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Services"
              title="What We Help Brands"
              accent="Build"
              description="We create the foundations, visibility, and creative systems that help businesses move forward with confidence."
              center
            />
          

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                icon: PenTool,
                title: "Branding & Identity",
                desc: "We create visual and communication foundations that help businesses present themselves with confidence and clarity.",
              },
              {
                icon: Megaphone,
                title: "Performance Marketing",
                desc: "Campaigns designed to generate visibility, inquiries, and measurable digital growth.",
              },
              {
                icon: Sparkles,
                title: "Content Production",
                desc: "From social storytelling to campaign visuals, we create content built for attention and recall.",
              },
              {
                icon: LayoutGrid,
                title: "Digital Presence",
                desc: "Web strategy, landing page thinking, SEO direction, and digital consistency that supports business credibility.",
              },
            ].map((service, index) => (
              <motion.article
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                whileHover="hover"
                className="group rounded-[28px] border border-white/10 bg-white/[0.02] p-7 md:p-8 backdrop-blur-sm transition"
              >
                <service.icon className="h-8 w-8 text-yellow-400 transition group-hover:rotate-6" />
                <h3 className="mt-6 text-xl font-medium text-white">{service.title}</h3>
                <p className="mt-4 text-yellow-400 leading-relaxed text-sm md:text-[15px]">
                  {service.desc}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section id="work" className="px-6 py-24 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Work"
            title="Selected Work That Reflects"
            accent="Strategy + Creativity"
            description="Every project is approached differently because every brand grows differently."
            center
          />
          

          <div className="mt-14 grid lg:grid-cols-2 gap-8">
            <motion.article
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              whileHover="hover"
              className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02]"
            >
              <div className="relative h-[300px]">
                <Image
                  src="/images/strategy.png"
                  alt="Cranky Potato project visual"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              </div>

              <div className="p-7 md:p-8">
                <p className="text-sm tracking-[0.28em] uppercase text-yellow-400/90">01</p>
                <h3 className="mt-3 text-2xl md:text-[2rem] font-medium text-white">
                  Strategy
                </h3>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  Helping shape a local food brand through story-based positioning, visual
                  identity, and communication ideas designed for stronger customer recall.
                </p>
              </div>
            </motion.article>

            <motion.article
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              whileHover="hover"
              className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02]"
            >
              <div className="relative h-[300px]">
                <Image
                  src="/images/branding.png"
                  alt="Emerging Brand Campaigns project visual"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              </div>

              <div className="p-7 md:p-8">
                <p className="text-sm tracking-[0.28em] uppercase text-yellow-400/90">02</p>
                <h3 className="mt-3 text-2xl md:text-[2rem] font-medium text-white">
                  Emerging Brand Campaigns
                </h3>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  Supporting growing businesses with social media systems, visual content, and
                  practical campaign direction.
                </p>
              </div>
            </motion.article>
          </div>

            {/*<div className="mt-10 flex justify-start">
            <button
              onClick={() => scrollTo("more-projects")}
              className="rounded-full border border-white/20 bg-white/[0.03] px-6 py-3 font-medium text-white transition hover:border-white/40 hover:bg-white/[0.06]"
            >
              View More Projects
            </button>
          </div>*/}

          <div
            id="more-projects"
            className="mt-10 grid md:grid-cols-3 gap-6"
          >
            {[
              {
                title: "Brand Clarity Sprints",
                desc: "A quick thinking system to sharpen messaging, visuals, and customer perception.",
              },
              {
                title: "Content Direction Systems",
                desc: "Practical creative planning for consistent content that feels aligned and intentional.",
              },
              {
                title: "Campaign Rollouts",
                desc: "Launch-ready marketing ideas built around attention, conversion, and follow-through.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                whileHover="hover"
                className="rounded-[24px] border border-white/10 bg-white/[0.02] p-6"
              >
                <p className="text-yellow-400 text-sm tracking-[0.28em] uppercase">
                  0{i + 3}
                </p>
                <h4 className="mt-4 text-xl font-medium text-white">{item.title}</h4>
                <p className="mt-3 text-gray-300 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="px-6 py-24 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Results"
            title="What Good Marketing Should"
            accent="Create"
            description="Marketing should do more than look good. It should create real movement in how people see, remember, and respond to your brand."
            center
          />

          <div className="mt-14 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                icon: BadgeCheck,
                title: "Better Brand Recall",
                desc: "People should remember you even after they scroll away.",
              },
              {
                icon: MessageSquareMore,
                title: "Stronger Engagement",
                desc: "Attention matters only when it turns into interaction.",
              },
              {
                icon: Handshake,
                title: "Business Conversations",
                desc: "Marketing should open real opportunities.",
              },
              {
                icon: SignalHigh,
                title: "Sustained Visibility",
                desc: "Consistency creates long-term growth.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                whileHover="hover"
                className="rounded-[24px] border border-white/10 bg-white/[0.02] p-7"
              >
                <item.icon className="h-8 w-8 text-yellow-400 transition group-hover:rotate-6" />
                <h3 className="mt-6 text-xl font-medium text-white">{item.title}</h3>
                <p className="mt-4 text-gray-300 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="px-6 py-24 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Plans"
            title="Pricing Plans That Fit"
            accent="Each Stage"
            description="Flexible packages. Real results. Designed for businesses at every stage."
            center
          />

          <div className="mt-14 grid lg:grid-cols-3 gap-6">
            {[
              {
                name: "Basic Plan",
                price: "₹5,000 / month",
                highlight: "Great for building a strong online presence.",
                features: [
                  "4 Social Media Creatives",
                  "2 Reels / Short Videos (up to 30 sec each)",
                  "Story Support (8 stories per month)",
                  "Content Calendar (Monthly Plan)",
                  "Basic Page Optimization (Profile, Highlights, Bio)",
                  "WhatsApp Support (Priority Support)",
                ],
              },
              {
                name: "Growth Plan",
                price: "₹10,000 / month",
                highlight: "Built for businesses ready to grow faster and scale.",
                features: [
                  "8 Social Media Creatives",
                  "4 Reels / Short Videos",
                  "Story Support (12 stories per month)",
                  "Ad Campaign Support (2 campaigns setup)",
                  "Competitor Review (Monthly Analysis)",
                  "Monthly Strategy Call (Growth Planning)",
                  "Lead-Focused Content (Custom content plan)",
                ],
              },
              {
                name: "Premium Plan",
                price: "₹15,000+ / month",
                highlight: "Full-scale branding, content, and marketing support.",
                features: [
                  "Full Social Media Management",
                  "12 Social Media Creatives",
                  "8 Reels / Short Videos",
                  "Ad Campaign Optimization",
                  "Branding Consultation",
                  "Weekly Content Planning",
                  "Monthly Performance Review",
                  "Priority Support",
                ],
              },
            ].map((plan, i) => {
              const featured = i === 1;

              return (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  whileHover="hover"
                  className={[
                    "rounded-[28px] border p-8 md:p-9",
                    featured
                      ? "border-yellow-400/80 bg-yellow-400/10 shadow-lg shadow-yellow-400/10"
                      : "border-white/10 bg-white/[0.02]",
                  ].join(" ")}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-medium text-white">{plan.name}</h3>
                      <p className="mt-3 text-3xl font-semibold text-yellow-400">
                        {plan.price}
                      </p>
                    </div>

                    {featured ? (
                      <span className="rounded-full border border-yellow-400/60 bg-black/20 px-3 py-1 text-xs uppercase tracking-[0.22em] text-yellow-400">
                        Most Popular
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-4 text-gray-300 leading-relaxed">{plan.highlight}</p>

                  <ul className="mt-7 space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-3 text-gray-300">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-yellow-400" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 py-24 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Process"
            title="How We"
            accent="Work"
            description="A clear process keeps the work focused, efficient, and aligned with what your business actually needs."
            center
          />

          <div className="mt-14 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                icon: Lightbulb,
                title: "Understand",
                desc: "We begin by learning your business, audience, and current market position.",
              },
              {
                step: "02",
                icon: Target,
                title: "Build",
                desc: "We create a strategy aligned with your goals.",
              },
              {
                step: "03",
                icon: Sparkles,
                title: "Execute",
                desc: "Content, campaigns, and assets are developed with clarity and intent.",
              },
              {
                step: "04",
                icon: TrendingUp,
                title: "Refine",
                desc: "We observe what works and improve continuously.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                whileHover="hover"
                className="rounded-[24px] border border-white/10 bg-white/[0.02] p-7"
              >
                <p className="text-sm tracking-[0.28em] uppercase text-yellow-400/90">
                  {item.step}
                </p>
                <item.icon className="mt-5 h-7 w-7 text-yellow-400" />
                <h3 className="mt-5 text-xl font-medium text-white">{item.title}</h3>
                <p className="mt-4 text-gray-300 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-6 py-24 md:py-28">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-[1fr_1fr] gap-10 items-start">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <SectionHeading
              eyebrow="Why Choose Us"
              title="Why Businesses Prefer Working"
              accent="With Us"
            />

            <p className="mt-6 text-gray-300 leading-relaxed max-w-2xl">
              Because we keep marketing practical.
              <br />
              <br />
              We focus on what suits your stage, your audience, and your business priorities —
              whether you are building visibility, launching something new, or strengthening your
              digital identity.
            </p>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-[28px] border border-white/10 bg-white/[0.02] p-8 md:p-10"
          >
            <div className="mb-6 flex items-center gap-3 text-yellow-400">
              <Users className="h-5 w-5" />
              <span className="text-sm uppercase tracking-[0.28em]">Our Approach</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Thoughtful creative direction",
                "Flexible execution",
                "Close working involvement",
                "Business-first mindset",
              ].map((point, i) => (
                <div
                  key={i}
                  className="rounded-[20px] border border-white/10 bg-black/20 px-5 py-5 text-gray-200"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-yellow-400" />
                    <span className="leading-relaxed">{point}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOUNDER / HUMAN SECTION */}
      <section className="px-6 py-24 md:py-28">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-center">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.02]"
          >
            <div className="relative h-[430px]">
              <Image
                src="/images/creative.png"
                alt="The Duos Media creative workspace"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <SectionHeading
              eyebrow="Founder"
              title="Built With A Close Understanding Of"
              accent="Growing Businesses"
            />

            <p className="mt-6 text-gray-300 leading-relaxed max-w-2xl">
              We know many brands do not need noise — they need direction.
              <br />
              <br />
              That is why our work stays focused on helping businesses communicate clearly, look
              stronger, and grow with purpose.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-6 py-24 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Testimonials"
            title="What People Appreciate About"
            accent="Working With Us"
            description="The best feedback is when the process feels practical, creative, and easy to trust."
            center
          />

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              "They understood our business before suggesting solutions. - Rudransh Fitness",
              "The communication felt practical and creative at the same time. - Parera Coffee",
              "Their approach was simple, sharp, and growth-oriented. - Sky-Hi Dining",
            ].map((quote, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                whileHover="hover"
                className="rounded-[24px] border border-white/10 bg-white/[0.02] p-7"
              >
                <MessageSquareMore className="h-8 w-8 text-yellow-400" />
                <p className="mt-6 text-gray-300 leading-relaxed italic">“{quote}”</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST / INTRO STRIP */}
      {/*<section className="px-6 py-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-6xl rounded-[28px] border border-white/10 bg-white/[0.02] px-6 md:px-10 py-10 md:py-12"
        >
          <p className="text-2xl md:text-3xl font-medium leading-[1.2] tracking-tight text-white">
            Brands today don’t just need marketing, they need clarity, consistency, and
            creative direction.
          </p>

          <p className="mt-5 max-w-4xl text-gray-300 leading-relaxed">
            At The Duos Media, we work closely with businesses to shape communication that
            attracts attention, builds recall, and supports growth.
          </p>
        </motion.div>
      </section>*/}

      {/* FINAL CTA */}
      <section className="px-6 py-24 md:py-28">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 items-center rounded-[32px] border border-white/10 bg-white/[0.02] p-6 md:p-8">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className="text-xs md:text-sm tracking-[0.35em] uppercase text-yellow-400/90 mb-4">
              The Duos Media
            </p>

            <h2 className="text-4xl md:text-5xl font-medium leading-[1.1] tracking-tight">
              Let’s Build Something People{" "}
              <span className="text-yellow-400">Remember</span>
            </h2>

            <p className="mt-6 text-gray-300 leading-relaxed max-w-xl">
              If your brand needs stronger presence, sharper communication, or a more meaningful
              digital direction, let’s start the conversation.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Strategy%20Discussion`}
                className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-6 py-3 font-medium text-black shadow-lg shadow-yellow-400/20 transition hover:scale-[1.02]"
              >
                Book A Strategy Discussion
              </a>

              <a
                href={WHATSAPP_LINK}
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/[0.03] px-6 py-3 font-medium text-white transition hover:border-white/40 hover:bg-white/[0.06]"
              >
                Connect On WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="relative overflow-hidden rounded-[28px] border border-white/10 bg-black/20"
          >
            <div className="relative h-[420px]">
              <Image
                src="/images/cta-desk.png"
                alt="Premium strategy desk"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-5xl text-center rounded-[28px] border border-white/10 bg-white/[0.02] px-6 md:px-10 py-12">
          <SectionHeading
            eyebrow="Contact"
            title="Start The"
            accent="Conversation"
            description="Tell us what you are building, and we’ll explore how we can help shape it better."
            center
          />

          <div className="mt-10 flex flex-col gap-4 items-center text-gray-200">
            <a href={`mailto:${CONTACT_EMAIL}`} className="transition hover:text-yellow-400">
              📩 {CONTACT_EMAIL}
            </a>
            <a href={`tel:${CONTACT_PHONE}`} className="transition hover:text-yellow-400">
              📞 {CONTACT_PHONE}
            </a>
            <a href={WHATSAPP_LINK} className="transition hover:text-yellow-400">
              🌐 WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-sm text-gray-500">
        Stories that build business.
      </footer>
    </main>
  );
}