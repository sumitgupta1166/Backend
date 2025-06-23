import { v2 as cloudinary} from "cloudinary"
import fs from  "fs"
// here fs is our file system (from node js)
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});
// methods to upload file in cloudinary servers
// 1. upload file from user into our local storage
// 2. then upload file from local storage(local servers) into cloudinary servers to avoid any error in file upload into cloudinary servers
const uploadOnCloudinary= async (localFilePath) =>{
    try {
        if(!localFilePath) return null
        // upload the file on Cloudinary
        const response = await cloudinary.uploader.upload
        (localFilePath,{
            resource_type: "auto"
        })
        // file has been uploaded Successfully
        // console.log("File is uploaded on Cloudinary", response.url)
        // console.log(response.url);
        console.log(response);
        fs.unlinkSync(localFilePath)
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath)
        //remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}

export {uploadOnCloudinary}