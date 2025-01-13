import Features from "@/components/features-vertical";
import Section from "@/components/section";
import { Sparkles, Upload, Zap } from "lucide-react";

const data = [
  {
    id: 1,
    title: "1. Install ChatStats on your Mac",
    content:
      "Download and install the ChatStats.ai app. For best results, you'll want to import an iPhone backup.",
    image: "/dashboard.png",
    icon: <Upload className="w-6 h-6 text-primary" />,
  },
  {
    id: 2,
    title: "2. Select a Chat to Analyze",
    content:
      "Choose any conversation from your iMessage history. Click “Analyze,” then sit back and let our AI do the heavy lifting.",
    image: "/dashboard.png",
    icon: <Zap className="w-6 h-6 text-primary" />,
  },
  {
    id: 3,
    title: "3. Get Your Personal ‘Year in Review’",
    content:
      "In minutes, see a fun highlight reel of your funniest moments, an emotional mood graph, and a unique archetype + avatar.",
    image: "/dashboard.png",
    icon: <Sparkles className="w-6 h-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section title="How it works" subtitle="Just 3 steps to get started">
      <Features data={data} />
    </Section>
  );
}
