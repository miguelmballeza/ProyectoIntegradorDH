import '../css/TopBar.css';

export default function TopBar(){
    return(
        <header className="main-header">
            <a href="/" className="user"><h2 id="user-name"></h2><img id="profile-picture" src="/assets/lp.png" alt="Foto de perfil"/></a>
        </header>
    );
};