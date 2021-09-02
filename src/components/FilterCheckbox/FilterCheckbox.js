import './FilterCheckbox.css';

function FilterCheckbox({ onChange, isChecked,onFilterShort, ...props}){

	const handleChange = (e) => {
    onFilterShort(e.target.checked);
  }

	return(
		<div className="switch-container" >
			<label>
				<input
					className="switch"
					type="checkbox"
					name="filter-toggler"
          checked={isChecked}
          onChange={handleChange}/>
				<div>
					<div></div>
				</div>
			</label>
			<p className="switch-btn__label">Короткометражки</p>
		</div>

	);
}

export default FilterCheckbox;
