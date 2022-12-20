import "./App.css";
import { Map } from "./component";
import tours from "./mockdata/tours.json";
import tasks from "./mockdata/tasks.json";
import { useEffect, useMemo, useRef } from "react";
import { Task } from "./types/Task";
import Pin from "./types/Pin";

function App() {
  const ref = useRef(null);
  const pins = useMemo<Pin[]>(
    () =>
      tasks.map((task) => ({
        location: { lat: task.task_coords[0], lng: task.task_coords[1] },
        color: "red",
        type: task.task_type.toUpperCase(),
      })),
    []
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Map ref={ref} />
    </div>
  );
}

export default App;
