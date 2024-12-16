import './Trofeu.css'

interface Cima {
    classe: number;
    trofeu: string;
}

export default function ExibCima({
    classe = 30,
    trofeu = "500",
} : Cima) {
    return (
        <div className="cima">
            <div className="classe">{classe}</div>
            <div className="trofeu">🏆{trofeu}</div>
        </div>
    )
}