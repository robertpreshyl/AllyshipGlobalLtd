'use client'

import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const teamMembers = [
  {
    id: 1,
    name: "Robert Smith",
    designation: "Chief Executive Officer",
    image: "/images/team/robert-smith.svg",
  },
  {
    id: 2,
    name: "Sarah Chen",
    designation: "Chief Investment Officer",
    image: "/images/team/sarah-chen.svg",
  },
  {
    id: 3,
    name: "Michael Patel",
    designation: "Head of Global Operations",
    image: "/images/team/michael-patel.svg",
  },
  {
    id: 4,
    name: "Emma Mueller",
    designation: "Chief Strategy Officer",
    image: "/images/team/emma-mueller.svg",
  },
];

export function LeadershipTeam() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Leadership Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the visionaries driving our global investment strategy and operations.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <AnimatedTooltip items={teamMembers} />
        </div>
      </div>
    </section>
  );
} 