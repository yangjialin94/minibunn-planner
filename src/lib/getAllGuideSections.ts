import fs from "fs";
import matter from "gray-matter";
import path from "path";

// Interface for the guide section
export interface GuideSection {
  slug: string[];
  title: string;
  group: string;
  order: number;
}

// Path to the guide directory
const guideRoot = path.join(process.cwd(), "src/content/guide");

/**
 * Recursively walks through the guide directory and collects all sections.
 */
function walk(dir: string, group: string, sections: GuideSection[]) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // Recursively walk through subdirectories
      walk(fullPath, entry.name, sections);
    } else if (entry.name.endsWith(".mdx")) {
      // Get the file contents and metadata
      const fileContents = fs.readFileSync(fullPath, "utf-8");
      const { data } = matter(fileContents);

      // Extract the slug from the file path
      const relPath = path.relative(guideRoot, fullPath);
      const slug = relPath.replace(/\.mdx$/, "").split(path.sep);

      sections.push({
        slug,
        title: data.title || slug[slug.length - 1],
        group: data.group || group,
        order: data.order || 0,
      });
    }
  }
}

/**
 * Gets all guide sections from the guide directory.
 */
export const getAllGuideSections = () => {
  const sections: GuideSection[] = [];
  walk(guideRoot, "", sections);

  return sections.sort((a, b) => a.order - b.order);
};
