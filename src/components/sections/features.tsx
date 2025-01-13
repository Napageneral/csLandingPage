import Features from "@/components/features-horizontal";
import Section from "@/components/section";
import { BarChart3, Brain, FileText, LineChart } from "lucide-react";

const data = [
  {
    id: 1,
    title: "Comedic Highlight Reel",
    content: "Instantly uncover inside jokes, witty one-liners, and shared laughter from years of texting.",
    image: "/dashboard.png",
    icon: <BarChart3 className="h-6 w-6 text-primary" />,
  },
  {
    id: 2,
    title: "Emotional Mood Graph",
    content: "Visualize how your chat’s tone rises and falls—pinpoint the most positive stretches or deeper, reflective phases.",
    image: "/dashboard.png",
    icon: <Brain className="h-6 w-6 text-primary" />,
  },
  {
    id: 3,
    title: "Archetype & Avatar",
    content: "Our AI assigns an archetype and generates a one-of-a-kind image that captures your relationship’s vibe.",
    image: "/dashboard.png",
    icon: <LineChart className="h-6 w-6 text-primary" />,
  },
  {
    id: 4,
    title: "One-Click Analysis",
    content: "Just pick a chat, click “Analyze,” and let ChatStats handle the rest—right on your Mac.",
    image: "/dashboard.png",
    icon: <FileText className="h-6 w-6 text-primary" />,
  },
];

export default function Component() {
  return (
    <Section title="Features" subtitle="See Your Chats Like Never Before">
      <Features collapseDelay={5000} linePosition="bottom" data={data} />
    </Section>
  );
}
