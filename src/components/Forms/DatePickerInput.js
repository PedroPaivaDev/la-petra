import React from 'react';
import styles from './DatePickerInput.module.css';

import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {parseISO} from 'date-fns';

import ptBR from 'date-fns/locale/pt-BR';
registerLocale('pt-br',ptBR);

function DatePickerInput({label, selectedDate, setSelectedDate, placeholder}) {

  return (
    <div className={styles.datePicker}>
      <label>{label}</label>
      <DatePicker
        placeholderText={placeholder}
        selected={selectedDate && parseISO(selectedDate)}
        onChange={date => setSelectedDate(date.toISOString())}
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
        // includeDateIntervals={[
        //   { start: new Date(), end: new Date("2023-04-07T03:00:00.000Z") },
        // ]}
        // excludeDateIntervals={[
        //   { start: new Date("2023-04-02T03:00:00.000Z"), end: new Date("2023-04-03T03:00:00.000Z") },
        // ]}
      />
    </div>
  );
}

export default DatePickerInput;
