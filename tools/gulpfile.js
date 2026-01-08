const gulp = require("gulp");
const del = require("del");

const downloadResources = require("./buildscripts/gulp-downloadResources");

const mcreslistmctsigs = ["reslist/minecraftcreatortools.resources.json"];
const mcreslistvanillasigs = ["reslist/packs.resources.json"];
const mcreslistpreviewvanillasigs = ["reslist/packs-preview.resources.json"];
const mcreslistsamplesigs = ["reslist/samples.resources.json"];
const mcreslistscriptsamplesigs = ["reslist/scriptsamples.resources.json"];
const mcreslistgametestsigs = ["reslist/gametestsamples.resources.json"];

function runDownloadSamples() {
  return gulp
    .src(mcreslistsamplesigs, { base: "" })
    .pipe(downloadResources("./dlresources/samples/microsoft/"));
}

function runDownloadScriptSamples() {
  return gulp
    .src(mcreslistscriptsamplesigs, { base: "" })
    .pipe(downloadResources("./dlresources/samples/microsoft/"));
}

function runDownloadGameTests() {
  return gulp
    .src(mcreslistgametestsigs, { base: "" })
    .pipe(downloadResources("./dlresources/samples/microsoft/"));
}

function runDownloadVanillaResources() {
  return gulp
    .src(mcreslistvanillasigs, { base: "" })
    .pipe(downloadResources("./dlresources/latest/van/release/"));
}

function runDownloadVanillaPreviewResources() {
  return gulp
    .src(mcreslistpreviewvanillasigs, { base: "" })
    .pipe(downloadResources("./dlresources/latest/van/preview/"));
}

function runDownloadMinecraftCreatorTools() {
  return gulp
    .src(mcreslistmctsigs, { base: "" })
    .pipe(downloadResources("./dlresources/tools/"));
}

gulp.task("clean-res", function () {
  return del.deleteAsync(["./dlresources/"]);
});

gulp.task(
  "dlres",
  gulp.series(
    "clean-res",
    runDownloadMinecraftCreatorTools,
    gulp.parallel(
      runDownloadSamples,
      runDownloadScriptSamples,
      runDownloadGameTests,
      runDownloadVanillaResources,
      runDownloadVanillaPreviewResources
    )
  )
);

gulp.task("clean-build", function () {
  return del.deleteAsync(["build/workcontent"]);
});

function copyWorkContentPublicBase() {
  return gulp
    .src(["dlresources/tools/mct/app/public/**/*"])
    .pipe(gulp.dest("build/workcontent/public"));
}

function copyWorkContentPublicSamples() {
  return gulp
    .src(["dlresources/samples/**/*"])
    .pipe(gulp.dest("build/workcontent/public/res/samples"));
}

function copyWorkContentPublicLatest() {
  return gulp
    .src(["dlresources/latest/**/*"])
    .pipe(gulp.dest("build/workcontent/public/res/latest"));
}

// Copy essential data files from the @minecraft/creator-tools npm package
// These include typedefs, mci files, and libs that are required by the mct CLI
function copyNpmPackageData() {
  return gulp
    .src([
      "node_modules/@minecraft/creator-tools/data/typedefs*.json",
      "node_modules/@minecraft/creator-tools/data/libs.json",
      "node_modules/@minecraft/creator-tools/data/mci/**/*",
      "node_modules/@minecraft/creator-tools/data/mch/**/*"
    ], { base: "node_modules/@minecraft/creator-tools/data" })
    .pipe(gulp.dest("build/workcontent/public/data"));
}

gulp.task(
  "build",
  gulp.series(
    "clean-build",
    copyWorkContentPublicBase,
    gulp.parallel(copyWorkContentPublicSamples, copyWorkContentPublicLatest, copyNpmPackageData)
  )
);

gulp.task("preparedevenv", gulp.series("dlres", "build"));
