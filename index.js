// ReactDom.render(<h1>Hello World</h1>, document.getElementById("root"))
function Navbar() {
    return(
        <nav className = "navbar">
            <a className="navbar-logo" href="#">NAVBAR</a>
        </nav>
    )
}

ReactDom.render(<ul><li>TypeScript</li><li>React</li></ul>, document.getElementById("root"))