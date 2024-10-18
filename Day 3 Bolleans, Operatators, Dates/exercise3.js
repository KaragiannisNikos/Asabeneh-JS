/* Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
YYY-MM-DD HH:mm eg. 20120-01-02 07:05 */
/* 
const yearNow = new Date();
const years = yearNow.getFullYear();
const month = yearNow.getMonth() + 1;
const date = yearNow.getDate();
const day = yearNow.getDay();
const hour = yearNow.getHours();
const minute = yearNow.getMinutes();
const time = yearNow.getTime();
*/
function format(a) {
  if (a < 10) {
    return (a = `0${a}`);
  }
  return a;
}
let formatHours = format(hour);
let formatMinutes = format(minute);
console.log(`${year}-${month}-${day} ${formatHours}:${formatMinutes}`);
