import BlurFade from "@/components/magicui/blur-fade";
import Section from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Shield, Zap, CircleOff, Wrench } from "lucide-react";

const problems = [
  {
    title: "Data Overload",
    description:
      "Tens of thousands of iMessages pile up—full of jokes, heartfelt moments, and clues about who we are. Most of us never see the bigger picture.",
    icon: Brain,
  },
  {
    title: "Missed Opportunities for Reflection",
    description:
      "Scrolling massive chat histories is tedious, making it easy to miss hidden gems or subtle patterns that spark deeper connections.",
    icon: CircleOff,
  },
  {
    title: "Complex or Nonexistent Tools",
    description:
      "iMessage data is tricky to analyze—most solutions lack a fun “year in review,” leaving you with raw messages and no way to see the big picture.",
    icon: Wrench,
  },
];

export default function Component() {
  return (
    <Section
      title="Problem"
      subtitle="Your Chats Are Bursting with Untapped Stories"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {problems.map((problem, index) => (
          <BlurFade key={index} delay={0.2 + index * 0.2} inView>
            <Card className="bg-background border-none shadow-none">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </div>
    </Section>
  );
}
