import * as React from "react";
import { Box } from "./Box";
import { Button } from "./Button";
import { IconButton } from "./IconButton";
import { Label } from "./Label";

interface IDatePickerProps {
  id: string;
  onChange: (value: Date) => void;
  label: string;
  disabled?: boolean;
  errorMessage?: string;
  hasError?: boolean;
  excludeDates?: Array<Date>;
  helperText?: string;
  includeDates?: Array<Date>;
  maxDate?: Date;
  minDate?: Date;
  nextRef?: React.RefObject<typeof DatePicker>; // required for date range selection
  placeholder?: string;
  rangeEndDate?: Date;
  rangeStartDate?: Date;
  ref?: React.RefObject<typeof DatePicker>; // required for date range selection
  required?: boolean;
  value?: Date;
}

export const DatePicker: React.FC<IDatePickerProps> = ({
  id,
  label,
  onChange,
  disabled,
  errorMessage,
  excludeDates,
  hasError,
  helperText,
  includeDates,
  maxDate,
  minDate,
  placeholder,
  required,
  rangeEndDate,
  rangeStartDate,
  ref,
  nextRef,
  value,
}) => {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(
    () => value || undefined,
  );
  const [maskedDate, setMaskedDate] = React.useState<string>("");
  const [monthNumber, setMonthNumber] = React.useState<number>(
    () => selectedDate?.getMonth() || new Date().getMonth(),
  );
  const [yearNumber, setYearNumber] = React.useState<number>(
    () => selectedDate?.getFullYear() || new Date().getFullYear(),
  );

  const inputRef = React.useRef<HTMLInputElement>(null);

  const onInputChange = (char: string) => {
    if (char === "Backspace") {
      if (maskedDate.length - 1 >= 0)
        setMaskedDate((ps) => ps.substr(0, ps.length - 1));
      else return;
    } else if (dateCharRegex.test(char)) {
      if ((maskedDate + char).length <= 10) {
        setMaskedDate((ps) => ps + char);
        if (dateValidateRegex.test(maskedDate + char)) {
          parseStringToDate(maskedDate + char);
        }
      } else {
        if (dateValidateRegex.test(maskedDate)) {
          parseStringToDate(maskedDate);
        }
      }
    } else {
      return;
    }
  };

  const parseStringToDate = React.useCallback(
    (dateStr: string) => {
      const dateParts = dateStr.split("/");
      if (
        dateParts.length === 3 &&
        dateParts[2].length === 4 &&
        dateParts[1].length === 2 &&
        dateParts[0].length === 2
      ) {
        const newDate = new Date(
          parseInt(dateParts[2]),
          parseInt(dateParts[1]) - 1,
          parseInt(dateParts[0]),
        );
        if (!!minDate && newDate < minDate) {
          setSelectedDate(undefined);
          setMaskedDate("");
        } else if (!!maxDate && newDate > maxDate) {
          setSelectedDate(undefined);
          setMaskedDate("");
        } else {
          setSelectedDate(newDate);
        }
      } else setSelectedDate(undefined);
    },
    [minDate, maxDate],
  );

  const parseDateToString = React.useCallback((date: Date) => {
    let year: number = date.getFullYear();
    let month: string | number = date.getMonth() + 1;
    let day: string | number = date.getDate();

    if (day < 10) {
      day = `0${day}`;
    }

    if (month < 10) {
      month = `0${month}`;
    }

    return setMaskedDate(`${day}/${month}/${year}`);
  }, []);

  React.useEffect(() => {
    parseStringToDate(maskedDate);
  }, [maskedDate, parseStringToDate]);

  const nextMonth = () => {
    // if december
    if (monthNumber + 1 === 12) {
      setMonthNumber(0);
      setYearNumber((ps) => ps + 1);
    } else {
      setMonthNumber((ps) => ps + 1);
    }
  };

  const previousMonth = () => {
    // if january
    if (monthNumber - 1 === -1) {
      setMonthNumber(11);
      setYearNumber((ps) => ps - 1);
    } else {
      setMonthNumber((ps) => ps - 1);
    }
  };

  const goToToday = () => {
    setMonthNumber(selectedDate?.getMonth() || new Date().getMonth());
    setYearNumber(selectedDate?.getFullYear() || new Date().getFullYear());
  };

  const onFocus = React.useCallback(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <Box className="datepicker">
      <Box
        className="datepicker__input-container"
        display="flex"
        direction="column"
        position="relative"
      >
        <Label htmlFor={id} disabled={disabled} required={required}>
          <Box marginBottom={2} display="inline-block" position="relative">
            {label}
          </Box>
        </Label>
        <Box position="relative" width="100%">
          <Box
            flex="grow"
            flexBasis="auto"
            minHeight="0"
            minWidth="0"
            width="100%"
            alignItems="center"
            display="flex"
          >
            <Box flex="grow" flexBasis="auto" width="100%">
              <span>
                <input
                  id={id}
                  ref={inputRef}
                  type="text"
                  className={`datepicker__input ${
                    hasError ? "datepicker__input--invalid" : ""
                  }`}
                  value={maskedDate}
                  onKeyDown={(e) => onInputChange(e.key)}
                  placeholder={placeholder}
                  disabled={disabled}
                />
                <Box
                  className="datepicker__picker-container"
                  display="inline-block"
                  position="absolute"
                  marginTop={2}
                  top="100%"
                  left="50%"
                  padding={3}
                >
                  <Box
                    className="datepicker__current-month"
                    position="relative"
                  >
                    {months[monthNumber]} {yearNumber}
                    {(!!selectedDate &&
                      selectedDate.getMonth() !== monthNumber) ||
                    (!!selectedDate &&
                      selectedDate.getFullYear() !== yearNumber) ? (
                      <Box marginTop={3}>
                        <Button
                          size="sm"
                          type="button"
                          bgColor="red"
                          text="Go To Today"
                          onClick={goToToday}
                        />
                      </Box>
                    ) : null}
                    <Box position="absolute" top="-6px" left="-4px">
                      <IconButton
                        icon="ChevronLeft"
                        iconColor="black"
                        bgColor="transparent"
                        accessibilityLabel="previous month"
                        disabled={
                          !!minDate &&
                          monthNumber - 1 < minDate?.getMonth() &&
                          yearNumber === minDate.getFullYear()
                        }
                        onClick={previousMonth}
                      />
                    </Box>
                    <Box position="absolute" top="-6px" right="-4px">
                      <IconButton
                        icon="ChevronRight"
                        iconColor="black"
                        bgColor="transparent"
                        accessibilityLabel="next month"
                        disabled={
                          !!maxDate &&
                          monthNumber + 1 > maxDate?.getMonth() &&
                          yearNumber === maxDate.getFullYear()
                        }
                        onClick={nextMonth}
                      />
                    </Box>
                  </Box>
                  <Month
                    selectedDate={selectedDate}
                    monthNumber={monthNumber}
                    yearNumber={yearNumber}
                    excludedDates={excludeDates}
                    includedDates={includeDates}
                    minDate={minDate}
                    maxDate={maxDate}
                    onDayClick={(v) => {
                      setSelectedDate(v);
                      parseDateToString(v);
                      onChange(v);
                    }}
                  />
                </Box>
                <Box position="absolute" right="-10px" top="4px">
                  <Box marginRight={4} position="relative">
                    <IconButton
                      disabled={disabled}
                      onClick={onFocus}
                      icon="Calendar"
                      accessibilityLabel="Select date"
                      bgColor="transparent"
                      iconColor="black"
                      size="sm"
                    />
                  </Box>
                </Box>
              </span>
            </Box>
          </Box>
        </Box>
        <Box
          marginTop={2}
          style={{
            color: hasError
              ? "var(--color-red)"
              : "var(--color-label-disabled)",
          }}
        >
          {hasError ? errorMessage : helperText}
        </Box>
      </Box>
    </Box>
  );
};

