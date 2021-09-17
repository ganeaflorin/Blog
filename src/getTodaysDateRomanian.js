function getRomanianMonth(month) {
  const months = {
    1: "Ianuarie",
    2: "Februarie",
    3: "Martie",
    4: "Aprilie",
    5: "Mai",
    6: "Iunie",
    7: "Iulie",
    8: "August",
    9: "Septembrie",
    10: "Octombrie",
    11: "Noiembrie",
    12: "Decembrie",
  };
  return months[month];
}
function getTodaysDateRomanian(separator = " ") {
  const newDate = new Date();
  const date = newDate.getDate();
  const month = getRomanianMonth(newDate.getMonth() + 1);
  const year = newDate.getFullYear();
  return `${date}${separator}${month}${separator}${year}`;
}

export default getTodaysDateRomanian;
