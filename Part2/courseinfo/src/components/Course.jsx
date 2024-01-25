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

export default Course