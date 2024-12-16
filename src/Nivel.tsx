import './Nivel.css'

interface Niveis {
    nivel: number;
    maximo: string;
}

export default function Nivel({
    nivel = 11,
    maximo = "PODER MÁXIMO",
} : Niveis) {
    return (
        <div className="nivel">
            <div className="poder">{nivel}</div>
            <div className="maximo">{maximo}</div>
        </div>
    )
}