function BcQuote(values) {
    this.props = BcQuote.props;
    this.values = values;
    this.render = () => BcQuote.doRender(this.values);
}

BcQuote.label = 'Quote';
BcQuote.icon = '<svg viewBox="0 0 24 24"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/></svg>';

BcQuote.props = {
    text: {
        defaultValue: "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends when they bout to get into some mischief. And so I ward ten points to Neville and gryfindor🪄",
        type: 'long-text'
    },
    author: {
        defaultValue: 'A. P. W. B. Dumbledore',
        optional: true,
        type: 'text'
    },
    year: {
        defaultValue: null,
        optional: true,
        type: 'number'
    }
}

BcQuote.doRender = function(options) {
    let owner = 'no-owner';
    const { author, year } = options;
    if (author && author.length)
        owner = (year && year.length) ? author + ' - ' + year : author;

    return `
        <blockquote class="border-l-4 px-4 border-blue-500">
            <span class="block text-xl leading-relaxed font-light">${options.text}</span>
            <span class="mt-1 block opacity-50">${owner}</span>
        </blockquote>
    `;
}

BcQuote.preview = function () {
    return BcQuote.doRender({
        text: "It takes a great deal of bravery to stand up to our enemies, but...",
        author: "A. P. W. B. Dumbledore",
        year: 1996
    });
}

export default BcQuote;