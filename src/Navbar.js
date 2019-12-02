import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core';
import styles from './styles/NavBarStyles';
import { ThemeContext } from './contexts/ThemeContext';
import { withLanguageContext } from './contexts/LanguageContext';

const content = {
	english: {
		search: 'Search'
	},
	french: {
		search: 'Chercher'
	},
	spanish: {
		search: 'Buscar'
	}
};
class Navbar extends Component {
	static contextType = ThemeContext;

	render() {
		const { isDarkMode, toggleDarkMode } = this.context;
		const { classes } = this.props;
		const { language } = this.props.languageContext;
		const searchTxt = content[language].search;

		const {
			root,
			menuButton,
			title,
			grow,
			search,
			searchIcon,
			inputInput
		} = classes;
		return (
			<div className={root}>
				<AppBar
					position='static'
					color={isDarkMode ? 'default' : 'primary'}>
					<Toolbar>
						<Typography
							className={title}
							variant='h6'
							color='inherit'>
							AppTitle
						</Typography>
						<Switch onClick={toggleDarkMode} />
						<div className={grow} />
						<div className={search}>
							<div className={searchIcon}>
								<SearchIcon />
							</div>
							<InputBase
								placeholder={`${searchTxt}...`}
								classes={{
									root: root,
									input: inputInput
								}}
							/>
						</div>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default withLanguageContext(withStyles(styles)(Navbar));
