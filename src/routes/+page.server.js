import Parser from 'rss-parser';
let parser = new Parser();

export async function load() {
	let posts = [];

	const reddit = await parser.parseURL('https://www.reddit.com/r/askreddit.xml');

	const youtube = await parser.parseURL(
		'https://www.youtube.com/feeds/videos.xml?channel_id=UCX6OQ3DkcsbYNE6H8uQQuVA'
	);

	const twitter = await parser.parseURL('https://twiiit.com/elonmusk/rss');

	reddit.items.forEach((item) => {
		console.log(item);
		posts.push({
			title: item.title,
			description: item.contentSnippet,
			link: item.link,
			type: 'reddit',
			pubDate: item.pubDate,
			author: item.author
		});
	});

	youtube.items.forEach((item) => {
		console.log(item);
		posts.push({
			title: item.title,
			description: item.contentSnippet,
			link: item.link,
			type: 'youtube',
			pubDate: item.pubDate,
			author: item.author
		});
	});

	twitter.items.forEach((item) => {
		console.log(item);
		posts.push({
			title: item.title,
			description: item.contentSnippet,
			link: item.link,
			type: 'twitter',
			pubDate: item.pubDate,
			author: item.author
		});
	});

	posts.sort((a, b) => {
		return new Date(b.pubDate) - new Date(a.pubDate);
	});

	return {
		posts
	};
}
