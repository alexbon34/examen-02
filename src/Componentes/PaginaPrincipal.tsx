import Header from './Header.tsx';
import AppCards from './AppCards.tsx';
import AppControlPane from './AppControlPane.tsx';

export default function PaginaPrincipal(){
    return (
        <>
            <Header/>
            <main>
                <AppCards/>
                <AppControlPane/>
            </main>
        </>
    )
}