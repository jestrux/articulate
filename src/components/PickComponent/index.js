import { h } from 'preact';
import { useContext } from 'preact/hooks';
import ArticulateConfig from '../../ArticulateConfig';

export default function PickComponent({opened = false, onClose, onComponentPicked}){
    const { uiElements, centerComponentPicker } = useContext(ArticulateConfig);

    if(!uiElements) {
        console.error("Please add some ui elements.");
        return null;
    }

    let placementClasses = `h-full w-1/3 max-w-sm ${!opened && ' -translate-x-full'}`;
    if(centerComponentPicker)
        placementClasses = `h-4/5 w-full max-w-5xl m-auto rounded-md ${!opened && ' -translate-y-full'}`;

    return (
        <div class={`fixed flex inset-0 z-50 ${!opened && 'pointer-events-none'}`}>
            <div className={`bg-black bg-opacity-25 fixed inset-0 transition ${!opened && 'opacity-0'}`}
                onClick={onClose}></div>

            <div class={`flex flex-col relative z-10 bg-gray-200 shadow overflow-hidden transition transform ${placementClasses}`}>
                <div class="p-4 border-b border-gray-300 flex items-center justify-between">
                    <h3 class="text-xl font-semibold">
                        Pick a Component
                    </h3>

                    <button class="focus:outline-none w-6 h-6 rounded-full p-0 flex items-center justify-center bg-gray-300"
                        onClick={onClose}
                    >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>

                <div class={`p-4 flex-1 overflow-y-auto`}>
                    <div class={`${centerComponentPicker && 'grid grid-cols-3 gap-x-6'}`}>
                        {
                            Object.values(uiElements).map(el => (
                                <button class={`block w-full text-left mt-3 mb-7 border-none focus:outline-none bg-transparent ${centerComponentPicker && 'flex flex-col items-center'}`}
                                    onClick={() => onComponentPicked(el)}
                                >
                                    { centerComponentPicker && <span class="flex-1"></span> }
                                    <div className={`shadow p-2 rounded bg-white ${centerComponentPicker && 'w-full'}`}>
                                        <div dangerouslySetInnerHTML={{__html: el.preview() }}></div>
                                    </div>
                                    { centerComponentPicker && <span class="flex-1"></span> }
                                    <span class="mt-2 block text-center text-xl font-semibold">{ el.label }</span>
                                </button>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}