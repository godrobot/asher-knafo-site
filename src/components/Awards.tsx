import { awards } from "@/data/site";

// Renders the real awards/recognition list, matching the site's existing
// sepia/gold card-panel visual language.
export default function Awards() {
  return (
    <section>
      <div className="zellige-divider mb-10">
        <span className="zellige-star" />
      </div>
      <h2 className="font-display text-center text-2xl font-bold text-gold-300 sm:text-3xl">
        פרסים והוקרה
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-center text-sepia-300">
        הכרה רשמית בתרומתו של אשר כנפו למחקר, לחינוך ולשימור מורשת יהדות
        צפון אפריקה.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {awards.map((award) => (
          <div key={award.name} className="card-panel p-6">
            <span className="text-xs tracking-widest text-gold-400">
              {award.year}
            </span>
            <h3 className="font-display mt-2 text-lg font-bold text-sepia-50">
              {award.name}
            </h3>
            <p className="mt-1 text-sm text-sepia-400">{award.body}</p>
            {award.description ? (
              <p className="mt-3 text-sm leading-7 text-sepia-300">
                {award.description}
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
}
