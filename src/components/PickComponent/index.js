import { h } from 'preact';
import { useContext } from 'preact/hooks';
import ArticulateConfig from '../../ArticulateConfig';

export default function PickComponent({opened = false, close, onComponentPicked}){
    const { uiElements } = useContext(ArticulateConfig);

    if(!uiElements) return null;

    return (
        <div class={`fixed inset-0  z-50 ${!opened && 'pointer-events-none'}`}>
            <div className={`bg-black bg-opacity-25 fixed inset-0 transition ${!opened && 'opacity-0'}`}
                onClick={close}></div>

            <div class={`flex flex-col h-full relative z-10 w-1/3 max-w-sm bg-gray-100 shadow overflow-hidden transition ${!opened && 'transform -translate-x-full'}`}>
                <div class="p-4 border-b border-gray-300 flex items-center justify-between">
                    <h3 class="text-xl font-semibold">
                        Pick a Component
                    </h3>

                    <button class="focus:outline-none w-6 h-6 rounded-full p-0 flex items-center justify-center bg-gray-300"
                        onClick={close}
                    >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>

                <div class="p-4 flex-1 overflow-y-auto">
                    {
                        Object.values(uiElements).map(el => (
                            <button class="block w-full text-left mt-3 mb-7 border-none focus:outline-none bg-transparent"
                                onClick={() => onComponentPicked(el)}
                            >
                                <div className="shadow p-2 rounded bg-white">
                                    <div dangerouslySetInnerHTML={{__html: el.preview() }}></div>
                                </div>

                                <span class="mt-2 block text-center text-xl font-semibold">{ el.label }</span>
                            </button>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}