
import Cars from "../../public/imgs/cars2.png";

import "../styles/components/imgcars.sass";

const ImgCars = () => {
    return (
        <>
            <div className="cars"><img src={Cars} alt="" /></div>
        </>
    )
};

export default ImgCars;