import {
  Tree,
  formatFiles,
  installPackagesTask,
  generateFiles,
  joinPathFragments,
  names,
} from '@nrwl/devkit';

export interface WebComponentGenerator {
  name: string;
  componentType?: string;
}

const uppercase = (value: string | undefined) => {
  return value ? value.replace(/\b\w/g, (c: string) => c.toUpperCase()) : null;
}

export default async function (tree: Tree, schema: WebComponentGenerator) {
  if (schema.name.length > 0) {
    await generateFiles(
      tree,
      joinPathFragments(__dirname, './files'),
      `/packages/${schema.name}`,
      {
        ...names(schema.name), // {name: 'my-name', className: 'MyName', propertyName: 'myName', constantName: 'MY_NAME', fileName: 'my-name'}
        componentType: schema.componentType,
        componentTypeClass: uppercase(schema.componentType)
      }
    );
    await formatFiles(tree);
    return () => {
      installPackagesTask(tree);
    };
  }
}
