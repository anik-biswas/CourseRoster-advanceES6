const Sideshow = ({selectedCourse}) => {
    console.log(selectedCourse)
    return (
        <div>
            <div className="card w-80 bg-base-100 shadow-xl p-5">
             <h3 className="text-base font-medium text-sky-600">Credit Hours Remaining :{selectedCourse.length} Hrs</h3>
             {
                 selectedCourse.map ( course =>(
                   
                    <li key={course.id}>{course.name}</li>
                    
                ))}
            </div>
        </div>
    );
};

export default Sideshow;