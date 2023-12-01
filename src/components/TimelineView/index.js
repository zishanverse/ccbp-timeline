import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="main-container">
      <div className="header">
        <h1 className="journey">MY JOURNEY OF CCBP 4.0</h1>
      </div>

      <div className="choro-container">
        <Chrono
          className="chrono"
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(each => {
            if (each.categoryId === 'COURSE') {
              return <CourseTimelineCard key={each.id} item={each} />
            }
            return <ProjectTimelineCard key={each.id} item={each} />
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
