import { writeFile } from "fs/promises";
import type { Actions } from "./$types";

export const actions = {
  upload: async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());



    const { fileToUpload } = formData as { fileToUpload: File };

    writeFile(
      `static/${fileToUpload.name}`,
      Buffer.from(await fileToUpload.arrayBuffer())
    );

    return {
      success: true,
      fileName: fileToUpload.name,
    };
  },
} satisfies Actions;

