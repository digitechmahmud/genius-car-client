import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Genius Car!`;
    }, [title]);
};


export default useTitle;