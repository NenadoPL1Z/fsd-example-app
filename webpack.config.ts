import {BuildConfiguration} from "./config/build/types/build";
import buildConfig from "./config/build";
import {BuildMode, BuildPaths} from "./config/build/types/config";
import getPathDirname from "./config/helpers/getPathFromDirname";

const mode: BuildMode = "production"

const paths: BuildPaths = {
    entry: getPathDirname("src", "index.ts"),
    build: getPathDirname("build"),
    html: getPathDirname("public", "index.html")
}

const config: BuildConfiguration = buildConfig({
    mode,
    paths,
})

export default config