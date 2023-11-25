import react, { useState } from 'react'
import styled from "styled-components"
import ProjectData from './ProjectData';


const AddProject = () => {

    const systemPassword = "12345";
    const passwordfield = {
        password: "",
        validPassword: false,
        verify: "verify"
    }

    const projectDetails = {

        languageUse: "",
        projectName: "",
        projectDesc: "",
        url: "",
    }
    const [passwordVal, setPassword] = useState(passwordfield)
    const [projectDetailsData, setProjectData] = useState(projectDetails)

    const verified = () => {
        if (systemPassword == passwordVal.password) {
            setPassword({ ...passwordVal, password: "", validPassword: true, verify: "verified" })
        }
    }

    const handleInput = (e) => {
        const name = e.target.name
        const value = e.target.value

        setProjectData({ ...projectDetailsData, [name]: value })
    }

    const handleSubmit = (e) => {
        // setAllRecord([...allRecord ,newRecord])
        console.log("click me")

    }

    return (
        <>

            <div className='add-project-container'>
                <div className='add-project'><h1>Add Project</h1></div>
                {passwordVal.validPassword == false ?
                    <div className='verify-password'>
                        <div className="input-password">
                            <input type="text" className='input-field-verify'
                                value={passwordVal.password}
                                onChange={(e) => {
                                    setPassword({ ...passwordVal, password: e.target.value })
                                }}
                                placeholder='password'
                                name='password' />
                        </div >
                        <button onClick={() => {
                            verified()
                        }}>{passwordVal.verify}</button>
                    </div> : " "}
                {
                    passwordVal.validPassword == true ? <>

                        <div><input type="text" className='input-field-details' placeholder='language use' name='languageUse' onChange={handleInput} value={projectDetailsData.languageUse} /></div>

                        <div ><input type="text" className='input-field-details' placeholder='project name' name='projectName' onChange={handleInput} value={projectDetailsData.projectName} /></div>

                        <div ><input type="text" className='input-field-details' placeholder='project description' name='projectDesc' onChange={handleInput} value={projectDetailsData.projectDesc} /></div>

                        <div ><input type="url" className='input-field-details' placeholder='url' name='url' onChange={handleInput} value={projectDetailsData.url} /></div>

                        <div ><input type="submit" className='add-project-btn' onClick={handleSubmit} /></div></>
                        : ""
                }







            </div>

        </>
    )
}
export default AddProject;
