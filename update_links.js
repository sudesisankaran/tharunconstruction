const fs = require('fs');
const path = require('path');

const directory = "c:\\Users\\Administrator\\Desktop\\Tharunconstruction\\Tharunconstructionkrishnagiri-main";

const block1_old = `            <a href="https://www.youtube.com/@tharunconstruction" target="_blank" class="bg-red-600 text-white font-heading text-sm font-semibold uppercase tracking-widest py-3 px-6 hover:bg-white hover:text-red-600 transition duration-300 flex items-center justify-center gap-2 shadow-md">
              <i class="fa-brands fa-youtube text-lg"></i> SUBSCRIBE
            </a>
            <a href="https://www.instagram.com/tharunconstruction" target="_blank" class="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white font-heading text-sm font-semibold uppercase tracking-widest py-3 px-6 hover:opacity-90 transition duration-300 flex items-center justify-center gap-2 shadow-md">
              <i class="fa-brands fa-instagram text-lg"></i> FOLLOW US
            </a>
            <a href="https://www.facebook.com/share/1EVgXoDYcm/" target="_blank" class="bg-[#1877F2] text-white font-heading text-sm font-semibold uppercase tracking-widest py-3 px-6 hover:opacity-90 transition duration-300 flex items-center justify-center gap-2 shadow-md">
              <i class="fa-brands fa-facebook text-lg"></i> LIKE US
            </a>`;

const block1_new = `            <a href="https://youtube.com/@tharunconstruction-05?si=9VKJAa5yQKKKGNPq" target="_blank" class="bg-red-600 text-white font-heading text-sm font-semibold uppercase tracking-widest py-3 px-6 hover:bg-white hover:text-red-600 transition duration-300 flex items-center justify-center gap-2 shadow-md">
              <i class="fa-brands fa-youtube text-lg"></i> SUBSCRIBE
            </a>
            <a href="https://www.instagram.com/tharun_construction?igsh=MXM5eXZtMzQyeDhhNQ==" target="_blank" class="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white font-heading text-sm font-semibold uppercase tracking-widest py-3 px-6 hover:opacity-90 transition duration-300 flex items-center justify-center gap-2 shadow-md">
              <i class="fa-brands fa-instagram text-lg"></i> FOLLOW US
            </a>
            <a href="https://www.facebook.com/share/1EVgXoDYcm/" target="_blank" class="bg-[#1877F2] text-white font-heading text-sm font-semibold uppercase tracking-widest py-3 px-6 hover:opacity-90 transition duration-300 flex items-center justify-center gap-2 shadow-md">
              <i class="fa-brands fa-facebook text-lg"></i> LIKE US
            </a>
            <a href="https://youtube.com/@tharunconstruction-05?si=9VKJAa5yQKKKGNPq" target="_blank" class="bg-[#0077B5] text-white font-heading text-sm font-semibold uppercase tracking-widest py-3 px-6 hover:opacity-90 transition duration-300 flex items-center justify-center gap-2 shadow-md">
              <i class="fa-brands fa-linkedin text-lg"></i> CONNECT
            </a>`;

const block2_old = `          <div class="flex gap-4 text-xl">
            <a href="https://wa.me/919177933880" target="_blank" class="hover:text-accent transition duration-300"><i class="fa-brands fa-whatsapp"></i></a>
            <a href="tel:+919177933880" class="hover:text-accent transition duration-300"><i class="fa-solid fa-phone"></i></a>
            <a href="https://www.instagram.com/tharunconstruction" class="hover:text-accent transition duration-300"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://www.facebook.com/share/1EVgXoDYcm/" target="_blank" class="hover:text-accent transition duration-300"><i class="fa-brands fa-facebook"></i></a>
            <a href="https://www.youtube.com/@tharunconstruction" class="hover:text-accent transition duration-300"><i class="fa-brands fa-youtube"></i></a>
          </div>`;

