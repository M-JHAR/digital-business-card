import logo from '/src/assets/personal-img.jpg'

export default function Header() {
    return (
        <header className="header">
            <img className="header-logo" src={logo} />
            <h1>Mustafa Jhar</h1>
            <h2>Frontend Developer</h2>
        </header>
    )
}