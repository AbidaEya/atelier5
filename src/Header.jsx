function Header() {
    return (
        <header style={{ background: "#282c34", padding: "1rem", color: "#fff" }}>
            <h1>My App</h1>
            <nav>
                <ul style={{ listStyle: "none", display: "flex", gap: "1rem", margin: 0, padding: 0 }}>
                    <li><a href="/" style={{ color: "#fff", textDecoration: "none" }}>Home</a></li>
                    <li><a href="/about" style={{ color: "#fff", textDecoration: "none" }}>About</a></li>
                    <li><a href="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
