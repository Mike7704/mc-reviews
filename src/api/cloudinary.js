"use server";
import { getCldImageUrl } from "next-cloudinary";
import crypto from "crypto";

// Get image from Cloudinary using the url/id stored in database
export async function getImage(image_url) {
  try {
    return getCldImageUrl({
      width: 512,
      height: 512,
      src: image_url,
      defaultImage: `pizzas/default.png`,
    });
  } catch (error) {
    return `/images/pizza.png`;
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
  }
}

// Delete image from Cloudinary
export async function deleteImage(imageID) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  const timestamp = Math.floor(new Date().getTime() / 1000);
  const signature = generateSignature(imageID, apiSecret, timestamp);

  try {
    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/destroy`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        public_id: imageID,
        api_key: apiKey,
        timestamp: timestamp,
        signature: signature,
      }),
    });

    if (!response.ok) {
      console.error("Failed to delete image");
    }
  } catch (error) {
    console.error("Error deleting image:", error.message);
  }
}

const generateSignature = (imageID, apiSecret, timestamp) => {
  const signatureString = `public_id=${imageID}&timestamp=${timestamp}${apiSecret}`;
  return crypto.createHash("sha1").update(signatureString).digest("hex");
};
