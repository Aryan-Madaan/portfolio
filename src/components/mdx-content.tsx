import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { Spoiler } from "@/components/spoiler";
import { ChessboardDiagram } from "@/components/chessboard-diagram";
import { RopeBurnDiagram } from "@/components/rope-burn-diagram";
import { BridgeTorchDiagram } from "@/components/bridge-torch-diagram";
import { HarnessStackDiagram } from "@/components/harness-stack-diagram";
import { LoopCycleDiagram } from "@/components/loop-cycle-diagram";

const components = {
  Spoiler,
  ChessboardDiagram,
  RopeBurnDiagram,
  BridgeTorchDiagram,
  HarnessStackDiagram,
  LoopCycleDiagram,
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
