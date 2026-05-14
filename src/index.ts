import type { IndentierPlugin } from 'indentier';

/**
 * indentier plugin for Java (.java)
 *
 * Ruby mode is **disabled** for Java — a bare identifier expression such as `end;`
 * is not a valid statement in Java, and there is no concise file-scope variable
 * syntax that would work as a declaration.
 *
 * This plugin registers `.java` files so indentier can apply basic formatting
 * (brace/semicolon exiling) to them.
 */
const plugin: IndentierPlugin = {
  extensions: ['.java'],
  rubyCompatible: false,
  declarationTemplate: null,
};

export default plugin;
