import './FilterCheckbox.css';

function FilterCheckbox(){
	return(
		<div className="switch-container">
			<label>
				<input className="switch" type="checkbox" />
				<div>
					<div></div>
				</div>
			</label>
			<p className="switch-btn__label">Короткометражки</p>
		</div>
		
	);
}

export default FilterCheckbox;
