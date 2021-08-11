import './Profile.css';

function Profile(){
	return(
		<section className="profile">
			<h1 className="profile__hello-title hello-title">Привет, Варвара!</h1>
			<form className="profile__form">
				<label className="profile__label">Имя
					<input type="text" className="profile__input profile__input_name" />
				</label>
				<label className="profile__label">E-mail
					<input type="text" className="profile__input profile__input_email" />
				</label>
				<button type="submit" className="profile__btn profile__btn_submit">Редактировать</button>
			</form>
			<button type="button" className="profile__btn profile__btn_exit">Выйти из аккаунта</button>
		</section>
	);
}

export default Profile;
