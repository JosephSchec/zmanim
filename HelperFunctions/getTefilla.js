export default function getTeffila(data) {
    const now = new Date().toISOString();
    const earliestS = new Date(data['alotHaShachar']).toISOString();
    const chatzot = new Date(data['chatzot']).toISOString();
    const sunset = new Date(data['sunset']).toISOString();
    // now later than       earlier
    if (now > earliestS && now < chatzot) {
        return {
            name: 'Shacharis',
            start: 'https://www.sefaria.org/api/texts/Siddur_Ashkenaz,_Weekday,_Shacharit,_Preparatory_Prayers,_Modeh_Ani',
            end: 'https://www.sefaria.org/api/texts/Siddur_Ashkenaz,_Weekday,_Minchah,_Ashrei',
            removeArr: ['_Tefillin', '_Tallit', '_Tzitzit', '_Kiyor', '_Terumat_HaDeshen', '_Birkat Kohanim'
                , '_Torah_Reading', '_Minchah', '_Korbanot_(Israel)', '_Vidui_and_13_Middot',
                '_Kaddish_DeRabbanan', '_Mourner\'s_Kaddish', '_Kaddish_Shalem', '_Half_Kaddish', '_Psalm_130']
        }
    }
    else if (now > chatzot && now < sunset) {
        return {
            name: 'Mincha',
            start: 'https://www.sefaria.org/api/texts/Siddur_Ashkenaz,_Weekday,_Minchah,_Ashrei',
            end: 'https://www.sefaria.org/api/texts/Siddur_Ashkenaz,_Weekday,_Maariv,_Vehu_Rachum',
            removeArr: ['_Vidui_and_13_Middot', '_Kaddish_DeRabbanan', '_Mourner\'s_Kaddish', '_Kaddish_Shalem', '_Half_Kaddish']
        }
    }
    else {
        return {
            name: 'Maariv',
            start: 'https://www.sefaria.org/api/texts/Siddur_Ashkenaz,_Weekday,_Maariv,_Vehu_Rachum',
            end: 'https://www.sefaria.org/api/texts/Siddur_Ashkenaz,_Weekday,_Maariv,_Keri\'at_Shema_al_Hamita',
            removeArr: ['_Additions_for_Motza\'ei_Shabbat', '_Sefirat_HaOmer',
                '_Birkat_HaLevana', '_Kaddish_DeRabbanan', '_Mourner\'s_Kaddish',
                '_Kaddish_Shalem', '_Half_Kaddish']
        }
    }
}