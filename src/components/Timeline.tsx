import { timelineMilestones } from "@/data/site";
import LinkedText from "./LinkedText";
import { siteLinks } from "@/lib/keyword-links";

// A vertical timeline of Asher Knafo's real, dated milestones — replaces the
// old 3-card grid (which only showed 1935 / 1951 / 1977) with the full list
// already compiled from his bio, CV, and the awards/books data on the site.
export default function Timeline() {
  return (
    <ol className="relative border-r-2 border-gold-400/25 pr-8">
      {timelineMilestones.map((m, i) => (
        <li key={i} className="relative pb-10 last:pb-0">
          <span className="absolute right-[-2.05rem] top-1 h-3.5 w-3.5 rounded-full border-2 border-gold-400 bg-sepia-950" />
          <p className="font-display text-lg font-bold gold-text">
            {m.year}
          </p>
          <p className="mt-1 text-sm leading-7 text-sepia-200">
            <LinkedText text={m.label} rules={siteLinks} />
          </p>
        </li>
      ))}
    </ol>
  );
}