interface IMonthComponent {
  selectedDate?: Date;
  monthNumber: number;
  yearNumber: number;
  excludedDates?: Date[];
  includedDates?: Date[];
  minDate?: Date;
  maxDate?: Date;
  children?: never;
  onDayClick: (date: Date) => void;
}

const Month: React.FC<IMonthComponent> = ({
  selectedDate,
  excludedDates,
  includedDates,
  maxDate,
  minDate,
  monthNumber,
  yearNumber,
  onDayClick,
}) => {
  const weeks = React.useMemo(() => getWeeksForMonth(monthNumber, yearNumber), [
    monthNumber,
    yearNumber,
  ]);

  const weeksMarkup = React.useCallback(
    (weeks: Array<Array<Date | null>>) => {
      return weeks.map((week, i) => {
        return (
          <Box display="flex" alignItems="center" key={i}>
            {week.map((day, index) => {
              return (
                <Day
                  key={index}
                  date={day}
                  disabled={
                    !!day
                      ? (!!minDate && day < minDate) ||
                        (!!maxDate && day > maxDate)
                      : false
                  }
                  selected={
                    selectedDate?.getDate() === day?.getDate() &&
                    selectedDate?.getMonth() === day?.getMonth() &&
                    selectedDate?.getFullYear() === day?.getFullYear()
                  }
                  onDayClick={onDayClick}
                />
              );
            })}
          </Box>
        );
      });
    },
    [selectedDate, minDate, maxDate, onDayClick],
  );

  const weekDaysMarkup = React.useCallback((weekDays: string[]) => {
    return weekDays.map((weekDay) => (
      <WeekDay
        key={weekDay}
        accessabilityLabel={weekDay}
        title={abbreviationFromWeekDay(weekDay)}
      />
    ));
  }, []);

  return (
    <React.Fragment>
      <Box className="datepicker__weekdays-container">
        {weekDaysMarkup(weekDays)}
      </Box>
      {weeksMarkup(weeks)}
    </React.Fragment>
  );
};

