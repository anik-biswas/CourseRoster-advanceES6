import { useEffect, useState } from "react";
import creditImg from '../../assets/credit.svg'
import Sideshow from "../aside/Sideshow";
import { ToastContainer,toast } from "react-toastify";
import  'react-toastify/dist/ReactToastify.css';
const Courses = () => {
    const [courses,setCourses] = useState([]);
    const [selectedCourse,setSelectedCourse] = useState([]);
    const [totalCost,setTotalCost] = useState(0);
    const [totalCredit,setTotalCredit] = useState(0);
    const [totalRemaining,setTotalRemaining] = useState(20);
     useEffect( () => {
        fetch('courses.json')
        .then(res => res.json())
        .then (data => setCourses(data))
        
    },[])
    //console.log(courses)
    const handleSelectCourse = (course) =>{
        const isSelect = selectedCourse.find(item => item.id===course.id);
        
        let totalCost=course.price;
        let totalCredit=course.credit;
        let totalRemaining =20;
        
        if(isSelect){
            //return alert("This is Already Selected")
           toast.error('Card Already Added.', { autoClose: 4000 });
            
        }
        else {
            selectedCourse.forEach((item) =>{
                totalCost=totalCost+item.price;
                totalCredit= totalCredit+item.credit;
            })
            //console.log(totalCost);

            totalRemaining = totalRemaining-totalCredit;
            if(totalCredit>20)
            {
                toast.error('You Can not added Over 20 Credit', { autoClose: 4000 });
            }
            else {
                setTotalCost(totalCost)
            setTotalCredit(totalCredit)
            setTotalRemaining(totalRemaining)
            setSelectedCourse([...selectedCourse,course])
            }
        }
    }
    
    return (
       <div className="flex flex-row  gap-12 ">
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
                        <button onClick={() => handleSelectCourse(course) } className="btn btn-primary w-full">Select</button>
                        </div>
                    </div>
                    </div>
                 
                ))}
                
            </div>
            <div>
            <ToastContainer/>
            <Sideshow selectedCourse={selectedCourse} totalCost={totalCost} totalCredit={totalCredit} totalRemaining={totalRemaining} ></Sideshow>
            </div>
            
       </div>
       
    );
};

export default Courses;