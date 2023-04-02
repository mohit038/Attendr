import * as React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
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
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={{ ...styles.container, backgroundColor: theme.colors.background }}
    >
      <Class
        relativeIndex={0}
        name="DBMS"
        attendance={9}
        total={10}
        attendanceCriteria={75}
      />
      <Class
        name="Biosensor"
        attendance={12}
        total={18}
        attendanceCriteria={75}
      />
      <Class
        name="Data Security"
        attendance={12}
        total={18}
        attendanceCriteria={75}
      />
      <Class
        name="Operating Systems"
        attendance={12}
        total={18}
        attendanceCriteria={75}
      />
      <Class
        name="Operating Systems"
        attendance={12}
        total={18}
        attendanceCriteria={75}
      />
      <Class
        name="Operating Systems"
        attendance={12}
        total={18}
        attendanceCriteria={75}
      />
      <Class
        name="Operating Systems"
        attendance={12}
        total={18}
        attendanceCriteria={75}
      />
      <Class
        relativeIndex={1}
        name="Operating Systems"
        attendance={12}
        total={18}
        attendanceCriteria={75}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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
