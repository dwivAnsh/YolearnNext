// constants/menuItems.ts
import {
  BookOpen,
  Brain,
  PencilLine,
  RefreshCcw,
  MicOff,
  Rocket,
  NotebookPen,
  User2,
} from "lucide-react";

// Define TypeScript types for menu items
interface MenuItem {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const menuItems: MenuItem[] = [
  { label: "Plan", icon: BookOpen },
  { label: "Learn", icon: Brain },
  { label: "Practice", icon: PencilLine },
  { label: "Revise", icon: RefreshCcw },
  { label: "Reflect", icon: MicOff },
  { label: "Grow", icon: Rocket },
];

export const shortcuts: MenuItem[] = [
  { label: "My Notebook", icon: NotebookPen },
  { label: "My Account", icon: User2 },
];

export const learningTools: string[] = [
  "Concept Coach",
  "Practice Quiz",
  "Study Notes",
  "Progress Tracker",
];

export const interactionPaceOptions: string[] = ["Fast", "Moderate", "Slow"];

export const feelingOptions: string[] = [
  "Excited",
  "Curious",
  "Stressed",
  "Confident",
];

export const interactionTutorOptions: string[] = [
  "Karol Wojtyla",
  "John Paul II",
  "Polish Pope",
];
