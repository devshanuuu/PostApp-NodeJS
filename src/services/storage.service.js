const ImageKit = require('@imagekit/nodejs');

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

 async function uploadFile(file) {
    const result = await imagekit.files.upload({
        file: Buffer.toString('base64'),
        fileName: "image.jpg"
    })
    return result;
}

module.exports = uploadFile;