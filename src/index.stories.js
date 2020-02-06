import "./marble.scss";

export default { title: 'Button' };

export const withText = () => '<button class="button">Hello World</button>';

export const withEmoji = () => {
	const button = document.createElement('button');
	button.innerText = '😀 😎 👍 💯';
	return button;
};
