import React, { Component } from "react";
import enhanceWithClickOutside from "react-click-outside"
import _ from "lodash"

class Autosuggest extends Component {

	constructor(props) {
		super(props);

		this.state = {
			value: "",
			suggestions: [],
		};

		this.handleChange = this.handleChange.bind(this)
		this.handleClick = this.handleClick.bind(this)
		this.handleFocus = this.handleFocus.bind(this)
	}

	handleChange(event) {
		const newValue = event.target.value;

		this.setState({
			value: newValue,
			suggestions: this.props.getSuggestions(newValue),
		})
		this.props.onChange(event, {
			id: this.props.id,
			name: this.props.name,
			value: newValue,
		})
	}

	handleClick(event, sugg) {
		this.setState({
			value: sugg.value,
			suggestions: [],
		}, () => this.input.focus())

		this.props.onChange(event, {
			id: this.props.id,
			name: this.props.name,
			value: sugg.value,
		})
	}

	handleFocus() {
		this.setState({
			suggestions: this.props.getSuggestions(this.state.value),
		})
	}

	handleClickOutside() {
		this.setState({
			suggestions: [],
		})
	}

	render() {
		return <div style={{ width:"100%", position: "relative" }}>
			<input
				type="text" placeholder={this.props.placeholder}
				value={this.state.value} style={{width:"100%"}} ref={input => this.input = input}
				onFocus={this.handleFocus} onChange={this.handleChange} onKeyPress={this.props.onKeyPress}
			/>
			{ this.state.suggestions.length ?
				<div className="autosuggest-list">
					{_.map(this.state.suggestions, (sugg, index) =>
						<div key={index} onClick={event => this.handleClick(event, sugg)}>
							{ sugg.content }
						</div>
					)}
				</div>
			: null }
		</div>
	}
}

export default enhanceWithClickOutside(Autosuggest)
