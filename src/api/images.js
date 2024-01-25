import axios from "axios";

const instance = axios.create({
    baseURL: "https://pixabay.com/api/",
    params: {
        key: "40968906-c17bbb7f7323ac5f27427753d",
        image_type: "photo",
        orientation: "horizontal",
    }
})

export const searchImages = (q, page) => {
    return instance.get("/", {
        params: {
            q,
            page,
            per_page: 12,
        }
    })
}


