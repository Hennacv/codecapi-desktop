import { RefObject, forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Button from '../button/button';
import IconCalendar from 'assets/icons/icon-calendar';
import IconTime from 'assets/icons/icon-time';
import {
  AnnouncementFormItem,
  AnnouncementFormLabel,
} from 'renderer/components/announcements/announcement-form/announcement-form-styles.css';
import { useTranslation } from 'react-i18next';
import { DateTimeContainer } from './date-time-picker-styles.css';

interface CustomInputProp {
  value?: string;
  onClick?: () => void;
}

interface DateProp {
  year: 'numeric' | '2-digit' | undefined;
  month: 'numeric' | 'long' | '2-digit' | 'short' | 'narrow' | undefined;
  day: 'numeric' | '2-digit' | undefined;
}

interface DateTimeProps {
  updateFormValue: (field: string, value: any) => void;
}

const DateTimePicker = ({ updateFormValue }: DateTimeProps) => {
  const { t } = useTranslation();
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [startTime, setStartTime] = useState<Date | null>(new Date());
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  } as DateProp;

  const CustomDate = forwardRef<HTMLButtonElement, CustomInputProp>(
    ({ value, onClick }, ref) => {
      return (
        <Button variant="small" type="button" onClick={onClick} ref={ref}>
          <IconCalendar variant="default" />
          {value}
        </Button>
      );
    }
  );

  const CustomTime = forwardRef<HTMLButtonElement, CustomInputProp>(
    ({ value, onClick }, ref) => {
      return (
        <Button variant="small" type="button" onClick={onClick} ref={ref}>
          <IconTime variant="default" />
          {value}
        </Button>
      );
    }
  );

  return (
    <div className={DateTimeContainer}>
      <div className={AnnouncementFormItem}>
        <label className={AnnouncementFormLabel} htmlFor="date">
          {t('common.date')}
        </label>
        <DatePicker
          selected={startDate}
          onChange={(date) => {
            setStartDate(date);
            updateFormValue('date', date?.toLocaleDateString('nl-NL', options));
          }}
          dateFormat="d/M/yyyy"
          customInput={<CustomDate />}
        />
      </div>
      <div className={AnnouncementFormItem}>
        <label className={AnnouncementFormLabel} htmlFor="time">
          {t('common.time')}
        </label>
        <DatePicker
          selected={startTime}
          onChange={(time) => {
            setStartTime(time);
            updateFormValue('time', time?.toLocaleTimeString('it-IT'));
          }}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={15}
          timeCaption="Tijd"
          dateFormat="HH:mm"
          timeFormat="HH:mm"
          customInput={<CustomTime />}
        />
      </div>
    </div>
  );
};

export default DateTimePicker;
