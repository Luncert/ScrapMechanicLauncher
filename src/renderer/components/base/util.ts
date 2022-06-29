
export function names(...names: string[]) {
  return names.join(' ')
}
  
export function check(result: boolean, className: string): string {
  return result ? className : ''
}

export function parseRgb(rgb: string) {
  let m = rgb.match(/^rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*(\d+)\s*)?\)$/i)
  if (m) {
    let r = parseFloat(m[1])
    let g = parseFloat(m[2])
    let b = parseFloat(m[3])
    let a = parseFloat(m[4]) | 1
    return ({r, g, b, a})
  } else {
    throw new Error('failed to parse color ' + rgb + ' to rgb data')
  }
}

export function adjustBrightness({r, g, b, a}: {r: number, g: number, b: number, a: number}, percent: number){
  return 'rgba(' +
     (r + (256 - r) * percent / 100) + ',' +
     (g + (256 - g) * percent / 100) + ',' +
     (b + (256 - b) * percent / 100) + ',' +
     a + ')';
}