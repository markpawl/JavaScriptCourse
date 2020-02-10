# Enums
####What?
- Enums represent mutable choices as immutable tokens 
- Used when there are a limited number of fixed values to represent
- For Example: Months, States, DaysOfWeek, Seasons, ...

####Why?
- Using string literals as tokens leads to bugs when tokens are misspelled
  
####How?
- Example:
```
const weekdays = {
    MON = 'monday',
    TUE = 'tuesday',
    WED = 'wednesday',
    THU = 'thursday',
    FRI = 'friday'
}
```
- Upper case is suggested for tokens

####Usage
- Often used in switch-case statements
```
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
```
