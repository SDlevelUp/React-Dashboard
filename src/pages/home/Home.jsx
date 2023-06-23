
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Table from "../../components/table/Table";
import "./home.scss";

const Home = () => {
    return (
        <div className="home">

            <div className="widgets">
                <Widget type="user" />
                <Widget type="order" />
                <Widget type="earning" />
                <Widget type="balance" />
            </div>
            <div className="charts">
                <Featured />
                <Chart height={540} />
            </div>
            <div className="list-container">
                <div className="list-title">
                    Les dernières transactions
                </div>
                <Table />
            </div>

        </div>
    )
}

export default Home;




