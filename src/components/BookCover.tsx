import Image from "next/image";
import type { Book } from "@/data/site";

// Shared cover renderer for the books list and the book modal: a real
// scanned cover when the family archive has one, otherwise a tasteful
// placeholder that stays consistent with the site's sepia/gold Moroccan
// design system (zellige star ornament, arch frame, display font title)
// instead of a broken image or an empty box.
export default function BookCover({
  book,
  className = "",
  starClassName = "",
  titleClassName = "",
}: {
  book: Pick<Book, "title" | "cover">;
  className?: string;
  starClassName?: string;
  titleClassName?: string;
}) {
  if (book.cover) {
    return (
      <div className={`arch-frame relative overflow-hidden ${className}`}>
        <Image
          src={book.cover}
          alt={`עטיפת הספר ${book.title}`}
          fill
          sizes="192px"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`arch-frame relative flex flex-col items-center justify-center gap-3 overflow-hidden bg-gradient-to-b from-[rgba(205,161,90,0.16)] via-[rgba(35,26,19,0.9)] to-[rgba(15,9,6,0.95)] p-3 text-center ${className}`}
    >
      <span className={`zellige-star ${starClassName}`} />
      <p
        className={`font-display leading-6 text-sepia-100 ${titleClassName}`}
      >
        {book.title}
      </p>
      <span className={`zellige-star ${starClassName}`} />
    </div>
  );
}
