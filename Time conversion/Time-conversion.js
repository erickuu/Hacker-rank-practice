// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
const c = '12:05:39AM';
const b = '12:45:54PM'
const a = '07:05:45PM'

function timeConversion(s) {
    // Write your code here
    let militaryHours ="";
    let baseHour = 12;
    let chunksHour = s.split(':');
    let format = s.charAt(8);

    if(format == 'A'){
        if(chunksHour[0] == '12' && chunksHour[1] == '00'){
           militaryHours = "00:00:00";
        }
        if(chunksHour[0] == '12' && chunksHour[1] != '00'){
           militaryHours =  `00${s.substr(2,6)}`;
        }
    }
    if(format == 'P'){
        if(chunksHour[0] == '12' && format == 'P'){
           militaryHours = s.substr(0,8);
        }else{
            militaryHours = `${parseInt(chunksHour[0])+baseHour}${s.substr(2,6)}`;
        }
    }  
    return militaryHours;
}
timeConversion(c);
timeConversion(b);
timeConversion(a);
