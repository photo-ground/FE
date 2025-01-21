export default function getDateList(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const startDateOfMonth = new Date(new Date(year, month, 1));
  const lastDateOfMonth = new Date(new Date(year, month + 1, 0));

  const startDateOfCalendar = new Date(
    startDateOfMonth.getFullYear(),
    startDateOfMonth.getMonth(),
    startDateOfMonth.getDate() - startDateOfMonth.getDay(),
  );
  const lastDateOfCalendar = new Date(
    lastDateOfMonth.getFullYear(),
    lastDateOfMonth.getMonth(),
    lastDateOfMonth.getDate() - lastDateOfMonth.getDay(),
  );

  const weekList = [];

  const currentDate = new Date(startDateOfCalendar);
  while (currentDate <= lastDateOfCalendar) {
    const dayList = [];
    for (let day = 0; day < 7; day += 1) {
      dayList.push(
        new Date(
          Date.UTC(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            currentDate.getDate(),
          ),
        ),
      );
      currentDate.setDate(currentDate.getDate() + 1);
    }
    weekList.push(dayList);
  }

  return weekList;
}
