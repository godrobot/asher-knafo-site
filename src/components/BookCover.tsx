import Image from "next/image";
import type { Book } from "@/data/site";

// Shared cover renderer for the books list and the book modal: a real
// scanned cover when the family archive has one, otherwise a tasteful
// placeholder that stays consistent with the site's sepia/gold Moroccan
// design system (zellige star ornament, arch frame, display font title)
// instead of a broken image or an empty box.
// Fixed pixel box (not just Tailwind h-/w- utilities) so every card — real
// cover or placeholder, in the list or in the modal — renders the exact
// same footprint and the cards line up instead of each hugging its own
// content size.
export default function BookCover({
  book,
  className = "",
  starClassName = "",
  titleClassName = "",
  width = 128,
  height = 192,
}: {
  book: Pick<Book, "title" | "cover">;
  className?: string;
  starClassName?: string;
  titleClassName?: string;
  width?: number;
  height?: number;
}) {
  const boxStyle = {
    width,
    height,
    minWidth: width,
    minHeight: height,
    maxWidth: width,
    maxHeight: height,
  };

  if (book.cover) {
    return (
      <div
        className={`relative shrink-0 self-start overflow-hidden rounded-lg border border-gold-400/30 ${className}`}
        style={boxStyle}
      >
        <Image
          src={book.cover}
          alt={`עטיפת הספר ${book.title}`}
          fill
          sizes={`${width}px`}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex shrink-0 flex-col items-center justify-center gap-3 self-start overflow-hidden rounded-lg border border-gold-400/30 bg-gradient-to-b from-[rgba(205,161,90,0.16)] via-[rgba(35,26,19,0.9)] to-[rgba(15,9,6,0.95)] p-3 text-center ${className}`}
      style={boxStyle}
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
