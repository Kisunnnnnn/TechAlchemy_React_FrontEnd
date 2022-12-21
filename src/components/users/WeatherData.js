import axios from "axios"
import { Fragment, useEffect, useState } from "react"
import Loader from "../Loader"

const WeatherData = () => {
    const [WeatherData, setWeatherData] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getData()
    })
    const getData = async () => {
        const resp = await axios.get('/weather')

        setWeatherData(resp.data.data.data)
        setLoading(false)

    }

    return (
        <div className="container-fluid">
            {loading ? <Loader /> :
                <Fragment>
                    <center><h3 className="mt-5">Weather Data</h3></center>

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Date</th>
                                <th scope="col">Main</th>
                                <th scope="col">Temp</th>
                            </tr>
                        </thead>
                        <tbody>
                            {WeatherData.map((data, index) => (
                                <tr key={index}>
                                    <td>{data.date}</td>
                                    <td>{data.main}</td>
                                    <td>{data.temp}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Fragment>

            }


        </div>
    )
}
export default WeatherData;