import React, {useEffect, useState} from 'react';
import styles from '../tools/styles';

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

const Clock = () => {
  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => setInterval(() => setDateTime(new Date()),1000),[]);
  return <p style={styles.header_dateTime(weekdays[dateTime.getDay()].en)}>{weekdays[dateTime.getDay()].fi} {dateTime.toLocaleDateString('fi-FI')} - {dateTime.toLocaleTimeString('fi-FI')}</p>;
};

export default Clock;