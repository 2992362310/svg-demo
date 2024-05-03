export function useInitEditor() {
  const initialEditorInfo = {
    x: 0,
    y: 0,
    content: '',
  };

  const editorInfo = reactive(initialEditorInfo);

  return {
    editorInfo,
  };
}
