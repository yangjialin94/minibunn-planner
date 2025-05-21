import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { ChangelogItem, getAllChangelogItems } from "@/lib/getChangelog";

const tagStyles: Record<string, string> = {
  New: "bg-green-200 text-green-800",
  Improvement: "bg-blue-200 text-blue-800",
  Update: "bg-yellow-200 text-yellow-800",
  Launch: "bg-purple-200 text-purple-800",
};

export default function ChangelogPage() {
  const changes: ChangelogItem[] = getAllChangelogItems();

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <h1>What&apos;s New in Minibunn Planner?</h1>
        <h2>
          See the latest updates, improvements, and new features we&apos;ve
          added.
        </h2>
      </section>

      {/* Changelog Section */}
      <section className="relative flex flex-col px-2 py-4 backdrop-blur-md md:pl-36">
        <div className="flex flex-col gap-2 border-neutral-200 sm:gap-6 md:gap-12 md:border-l-2">
          {changes.map((item) => (
            <div
              key={item.slug}
              className="relative border-b-2 border-neutral-200 pb-4 sm:pb-8 md:border-none md:pb-0 md:pl-8"
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
              <div>
                {/* Small screen summary */}
                <p className="block text-neutral-500 md:hidden">
                  {item.summary || item.content}
                </p>

                {/* Full content on larger screens */}
                <div className="hidden md:block">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      p: ({ ...props }) => (
                        <p className="mt-2 text-neutral-500" {...props} />
                      ),
                      li: ({ ...props }) => (
                        <li className="ml-6 list-disc" {...props} />
                      ),
                      ul: ({ ...props }) => (
                        <ul className="mb-2 ml-4 list-disc" {...props} />
                      ),
                    }}
                  >
                    {item.content}
                  </ReactMarkdown>
                </div>
              </div>

              {/* Tags */}
              <div className="mt-3 flex flex-wrap gap-2">
                {(Array.isArray(item.type) ? item.type : [item.type]).map(
                  (tag) => (
                    <span
                      key={tag}
                      className={`rounded-full px-3 py-1 text-sm font-medium ${
                        tagStyles[tag] || "bg-neutral-200 text-neutral-600"
                      }`}
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
