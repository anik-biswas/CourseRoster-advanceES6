import Courses from "../courses/Courses";
import Sideshow from "../aside/Sideshow";

const Container = () => {
    return (
        <div className="flex flex-row  gap-20 ">
            
            <Courses></Courses>
            
            <Sideshow></Sideshow>
        </div>
    );
};

export default Container;