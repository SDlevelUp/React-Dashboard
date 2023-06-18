import "./sidebar.scss";
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">Dashboard</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <li>
                        <SpaceDashboardIcon />
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <span>Utilisateurs</span>
                    </li>
                    <li>
                        <span>Produits</span>
                    </li>
                    <li>
                        <span>Commandes</span>
                    </li>
                    <li>
                        <span>Status</span>
                    </li>
                    <li>
                        <span>Notifications</span>
                    </li>
                    <li>
                        <span>Système</span>
                    </li>
                    <li>
                        <span>Journaux</span>
                    </li>
                    <li>
                        <span>Paramètres</span>
                    </li>
                    <li>
                        <span>Profil</span>
                    </li>
                    <li>
                        <span>Déconnexion</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">color options</div>
        </div>
    )
}
export default Sidebar;