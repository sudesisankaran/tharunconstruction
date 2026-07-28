const Jimp = require('jimp');
const fs = require('fs');
const path = require('path');

const directory = "C:\\Users\\Administrator\\Desktop\\Tharunconstruction\\Tharunconstructionkrishnagiri-main\\images";
const logo2Path = path.join(directory, "Tharun logo (2).png");
const logo3Path = path.join(directory, "Tharun logo (3).png");

const excludedFiles = [
    "Tharun logo (1).png",
    "Tharun logo (2).png",
    "Tharun logo (3).png",
    "favicon.png",
    "logo1.jpeg",
    "logo6.jpeg"
];

function getImagesToProcess(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(getImagesToProcess(file));
        } else {
            const ext = path.extname(file).toLowerCase();
            if (['.png', '.jpg', '.jpeg'].includes(ext)) {
                const basename = path.basename(file);
                if (!excludedFiles.includes(basename)) {
                    results.push(file);
                }
            }
        }
    });
    return results;
}

async function applyWatermarks(imagePath, logo2Path, logo3Path) {
    try {
        const baseImage = await Jimp.read(imagePath);
        const logo2 = await Jimp.read(logo2Path);
        const logo3 = await Jimp.read(logo3Path);

        const targetLogoW = Math.floor(baseImage.bitmap.width * 0.25);
        
        // Resize logos while maintaining aspect ratio
        logo2.resize(targetLogoW, Jimp.AUTO);
        logo3.resize(targetLogoW, Jimp.AUTO);
        
        // Apply 50% opacity
        logo2.opacity(0.5);
        logo3.opacity(0.5);

        const gap = Math.floor(baseImage.bitmap.width * 0.05);
        const totalW = targetLogoW * 2 + gap;

        const startX = Math.floor((baseImage.bitmap.width - totalW) / 2);
        const logo2Y = Math.floor((baseImage.bitmap.height - logo2.bitmap.height) / 2);
        const logo3Y = Math.floor((baseImage.bitmap.height - logo3.bitmap.height) / 2);

        // Composite the logos onto the base image
        baseImage.composite(logo2, startX, logo2Y, {
            mode: Jimp.BLEND_SOURCE_OVER,
            opacitySource: 1.0,
            opacityDest: 1.0
        });

        baseImage.composite(logo3, startX + targetLogoW + gap, logo3Y, {
            mode: Jimp.BLEND_SOURCE_OVER,
            opacitySource: 1.0,
            opacityDest: 1.0
        });
        
        await baseImage.writeAsync(imagePath);
        console.log(`Watermarked: ${imagePath}`);
    } catch (e) {
        console.log(`Skipping ${imagePath}: ${e.message}`);
    }
}

async function main() {
    const imagesToProcess = getImagesToProcess(directory);
    
    for (const imgPath of imagesToProcess) {
        await applyWatermarks(imgPath, logo2Path, logo3Path);
    }
}

main();
