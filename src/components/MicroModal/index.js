import MicroM from "micromodal";
import { useRef, useEffect } from "preact";
import "./styles.css";

MicroM.init();

export default function Micromodal() {
  const modal = useRef(null);

  useEffect(() => {
    // MicroM.show(modal.current);
    // Trigger your effect
    console.log("Modal: ", modal.current);
  }, []);

  return (
    <div ref={modal} class="modal micromodal-slide" aria-hidden="true">
      <div class="modal__overlay" tabindex="-1" data-micromodal-close>
        <div style="width: 400px" class="modal__container p-6 relative overflow-visible flex flex-col items-center justify-center"
          role="dialog" aria-modal="true" aria-labelledby="modal-1-title"
        >
          <div id="confirmDialogText" class="text-lg text-center leading-normal">
              Here is some good ole' modal content!
          </div>

          <div class="mt-5 flex items-center">
            <button type="button" class="focus:outline-none px-4 py-1 mr-4 border-2 border-red-500 uppercase text-xs tracking-wide font-semibold bg-transparent text-red-500 rounded-full">
              No, Cancel
            </button>
            <button type="button" class="focus:outline-none px-5 py-1 mr-4 border-2 border-red-500 uppercase text-xs tracking-wide font-semibold bg-red-500 text-white rounded-full">
              Yes I'm Sure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
