type mods = Record<string, string | boolean>;

export function className(
  cls: string,
  mods: mods,
  additionals: Array<string>,
): string {
  return [
    cls,
    ...additionals,
    ...Object.entries(mods)
      .filter(([key, value]) => Boolean(value))
      .map(([key, value]) => key),
  ].join(' ');
}
