import { useState, useEffect } from "react";
import { firebase } from "../firebase";
import moment from "moment";

const collatedTasks = [
  { key: "HOME", name: "Home" },
  { key: "TODAY", name: "Today" },
  { key: "WEEK", name: "This Week" },
];

const collatedTasksExists = (selectedProject) =>
  collatedTasks.find((task) => task.key === selectedProject);

export const useTasks = (selectedProject) => {
  const [tasks, setTasks] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection("tasks")
      .where("userId", "==", "srktevqdreoltivxthgr");

    unsubscribe =
      selectedProject && !collatedTasksExists(selectedProject)
        ? (unsubscribe = unsubscribe.where("projectId", "==", selectedProject))
        : selectedProject === "TODAY"
        ? (unsubscribe = unsubscribe.where(
            "date",
            "==",
            moment().format("DD/MM/YYYY")
          ))
        : selectedProject === "HOME" || selectedProject === 0
        ? (unsubscribe = unsubscribe.where("date", "==", ""))
        : unsubscribe;

    unsubscribe = unsubscribe.onSnapshot((snapshot) => {
      const newTasks = snapshot.docs.map((task) => ({
        id: task.id,
        ...task.data(),
      }));

      setTasks(
        selectedProject === "WEEK"
          ? newTasks.filter(
              (task) =>
                moment(task.date, "DD-MM-YYYY").diff(moment(), "days") <= 7 &&
                task.completed !== true
            )
          : newTasks.filter((task) => task.completed !== true)
      );

      setCompleted(newTasks.filter((task) => task.completed === true));
    });

    return () => unsubscribe();
  }, [selectedProject]);

  return {tasks,completed};
};

export const useProjects = () => {
    const [projects,setProjects] = useState([]);

    useEffect(() => {
        firebase.firestore().collection('projects').where("userId", "==", "srktevqdreoltivxthgr").orderBy('projectId').get().then(snapshot => {
            const allProjects = snapshot.docs.map(projects => ({
                ...projects.data(),
                docId: projects.id,
            }));
            if(JSON.stringify(allProjects) !== JSON.stringify(projects)){
                setProjects(allProjects); 
            }
        });
        
    }, [projects]);
}