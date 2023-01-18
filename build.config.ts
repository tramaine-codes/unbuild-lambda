import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  entries: ['./src/lambda'],
  //   dependencies: ['dayjs'],
  //   externals: ['oracledb'],
  clean: true,
  rollup: {
    inlineDependencies: true,
    esbuild: {
      sourceMap: true,
    },
  },
});
