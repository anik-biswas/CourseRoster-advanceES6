const Sideshow = ({selectedCourse,totalCost,totalCredit,totalRemaining}) => {
    //console.log(selectedCourse)
    return (
        <div>
            <div className="card w-80 bg-base-100 shadow-xl p-5">
             <h3 className="text-lg font-medium text-sky-600">Credit Hours Remaining :{totalRemaining} Hrs</h3>
             <hr className="my-3" />
             <h3 className="text-lg font-medium">Course Name :</h3>
             {
                
                 selectedCourse.map ( course => (
                   
                    <li className="list-decimal font-semibold" key={course.id}>{course.name}</li>
                    
                ))}
            <hr className="my-3" />
            <h3 className="font-bold">Total Cost : {totalCost} $ </h3>
            <hr className="my-3" />
            <h3 className="font-bold">Total Credits : {totalCredit} Hrs </h3>
            </div>
        </div>
    );
};

export default Sideshow;