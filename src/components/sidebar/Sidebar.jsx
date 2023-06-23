import React, { useState } from 'react';

import "./sidebar.scss";
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    return (
        <div className="sidebar">
            <div className="top">
                <span className="logo">Dashboard</span>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">PRINCIPAL</p>
                    <li>
                        <SpaceDashboardIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">MENU</p>
                    <li>
                        <PeopleAltIcon className="icon" />
                        <span>Utilisateurs</span>
                    </li>
                    <li>
                        <StoreIcon className="icon" />
                        <span>Produits</span>
                    </li>
                    <li>
                        <CreditCardIcon className="icon" />
                        <span>Commandes</span>
                    </li>

                    <li>
                        <LocalShippingIcon className="icon" />
                        <span>Livraison</span>
                    </li>
                    <p className="title">SUIVI</p>
                    <li>
                        <InsertChartIcon className="icon" />
                        <span>Status</span>
                    </li>
                    <li>
                        <NotificationsIcon className="icon" />
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICES</p>
                    <li>
                        <SettingsSystemDaydreamIcon className="icon" />
                        <span>Santé du système</span>
                    </li>
                    <li>
                        <PsychologyIcon className="icon" />
                        <span>Journaux</span>
                    </li>
                    <li>
                        <SettingsIcon className="icon" />
                        <span>Paramètres</span>
                    </li>
                    <p className="title">UTILISATEUR</p>
                    <li>
                        <AccountCircleIcon className="icon" />
                        <span>Profil</span>
                    </li>
                    <li>
                        <LogoutIcon className="icon" />
                        <span>Déconnexion</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}
export default Sidebar;