export default function getDateList(date: Date) {
  const startDateOfWeek = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() - date.getDay(), // 이번 주 첫째 날 (일요일)
  );
  const endDateOfCalendar = new Date(
    startDateOfWeek.getFullYear(),
    startDateOfWeek.getMonth(),
    startDateOfWeek.getDate() + 7 * 5 - 1, // 5주 뒤 마지막 날 (5 * 7 - 1)
  );

  const weekList = [];
  const currentDate = new Date(startDateOfWeek);

  while (currentDate <= endDateOfCalendar) {
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
