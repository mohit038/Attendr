import { StyleSheet, View } from "react-native";
import { IconButton, Text, useTheme } from "react-native-paper";
import React from "react";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Colors } from "react-native/Libraries/NewAppScreen";

interface classProps {
  relativeIndex?: number;
  name: string;
  attendance: number;
  total: number;
  attendanceCriteria: number;
}

const Class = ({
  relativeIndex,
  name,
  attendance,
  total,
  attendanceCriteria,
}: classProps) => {
  const theme = useTheme();

  const attendancePercentage = total === 0 ? 0 : (attendance / total) * 100;
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: theme.colors.surface,
        ...(relativeIndex === 0 && styles.firstContainer),
        ...(relativeIndex === 1 && styles.lastContainer),
      }}
    >
      <View style={{ flex: 1 }}>
        <Text
          numberOfLines={1}
          variant="titleMedium"
          style={{ fontWeight: "500" }}
        >
          {name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{ color: theme.colors.tertiary, fontWeight: "300" }}
            variant="titleSmall"
          >
            Attendance
          </Text>
          <Text
            variant="titleSmall"
            style={{
              marginLeft: 8,
              color: theme.colors.tertiary,
              fontWeight: "300",
            }}
          >{`${attendance}/${total}`}</Text>
        </View>
        <Text
          variant="bodyMedium"
          style={{ marginTop: "auto", fontWeight: "400", marginBottom: 2 }}
        >
          {classToAttendOrSkip(attendance, total, attendanceCriteria)}
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <AnimatedCircularProgress
          size={56}
          width={4}
          fill={attendancePercentage}
          rotation={360}
          tintColor={theme.colors.primary}
          backgroundColor={theme.colors.background}
        >
          {() => (
            <Text
              variant="titleMedium"
              style={{ fontWeight: "400" }}
            >{`${Math.round(attendancePercentage)}`}</Text>
          )}
        </AnimatedCircularProgress>
        <View
          style={{ flexDirection: "row", marginLeft: "auto", marginTop: 8 }}
        >
          <IconButton
            icon="check"
            size={15}
            onPress={() => console.log("Pressed")}
            style={{ borderWidth: 1 }}
          />
          <IconButton
            icon="close"
            size={15}
            onPress={() => console.log("Pressed")}
            style={{ borderWidth: 1 }}
          />
        </View>
      </View>
    </View>
  );
};

export default Class;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: "row",
    backgroundColor: "#fff",
    marginTop: 1,
  },
  firstContainer: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  lastContainer: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});

const classToAttendOrSkip = (
  attendance: number,
  total: number,
  attendanceCriteria: number
) => {
  const attendancePercentage = total === 0 ? 0 : (attendance / total) * 100;
  const classToAttend = Math.ceil(
    (attendanceCriteria * total - 100 * attendance) / (100 - attendanceCriteria)
  );
  const classToSkip = Math.floor(
    (100 * attendance) / attendanceCriteria - total
  );
  if (attendancePercentage === attendanceCriteria)
    return "You can't skip the next class";
  else if (attendancePercentage < attendanceCriteria) {
    if (classToAttend <= 1) {
      return `Attend next class to catch up`;
    } else {
      return `Attend next ${classToAttend} classes to catch up`;
    }
  } else {
    if (classToSkip < 1) {
      return `You can't skip the next class`;
    } else if (classToSkip === 1) {
      return `You can skip the next class`;
    } else {
      return `You can skip the next ${classToSkip} classes`;
    }
  }
};
