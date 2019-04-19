import React from "react";
import SelectSearch from 'react-select-search'
import './style.css';

function renderOptions(option) {
	return (<span>{option.name}</span>);
}

const Form = props => (
	<form onSubmit={props.getWeather}>
									<SelectSearch
	                    name="country"
	                    mode="input"
											value = {props.country}
	                    options={props.countries}
	                    placeholder="Your country"
											onChange = {props.getCities}
	                />
									<SelectSearch
	                    name="city"
	                    mode="input"
	                    options={props.cities}
											value = {props.city}											
	                    placeholder="Your City"
	                />
									<button>Get Weather</button>
	</form>
);

export default Form;
