const KEY = "102920712b826778470706fbaa6a53c1";
// request get data
const getData = async (city) => {
  const base = "https://api.openweathermap.org/data/2.5/weather";
  const query = `?q=${city}&units=metric&appid=${KEY}
  `;
  loader(true);
  const req = await fetch(base + query);
  const data = await req.json();
  loader(false);
  return data;
};
