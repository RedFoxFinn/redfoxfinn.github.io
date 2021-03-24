const weekdays = [
  {
    fi: 'sunnuntai',
    en: 'sunday'
  },{
    fi: 'maanantai',
    en: 'monday'
  },{
    fi: 'tiistai',
    en: 'tuesday'
  },{
    fi: 'keskiviikko',
    en: 'wednesday'
  },{
    fi: 'torstai',
    en: 'thursday'
  },{
    fi: 'perjantai',
    en: 'friday'
  },{
    fi: 'lauantai',
    en: 'saturday'
  }
];

const weekday = (lang === 'en', dayOfWeek) => {
  if (dayOfWeek >= 0 && dayOfWeek <=6) {
    return lang === 'en' ? weekdays[dayOfWeek].en : weekdays[dayOfWeek].fi;
  } else {
    return null;
  }
};

export default weekday;