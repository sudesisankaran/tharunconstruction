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
        image: 'images/elevations.png',
        title: 'Architectural Elevations',
        text: 'The exterior of your building makes the first impression. Our 3D architectural elevations provide a photorealistic preview of your future home or commercial space. We specialize in modern, contemporary, and traditional facades, ensuring your building stands out with premium finishes, proper lighting concepts, and elegant structural design.'
    },
    'Interior Designs': {
        image: 'images/interior_designs.png',
        title: 'Interior Designs',
        text: 'Transform empty spaces into luxurious living environments. Our interior design services cover everything from space planning and false ceilings to modular kitchens, premium wardrobes, and bespoke furniture. We blend colors, textures, and lighting to create interiors that are not only beautiful but also highly practical.'
    },
    'Residential Projects': {
        image: 'images/residential_projects.png',
        title: 'Residential Projects',
        text: 'Building your dream home is our ultimate passion. From individual villas to multi-story apartments, we handle complete turnkey residential construction. We manage the entire lifecycle of the build - from foundation laying to final handover - ensuring top-tier material quality, strict adherence to timelines, and structural safety.'
    },
    'Extension Projects': {
        image: 'images/extension_projects.png',
        title: 'Extension Projects',
        text: 'Need more space but love your current location? We expertly handle horizontal and vertical building extensions. Whether you need an extra bedroom, a new floor, or a larger kitchen, we ensure the new structure seamlessly integrates with your existing architecture and load-bearing capacity without compromising safety.'
    },
    'Renovations': {
        image: 'images/renovations.png',
        title: 'Renovations',
        text: 'Breathe new life into aging structures. Our renovation and remodeling services completely revitalize old homes and offices. We handle structural repairs, modern plumbing/electrical upgrades, flooring replacements, and aesthetic facelifts to make your old property feel brand new and increase its market value.'
    },
    'Commercial Projects': {
        image: 'images/commercial_projects.png',
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

window.openServiceModal = function(serviceKey) {
    const data = serviceData[serviceKey];
    if(!data) return;
    
    document.getElementById('modal-image').src = data.image;
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
        modal.classList.add('opacity-0');
        content.classList.add('scale-95');
        setTimeout(() => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }, 300);
    };

    if(closeBtn) closeBtn.addEventListener('click', closeModal);
    
    if(modal) {
        modal.addEventListener('click', (e) => {
            if(e.target === modal) {
                closeModal();
            }
        });
    }
});