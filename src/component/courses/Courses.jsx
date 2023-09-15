import { useEffect, useState } from "react";
import creditImg from '../../assets/credit.svg'

const Courses = () => {
    const [courses,setCourses] = useState([]);
    useEffect( () => {
        fetch('courses.json')
        .then(res => res.json())
        .then (data => setCourses(data))
        
    },[])
    //console.log(courses)
    return (
       <div >
         <div className="grid grid-cols-3 gap-5 ">
            {
                courses.map(course => (
                    
                    <div key={course.id} className="card w-72 bg-base-100 shadow-xl">
                    <figure className="px-3 pt-5 ">
                        <img src= {course.image} className="rounded-xl h-40" />
                    </figure>
                    <div className="card-body px-3">
                        <h2 className="text-base font-bold ">{course.name}</h2>
                        <p className="text-sm text-justify">{course.description}</p>
                        <div className="flex  gap-5 ">
                            <div><span className="text-xl">$</span> Price :{course.price} $ </div>
                            <div className="flex">
                                <div>
                                <img src={creditImg} alt="" />
                                </div>
                                
                                <div>Credit :{course.credit}hr</div>
                            </div>
                        </div>
                        <div className="card-actions ">
                        <button className="btn btn-primary w-full">Select</button>
                        </div>
                    </div>
                    </div>
                 
                ))}
                
            </div>
       </div>
    );
};

export default Courses;