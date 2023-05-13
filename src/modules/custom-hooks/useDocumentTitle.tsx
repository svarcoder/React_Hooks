/**
 * This is a custom React hook that updates the document title with the current count value.
 * @param count - The count parameter is a value that is used to update the document title. It is
 * passed as an argument to the useDocumentTitle custom hook and is used as a dependency in the
 * useEffect hook. Whenever the value of count changes, the useEffect hook will be triggered and the
 * document title will be updated with
 */
import { useEffect } from "react";

function useDocumentTitle(count: number) {
  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);
}

export default useDocumentTitle;
