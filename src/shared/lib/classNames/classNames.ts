type mods = Record<string, string | boolean>

export function classNames (
  cls: string,
  mods: mods,
  additionals: string[]
): string {
  return [
    cls,
    ...additionals,
    ...Object.entries(mods)
      .filter(([key, value]) => Boolean(value))
      .map(([key, value]) => key)
  ].join(' ')
}
