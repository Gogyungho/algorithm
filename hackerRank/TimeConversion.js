/*
Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour 
clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.
*/

{
    function timeConversion(s) {
        let dateArr = s.slice(0,s.length-2).split(':');
        let amPm = s.slice(s.length-2);
      
        if(amPm === 'PM'){
            dateArr[0] != '12' && (dateArr[0] = Number(dateArr[0]) + 12);
        } else {
            dateArr[0] == '12' && (dateArr[0] = '00');
        }
        
        return dateArr.join(':');
    }    
}