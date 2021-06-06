import { useState, useEffect } from "react";
import { firebase } from "../firebase";
import moment from "moment";

export const collatedTasks = [
  { key: "HOME", name: "Home" },
  { key: "TODAY", name: "Today" },
  { key: "WEEK", name: "This Week" },
];

export const collatedTasksExists = (selectedProject) =>
  collatedTasks.find((task) => task.key === selectedProject);

export const useTasks = (selectedProject) => {
  const [tasks, setTasks] = useState([]);
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    let unsubscribe = firebase
      .firestore()
      .collection("tasks")
      .where("userId", "==", "srktevqdreoltivxthgr");

    
    if (selectedProject && !collatedTasksExists(selectedProject)){
      unsubscribe = unsubscribe.where("group", "==", selectedProject);
    }else if (selectedProject === "TODAY")
      unsubscribe = unsubscribe.where(
        "date",
        "==",
        moment().format("DD/MM/YYYY")
      );     

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

  return { tasks, completed };
};

export const useProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("projects")
      .where("userId", "==", "srktevqdreoltivxthgr")
      .orderBy("projectId")
      .get()
      .then((snapshot) => {
        const allProjects = snapshot.docs.map((projects) => ({
          ...projects.data(),
          docId: projects.id,
        }));
        if (JSON.stringify(allProjects) !== JSON.stringify(projects)) {
          setProjects(allProjects);
        }
      });
  }, [projects]);

  return { projects, setProjects };
};

export const useTaskForm = () => {
  const [task, setTask] = useState({
    completed: false,
    title: "",
    description: "",
    date: "",
    time: "",
    group: "",
    userId: "srktevqdreoltivxthgr",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
    console.log(task);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    task.group &&
      task.title &&
      firebase
        .firestore()
        .collection("tasks")
        .add(task)
        .then((docRef) => {
          console.log("doc written");
        });
  };

  return {
    handleSubmit,
    handleChange,
    task,
  };
};
