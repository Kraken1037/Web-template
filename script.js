      // Filter functionality
      const filterBtns = document.querySelectorAll(".filter-btn");
      const portfolioItems = document.querySelectorAll(".portfolio-item");

      filterBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          // Remove active class from all buttons
          filterBtns.forEach((b) => b.classList.remove("active"));

          // Add active class to clicked button
          btn.classList.add("active");

          const filterValue = btn.textContent.toLowerCase();

          // Filter items
          portfolioItems.forEach((item) => {
            const category = item.getAttribute("data-category");

            if (filterValue === "all" || category === filterValue) {
              item.style.display = "block";
              setTimeout(() => {
                item.style.opacity = "1";
                item.style.transform = "scale(1)";
              }, 100);
            } else {
              item.style.opacity = "0";
              item.style.transform = "scale(0.8)";
              setTimeout(() => {
                item.style.display = "none";
              }, 400);
            }
          });
        });
      });

      // Animate on scroll effect (simple implementation)
      const animateOnScroll = () => {
        const elements = document.querySelectorAll(
          ".portfolio-item, .section-title"
        );

        elements.forEach((element) => {
          const elementPosition = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          if (elementPosition < windowHeight - 100) {
            element.classList.add("show");
          }
        });
      };

      // Initial check and add scroll listener
      animateOnScroll();
      window.addEventListener("scroll", animateOnScroll);

      // Custom cursor effect
      const cursorEffect = document.querySelector(".cursor-effect");

      document.addEventListener("mousemove", (e) => {
        cursorEffect.style.left = e.clientX + "px";
        cursorEffect.style.top = e.clientY + "px";
      });

      document.addEventListener("mousedown", () => {
        cursorEffect.classList.add("expand");
      });

      document.addEventListener("mouseup", () => {
        cursorEffect.classList.remove("expand");
      });

      // Hover effect for portfolio items
      portfolioItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
          cursorEffect.classList.add("expand");
        });

        item.addEventListener("mouseleave", () => {
          cursorEffect.classList.remove("expand");
        });
      });

      // See More button animation
      const seeMoreBtn = document.querySelector(".see-more-btn");

      seeMoreBtn.addEventListener("click", () => {
        seeMoreBtn.classList.add("clicked");

        setTimeout(() => {
          seeMoreBtn.classList.remove("clicked");
          alert("More projects coming soon!");
        }, 300);
      });

      // Add subtle parallax effect to images
      portfolioItems.forEach((item) => {
        const img = item.querySelector(".portfolio-image");

        item.addEventListener("mousemove", (e) => {
          const { left, top, width, height } = item.getBoundingClientRect();
          const x = (e.clientX - left) / width - 0.5;
          const y = (e.clientY - top) / height - 0.5;

          img.style.transform = `scale(1.1) translate(${x * 10}px, ${
            y * 10
          }px)`;
        });

        item.addEventListener("mouseleave", () => {
          img.style.transform = "scale(1)";
        });
      });
      document.addEventListener("DOMContentLoaded", function () {
        // Testimonial Slider
        const cards = document.querySelectorAll(".testimonial-card");
        const dots = document.querySelectorAll(".nav-dot");
        const prevBtn = document.querySelector(".arrow.prev");
        const nextBtn = document.querySelector(".arrow.next");
        let currentIndex = 0;

        // Initial setup
        updateCardClasses();

        // Next button
        nextBtn.addEventListener("click", () => {
          currentIndex = (currentIndex + 1) % cards.length;
          updateCardClasses();
        });

        // Previous button
        prevBtn.addEventListener("click", () => {
          currentIndex = (currentIndex - 1 + cards.length) % cards.length;
          updateCardClasses();
        });

        // Navigation dots
        dots.forEach((dot, index) => {
          dot.addEventListener("click", () => {
            currentIndex = index;
            updateCardClasses();
          });
        });

        function updateCardClasses() {
          cards.forEach((card, index) => {
            card.classList.remove("active", "prev", "next");
            dots[index].classList.remove("active");

            if (index === currentIndex) {
              card.classList.add("active");
              dots[index].classList.add("active");
            } else if (index === getPrevIndex()) {
              card.classList.add("prev");
            } else if (index === getNextIndex()) {
              card.classList.add("next");
            }
          });
        }

        function getPrevIndex() {
          return (currentIndex - 1 + cards.length) % cards.length;
        }

        function getNextIndex() {
          return (currentIndex + 1) % cards.length;
        }

        // Automatic sliding
        let slideInterval = setInterval(() => {
          currentIndex = (currentIndex + 1) % cards.length;
          updateCardClasses();
        }, 6000);

        // Pause on hover
        const slider = document.querySelector(".testimonial-slider");
        slider.addEventListener("mouseenter", () => {
          clearInterval(slideInterval);
        });

        slider.addEventListener("mouseleave", () => {
          slideInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % cards.length;
            updateCardClasses();
          }, 6000);
        });

        // Particle effect
        const particles = document.querySelector(".particles");
        const particleCount = 30;

        for (let i = 0; i < particleCount; i++) {
          createParticle();
        }

        function createParticle() {
          const particle = document.createElement("div");
          particle.classList.add("particle");

          // Random position
          const posX = Math.random() * 100;
          const posY = Math.random() * 100;

          // Random size
          const size = Math.random() * 6 + 2;

          // Apply styles
          particle.style.left = `${posX}%`;
          particle.style.top = `${posY}%`;
          particle.style.width = `${size}px`;
          particle.style.height = `${size}px`;

          // Set random color from brand palette
          const colors = ["#9985c4", "#a18bcb", "#737374"];
          const color = colors[Math.floor(Math.random() * colors.length)];
          particle.style.backgroundColor = color;

          // Add to container
          particles.appendChild(particle);

          // Animate
          setTimeout(() => {
            particle.style.opacity = Math.random() * 0.5 + 0.1;

            // Random movement
            const duration = Math.random() * 60 + 30;
            const moveX = Math.random() * 100 - 50;
            const moveY = Math.random() * 100 - 50;

            particle.style.transition = `transform ${duration}s linear, opacity 1s ease`;
            particle.style.transform = `translate(${moveX}px, ${moveY}px)`;

            // Remove and recreate
            setTimeout(() => {
              particle.remove();
              createParticle();
            }, duration * 1000);
          }, 10);
        }
      });
            // Form submission handling
            document
            .getElementById("event-form")
            .addEventListener("submit", function (e) {
              e.preventDefault();
              // Simulate form submission with animation
              const form = this;
              const submitBtn = form.querySelector(".submit-button");
              const successMessage = document.getElementById("success-message");
    
              // Button animation
              submitBtn.innerHTML = "Sending...";
              submitBtn.style.pointerEvents = "none";
              submitBtn.style.opacity = "0.7";
    
              // Simulate API call
              setTimeout(function () {
                form.style.opacity = "0";
                setTimeout(function () {
                  successMessage.classList.add("show");
                }, 300);
              }, 1000);
            });
    
          // Close success message
          document
            .getElementById("close-success")
            .addEventListener("click", function () {
              const successMessage = document.getElementById("success-message");
              const form = document.getElementById("event-form");
              const submitBtn = form.querySelector(".submit-button");
    
              successMessage.classList.remove("show");
              setTimeout(function () {
                form.reset();
                form.style.opacity = "1";
                submitBtn.innerHTML = "Send Message";
                submitBtn.style.pointerEvents = "auto";
                submitBtn.style.opacity = "1";
              }, 300);
            });
    
          // Enhance form interactions with subtle animations
          const inputs = document.querySelectorAll("input, textarea");
          inputs.forEach((input) => {
            input.addEventListener("focus", function () {
              this.parentElement.style.transform = "translateY(-5px)";
              this.parentElement.style.transition = "transform 0.3s ease";
            });
    
            input.addEventListener("blur", function () {
              this.parentElement.style.transform = "translateY(0)";
            });
          });
          document.addEventListener("DOMContentLoaded", function () {
            // Testimonial Slider
            const cards = document.querySelectorAll(".testimonial-card");
            const dots = document.querySelectorAll(".nav-dot");
            const prevBtn = document.querySelector(".arrow.prev");
            const nextBtn = document.querySelector(".arrow.next");
            let currentIndex = 0;
    
            // Initial setup
            updateCardClasses();
    
            // Next button
            nextBtn.addEventListener("click", () => {
              currentIndex = (currentIndex + 1) % cards.length;
              updateCardClasses();
            });
    
            // Previous button
            prevBtn.addEventListener("click", () => {
              currentIndex = (currentIndex - 1 + cards.length) % cards.length;
              updateCardClasses();
            });
    
            // Navigation dots
            dots.forEach((dot, index) => {
              dot.addEventListener("click", () => {
                currentIndex = index;
                updateCardClasses();
              });
            });
    
            function updateCardClasses() {
              cards.forEach((card, index) => {
                card.classList.remove("active", "prev", "next");
                dots[index].classList.remove("active");
    
                if (index === currentIndex) {
                  card.classList.add("active");
                  dots[index].classList.add("active");
                } else if (index === getPrevIndex()) {
                  card.classList.add("prev");
                } else if (index === getNextIndex()) {
                  card.classList.add("next");
                }
              });
            }
    
            function getPrevIndex() {
              return (currentIndex - 1 + cards.length) % cards.length;
            }
    
            function getNextIndex() {
              return (currentIndex + 1) % cards.length;
            }
    
            // Automatic sliding
            let slideInterval = setInterval(() => {
              currentIndex = (currentIndex + 1) % cards.length;
              updateCardClasses();
            }, 6000);
    
            // Pause on hover
            const slider = document.querySelector(".testimonial-slider");
            slider.addEventListener("mouseenter", () => {
              clearInterval(slideInterval);
            });
    
            slider.addEventListener("mouseleave", () => {
              slideInterval = setInterval(() => {
                currentIndex = (currentIndex + 1) % cards.length;
                updateCardClasses();
              }, 6000);
            });
    
            // Particle effect
            const particles = document.querySelector(".particles");
            const particleCount = 30;
    
            for (let i = 0; i < particleCount; i++) {
              createParticle();
            }
    
            function createParticle() {
              const particle = document.createElement("div");
              particle.classList.add("particle");
    
              // Random position
              const posX = Math.random() * 100;
              const posY = Math.random() * 100;
    
              // Random size
              const size = Math.random() * 6 + 2;
    
              // Apply styles
              particle.style.left = `${posX}%`;
              particle.style.top = `${posY}%`;
              particle.style.width = `${size}px`;
              particle.style.height = `${size}px`;
    
              // Set random color from brand palette
              const colors = ["#9985c4", "#a18bcb", "#737374"];
              const color = colors[Math.floor(Math.random() * colors.length)];
              particle.style.backgroundColor = color;
    
              // Add to container
              particles.appendChild(particle);
    
              // Animate
              setTimeout(() => {
                particle.style.opacity = Math.random() * 0.5 + 0.1;
    
                // Random movement
                const duration = Math.random() * 60 + 30;
                const moveX = Math.random() * 100 - 50;
                const moveY = Math.random() * 100 - 50;
    
                particle.style.transition = `transform ${duration}s linear, opacity 1s ease`;
                particle.style.transform = `translate(${moveX}px, ${moveY}px)`;
    
                // Remove and recreate
                setTimeout(() => {
                  particle.remove();
                  createParticle();
                }, duration * 1000);
              }, 10);
            }
          });
                // Header scroll effect
      window.addEventListener("scroll", function () {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      });

      // Mobile menu toggle
      const menuToggle = document.querySelector(".menu-toggle");
      const nav = document.querySelector("nav");

      menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
        menuToggle.classList.toggle("active");
      });

      // Close menu when link is clicked
      const navLinks = document.querySelectorAll(".nav-link");
      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          nav.classList.remove("active");
          menuToggle.classList.remove("active");
        });
      });

      // Smooth scrolling for anchor links
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
          });
        });
      });
      