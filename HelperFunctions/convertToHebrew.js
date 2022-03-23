export default function convertToHebrew(time){
    let t='';
    switch (time) {
        case ("alotHaShachar"):
            t = 'עלות השחר'
            break;
        case ("misheyakirMachmir"):
            t = 'זמן ציצית ותפילין'
            break;
        case ("sunrise"):
            t = 'הנץ החמה'
            break;
        case ("sofZmanShma"):
            t = " סוף זמן קריאת שמע"
            break;
        case ("sofZmanTfilla"):
            t = 'סוף זמן תפילה'
            break;
        case ("chatzot"):
            t = 'חצות היום'
            break;
        case ("minchaGedola"):
            t = "מנחה גדולה"
            break;
        case ("minchaKetana"):
            t = 'מנחה קטנה'
            break;
        case ("sunset"):
            t = 'שקיעת החמה'
            break;
        default: t=''
    }
    return t

}