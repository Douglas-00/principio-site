// Borda ondulada, o mesmo recorte das artes da Princípio Impresso.
export default function Onda({ cor, invertida = false }: { cor: string; invertida?: boolean }) {
  const ondas = 9;
  const passo = 1440 / ondas;
  let d = "M0 44V22";
  for (let i = 0; i < ondas; i++) {
    const x = i * passo;
    d += ` C${x + passo * 0.25} 22 ${x + passo * 0.25} 2 ${x + passo * 0.5} 2 S${x + passo * 0.75} 22 ${x + passo} 22`;
  }
  d += "V44Z";
  return (
    <svg
      className="onda"
      viewBox="0 0 1440 44"
      preserveAspectRatio="none"
      aria-hidden="true"
      style={invertida ? { transform: "rotate(180deg)", display: "block" } : { display: "block" }}
    >
      <path d={d} fill={cor} />
    </svg>
  );
}
