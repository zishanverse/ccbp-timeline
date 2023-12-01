import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {item} = props
  const {projectTitle, projectUrl, imageUrl, description, duration} = item

  return (
    <div className="course-card">
      <img src={imageUrl} alt="project" className="project-img" />
      <div className="course-flex">
        <h1>{projectTitle}</h1>
        <div className="duration-card">
          <AiFillCalendar />
          <p>{duration}</p>
        </div>
      </div>

      <p>{description}</p>
      <a href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimelineCard
