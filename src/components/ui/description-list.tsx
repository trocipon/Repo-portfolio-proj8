interface DescriptionListProps {
  items: string | string[];
}

// Certains champs de projet (objectifs, compétences développées, résultats)
// sont parfois une simple phrase, parfois une liste selon le projet — un seul
// endroit pour gérer les deux cas plutôt que de recopier le ternaire à chaque
// utilisation.
export function DescriptionList({ items }: DescriptionListProps) {
  const list = Array.isArray(items) ? items : [items];

  return (
    <ul className="list-disc pl-5">
      {list.map((item, index) => (
        <li key={index} className="text-sm text-white/90">
          {item}
        </li>
      ))}
    </ul>
  );
}
