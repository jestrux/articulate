function BcQuote(values) {
    this.props = BcQuote.props;
    this.values = values;
    this.render = () => BcQuote.doRender(this.values);
}

BcQuote.label = 'Quote';
BcQuote.icon = '<svg viewBox="0 0 24 24"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/></svg>';

BcQuote.props = {
    text: {
        defaultValue: 'Quote content goes here',
        type: 'long-text'
    },
    author: {
        defaultValue: 'E.g. J. K. Rowling',
        type: 'text'
    },
    year: {
        defaultValue: 'E.g. 500 AD',
        type: 'text'
    }
}

BcQuote.doRender = function(options) {
    let owner = 'no-owner';
    const { author, year } = options;
    if (author && author.length)
        owner = (year && year.length) ? author + ' - ' + year : author;

    return `
        <blockquote class="border-l-4 px-4 border-blue-500">
            <span class="block text-xl">${options.text}</span>
            <span class="mt-1 block">${owner}</span>
        </blockquote>
    `;
}

BcQuote.preview = function () {
    return BcQuote.doRender({
        text: 'You know how the saying goes, a lucky soldier is a good soldier. But then again fate can be tricky🤷🏽‍♂️',
        author: "Napoleon",
        year: "300 B.C."
    });
}

export default BcQuote;