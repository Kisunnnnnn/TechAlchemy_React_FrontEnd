
import { Audio, Circles } from 'react-loader-spinner'


const Loader = () => {
    return (
        <div style={{ marginTop: "20%", marginLeft: "50%" }}>
            <Circles
                height="80"
                width="80"
                radius="9"
                color="blue"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
            />
        </div>



    )
}
export default Loader