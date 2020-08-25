export function ToLocalDate(date: string, zone?: string): string {
  if (
    date === null ||
    date === "0001-01-01T00:00:00Z" ||
    date === "1969-12-31T00:00:00+02:00"
  )
    return "";

  var timezone = new Date().getTimezoneOffset();
  var london = new Date(date);
  var time = london.setTime(london.getTime() - timezone * 60000);
  var locale: string = "tr-TR";
  if (zone) {
    locale = zone;
  } else {
    if (navigator.language) {
      locale = navigator.language;
    }
  }

  return new Intl.DateTimeFormat(locale).format(new Date(time));
}
