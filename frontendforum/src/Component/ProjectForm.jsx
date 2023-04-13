import { Box, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addProject } from '../redux/Project/project.action';


let initialState = {
    name: "",
};

const ProjectForm = () => {
    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();


        dispatch(addProject(formData));

        setFormData({
            name: "",
        });
    };

    const { name } = formData;
    return (
        <Box mb="40px" textAlign={"center"} display="flex" justifyContent={"center"} alignItems="center">
            <form
                onSubmit={onSubmit}
                style={{ display: "flex", flexDirection: "column", gap: "10px", justifyContent: "center", alignItems: "center", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", width: "350px", padding: "10px", m: "auto", textAlign: "center" }}
            >
                <Input
                    value={name}
                    name="name"
                    w="300px"
                    placeholder="Project Name"
                    onChange={handleChange}
                    type='text'
                />
                <Input
                    bg="goldenrod"
                    color={"white"}
                    width={"300px"}
                    type={"submit"}
                    value="Add Project"
                />
            </form>
        </Box>
    );
}

export default ProjectForm;