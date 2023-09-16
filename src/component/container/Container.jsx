import Courses from "../courses/Courses";
import Sideshow from "../aside/Sideshow";

const Container = () => {
    return (
        <div className="flex flex-row  gap-12 ">
            
            <Courses></Courses>
            
        </div>
    );
};

export default Container;