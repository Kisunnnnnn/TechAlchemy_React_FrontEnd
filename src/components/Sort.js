import axios from "axios"
import { useEffect, useState } from "react"

const Sort = () => {
    const [sortedData, setSortedData] = useState([])
    const [originalData, setOriginalData] = useState([])
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        const response = await axios.get('/sort')
        setSortedData(response.data.data)
        setOriginalData(response.data.original)
    }
    return (
        <div className="container">
            <center><h3 className="mt-5"><u>Data before sorting</u></h3>
                <h5 className="mt-3">{originalData.map(data => (
                    data + "  "
                ))}</h5></center>

            <center><h3 className="mt-5"><u>Data after sorting</u></h3>
                <h5 className="mt-3">{sortedData.map(data => (
                    data + "  "
                ))}</h5></center>

        </div>
    )
}
export default Sort