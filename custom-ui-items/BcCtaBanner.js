function BcCtaBanner(values){
    this.values = values;
    this.render = () => BcCtaBanner.doRender(this.values);
}

BcCtaBanner.label = 'Cta Banner';
BcCtaBanner.icon = '<svg viewBox="0 0 24 24"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>';

BcCtaBanner.props = {
    theme: {
        defaultValue: 'cream',
        type: 'choice',
        choices: ['black', 'blue', 'cream']
    },
    topic: {
        defaultValue: 'Staycations',
        type: 'text'
    },
    title: {
        defaultValue: 'Fun experiences designed to take you deeper.',
        type: 'text'
    },
    buttonText: {
        defaultValue: 'View All',
        type: 'text'
    }
}

BcCtaBanner.doRender = function(options) {
    const themes = {
        "cream": "background-color: antiquewhite",
        "black": "background-color: #202020; color: white",
        "blue": "background: linear-gradient(90deg, #034959 19%, #1aa1be 91%); color: white",
    };

    return `
        <div class="max-w-5xl mx-auto rounded-xl px-8" style="${themes[options.theme]}">
            <div class="flex">
                <div class="max-w-xs -mr-8 py-10 flex flex-col items-start justify-between">
                    <div>
                        <span class="text-sm font-light uppercase tracking-wider block mb-1">
                            ${options.topic}
                        </span>
                        <h1 class="text-4xl leading- font-">
                            ${options.title}
                        </h1>
                    </div>

                    <button class="mb-4 border-none shadow-sm bg-white text-black text-sm font-medium py-2 px-6 rounded">
                        View All
                    </button>
                </div>
                <div class="flex-1 flex relative overflow-hidden -mr-2" style="height: 480px;">
                    <div class="absolute inset-x-0 -inset-y-24 grid grid-cols-4 gap-x-4">
                        <div class="pt-64 h-full flex flex-col space-y-4">
                            <div class="flex-1 relative rounded-lg overflow-hidden">
                                <img class="absolute object-cover w-full h-full" 
                                    src="https://images.unsplash.com/photo-1516534775068-ba3e7458af70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNjE2NXwwfDF8c2VhcmNofDh8fG9ubGluZXxlbnwwfHx8&ixlib=rb-1.2.1&q=80&w=1080" 
                                    alt="" 
                                />
                            </div>
                            <div class="flex-1 relative rounded-lg overflow-hidden">
                                <img class="absolute object-cover w-full h-full" 
                                    src="https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNjE2NXwwfDF8c2VhcmNofDZ8fG9ubGluZXxlbnwwfHx8&ixlib=rb-1.2.1&q=80&w=1080" 
                                    alt="" 
                                />
                            </div>
                        </div>
                        <div class="py-32 mt-20 h-full flex flex-col space-y-4">
                            <div class="flex-1 relative rounded-lg overflow-hidden">
                                <img class="absolute object-cover w-full h-full" 
                                    src="https://images.unsplash.com/photo-1496345962527-29757c3a3d94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNjE2NXwwfDF8c2VhcmNofDE0fHxvbmxpbmV8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=1080" 
                                    alt="" 
                                />
                            </div>
                            <div class="flex-1 relative rounded-lg overflow-hidden">
                                <img class="absolute object-cover w-full h-full" 
                                    src="https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNjE2NXwwfDF8c2VhcmNofDEzfHxvbmxpbmV8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=1080" 
                                    alt="" 
                                />
                            </div>
                        </div>
                        <div class="relative py-32 h-full flex flex-col space-y-4">
                            <div class="flex-1 relative rounded-lg overflow-hidden">
                                <img class="absolute object-cover w-full h-full" 
                                    src="https://images.unsplash.com/photo-1591292082066-0e20e80284a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNjE2NXwwfDF8c2VhcmNofDg2fHxvbmxpbmV8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=1080" 
                                    alt="" 
                                />
                            </div>
                            <div class="flex-1 relative rounded-lg overflow-hidden">
                                <img class="absolute object-cover w-full h-full" 
                                    src="https://images.unsplash.com/photo-1588702548001-34f488aa6a75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNjE2NXwwfDF8c2VhcmNofDY4fHxvbmxpbmV8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=1080" 
                                    alt="" 
                                />
                            </div>

                            <div class="absolute bottom-12 w-full bg-white h-16 rounded-lg"></div>
                        </div>
                        <div class="py-32 mt-12 h-full flex flex-col space-y-4">
                            <div class="flex-1 relative rounded-lg overflow-hidden">
                                <img class="absolute object-cover w-full h-full" 
                                    src="https://images.unsplash.com/photo-1591348445405-d960e9d7ef45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNjE2NXwwfDF8c2VhcmNofDM2fHxvbmxpbmV8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=1080" 
                                    alt="" 
                                />
                            </div>
                            <div class="flex-1 relative rounded-lg overflow-hidden">
                                <img class="absolute object-cover w-full h-full" 
                                    src="https://images.unsplash.com/photo-1593075979461-e0116242e814?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxNjE2NXwwfDF8c2VhcmNofDYxfHxvbmxpbmV8ZW58MHx8fA&ixlib=rb-1.2.1&q=80&w=1080" 
                                    alt="" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

BcCtaBanner.preview = function () {
    return `    
        <img class="w-full" src="demo-assets/BcCtaBanner.png" />
    `;
}

export default BcCtaBanner;