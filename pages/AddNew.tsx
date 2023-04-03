import { StyleSheet, View, ScrollView } from "react-native";
import React from "react";
import { TextInput, useTheme, Text, Button } from "react-native-paper";
import Card from "../Components/Card";
import Seperator from "../Components/Seperator";
import ExpandableView from "../Components/ExpandableView";
import { Picker } from "@react-native-picker/picker";
import RNDateTimePicker from "@react-native-community/datetimepicker";

const AddNew = () => {
  const theme = useTheme();
  const [scheduleExpanded, setScheduleExpanded] =
    React.useState<boolean>(false);
  const [schedule, setSchedule] = React.useState<scheduleType>(1);
  const [starts, setStarts] = React.useState<Date>(new Date());
  const [ends, setEnds] = React.useState<Date>(new Date());
  const [repeat, setRepeat] = React.useState<repeatationType>(repeatation[0]);

  return (
    <ScrollView
      style={{ backgroundColor: theme.colors.background, ...styles.container }}
    >
      <Card>
        <TextInput
          dense={true}
          mode="flat"
          placeholder="Name"
          underlineStyle={{ display: "none" }}
          style={{ backgroundColor: theme.colors.surface }}
        />
        <Seperator height={1} />
        <TextInput
          dense={true}
          mode="flat"
          placeholder="Location (Optional)"
          underlineStyle={{ display: "none" }}
          style={{ backgroundColor: theme.colors.surface }}
        />
      </Card>
      <View style={{ height: 16 }} />
      <Card>
        <PickerWrapper
          pickerType="picker"
          values={schedules}
          name={"Schedule"}
          label={`${schedule}`}
          value={schedule}
          onChange={(schedule) => setSchedule(schedule as scheduleType)}
        />
      </Card>
      {Array.from({ length: schedule }, (_, i) => i + 1).map((_, index) => (
        <>
          <View style={{ height: 16 }} />
          <TimePicker key={index} />
        </>
      ))}
    </ScrollView>
  );
};

const TimePicker = () => {
  const [starts, setStarts] = React.useState<Date>(new Date());
  const [ends, setEnds] = React.useState<Date>(new Date());
  const [repeat, setRepeat] = React.useState<repeatationType>(repeatation[0]);
  return (
    <Card>
      <PickerWrapper
        pickerType="date"
        name="Starts"
        value={starts}
        label={timeFormatter(starts)}
        onChange={(time) => setStarts(time)}
      />
      <Seperator height={1} />
      <PickerWrapper
        pickerType="date"
        name="Ends"
        label={timeFormatter(ends)}
        value={ends}
        onChange={(time) => setEnds(time)}
      />
      <Seperator height={1} />
      <PickerWrapper
        pickerType="picker"
        values={repeatation}
        name={"Repeat"}
        label={repeat}
        value={repeat}
        onChange={(repeat) => setRepeat(repeat as repeatationType)}
      />
    </Card>
  );
};

export default AddNew;

const timeFormatter = (time: Date) =>
  `${time.getHours() > 12 ? time.getHours() - 12 : time.getHours()}:${
    time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()
  } ${time.getHours() > 12 ? "PM" : "AM"}`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

const repeatation = ["Daily", "Weekly", "BiWeekly"] as const;
type repeatationType = typeof repeatation[number];

const schedules = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;
type scheduleType = typeof schedules[number];

interface datePickerProps {
  pickerType: "date";
  name: string;
  value: Date;
  label: string;
  values?: [];
  onChange: (date: Date) => void;
}

interface repeationPickerProps {
  name: string;
  label: string;
  pickerType: "picker";
  value?: repeatationType | scheduleType;
  values: typeof repeatation | typeof schedules;
  onChange: (repetation: repeatationType | scheduleType) => void;
}

interface schedulePcikerProps {
  name: string;
  label: string;
  pickerType: "picker";
  value?: repeatationType | scheduleType;
  values: typeof repeatation | typeof schedules;
  onChange: (repetation: repeatationType | scheduleType) => void;
}

const PickerWrapper: React.FC<
  datePickerProps | repeationPickerProps | schedulePcikerProps
> = ({ name, label, value, onChange, pickerType, values = [] }) => {
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState<boolean>(false);
  return (
    <>
      <View
        style={{
          paddingHorizontal: 12,
          paddingVertical: 4,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text variant="bodyLarge" style={{ fontSize: 16 }}>
          {name}
        </Text>
        <Button
          mode="contained"
          buttonColor={theme.colors.background}
          textColor={theme.colors.primary}
          style={{ borderRadius: 8, minWidth: 110 }}
          onPress={() => setExpanded(!expanded)}
        >
          {label}
        </Button>
      </View>
      <ExpandableView isExpanded={expanded} componentHeight={205}>
        <>
          <Seperator height={1} />
          {pickerType === "picker" ? (
            <Picker
              selectedValue={value}
              onValueChange={(itemValue, itemIndex) => onChange(itemValue)}
            >
              {values.map((value, index) => (
                <Picker.Item label={`${value}`} value={value} key={index} />
              ))}
            </Picker>
          ) : (
            <RNDateTimePicker
              display="spinner"
              mode="time"
              value={value}
              onChange={(e) => {
                onChange(new Date(e.nativeEvent.timestamp || 0));
              }}
            />
          )}
        </>
      </ExpandableView>
    </>
  );
};
