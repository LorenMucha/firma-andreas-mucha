export interface LeistungProps {
    id: string
}

export interface NavbarItem {
    text: string
    link: string
}

export const navbarItems: NavbarItem[] = [
    { text: 'Heizung', link: "#heizung" },
    { text: 'Bad', link: "#bad" },
    { text: 'Haustechnik', link: "#haustechnik" },
    { text: 'Dach', link: "#dach" }]