// Add any interactive Vanilla JavaScript logic here
document.addEventListener('DOMContentLoaded', () => {
  // Example: Form submission handler
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      if (form.id === 'whatsapp-form') {
        const name = document.getElementById('wa-name').value;
        const email = document.getElementById('wa-email').value;
        const phone = document.getElementById('wa-phone').value;
        const project = document.getElementById('wa-project').value;
        
        const message = `*New Website Inquiry*%0A*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Project Details:* ${project}`;
        const whatsappUrl = `https://wa.me/919177933880?text=${message}`;
        
        window.open(whatsappUrl, '_blank');
        form.reset();
        return;
      }

      // Handle logic here
      console.log('Form submitted');
      alert('Thank you for your submission!');
      form.reset();
    });
  });

  // Example: Active navigation link highlight logic
  const navLinks = document.querySelectorAll('header nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      // Remove active classes
      navLinks.forEach(l => {
        l.classList.remove('text-accent', 'border-accent');
        l.classList.add('border-transparent');
      });
      // Add to clicked
      this.classList.remove('border-transparent');
      this.classList.add('text-accent', 'border-accent');
    });
  });
});
// Slider Logic
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('completed-slider');
    const prevBtn = document.getElementById('slider-prev');
    const nextBtn = document.getElementById('slider-next');

    if (slider && prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            slider.scrollBy({ left: -400, behavior: 'smooth' });
        });
        nextBtn.addEventListener('click', () => {
            slider.scrollBy({ left: 400, behavior: 'smooth' });
        });

        // Auto-Slide Logic
        let autoSlideInterval = setInterval(() => {
            if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
                slider.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                slider.scrollBy({ left: 400, behavior: 'smooth' });
            }
        }, 3000);

        // Pause auto-slide on hover
        slider.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
        slider.addEventListener('mouseleave', () => {
            autoSlideInterval = setInterval(() => {
                if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
                    slider.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    slider.scrollBy({ left: 400, behavior: 'smooth' });
                }
            }, 3000);
        });
    }
});

// Accordion Logic
document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion-btn');
    accordions.forEach(btn => {
        btn.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('.accordion-icon');
            
            // Toggle current
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.textContent = '-';
            } else {
                content.classList.add('hidden');
                icon.textContent = '+';
            }
        });
    });
});

