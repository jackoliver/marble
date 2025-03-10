import html from "../../../.storybook/helpers/html";

import image768 from "../../../.storybook/assets/images/full-width-image/seurat_circus_sideshow.jpg";
import image960 from "../../../.storybook/assets/images/full-width-image/seurat_circus_sideshow-960.jpg";
import image1440 from "../../../.storybook/assets/images/full-width-image/seurat_circus_sideshow-1440.jpg";

import { text, withKnobs } from "@storybook/addon-knobs";

export default { title: "Components/Topic Card", decorators: [withKnobs] };

const TopicCard = () => {
	const linkTitle = text("Link Title", "This is a title");
	return html`<div class="topic-card topic-card--active">
		<div class="topic-card__image-wrapper topic-card__image-wrapper--fixed-ratio fixed-width">
			<a href="link" class="topic-card__image-link" tabindex="-1">
				<img
					class="topic-card__image"
					alt="ALT"
					src="${image768}"
					srcset="${image768} 768w, ${image960} 960w, ${image1440} 1440w"
					sizes="425px"
				/>
			</a>
		</div>
		<div class="topic-card__subject">
			<div class="topic-card__header">
				<h4 class="topic-card__header-heading">
					<a href="link">
						${linkTitle}
					</a>
				</h4>
			</div>
		</div>
	</div>`;
};

export { TopicCard };
