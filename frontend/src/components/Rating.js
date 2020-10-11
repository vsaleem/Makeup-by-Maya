import React from "react";
import PropTypes from "prop-types";

// I used destructering to bring in props, "value and text".
// To build a rating component, you need to bring in the star icons,
// from FontAwesome.
// Then, select a full, empty, and half-filled star to use.

const Rating = ({ value, text, color }) => {
	return (
		<div className='rating'>
			<span>
				<i
					style={{ color }}
					className={
						value >= 1
							? "fas fa-star"
							: value >= 0.5
							? "fas fa-star-half-alt"
							: "far fa-star"
					}></i>
			</span>
			<span>
				<i
					style={{ color }}
					className={
						value >= 2
							? "fas fa-star"
							: value >= 1.5
							? "fas fa-star-half-alt"
							: "far fa-star"
					}></i>
			</span>
			<span>
				<i
					style={{ color }}
					className={
						value >= 3
							? "fas fa-star"
							: value >= 2.5
							? "fas fa-star-half-alt"
							: "far fa-star"
					}></i>
			</span>
			<span>
				<i
					style={{ color }}
					className={
						value >= 4
							? "fas fa-star"
							: value >= 3.5
							? "fas fa-star-half-alt"
							: "far fa-star"
					}></i>
			</span>
			<span>
				<i
					style={{ color }}
					className={
						value >= 5
							? "fas fa-star"
							: value >= 4.5
							? "fas fa-star-half-alt"
							: "far fa-star"
					}></i>
			</span>
			<span>{text && text}</span>
		</div>
	);
};

// This method is a simple way of adding default props.
Rating.defaultProps = {
	color: "#f8e825",
};

// Adding this PropTypes method will type-check your props.
Rating.propTypes = {
	value: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired,
	color: PropTypes.string,
};

export default Rating;
