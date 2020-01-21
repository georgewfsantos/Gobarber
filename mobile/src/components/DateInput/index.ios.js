import React, {useState, useMemo} from 'react';
import {DatePickerIOS} from 'react-native';
import {format} from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, DateButton, DateText, Picker} from './styles';

export default function DateInput({date, onChange}) {
  const formattedDate = useMemo(
    () => format(date, "dd 'de' MMMM 'de' yyyy", {locale: pt}),
    [date],
  );
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <DateButton onPress={() => setOpen(!open)}>
        <Icon name="event" size={20} color="#fff" />
        <DateText>{formattedDate}</DateText>
      </DateButton>
      {open && (
        <Picker>
          <DatePickerIOS
            date={date}
            onDateChange={onChange}
            minimumDate={new Date()}
            minuteInterval={60}
            locale="pt"
            mode="date"
          />
        </Picker>
      )}
    </Container>
  );
}
