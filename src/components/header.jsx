
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
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

const Header = (props) => {
  return <div style={styles.row()}>
    <p style={styles.header_first()}>RedFoxFinn</p>
    <Clock/>
  </div>;
};

const Clock = () => {
  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => setInterval(() => setDateTime(new Date()),1000),[]);
  return <p style={styles.header_dateTime(weekdays[dateTime.getDay()].en)}>{weekdays[dateTime.getDay()].fi} {dateTime.toLocaleDateString('fi-FI')} - {dateTime.toLocaleTimeString('fi-FI')}</p>;
};

export default connect()(Header);