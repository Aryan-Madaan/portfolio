import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { Spoiler } from "@/components/spoiler";
import { ChessboardDiagram } from "@/components/chessboard-diagram";

const components = {
  Spoiler,
  ChessboardDiagram,
};

export function MdxContent({ source }: { source: string }) {
  return (
    <div className="prose-schematic">
      <MDXRemote
        source={source}
        components={components}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
            rehypePlugins: [
              rehypeSlug,
              [rehypeAutolinkHeadings, { behavior: "wrap" }],
            ],
          },
        }}
      />
    </div>
  );
}
