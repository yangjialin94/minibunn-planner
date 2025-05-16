import clsx from "clsx";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function GuideContent({ slug }: { slug: string[] }) {
  const filePath =
    path.join(process.cwd(), "src/content/guide", ...slug) + ".mdx";

  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }

  const file = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(file);

  return (
    <article className="mx-auto w-full max-w-5xl p-4">
      <h1 className="hidden text-3xl font-bold text-neutral-800 md:flex">
        {data.title}
      </h1>

      <div className="guide-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            ol: ({ node, ...props }) => {
              // Define a type for the node
              type ListNode = {
                children?: Array<{
                  children?: Array<{
                    value?: string;
                  }>;
                }>;
              };

              // Cast the node to the ListNode type
              const listNode = node as ListNode;

              // Check if the node has children and extract the heading
              const heading =
                listNode.children?.[1]?.children?.[0]?.value ?? "";
              const isLabelsSection = heading.includes("A. ");
              const isInputsSection = heading.includes("I. ");

              return (
                <ol
                  className={clsx("mt-4 space-y-2 pl-6 text-neutral-500", {
                    alpha: isLabelsSection,
                    roman: isInputsSection,
                    decimal: !isLabelsSection && !isInputsSection,
                  })}
                  {...props}
                />
              );
            },
            li({ children, ...props }) {
              let content = children;

              if (typeof children === "string") {
                content = children
                  .replace(/^[A-F]\.\s+/, "")
                  .replace(/^[IVXLCDM]+\.\s+/, "");
              }

              return (
                <li className="pl-2 marker:text-neutral-500" {...props}>
                  {content}
                </li>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </article>
  );
}

export default GuideContent;
