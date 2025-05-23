import Vidas from './Vidas.tsx';
import ParejasEncontradas from './ParejasEncontradas.tsx';
import "/project/examen-02/src/estilos/appControlPanelStyle.css";

export default function AppControlPanel(){
    return (
        <>
            <section id="AppControlPanel">
                <Vidas/>
                <ParejasEncontradas/>
            </section>
        </>
    )
}