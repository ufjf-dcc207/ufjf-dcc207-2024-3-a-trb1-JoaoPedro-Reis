import './Brawl.css'

interface Brawlers {
    acessorio?: boolean;
    eng1?: boolean;
    powerStar?: boolean;
    eng2?: boolean;
    nome: string;
}

export default function Brawl ({
    acessorio = true,
    eng1 = true,
    powerStar = true,
    eng2 = false,
    nome = "TARA",
}:  Brawlers)   {
        return (
            <div className="brawl">
                {acessorio && <div className="acessorio">🟢</div>}
                {eng1 && <div className="eng1">🔷</div>}
                {powerStar && <div className="powerStar">⭐</div>}
                {eng2 && <div className="eng2">🔷</div>}
                <div className="nome">{nome}</div>
            </div>
        );
    }