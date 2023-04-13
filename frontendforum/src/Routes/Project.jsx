import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProjects } from '../redux/Project/project.action';
import { Alert, AlertIcon, Box, Text } from '@chakra-ui/react';
import { BiLoaderCircle } from "react-icons/bi";
import ProjectForm from '../Component/ProjectForm';

const Project = () => {
    const { loading, error, projects } = useSelector((store) => store.projectManager);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjects());
  }, []);

  console.log(projects)

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
        <ProjectForm />

        <Box>
            {projects && projects.map((ele) => 
            <Box key={ele._id}>
                <Text fontSize={"24px"}>Project Name: {ele.name}</Text>
            </Box>
            )}
        </Box>
    </div>
  )
}

export default Project