import React, { createContext } from 'react';
import useToggleState from '../hooks/useToggleState';

export const ThemeContext = createContext();

export function ThemeProvider(props) {
	const [ isDarkMode, toggleDarkMode ] = useToggleState(false);

	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
			{props.children}
		</ThemeContext.Provider>
	);
}
