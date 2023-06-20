import "./widget.scss";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const Widget = () => {
    return (
        <div className="widget">
            <div className="left">
                <span className="title">Utilisateurs</span>
                <span className="counter">B51068</span>
                <span className="link">Voir les utilisateurs</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <ExpandLessIcon />
                    35 %
                </div>
                <PeopleAltIcon className="icon" />
            </div>
        </div>
    )
}

export default Widget