// Service Modal Logic
const serviceData = {
    'Vastu Plans': {
        image: 'images/vastu_plans.png',
        title: 'Vastu Plans',
        text: 'Our expert architects design floor plans deeply rooted in Vastu Shastra principles. We ensure that your home or office layout promotes positive energy, prosperity, and harmony while maintaining a modern and highly functional aesthetic. Every direction and room placement is meticulously calculated to balance the elements of nature.'
    },
    'Elevations': {
        images: [
            'images/ELEVATIONS/IMG-20220622-WA0007.jpg',
            'images/ELEVATIONS/IMG-20220622-WA0008.jpg',
            'images/ELEVATIONS/IMG-20250205-WA0044.jpg',
            'images/ELEVATIONS/IMG-20250205-WA0046.jpg',
            'images/ELEVATIONS/IMG-20250228-WA0048.jpg',
            'images/ELEVATIONS/IMG-20260511-WA0023.jpg',
            'images/ELEVATIONS/IMG-20260511-WA0042.jpg'
        ],
        title: 'Architectural Elevations',
        text: 'The exterior of your building makes the first impression. Our 3D architectural elevations provide a photorealistic preview of your future home or commercial space. We specialize in modern, contemporary, and traditional facades, ensuring your building stands out with premium finishes, proper lighting concepts, and elegant structural design.'
    },
    'Interior Designs': {
        images: [
            'images/INTERIOR/20250405_191642.jpg',
            'images/INTERIOR/H-1-1.png',
            'images/INTERIOR/H-1_1.png',
            'images/INTERIOR/H-1_2.png',
            'images/INTERIOR/H-3_1-1.png',
            'images/INTERIOR/H-4_2-2.png',
            'images/INTERIOR/Image.png',
            'images/INTERIOR/K-1_1.png',
            'images/INTERIOR/K-2_1.png',
            'images/INTERIOR/K-3_3.png'
        ],
        title: 'Interior Designs',
        text: 'Transform empty spaces into luxurious living environments. Our interior design services cover everything from space planning and false ceilings to modular kitchens, premium wardrobes, and bespoke furniture. We blend colors, textures, and lighting to create interiors that are not only beautiful but also highly practical.'
    },
    'Residential Projects': {
        images: [
            'images/residntial/20241004_160812.jpg',
            'images/residntial/20241004_163641.jpg',
            'images/residntial/20250411_112301.jpg',
            'images/residntial/20250411_163508.jpg',
            'images/residntial/20260220_171532.jpg',
            'images/residntial/20260221_171145.jpg',
            'images/residntial/20260221_171255 (1).jpg',
            'images/residntial/20260221_171255.jpg',
            'images/residntial/20260302_145838.jpg',
            'images/residntial/8610-edited.jpg'
        ],
        title: 'Residential Projects',
        text: 'Building your dream home is our ultimate passion. From individual villas to multi-story apartments, we handle complete turnkey residential construction. We manage the entire lifecycle of the build - from foundation laying to final handover - ensuring top-tier material quality, strict adherence to timelines, and structural safety.'
    },
    'Extension Projects': {
        images: [
            'images/EXTENTION/20250505_111955.jpg',
            'images/EXTENTION/20250509_120627.jpg',
            'images/EXTENTION/20250512_114131.jpg',
            'images/EXTENTION/20250512_120230.jpg',
            'images/EXTENTION/20250512_120236.jpg',
            'images/EXTENTION/20250512_120258.jpg'
        ],
        title: 'Extension Projects',
        text: 'Need more space but love your current location? We expertly handle horizontal and vertical building extensions. Whether you need an extra bedroom, a new floor, or a larger kitchen, we ensure the new structure seamlessly integrates with your existing architecture and load-bearing capacity without compromising safety.'
    },
    'Renovations': {
        image: 'images/renovations.png',
        title: 'Renovations',
        text: 'Breathe new life into aging structures. Our renovation and remodeling services completely revitalize old homes and offices. We handle structural repairs, modern plumbing/electrical upgrades, flooring replacements, and aesthetic facelifts to make your old property feel brand new and increase its market value.'
    },
    'Commercial Projects': {
        images: [
            'images/COMMERCIAL/20250929_152310.jpg',
            'images/COMMERCIAL/20250929_152326.jpg',
            'images/COMMERCIAL/20251113_114709.jpg',
            'images/COMMERCIAL/20251113_114733.jpg',
            'images/COMMERCIAL/20251113_114820.jpg',
            'images/COMMERCIAL/20251113_114835.jpg',
            'images/COMMERCIAL/20260228_180345.jpg',
            'images/COMMERCIAL/IMG-20250716-WA0081.jpg',
            'images/COMMERCIAL/IMG-20250716-WA0085.jpg',
            'images/COMMERCIAL/IMG-20250716-WA0086.jpg'
        ],
        title: 'Commercial Projects',
        text: 'We construct high-performance commercial spaces tailored to your business needs. From retail showrooms and office complexes to industrial warehouses, we deliver projects that reflect your brand identity. Our commercial builds focus on durability, spatial efficiency, and adherence to all local zoning and safety regulations.'
    },
    'Material Contractors': {
        image: 'images/material_contractors.png',
        title: 'Material Contractors',
        text: 'The strength of a building lies in its materials. As trusted material contractors, we source and supply only the highest-grade construction materials including premium cement, TMT steel rebars, bricks, and finishing aggregates. We ensure zero compromise on quality so your structure stands strong for generations.'
    },
    'PMC': {
        image: 'images/pmc.png',
        title: 'Project Management Consultancy (PMC)',
        text: 'Executing a construction project is complex. Our PMC services take the burden off your shoulders. We oversee the entire project on your behalf - managing contractors, monitoring daily site progress, auditing material quality, and controlling budgets to ensure your project is completed flawlessly, on time, and without cost overruns.'
    }
};

let currentModalImageIndex = 0;
let modalImagesArray = [];
let modalSlideInterval = null;

