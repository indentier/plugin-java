import { describe, expect, it } from 'vitest';
import { format, resolveOptions } from 'indentier';
import plugin from '../src/index.ts';

describe('@indentier/plugin-java', () => {
  it('registers .java extension', () => {
    expect(plugin.extensions).toContain('.java');
  });

  it('is NOT ruby compatible', () => {
    expect(plugin.rubyCompatible).toBe(false);
  });

  it('formats a Java file in default mode (brace exiling)', () => {
    const input = 'public class Foo {\n  void bar() {\n    System.out.println("hi");\n  }\n}\n';
    const out = format(input, resolveOptions({ minColumn: 60, offset: 4 }), '.java', plugin);
    // Braces should be moved to the right margin
    expect(out.split('\n')[0]).toMatch(/public class Foo\s+\{$/);
  });

  it('does NOT inject declaration or end in ruby mode', () => {
    const input = 'public class Foo {\n  void bar() {\n    System.out.println("hi");\n  }\n}\n';
    const out = format(
      input,
      resolveOptions({ mode: 'ruby', minColumn: 60, offset: 4 }),
      '.java',
      plugin,
    );
    expect(out).not.toContain('null');
    expect(out.split('\n').some((l) => l.trim() === 'end')).toBe(false);
  });
});
