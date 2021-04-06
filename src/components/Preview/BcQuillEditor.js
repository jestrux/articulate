import { h } from 'preact';
import Quill from 'quill';
import 'quill/dist/quill.core.css'; // import styles
import 'quill/dist/quill.snow.css'; // for snow theme
import { useEffect, useRef } from 'preact/hooks';

const defaultOptions = {
    theme: 'snow',
    // boundary: document.body,
    modules: {
      toolbar: [
          { 'header': '1' },
          { 'header': '2' },
          'bold', 'italic', 
          // 'underline',
          // { 'list': 'ordered'}, 
          // { 'list': 'bullet' },
          'link'
      ],
    },
    placeholder: 'Insert text here ...',
    readOnly: false
}

export default function BcQuillEditor({options, onChange}){
    const editor = useRef(null);
    const quill = useRef(null);

    useEffect(() => {
        initialize();
    }, []);

    function initialize() {
        if(editor != null){
            defaultOptions.boundary = editor.current;
            quill.current = new Quill(editor.current, defaultOptions);
            if(options && options.text && options.text.length)
                quill.current.pasteHTML(options.text);

            quill.current.on('selection-change', (range, ...params) => {
                const editorWrapper = editor.current.closest('.bc-quill-editor');

                if (!range || !range.length)
                    editorWrapper.classList.remove("focused");
                else{
                    editorWrapper.classList.add("focused");

                    const toolbar = editorWrapper.querySelector(".ql-toolbar");
                    const bounds = quill.current.getBounds(range.index);
                    // const dx = bounds.left >= 175 ? 175 : 0;
                    const editorRect = editorWrapper.getBoundingClientRect();
                    const toolbarRect = toolbar.getBoundingClientRect();
                    
                    let dx = 0;
                    const toolbardiff = bounds.left + toolbarRect.width - editorRect.width;
                    if(toolbardiff > 0)
                        dx = toolbardiff / 2;
                    
                    toolbar.style.top = bounds.top - 46 + "px";
                    toolbar.style.left = bounds.left - dx + "px";
                }
            });

            quill.current.on('text-change', (delta, oldDelta, source) => {
                let html = editor.current.children[0].innerHTML
                const text = quill.current.getText()
                if (html === '<p><br></p>') html = ''
                onChange(html);
            });
        }
    }

    return (
        <div class="bc-quill-editor">
            <slot name="toolbar"></slot>
            <div ref={editor}></div>
        </div>
    );
}