const block2_new = `          <div class="flex gap-4 text-xl">
            <a href="https://wa.me/919177933880" target="_blank" class="hover:text-accent transition duration-300"><i class="fa-brands fa-whatsapp"></i></a>
            <a href="tel:+919177933880" class="hover:text-accent transition duration-300"><i class="fa-solid fa-phone"></i></a>
            <a href="https://www.instagram.com/tharun_construction?igsh=MXM5eXZtMzQyeDhhNQ==" class="hover:text-accent transition duration-300"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://www.facebook.com/share/1EVgXoDYcm/" target="_blank" class="hover:text-accent transition duration-300"><i class="fa-brands fa-facebook"></i></a>
            <a href="https://youtube.com/@tharunconstruction-05?si=9VKJAa5yQKKKGNPq" class="hover:text-accent transition duration-300"><i class="fa-brands fa-youtube"></i></a>
            <a href="https://youtube.com/@tharunconstruction-05?si=9VKJAa5yQKKKGNPq" target="_blank" class="hover:text-accent transition duration-300"><i class="fa-brands fa-linkedin"></i></a>
          </div>`;

const block3_old = `  <div class="fixed bottom-6 right-7 flex flex-col gap-3 z-[100]">
    <a href="https://wa.me/919177933880" target="_blank" class="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-transform">
      <i class="fa-brands fa-whatsapp"></i>
    </a>
    <a href="tel:+919177933880" class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl shadow-lg hover:scale-110 transition-transform">
      <i class="fa-solid fa-phone"></i>
    </a>
    <a href="https://www.instagram.com/tharunconstruction" target="_blank" class="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-transform">
      <i class="fa-brands fa-instagram"></i>
    </a>
    <a href="https://www.facebook.com/share/1EVgXoDYcm/" target="_blank" class="w-12 h-12 bg-[#1877F2] text-white rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-transform">
      <i class="fa-brands fa-facebook"></i>
    </a>
    <a href="https://www.youtube.com/@tharunconstruction" target="_blank" class="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-transform">
      <i class="fa-brands fa-youtube"></i>
    </a>
  </div>`;

const block3_new = `  <div class="fixed bottom-6 right-7 flex flex-col gap-3 z-[100]">
    <a href="https://wa.me/919177933880" target="_blank" class="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-transform">
      <i class="fa-brands fa-whatsapp"></i>
    </a>
    <a href="tel:+919177933880" class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl shadow-lg hover:scale-110 transition-transform">
      <i class="fa-solid fa-phone"></i>
    </a>
    <a href="https://www.instagram.com/tharun_construction?igsh=MXM5eXZtMzQyeDhhNQ==" target="_blank" class="w-12 h-12 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-transform">
      <i class="fa-brands fa-instagram"></i>
    </a>
    <a href="https://www.facebook.com/share/1EVgXoDYcm/" target="_blank" class="w-12 h-12 bg-[#1877F2] text-white rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-transform">
      <i class="fa-brands fa-facebook"></i>
    </a>
    <a href="https://youtube.com/@tharunconstruction-05?si=9VKJAa5yQKKKGNPq" target="_blank" class="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-transform">
      <i class="fa-brands fa-youtube"></i>
    </a>
    <a href="https://youtube.com/@tharunconstruction-05?si=9VKJAa5yQKKKGNPq" target="_blank" class="w-12 h-12 bg-[#0077B5] text-white rounded-full flex items-center justify-center text-2xl shadow-lg hover:scale-110 transition-transform">
      <i class="fa-brands fa-linkedin"></i>
    </a>
  </div>`;

fs.readdir(directory, (err, files) => {
    if (err) {
        console.error("Could not list the directory.", err);
        process.exit(1);
    }

    files.forEach((file) => {
        if (file.endsWith('.html')) {
            const filepath = path.join(directory, file);
            
            fs.readFile(filepath, 'utf8', (err, content) => {
                if (err) {
                    console.error("Error reading file:", err);
                    return;
                }

                let newContent = content;

                if (newContent.includes(block1_old)) {
                    newContent = newContent.replace(block1_old, block1_new);
                }
                if (newContent.includes(block2_old)) {
                    newContent = newContent.replace(block2_old, block2_new);
                }
                if (newContent.includes(block3_old)) {
                    newContent = newContent.replace(block3_old, block3_new);
                }

                if (newContent !== content) {
                    fs.writeFile(filepath, newContent, 'utf8', (err) => {
                        if (err) {
                            console.error("Error writing file:", err);
                        } else {
                            console.log(`Updated ${file}`);
                        }
                    });
                }
            });
        }
    });
});
