import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {item} = props
  const {courseTitle, description, duration, tagsList} = item

  return (
    <div className="course-card">
      <div className="course-flex">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-card">
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>

      <p>{description}</p>
      <ul className="list">
        {tagsList.map(each => (
          <p className="tag">{each.name}</p>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
