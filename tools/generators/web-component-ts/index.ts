import {
  Tree,
  formatFiles,
  installPackagesTask,
  generateFiles,
  joinPathFragments,
  names,
} from '@nrwl/devkit';
import { libraryGenerator } from '@nrwl/workspace/generators';

export interface WebComponentGenerator {
  name: string;
}

export default async function (tree: Tree, schema: WebComponentGenerator) {
  // await libraryGenerator(tree, { name: schema.name });
  if (schema.name.length > 0) {
    await generateFiles(
      tree,
      joinPathFragments(__dirname, './files'),
      `/packages/${schema.name}`,
      names(schema.name) // {name: 'my-name', className: 'MyName', propertyName: 'myName', constantName: 'MY_NAME', fileName: 'my-name'}
    );
    await formatFiles(tree);
    return () => {
      installPackagesTask(tree);
    };
  }
}
