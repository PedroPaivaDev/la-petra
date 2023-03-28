import React from 'react';
import styles from './DatePickerInput.module.css';

import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ptBR from 'date-fns/locale/pt-BR';
// import {setHours, setMinutes} from "date-fns";
registerLocale('pt-br',ptBR)

function DatePickerInput({label, selectedDate, setSelectedDate, placeholder}) {
  return (
    <div className={styles.datePicker}>
      <label>{label}</label>
      <DatePicker
        placeholderText={placeholder}
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        // showTimeSelect
        // timeIntervals={60}
        // includeTimes={[
        //   setHours(setMinutes(new Date(), 0), 15),
        //   setHours(setMinutes(new Date(), 0), 16),
        //   setHours(setMinutes(new Date(), 0), 17),
        //   setHours(setMinutes(new Date(), 0), 18)
        // ]}
        dateFormat="dd/MM/yyyy"
        locale="pt-br"
        includeDateIntervals={[
          { start: new Date(), end: new Date("Sat Apr 08 2023 00:00:00 GMT-0300") },
        ]}
      />

      {/* <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 6H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zM5 17a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H5z" />
        <rect x="4" y="4" width="16" height="2" rx="1" ry="1" />
      </svg> */}
    </div>
  );
}

export default DatePickerInput;
