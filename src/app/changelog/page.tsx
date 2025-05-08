import { ChangelogItem, getAllChangelogItems } from "@/lib/getChangelog";

export default function ChangelogPage() {
  const changes: ChangelogItem[] = getAllChangelogItems();

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <h1>What&apos;s New in Minibunn Planner?</h1>
        <h2>Changelog</h2>
      </section>

      {/* Changelog Section */}
      <div className="relative flex flex-col pt-12 pb-24 sm:pb-36 md:pl-36">
        <div className="flex flex-col gap-8 border-neutral-200 md:gap-12 md:border-l-2">
          {changes.map((item) => (
            <div
              key={item.slug}
              className="relative border-b-2 border-neutral-200 pb-8 md:border-none md:pb-0 md:pl-8"
            >
              {/* Date */}
              <p className="absolute top-1.5 -left-32 hidden w-24 text-right text-sm font-semibold text-neutral-500 uppercase md:flex">
                {new Date(item.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>

              {/* Timeline circle */}
              <span className="absolute top-1.5 -left-[11px] hidden h-5 w-5 items-center justify-center md:flex">
                <span className="h-4 w-4 rounded-full border-4 border-neutral-500 bg-neutral-100"></span>
              </span>

              {/* Title */}
              <h3 className="font-semibold">{item.title}</h3>

              {/* Description */}
              <p className="mt-2 text-neutral-500">{item.content}</p>

              {/* Tags */}
              <p className="mt-3 flex w-fit rounded-full bg-neutral-200 px-3 py-1 text-sm font-medium text-neutral-500">
                {item.type}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
