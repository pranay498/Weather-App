export const formatLongDate = (date = new Date()) =>
  new Intl.DateTimeFormat("en", {
    weekday: "long",
    month: "long",
    day: "numeric"
  }).format(date);

export const formatTime = (date = new Date()) =>
  new Intl.DateTimeFormat("en", {
    hour: "2-digit",
    minute: "2-digit"
  }).format(date);

export const formatForecastDay = (date: string) =>
  new Intl.DateTimeFormat("en", { weekday: "short" }).format(new Date(date));
