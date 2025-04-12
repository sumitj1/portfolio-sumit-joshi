export function isDayTime(date: Date = new Date()): boolean {
    const hour = date.getHours();
    return hour >= 6 && hour < 18;
  }