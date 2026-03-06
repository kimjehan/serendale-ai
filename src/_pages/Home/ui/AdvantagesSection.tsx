import {
  AppWindow,
  Blocks,
  CircleDollarSign,
  Infinity,
  NotepadText,
  PhoneOff,
} from "lucide-react";

const iconCN = "md:size-10 sm:size-8 text-indigo-600";

const advantages = [
  {
    icon: <CircleDollarSign className={iconCN} />,
    title: "A “payroll” that makes sense",
    desc: "Say goodbye to absurd salaries,bonuses, vacations, and sick days.",
  },
  {
    icon: <Blocks className={iconCN} />,
    title: "Few available spots",
    desc: "We keep our clients list short so you get that special treatment.",
  },
  {
    icon: <Infinity className={iconCN} />,
    title: "Unlimited brands",
    desc: "Only one monthly fee for streamlining your designs across all your businesses.",
  },
  {
    icon: <PhoneOff className={iconCN} />,
    title: "No (useless) meetings",
    desc: "We handle everything efficiently on Slack, in your dedicated chat – no meetings to waste your time.",
  },
  {
    icon: <NotepadText className={iconCN} />,
    title: "No need for contracts",
    desc: "Begin immediately, retain full copyright control over your designs, and forget about tricky contract terms.",
  },
  {
    icon: <AppWindow className={iconCN} />,
    title: "Tools you know and love",
    desc: "We use Figma, the Adobe Creative Suite, Slack, and Stripe to deliver you the best results.",
  },
];

export const AdvantagesSection = () => {
  return (
    <section className="container mx-auto">
      <article className="lg:rounded-[48px] md:rounded-4xl sm:rounded-3xl rounded-lg lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1 sm:py-6 sm:px-6 lg:py-23 lg:px-24 md:py-10 md:px-10 py-4 px-4 space-y-10 gap-15 bg-[linear-gradient(110.94deg,rgba(31,31,31,0.4)_18.07%,rgba(44,44,44,0.4)_37.31%,rgba(43,43,43,0.4)_40.55%,rgba(14,14,14,0.4)_75.52%)]">
        {advantages.map((v, i) => (
          <div key={i} className="space-y-5">
            {v.icon}
            <h3>{v.title}</h3>
            <p>{v.desc}</p>
          </div>
        ))}
      </article>
    </section>
  );
};
