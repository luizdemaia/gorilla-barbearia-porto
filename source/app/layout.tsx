import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Gorilla | Barbearia no Porto',description:'Bruto por natureza. Corte, barba e atitude no Porto. Visita a Gorilla na Av. de Fernão de Magalhães 1255.'};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="pt-PT"><body>{children}</body></html>}
