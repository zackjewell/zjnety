const {DateTime} = require("luxon")

module.exports = {
    layout: "post.njk",
    tags: ["posts"],
    eleventyComputed: {
        dateString: ({page}) => DateTime.fromJSDate(page.date, {zone: 'utc'}).toLocaleString(DateTime.DATE_FULL)
    }
}