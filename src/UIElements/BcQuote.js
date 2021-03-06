class BcQuote {
    static props = {
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

    constructor(values) {
        this.props = BcQuote.props;
        this.values = values;
        this.render = () => BcQuote.doRender(this.values);
    }

    static doRender(options) {
        let owner = 'no-owner';
        const { author, year } = options;
        if (author && author.length)
            owner = (year && year.length) ? author + ' - ' + year : author;

        return `
            <blockquote owner="${owner}">
                ${options.text}
            </blockquote>
        `;
    }

    static label = 'Quote';
    static icon = '<svg viewBox="0 0 24 24"><path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/></svg>';

    static preview = function () {
        return BcQuote.doRender({
            text: 'You know how the saying goes, a lucky soldier is a good soldier. But then again fate plays nasty games🤷🏽‍♂️',
            author: "Napoleon",
            year: "300 B.C."
        });
    }
}

export default BcQuote;