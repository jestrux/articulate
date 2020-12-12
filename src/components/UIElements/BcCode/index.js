import hljs from 'highlight.js';
import darkTheme from './dark-theme';
import lightTheme from './light-theme';

class BcCode {
    static props = {
        language: {
            defaultValue: null,
            type: 'choice',
            choices: ['HTML', 'CSS', 'Javascript']
        },
        theme: {
            defaultValue: "Dark",
            type: 'choice',
            choices: ['Dark', 'Light']
        },
        code: {
            defaultValue: 'Write code here',
            type: 'long-text'
        }
    }

    constructor(values) {
        this.props = BcCode.props;
        this.values = values;
        this.render = () => BcCode.doRender(this.values);
    }

    static doRender = function(options, preview) {
        const code = hljs.highlight(options.language, options.code).value;
        const margin = preview ? 'margin: -2rem;' : 'padding: 0 2rem';
        const colors = options.theme == 'Dark' ? 'background: #353030; color: white;' : 'background: #f5f5f5;';

        return `
            ${options.theme == 'Dark' ? darkTheme : lightTheme}
            <div style="${colors}">
                <div style="white-space: pre-wrap; ${margin}">
                    ${code}
                </div>
            </div>
        `;
    }

    static label = 'Code';
    static icon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>';

    static preview = function () {
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
}

export default BcCode;