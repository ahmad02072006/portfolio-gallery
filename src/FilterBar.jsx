function FilterBar({ options, selected, onSelect }) {
  return (
    <div className="filter-bar">
      {options.map((opt) => (
        <button
          key={opt}
          onClick={() => onSelect(opt)}
          className={opt === selected ? "active" : ""}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

export default FilterBar;