interface IWeekDayProps {
  accessabilityLabel: string;
  title: string;
}

const WeekDay: React.FC<IWeekDayProps> = ({ accessabilityLabel, title }) => {
  return (
    <div
      aria-label={accessabilityLabel}
      className="datepicker__weekday display-block flex-grow padding-2"
    >
      {title}
    </div>
  );
};

interface IDayProps {
  date: Date | null;
  selected: boolean;
  disabled?: boolean;
  onDayClick: (date: Date) => void;
}

const Day: React.FC<IDayProps> = ({ date, selected, disabled, onDayClick }) => {
  return (
    <Box
      className="datepicker__day"
      width={40}
      height={40}
      display="inline-block"
      style={{ lineHeight: 40 }}
    >
      {!!date ? (
        <Button
          text={date.getDate().toString()}
          circle
          bgColor="transparent"
          type="button"
          selected={selected}
          disabled={disabled}
          onClick={() => onDayClick(date)}
        />
      ) : null}
    </Box>
  );
};

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const abbreviationFromWeekDay = (weekDay: string) => {
  return weekDay.substr(0, 2);
};

const WEEK_LENGTH = 7;

const getWeeksForMonth = (month: number, year: number) => {
  const firstOfMonth = new Date(year, month, 1);
  const firstDayOfWeek = firstOfMonth.getDay();

  const weeks: Array<Array<Date | null>> = [[]];

  let currentWeek = weeks[0];
  let currentDate = firstOfMonth;

  for (let i = 0; i < firstDayOfWeek; i++) {
    currentWeek.push(null);
  }

  while (currentDate.getMonth() === month) {
    if (currentWeek.length === WEEK_LENGTH) {
      currentWeek = [];
      weeks.push(currentWeek);
    }

    currentWeek.push(currentDate);
    currentDate = new Date(year, month, currentDate.getDate() + 1);
  }

  while (currentWeek.length < 7) {
    currentWeek.push(null);
  }

  return weeks;
};

const dateCharRegex = /[0-9|/]/;
const dateValidateRegex = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([1][26]|[2468][048]|[3579][26])00))))$/;
