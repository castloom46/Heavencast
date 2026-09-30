import { Section } from "./Section";

const stats = [
  { k: "1:1", v: "Guided setup" },
  { k: "Upfront", v: "Fees confirmed" },
  { k: "7-day", v: "Service review" },
  { k: "24/7", v: "Human support" },
];

export function Stats() {
  return (
    <Section className="!py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.v} className="glass rounded-2xl p-6 text-center">
            <div className="text-4xl md:text-5xl font-bold text-gradient">{s.k}</div>
            <div className="mt-2 text-sm text-muted-foreground">{s.v}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
