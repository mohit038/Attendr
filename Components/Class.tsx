import { StyleSheet, View } from "react-native";
import { IconButton, Text, useTheme } from "react-native-paper";
import React from "react";
import { AnimatedCircularProgress } from "react-native-circular-progress";

interface classProps {
  name: string;
  attendance: number;
  total: number;
  attendanceCriteria: number;
}

const Class = ({ name, attendance, total, attendanceCriteria }: classProps) => {
  const theme = useTheme();

  const attendancePercentage = total === 0 ? 0 : (attendance / total) * 100;
  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.colors.surface }}
    >
      <View style={{ flex: 1 }}>
        <Text
          numberOfLines={1}
          variant="headlineMedium"
          style={{ fontWeight: "700" }}
        >
          {name}
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text variant="titleLarge">Attendance</Text>
          <Text
            variant="titleLarge"
            style={{ marginLeft: 8 }}
          >{`${attendance}/${total}`}</Text>
        </View>
        <Text
          variant="bodyMedium"
          style={{ marginTop: "auto", fontWeight: "600", marginBottom: 2 }}
        >
          {classToAttendOrSkip(attendance, total, attendanceCriteria)}
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <AnimatedCircularProgress
          size={70}
          width={5}
          fill={attendancePercentage}
          rotation={360}
          tintColor={theme.colors.primary}
          backgroundColor={theme.colors.background}
        >
          {() => (
            <Text
              variant="titleLarge"
              style={{ fontWeight: "600" }}
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
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "#fff",
  },
});

const classToAttendOrSkip = (
  attendance: number,
  total: number,
  attendanceCriteria: number
) => {
  const classToAttendOrSkip = (attendanceCriteria / 100) * total - attendance;
  if (classToAttendOrSkip === 0) {
    return `You can't skip next class`;
  } else if (classToAttendOrSkip > 0) {
    return `Attend next ${classToAttendOrSkip} ${
      classToAttendOrSkip > 1 ? "classes" : "class"
    } to get back on track`;
  }
  return `You can skip next ${-classToAttendOrSkip} ${
    -classToAttendOrSkip > 1 ? "classes" : "class"
  }`;
};
