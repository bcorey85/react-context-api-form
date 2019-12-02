import React, { useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import withStyles from '@material-ui/core/styles/withStyles';
import styles from './styles/FormStyles';
import { LanguageContext } from './contexts/LanguageContext';

const words = {
	english: {
		email: 'Email',
		password: 'Password',
		signIn: 'Sign In',
		remember: 'Remember Me'
	},
	french: {
		email: 'Adresse Electronique',
		password: 'Mot de Passe',
		signIn: 'Se Connecter',
		remember: 'Souviens-toi De Moi'
	},
	spanish: {
		email: 'Correo Electronico',
		password: 'Contrasena',
		signIn: 'Registrarse',
		remember: 'Recuerdame'
	}
};

function Form(props) {
	const { language, changeLanguage } = useContext(LanguageContext);
	const { classes } = props;
	const { main, paper, avatar, form, submit } = classes;
	const { email, signIn, remember, password } = words[language];
	return (
		<main className={main}>
			<Paper className={paper}>
				<Avatar className={avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography variant='h5'>{signIn}</Typography>
				<Select value={language} onChange={changeLanguage}>
					<MenuItem value='english'>English</MenuItem>
					<MenuItem value='french'>French</MenuItem>
					<MenuItem value='spanish'>Spanish</MenuItem>
				</Select>
				<form className={form}>
					<FormControl margin='normal' required fullWidth>
						<InputLabel htmlFor='email'>{email}</InputLabel>
						<Input id='email' name='email' autoFocus />
					</FormControl>
					<FormControl margin='normal' required fullWidth>
						<InputLabel htmlFor='password'>{password}</InputLabel>
						<Input
							id='password'
							name='password'
							type='password'
							autoFocus
						/>
					</FormControl>
					<FormControlLabel
						control={<Checkbox color='primary' />}
						label={remember}
					/>
					<Button
						variant='contained'
						type='submit'
						fullWidth
						color='primary'
						className={submit}
					>
						{signIn}
					</Button>
				</form>
			</Paper>
		</main>
	);
}

export default withStyles(styles)(Form);
