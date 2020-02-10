const weekdays = {
    MON: 'monday',
    TUE: 'tuesday',
    WED: 'wednesday',
    THU: 'thursday',
    FRI: 'friday'
}

var key_value = weekdays.WED;
console.log(key_value);

switch (key_value) {
    case weekdays.MON:
        console.log('today is Monday');
        break;

    case weekdays.TUE:
        console.log('today is Tuesday');
        break;

    case weekdays.WED:
        console.log('today is Wednesday');
        break;

   case weekdays.THU:
       console.log('today is Thursday');
       break;        
            
    case weekdays.FRI:
        console.log('today is Friday');
        break;

    default:
        console.log('its the weekend!');

}
