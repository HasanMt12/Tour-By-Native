import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Tours By Native`;
    }, [title])
};

export default useTitle;