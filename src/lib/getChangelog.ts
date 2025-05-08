import fs from "fs";
import matter from "gray-matter";
import path from "path";

const changelogDir = path.join(process.cwd(), "src/content/changelog");

export interface ChangelogItem {
  slug: string;
  title: string;
  date: string;
  type: string;
  content: string;
}

/**
 * Get the changelog item by slug
 */
export function getAllChangelogItems(): ChangelogItem[] {
  return fs
    .readdirSync(changelogDir)
    .map((filename) => {
      const filePath = path.join(changelogDir, filename);
      const fileContents = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(fileContents);
      return {
        slug: filename.replace(/\.mdx$/, ""),
        title: data.title,
        date: data.date,
        type: data.type,
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
