const pkg = require("gulp");
const swc = require("gulp-swc");
const concat = require("gulp-concat");

const _entry = ["./src/index.tsx"];
const { src, dest, watch, series, task } = pkg;

task("default", () => {
  return src(_entry)
    .pipe(
      swc({
        cwd: process.cwd(),
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
          },
          target: "esnext",
        },
        module: {
          type: "commonjs",
        },
      })
    )
    .pipe(concat("index.js"))
    .pipe(dest("dist"));
});

task("watch", () => {
  watch(_entry, series("default"));
});
