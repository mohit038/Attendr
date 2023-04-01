import * as React from "react";
import { View, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";
import Class from "../Components/Class";

interface HomeState {
  attended: number;
  total: number;
  attendanceCriteria: number;
}

const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <View
      style={{ ...styles.container, backgroundColor: theme.colors.background }}
    >
      <Class name="DBMS" attendance={9} total={9} attendanceCriteria={75} />
      <Class
        name="Biosensor"
        attendance={11}
        total={12}
        attendanceCriteria={75}
      />

      {/* <Text style={styles.title}>Attendance Tracker</Text>
      <Text style={styles.text}>
        Attended: {state.attended}/{state.total} (
        {attendancePercentage.toFixed(1)}%)
      </Text>
      <Text style={styles.text}>
        Classes you can skip:{" "}
        {classesToSkip > 0 ? Math.floor(classesToSkip) : 0}
      </Text>
      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={handleMarkPresent}>
          Mark Present
        </Button>
        <Button mode="outlined" onPress={handleMarkAbsent}>
          Mark Absent
        </Button>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
});

export default Home;
