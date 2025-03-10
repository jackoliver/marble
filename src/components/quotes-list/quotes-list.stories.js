import html from "../../../.storybook/helpers/html";
import { withKnobs, number, text } from "@storybook/addon-knobs";
import { useEffect } from "@storybook/client-api";
import quotesListJs from "./quotes-list.js";
export default {
	title: "Quotes List",
	decorators: [withKnobs],
};

const data = () => ({
	allPressCTA: text("All Press CTA", "All Press"),
	allPressLink: text("All Press Link", "#some-link"),
	heading: text("Heading", "Quotes List"),
	id: "quotes-module",
	quote: {	
		quoteText: text("Quote Text", "But web browsers aren’t like web servers. If your back-end code is getting so big that it’s starting to run noticably slowly, you can throw more computing power at it by scaling up your server. That’s not an option on the front-end where you don’t really have one run-time environment—your end users have their own run-time environment with its own constraints around computing power and network connectivity."),
		citationName: text("Citation Name", "The New York Times"),
		citationLink: text("Citation Link", "https://www.nytimes.com")
	}
});

const quoteMarkup = (quote) => {
	return html`<figure class="quotes-module__quote js-quotes-module__quote">
		<blockquote cite="#" class="quotes-module__quote-text">
			${quote.quoteText}
		</blockquote>
		<figcaption class="quotes-module__quote-citation">
			<a class="quotes-module__quote-link" href="${quote.citationLink}">
				${quote.citationName}
			</a>
		</figcaption>
	</figure>`;
};

const markup = (model, numberOfQuotes = 7) => {
	return html`
		<div class="quotes-module js-quotes-module" id="${model.id}">
			<div class="quotes-module__contents">
				<div class="quotes-module__header">
					<h3>${model.heading}</h3>
					<h4><a href="${model.allPressLink}">${model.allPressCTA}</a></h4>
				</div>
				<div class="quotes-module__quotes">
					${new Array(number("Number of Quotes", numberOfQuotes))
		.fill(quoteMarkup(model.quote))
		.join("\n")}
				</div>
				<a
					href="#${model.id}"
					class="js-quotes-module__expander quotes-module__expander button tertiary-button"
				>
					View more
				</a>
			</div>
		</div>
	`;
};

const quotesList = () => {
	useEffect(quotesListJs);
	return markup(data());
};

const withLessThanFourQuotes = () => {
	useEffect(quotesListJs);
	return markup(data(), 2);
};

export { quotesList, withLessThanFourQuotes };
