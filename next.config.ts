import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    // Strings, not imports, so the plugin works under Turbopack too.
    remarkPlugins: ["remark-gfm"],
  },
});

export default withMDX(nextConfig);
