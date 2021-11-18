function BcText(values){
    this.values = values;
    this.render = () => BcText.doRender(this.values);
}

BcText.label = 'Text';
BcText.icon = '<svg viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>';

BcText.props = {
    text: {
        defaultValue: "<p>And so Jack went up the beanstalk in a haste, seemingly <em>unaware</em> of the <strong>perils</strong> that awaited ahead.</p>",
        type: 'long-text',
        optional: true
    }
}

BcText.doRender = function(options) {
    return options.text;
}

BcText.preview = function () {
    return BcText.doRender({
        text: "<p>And so Jack went up the beanstalk in a haste, seemingly <em>unaware</em> of the <strong>perils</strong> that awaited ahead.</p>"
    });
}

export default BcText;