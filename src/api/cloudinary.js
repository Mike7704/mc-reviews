"use server";
import { getCldImageUrl } from "next-cloudinary";

// Get image from Cloudinary using the url/id stored in database
export async function getImage(image_url) {
  try {
    return getCldImageUrl({
      width: 300,
      height: 300,
      src: image_url,
      defaultImage: `pizzas/default.png`,
    });
  } catch (error) {
    return `/images/pedros-logo.png`;
  }
}

// Upload image to Cloudinary from form
export async function uploadImage(image) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = "alxsswg0";

  try {
    const formData = new FormData();
    formData.append("file", image);

    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload?upload_preset=${uploadPreset}`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to upload image");
    }

    const data = await response.json();
    return data.public_id; // Return the id of the image to store in database
  } catch (error) {
    console.error("Error uploading image:", error.message);
    return null;
  }
}
