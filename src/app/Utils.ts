export class Utils {

  static convertToUnit(value: number, unit?: 'px' | 'rem' | '%'): string {
    const REM: number = + window.getComputedStyle(document.documentElement).fontSize.slice(0, -2) || 16;
    if (unit === 'rem') {
      return value / REM + 'rem'
    }
    return value + (unit || '');
  }
}