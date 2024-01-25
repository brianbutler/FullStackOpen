
const Course = ({course}) => {

  const total = course.parts.reduce((s, p) => {
      return s + p.exercises
    }, 0)

  return (
    <>
      <CourseHeader name={course.name}></CourseHeader>
      <CourseContent parts={course.parts}></CourseContent>
      <p><b>total of {total} exercises</b></p>
    </>
  )
}

const CourseHeader = ({name}) => {
  return (
    <h1>{name}</h1>
  )
}

const CourseContent = ({parts}) => {
  return (
    <div>
      {parts.map(part => <CoursePart key={part.id} coursePart={part}></CoursePart>)}
    </div>
  )
}

const CoursePart = (props) => {
  return (
    <p>{props.coursePart.name} {props.coursePart.exercises}</p>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

export default App