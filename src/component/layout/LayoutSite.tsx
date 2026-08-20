import { FC, ReactNode } from 'react'
import scss from './LayoutSite.module.scss'
import Header from './header/Header'
import Footer from './footer/Footer'

interface ILayout {
	children: ReactNode
}

const LayoutSite: FC<ILayout> = ({ children }) => {
	return (
		<div>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	)
}

export default LayoutSite
