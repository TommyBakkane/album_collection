import axios from "axios";

export const ImageUploadService = (
    () => {
    const imageUploadEndpoints = "";

    const uploadImage = async (image : File) => {
        const formData = new FormData();

        formData.append("file", image);

        const response = await axios({
            url: imageUploadEndpoints,
            method: "POST",
            data: formData,
            headers: { "Content-Type": "multipart/form-data" }
        });

        formData.delete("image");
    }
    return{
        uploadImage
    }
})();