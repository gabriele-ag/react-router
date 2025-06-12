import { NavLink } from "react-router-dom";

function AppHeader() {
    const linkNav = [{
        title: "Home",
        url: "/",
    },
    {
      title: "AboutUs",
      url: "/about-us",  
    },
    {
        title: "Posts",
        url: "/posts",
    }];

    return (
        <header>
            <nav>
                <ul className="navbar flex">
                    {linkNav.map((curLink, index) => (
                        <li key= {index}>
                            <NavLink to={curLink.url}>{curLink.title}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );

};

export default AppHeader

