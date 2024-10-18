import Message from '../layout/Message'

import { useLocation } from 'react-router-dom'
import Container from '../layout/Container'
import LinkButton from '../layout/LinkButton'
import ProjectCard from '../project/ProjectCard'

import styles from './Projects.module.css'
import { useState, useEffect } from 'react'

function Project() {

    const [project, setProject] = useState([])

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
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
        })
        .catch((err) => console.log(err))
    }, [])

    return(
        <div className={styles.project_container} >
            <div className={styles.title_container} >
                <h1>Meus Projetos</h1>
                <LinkButton to='/newproject' text='Criar Projeto' />
            </div>
            {message && <Message type='success' msg={message} />}
            <Container customClass='start' >
                {project.length > 0 &&
                    project.map((project) => (
                        <ProjectCard 
                            id={project.id}
                            name={project.name}
                            budget={project.budget}
                            category={project.category.name}
                            key={project.id}
                        />
                    ))}
            </Container>
        </div>
    )
}

export default Project