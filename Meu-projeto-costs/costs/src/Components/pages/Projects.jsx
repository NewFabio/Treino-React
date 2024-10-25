import Message from '../layout/Message'

import { useLocation } from 'react-router-dom'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import ProjectCard from '../project/ProjectCard'
import Loading from '../layout/Loading'

import styles from './Projects.module.css'
import { useState, useEffect } from 'react'

function Project() {

    const [project, setProject] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [projectMessage, setProjectMessage] = useState('')

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:5000/projects', {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                },
            })
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                setProject(data)
                setRemoveLoading(true)
            })
            .catch((err) => console.log(err))
        }, 500)
    }, [])

    function removeProject(id) {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type' : 'application/json'
            },
        })
        .then(resp => resp.json())
        .then(() => {
            setProject(project.filter((project) => project.id !== id))
            setProjectMessage('Projeto removido com sucesso!')
        })
        .catch(err => console.log(err))
    }

    return(
        <div className={styles.project_container} >
            <div className={styles.title_container} >
                <h1>Meus Projetos</h1>
                <LinkButton to='/newproject' text='Criar Projeto' />
            </div>
            {message && <Message type='success' msg={message} />}
            {projectMessage && <Message type='success' msg={projectMessage} />}
            <Container customClass='start' >
                {project.length > 0 &&
                    project.map((project) => (
                        <ProjectCard 
                            id={project.id}
                            name={project.name}
                            budget={project.budget}
                            category={project.category.name}
                            key={project.id}
                            handleRemove={removeProject}
                        />
                    ))}
                    {!removeLoading && <Loading />}
                    {removeLoading && project.length === 0 && (
                        <p>Não há projetos cadastrados!</p>
                    )}
            </Container>
        </div>
    )
}

export default Project