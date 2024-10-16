import {useNavigate} from 'react-router-dom'

import styles from './NewProject.module.css'
import ProjectFrom from '../project/ProjectForm'

function NewProject() {

    const history = useNavigate()
    function Navigate() {
        history('/projects', {message: 'Projeto criado com sucesso!'})
    }

    function createPost(project) {
        
        // initialize cost and services
        project.cost = 0
        project.services = [] 

        fetch("http://localhost:5000/projects", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            //redirect
            Navigate()
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectFrom handleSubmit={createPost} btnText='Criar Projeto' />
        </div>
    )
}
export default NewProject