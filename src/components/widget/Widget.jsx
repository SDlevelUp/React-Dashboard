import "./widget.scss";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
const Widget = ({ type }) => {

    let data;

    const amount = 350;
    const percentage = 20;

    switch (type) {
        case "user":
            data = {
                title: "UTILISATEURS",
                isMoney: false,
                link: "Voir tout les utilisateurs",
                icon: (
                    <PeopleAltIcon className="icon"
                        style={{
                            color: "ff7f50",
                            backgroundColor: "rgba(255, 127, 80, 0.2)"
                        }} />
                )
            };
            break;
        case "order":
            data = {
                title: "COMMANDES",
                isMoney: false,
                link: "Voir toutes les commandes",
                icon: (
                    <ShoppingCartIcon className="icon" style={{
                        color: "4b0082",
                        backgroundColor: "rgba(75, 0, 130, 0.2)"
                    }} />
                )
            };
            break;
        case "earning":
            data = {
                title: "REVENUS",
                isMoney: true,
                link: "Voir les revenus nets",
                icon: (
                    <AttachMoneyIcon className="icon" style={{
                        color: "008000",
                        backgroundColor: "rgba(0, 128, 0, 0.2)"
                    }} />
                )
            };
            break;
        case "balance":
            data = {
                title: "SOLDE",
                isMoney: true,
                link: "Voir le détail du solde",
                icon: (
                    <AccountBalanceWalletIcon className="icon" style={{
                        color: "ffd700",
                        backgroundColor: "rgba(255, 215, 0, 0.2)"
                    }} />
                )
            };
            break;
        default:
            break;
    }
    return (
        <div className="widget">
            <div className="left">
                <span className="title">{data.title}</span>
                <span className="counter">{data.isMoney && "$"}{amount}</span>
                <span className="link">{data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <ExpandLessIcon />
                    {percentage}%
                </div>
                {data.icon}
            </div>
        </div>
    )
}

export default Widget