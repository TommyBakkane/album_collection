import "./Header.css"
import {TbVinyl} from 'react-icons/tb'

export const Header = () => {

    return (
        <section className="header">
            <TbVinyl className="logo" />
            <h1 className="header__title">Logo</h1>
        </section>
    )
}

