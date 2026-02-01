import de from "@/locales/de.json"

export interface LeistungProps {
    id: string
}

export interface NavbarItem {
    text: string
    link: string
}

export const navbarItems: NavbarItem[] = de.nav.items as NavbarItem[]
