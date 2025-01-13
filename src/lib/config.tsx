import { Icons } from "@/components/icons";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "ChatStats.ai",
  description: "Unlock Personal Insights with AI",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: ["SaaS", "Template", "Next.js", "React", "Tailwind CSS"],
  links: {
    email: "tyler@chatstats.ai",
    twitter: "https://twitter.com/chatstatsai",
    instagram: "https://instagram.com/chatstats/",
  },
  header: [
    // {
    //   trigger: "Features",
    //   content: {
    //     main: {
    //       icon: <Icons.logo className="h-6 w-6" />,
    //       title: "AI-Powered Automation",
    //       description: "Streamline your workflow with intelligent automation.",
    //       href: "#",
    //     },
    //     items: [
    //       {
    //         href: "#",
    //         title: "Task Automation",
    //         description: "Automate repetitive tasks and save time.",
    //       },
    //       {
    //         href: "#",
    //         title: "Workflow Optimization",
    //         description: "Optimize your processes with AI-driven insights.",
    //       },
    //       {
    //         href: "#",
    //         title: "Intelligent Scheduling",
    //         description: "AI-powered scheduling for maximum efficiency.",
    //       },
    //     ],
    //   },
    // },
    // {
    //   trigger: "Solutions",
    //   content: {
    //     items: [
    //       {
    //         title: "For Small Businesses",
    //         href: "#",
    //         description: "Tailored automation solutions for growing companies.",
    //       },
    //     ],
    //   },
    // },
    // {
    //   href: "/blog",
    //   label: "Blog",
    // },
  ],
  pricing: [
    {
      name: "Single Chat",
      href: "#",
      price: "$10",
      period: "one-time",
      // yearlyPrice: "$16",
      features: [
        "One detailed Wrapped report",
        "Comedic highlights & Emotional overview",
        "Unique Archetype & Avatar",
        "Data encrypted in transit",
        "Instant shareable link (if you choose)"
      ],
      description: "Perfect for a quick peek into one conversation",
      buttonText: "Analyze Now",
      isPopular: false,
    },
    {
      name: "All Chats Wrapped",
      href: "#",
      price: "$50",
      period: "one-time",
      // yearlyPrice: "$40",
      features: [
        "Unlimited chat analyses",
        "50% savings vs. single-chat pricing",
        "Year in review for every conversation",
        "All Comedic & Emotional reports",
        "Unique Archetypes & Avatars"
      ],
      description: "Best value for text connoisseurs",
      buttonText: "Wrap Them All",
      isPopular: true,
    },
  ],
  faqs: [
    {
      question: "What is ChatStats.ai?",
      answer: (
        <span>
          ChatStats.ai is a macOS app that uses AI to turn your iMessage history
          into a fun, shareable “Year in Review.” You’ll see highlights of your
          funniest exchanges, an emotional mood graph, and a unique Archetype +
          Avatar—all without sifting through thousands of messages.
        </span>
      ),
    },
    {
      question: "How can I get started with ChatStats.ai?",
      answer: (
        <span>
          Simply download the macOS app, choose any iMessage conversation, and
          click “Analyze.” You can try three chats for free before deciding if you
          want to pay per chat or purchase the All Chats Wrapped plan.
        </span>
      ),
    },
    {
      question: "Is my data secure if you process it on external servers?",
      answer: (
        <span>
          Yes. Your data is encrypted both locally and in transit. We briefly
          process your messages on our servers to generate your analysis, but they
          are deleted immediately once the report is complete. The only time
          any details are shared is if you choose to share your Wrapped link with
          someone else.
        </span>
      ),
    },
    {
      question: "What if I only want one or two chats analyzed?",
      answer: (
        <span>
          Our Single Chat option is perfect for occasional analyses, priced at
          $10 per chat. Each report includes comedic highlights, an emotional
          overview, and a unique Archetype + Avatar.
        </span>
      ),
    },
    {
      question: "Can I share my ChatStats reports with friends?",
      answer: (
        <span>
          Absolutely! Each chat you analyze generates a private link you can share
          if you want others to see your results—especially fun for reminiscing
          over inside jokes and memorable moments.
        </span>
      ),
    },
  ],
  footer: [
    // {
    //   title: "Product",
    //   links: [
    //     { href: "#", text: "Features", icon: null },
    //     { href: "#", text: "Pricing", icon: null },
    //     { href: "#", text: "Documentation", icon: null },
    //     { href: "#", text: "API", icon: null },
    //   ],
    // },
    // {
    //   title: "Company",
    //   links: [
    //     { href: "#", text: "About Us", icon: null },
    //     { href: "#", text: "Careers", icon: null },
    //     { href: "#", text: "Blog", icon: null },
    //     { href: "#", text: "Press", icon: null },
    //     { href: "#", text: "Partners", icon: null },
    //   ],
    // },
    {
      title: "Resources",
      links: [
        { href: "#", text: "Contact", icon: null },
        { href: "#", text: "Support", icon: null },
      ],
    },
    {
      title: "Social",
      links: [
        {
          href: "#",
          text: "Twitter",
          icon: <FaTwitter />,
        },
        {
          href: "#",
          text: "Instagram",
          icon: <RiInstagramFill />,
        },
        {
          href: "#",
          text: "Youtube",
          icon: <FaYoutube />,
        },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
