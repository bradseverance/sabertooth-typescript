import css from './Footer.module.css'
import packageJson from '../../../../package.json'

export default function Footer() {
    return (
        <footer className={css.footer}>
        POLYWOOD&reg; Saber Tooth Version 1.1 |
        Client Version {packageJson.version}
      </footer>
    )
}