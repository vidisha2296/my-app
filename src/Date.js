import React, { useState } from "react";
import './App.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function TableDatePicker() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
   
    return (
      <div>
        <p><span className="modal-lable">start_time:</span></p>
        <DatePicker
          placeholderText=" "
          showTimeSelect
          dateFormat="MMMM d, yyyy h:mmaa"
          selected={startDate}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          onChange={date => setStartDate(date)}
        />
        <br/>
        <br/>
        <p><span className="modal-lable"> end_time:</span></p>
        <DatePicker
          placeholderText=" "
          showTimeSelect
          dateFormat="MMMM d, yyyy h:mmaa"
          selected={endDate}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          onChange={date => setEndDate(date)}
        />
      </div>
    )
   }