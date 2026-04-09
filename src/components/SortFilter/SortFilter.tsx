/**
 * Пропси order та onSort
 */

import type { SortOrder } from "../../types/task";

interface SortFilterProps {
  order: SortOrder;
  onSort: (nextSortOrder: SortOrder) => void;
}

export default function SortFilter({ order, onSort }: SortFilterProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSort(e.target.value as SortOrder);
  };

  return (
    <select value={order} onChange={handleChange}>
      <option value="desc">Completed first</option>
      <option value="asc">Completed last</option>
    </select>
  );
}
