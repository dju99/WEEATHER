const Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const newDate = () => {
  const response = new Date();
  const month = Months[response.getMonth()];
  const date = response.getDate();
  const day = Days[response.getDay()];

  return { month, date, day };
};
