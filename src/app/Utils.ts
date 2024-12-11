export class Utils {
  static REM: number =
    +window.getComputedStyle(document.documentElement).fontSize.slice(0, -2) ||
    16;

  static convertToUnit(value: number, unit?: 'px' | 'rem' | '%'): string {
    if (unit === 'rem') {
      return value / Utils.REM + 'rem';
    }
    return value + (unit || '');
  }

  static unitToNum(value: string): number {
    if (value.includes('rem')) {
      return Number(value.slice(0, -3)) * Utils.REM;
    }
    return Number(value.replace(/[a-zA-Z]/g, ''));
  }

  static nodeHeight(cssClass: string): number {
    return document.querySelector(`.${cssClass}`)!.getBoundingClientRect()
      .height;
  }

  static nodeWidth(cssClass: string): number {
    return document.querySelector(`.${cssClass}`)!.getBoundingClientRect()
      .width;
  }
}
