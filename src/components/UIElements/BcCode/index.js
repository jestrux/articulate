import hljs from 'highlight.js';
import darkTheme from './dark-theme';
import lightTheme from './light-theme';

function BcCode(values) {
    this.values = values;
    this.render = () => BcCode.doRender(this.values);
}

BcCode.label = 'Code';
// BcCode.icon = '<svg viewBox="0 0 24 24"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>';
BcCode.icon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>';

BcCode.props = {
    language: {
        defaultValue: "CSS",
        type: 'radio',
        choices: ['HTML', 'CSS', 'Javascript']
    },
    theme: {
        defaultValue: "Dark",
        type: 'radio',
        choices: ['Dark', 'Light']
    },
    code: {
        defaultValue: `
            .blog-content blockquote {
                margin: 1.5em 0;
                padding: 0 1rem;
                font-size: 1.3rem;
                font-family: Alegreya;
            }
        `,
        type: 'long-text'
    }
}

BcCode.doRender = function (options, preview) {
    // console.log("Highlighter: ", hljs);
    // const code = options.code;
    // const margin = preview ? '' : 'padding: 0 2rem';

    const code = hljs.highlight(options.language, options.code).value;
    const margin = preview ? 'margin: -2rem' : 'padding: 0 2rem';
    const colors = options.theme == 'Dark' ? 'background: #353030; color: white;' : 'background: #f5f5f5;';

    return `
            ${options.theme == 'Dark' ? darkTheme : lightTheme}
            <div style="${colors}; overflow: hidden">
                <div style="white-space: pre-wrap; ${margin}">
                    ${code}
                </div>
            </div>
        `;
}

BcCode.preview = function () {
    return BcCode.doRender({
        language: 'CSS',
        theme: 'Dark',
        code: `
            .blog-content blockquote {
                margin: 1.5em 0;
                padding: 0 1rem;
                font-size: 1.3rem;
                font-family: Alegreya;
            }
            `
    }, true);
}

export default BcCode;