window.openServiceModal = function(serviceKey) {
    const data = serviceData[serviceKey];
    if(!data) return;
    
    const singleImage = document.getElementById('modal-image');
    const galleryContainer = document.getElementById('modal-gallery');
    const galleryTrack = document.getElementById('modal-gallery-track');
    
    if (data.images && data.images.length > 0) {
        singleImage.classList.add('hidden');
        galleryContainer.classList.remove('hidden');
        
        modalImagesArray = data.images;
        currentModalImageIndex = 0;
        
        galleryTrack.innerHTML = '';
        data.images.forEach(imgSrc => {
            const img = document.createElement('img');
            img.src = imgSrc;
            img.className = 'w-full h-full object-cover flex-shrink-0';
            galleryTrack.appendChild(img);
        });
        
        galleryTrack.style.transform = `translateX(0%)`;
        
        if (modalSlideInterval) clearInterval(modalSlideInterval);
        modalSlideInterval = setInterval(() => {
            if (currentModalImageIndex < modalImagesArray.length - 1) {
                currentModalImageIndex++;
            } else {
                currentModalImageIndex = 0;
            }
            galleryTrack.style.transform = `translateX(-${currentModalImageIndex * 100}%)`;
        }, 2000);
        
    } else {
        singleImage.classList.remove('hidden');
        galleryContainer.classList.add('hidden');
        singleImage.src = data.image;
    }
    
    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-text').innerText = data.text;
    
    const modal = document.getElementById('service-modal');
    const content = document.getElementById('service-modal-content');
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        content.classList.remove('scale-95');
    }, 10);
};

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('service-modal');
    const content = document.getElementById('service-modal-content');
    const closeBtn = document.getElementById('close-modal');
    
    const closeModal = () => {
        if (modalSlideInterval) {
            clearInterval(modalSlideInterval);
            modalSlideInterval = null;
        }
        modal.classList.add('opacity-0');
        content.classList.add('scale-95');
        setTimeout(() => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }, 300);
    };

    const modalPrev = document.getElementById('modal-prev');
    const modalNext = document.getElementById('modal-next');
    const galleryTrack = document.getElementById('modal-gallery-track');

    if (modalPrev && modalNext && galleryTrack) {
        const galleryContainer = document.getElementById('modal-gallery');
        if (galleryContainer) {
            galleryContainer.addEventListener('mouseenter', () => {
                if (modalSlideInterval) clearInterval(modalSlideInterval);
            });
            galleryContainer.addEventListener('mouseleave', () => {
                if (modalImagesArray.length > 0 && !modal.classList.contains('hidden')) {
                    if (modalSlideInterval) clearInterval(modalSlideInterval);
                    modalSlideInterval = setInterval(() => {
                        if (currentModalImageIndex < modalImagesArray.length - 1) {
                            currentModalImageIndex++;
                        } else {
                            currentModalImageIndex = 0;
                        }
                        galleryTrack.style.transform = `translateX(-${currentModalImageIndex * 100}%)`;
                    }, 2000);
                }
            });
        }

        modalPrev.addEventListener('click', (e) => {
            e.stopPropagation();
            if (currentModalImageIndex > 0) {
                currentModalImageIndex--;
                galleryTrack.style.transform = `translateX(-${currentModalImageIndex * 100}%)`;
            } else {
                currentModalImageIndex = modalImagesArray.length - 1;
                galleryTrack.style.transform = `translateX(-${currentModalImageIndex * 100}%)`;
            }
        });
        
        modalNext.addEventListener('click', (e) => {
            e.stopPropagation();
            if (currentModalImageIndex < modalImagesArray.length - 1) {
                currentModalImageIndex++;
                galleryTrack.style.transform = `translateX(-${currentModalImageIndex * 100}%)`;
            } else {
                currentModalImageIndex = 0;
                galleryTrack.style.transform = `translateX(0%)`;
            }
        });
    }

    if(closeBtn) closeBtn.addEventListener('click', closeModal);
    
    if(modal) {
        modal.addEventListener('click', (e) => {
            if(e.target === modal) {
                closeModal();
            }
        });
    }
});

// Global Lightbox Logic
document.addEventListener('DOMContentLoaded', () => {
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImage = document.getElementById('lightbox-image');
    const closeLightboxBtn = document.getElementById('close-lightbox');

    if (!lightboxModal || !lightboxImage) return;

    const openLightbox = (src) => {
        lightboxImage.src = src;
        lightboxModal.classList.remove('hidden');
        lightboxModal.classList.add('flex');
        setTimeout(() => {
            lightboxModal.classList.remove('opacity-0');
            lightboxImage.classList.remove('scale-95');
        }, 10);
    };

    const closeLightbox = () => {
        lightboxModal.classList.add('opacity-0');
        lightboxImage.classList.add('scale-95');
        setTimeout(() => {
            lightboxModal.classList.add('hidden');
            lightboxModal.classList.remove('flex');
            lightboxImage.src = '';
        }, 300);
    };

    if (closeLightboxBtn) closeLightboxBtn.addEventListener('click', closeLightbox);
    
    lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal) {
            closeLightbox();
        }
    });

    // Make all appropriate images click-to-open
    document.body.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            const isLogoOrLink = e.target.closest('header') || e.target.closest('footer') || e.target.closest('a') || e.target.id === 'lightbox-image';
            if (!isLogoOrLink && e.target.src) {
                openLightbox(e.target.src);
            }
        }
    });
});