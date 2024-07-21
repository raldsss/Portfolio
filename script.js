
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}



  const textArray = ["Front-End Developer", "Designer", "Gamer"];
let textIndex = 0;
let charIndex = 0;
const typingText = document.getElementById('typing-text');

function type() {
  if (charIndex < textArray[textIndex].length) {
    typingText.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100); 
  } else {
    setTimeout(erase, 1000);
  }
}

function erase() {
  if (charIndex > 0) {
    typingText.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50); 
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(type, 500); 
  }
}

type(); 
 document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    setTimeout(function() {
    
      Swal.fire({
        icon: 'success',
        title: 'Message Sent!',
        text: 'Your message has been successfully sent.',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
          document.getElementById('contactForm').reset();
        }
      });
    }, 1000); 
  });


  function downloadCV() {
    var downloadLink = document.getElementById('downloadLink');
    downloadLink.click();
}

  


  const canvas = document.getElementById('backgroundCanvas');
  const ctx = canvas.getContext('2d');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const particles = [];
  
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.radius = Math.random() * 2 + 1;
      this.speedX = Math.random() * 3 - 1.5;
      this.speedY = Math.random() * 3 - 1.5;
      this.color = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`;
    }
  
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
  
      if (this.x < 0 || this.x > canvas.width) {
        this.speedX = -this.speedX;
      }
      if (this.y < 0 || this.y > canvas.height) {
        this.speedY = -this.speedY;
      }
    }
  
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }
  
  function init() {
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
    }
  }
  
  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  
    for (const particle of particles) {
      particle.update();
      particle.draw();
    }
  }
  
  init();
  animate();


  