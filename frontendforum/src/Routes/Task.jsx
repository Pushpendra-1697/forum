import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTask, getTasks } from '../redux/Task/task.action';
import { Alert, AlertIcon, Box, Input, Text } from '@chakra-ui/react';
import { BiLoaderCircle } from "react-icons/bi";



let initialState = {
  content: "",
  task: ''
};


const Task = () => {
  const { loading, error, tasks } = useSelector((store) => store.taskManager);
  const [formData, setFormData] = useState(initialState);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTasks());
  }, []);
  console.log(tasks);


    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();


        dispatch(addTask(formData));

        setFormData({
          content: "",
          task: ''
        });
    };


    const {content, task} = formData;
  return (
    <div>
      {loading && (
        <Box display={"flex"} justifyContent="center" alignItems={"center"}>
          {" "}
          <BiLoaderCircle fontSize={"34px"} />{" "}
        </Box>
      )}
      {error && <Box display={"flex"} justifyContent="center" alignItems={"center"}>
        <Alert status='error' w="300px" >
          <AlertIcon />
          {`Something went Wrong 😒`}
        </Alert>
      </Box>}

      <Box mb="40px" textAlign={"center"} display="flex" justifyContent={"center"} alignItems="center">
        <form
          onSubmit={onSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center", alignItems: "center", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", width: "350px", padding: "10px", m: "auto", textAlign: "center" }}
        >
          <Input
            value={content}
            name="content"
            w="300px"
            placeholder="content"
            onChange={handleChange}
            type='text'
          />
          <Input
            value={task}
            name="task"
            w="300px"
            placeholder="task"
            onChange={handleChange}
            type='text'
          />
          <Input
            bg="goldenrod"
            color={"white"}
            width={"300px"}
            type={"submit"}
            value="Add Task"
          />
        </form>
      </Box>

      {tasks.map((ele) => 
      <Box key={ele._id}>
        <Text>{ele.content}</Text>
        <Text>{ele.task}</Text>
      </Box>
      )}
    </div>
  )
}

export default Task