import "./featured.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Featured = () => {
    return (
        <div className="featured">
            <div className="top">
                <h1 className="title">
                    Revenus totaux
                </h1>
                <MoreVertIcon fontSize="small" />
            </div>
            <div className="bottom">
                <div className="featured-chart">
                    <CircularProgressbar value={65} text="65%" strokeWidth={3} />
                </div>
                <p className="title">Total des ventes</p>
                <p className="amount">540€</p>
                <p className="description">
                    Les transactions précédentes sont en cours de traitement.
                    Les prochains paiements ne sont pas encore disponible.
                </p>

                <div className="summary">
                    <div className="item">
                        <div className="item-title">
                            Objectif
                        </div>
                        <div className="item-result negative">
                            <KeyboardArrowDownIcon fontSize="small" />
                            <div className="result-amount">
                                15K€
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-title">
                            La semaine dernière
                        </div>
                        <div className="item-result positive">
                            <KeyboardArrowUpIcon fontSize="small" />
                            <div className="result-amount">
                                13.5K€
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-title">
                            Le mois dernier
                        </div>
                        <div className="item-result positive">
                            <KeyboardArrowUpIcon fontSize="small" />
                            <div className="result-amount">
                                15K€
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
