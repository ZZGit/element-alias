import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const dir = "lib";

const config = [
  {
    input: "index.js",
    external: ['element-plus'],
    output: [
      {
        file: dir + "/index.min.js",
        format: "esm",
        sourcemap: false,
        plugins: [terser()],
      }
    ],
    plugins: [
      resolve()
    ],
    treeshake: true,
  },
];

export default config;
