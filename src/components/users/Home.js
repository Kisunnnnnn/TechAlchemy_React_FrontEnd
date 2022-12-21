import axios from "axios"
import { Fragment, useEffect, useState } from "react"
import Loader from "../Loader"

const Home = () => {
    const [newsData, setNewsData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getData()
    })
    const getData = async () => {
        const resp = await axios.get('/news')
        setNewsData(resp.data.data.data)
        setLoading(false)

    }

    return (
        <div className="container-fluid">
            {loading ? <Loader /> : <Fragment>

                <center><h3 className="mt-5">News Data</h3></center>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">HeadLine</th>
                            <th scope="col" style={{ width: "60%" }}>Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {newsData.map((data, index) => (
                            <tr key={index}>
                                <td style={{ width: "60%" }}>{data.headline}</td>
                                <td><a href={data.link}>{data.link}</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fragment>}


        </div>
    )
}
export default Home