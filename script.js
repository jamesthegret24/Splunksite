
// Galaxy animation with particles, stars, and shooting stars
function createGalaxyEffect() {
    const particlesContainer = document.getElementById('particles');
    const numberOfParticles = 50;
    const numberOfStars = 100;
    const numberOfShootingStars = 5;

    // Create particles (dust)
    for (let i = 0; i < numberOfParticles; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random size
        const size = Math.random() * 4 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        // Random position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random animation delay
        particle.style.animationDelay = Math.random() * 6 + 's';
        
        // Random animation duration
        particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
        
        // Random color (purplish hues for galaxy effect)
        const hue = Math.floor(Math.random() * 60) + 240; // Blue to purple range
        const saturation = Math.floor(Math.random() * 50) + 50;
        const lightness = Math.floor(Math.random() * 30) + 70;
        particle.style.backgroundColor = `hsla(${hue}, ${saturation}%, ${lightness}%, 0.7)`;
        
        particlesContainer.appendChild(particle);
    }
    
    // Create stars
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        
        // Random size (smaller than particles)
        const size = Math.random() * 2 + 0.5;
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        
        // Random position
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        
        // Random animation delay
        star.style.animationDelay = Math.random() * 3 + 's';
        
        particlesContainer.appendChild(star);
    }
    
    // Create shooting stars with random intervals
    function createShootingStar() {
        const shootingStar = document.createElement('div');
        shootingStar.className = 'shooting-star';
        
        // Random position (always starts from left side)
        shootingStar.style.left = Math.random() * 30 + '%';
        shootingStar.style.top = Math.random() * 50 + '%';
        
        // Random animation duration
        shootingStar.style.animationDuration = (Math.random() * 2 + 2) + 's';
        
        particlesContainer.appendChild(shootingStar);
        
        // Remove shooting star after animation completes
        setTimeout(() => {
            shootingStar.remove();
            // Create a new one
            setTimeout(createShootingStar, Math.random() * 5000 + 2000);
        }, 4000);
    }
    
    // Initialize shooting stars with random delays
    for (let i = 0; i < numberOfShootingStars; i++) {
        setTimeout(createShootingStar, Math.random() * 5000);
    }
}

// Add background music with autoplay
function addBackgroundMusic() {
    const musicContainer = document.createElement('div');
    musicContainer.id = 'music-container';
    musicContainer.style.position = 'fixed';
    musicContainer.style.bottom = '20px';
    musicContainer.style.right = '20px';
    musicContainer.style.zIndex = '1000';
    
    const audioElement = document.createElement('audio');
    audioElement.id = 'background-music';
    audioElement.loop = true;
    audioElement.volume = 0.3; // Set initial volume to 30%
    
    // YouTube embed as source (using YouTube's iframe API)
    const youtubeID = 'GkQn5vNoc24'; // Bundak Sa Letra by NoPetsAllowed
    
    // Create a button to toggle music
    const musicButton = document.createElement('button');
    musicButton.innerHTML = '<i class="fas fa-pause"></i> Pause Music'; // Changed to show pause initially
    musicButton.style.background = 'linear-gradient(45deg, #8a2be2, #4b0082)';
    musicButton.style.color = 'white';
    musicButton.style.border = 'none';
    musicButton.style.borderRadius = '25px';
    musicButton.style.padding = '10px 20px';
    musicButton.style.cursor = 'pointer';
    musicButton.style.boxShadow = '0 4px 15px rgba(138, 43, 226, 0.3)';
    musicButton.style.display = 'flex';
    musicButton.style.alignItems = 'center';
    musicButton.style.gap = '8px';
    
    // Add YouTube iframe (hidden) with autoplay=1 and muted=1 (required for autoplay in most browsers)
    const youtubeIframe = document.createElement('iframe');
    youtubeIframe.id = 'youtube-player';
    youtubeIframe.style.display = 'none';
    youtubeIframe.width = '0';
    youtubeIframe.height = '0';
    youtubeIframe.src = `https://www.youtube.com/embed/${youtubeID}?enablejsapi=1&autoplay=1&controls=0&mute=1`;
    youtubeIframe.allow = 'autoplay; encrypted-media';
    
    // Load YouTube API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    
    // Make player accessible globally for the unmute functionality
    window.player = null;
    window.onYouTubeIframeAPIReady = function() {
        window.player = new YT.Player('youtube-player', {
            events: {
                'onReady': onPlayerReady
            }
        });
    };
    
    function onPlayerReady(event) {
        // Start playing automatically (will be muted initially due to browser restrictions)
        player.playVideo();
        
        // Update button text to show music is muted initially
        musicButton.innerHTML = '<i class="fas fa-volume-mute"></i> Unmute Music';
        
        // Music button click handler
        musicButton.addEventListener('click', function() {
            if (player.getPlayerState() === YT.PlayerState.PLAYING && !player.isMuted()) {
                // If playing and not muted, pause the video
                player.pauseVideo();
                musicButton.innerHTML = '<i class="fas fa-music"></i> Play Music';
            } else if (player.getPlayerState() === YT.PlayerState.PLAYING && player.isMuted()) {
                // If playing but muted, unmute the video
                player.unMute();
                player.setVolume(30); // Set to 30% volume
                musicButton.innerHTML = '<i class="fas fa-pause"></i> Pause Music';
            } else if (player.getPlayerState() !== YT.PlayerState.PLAYING) {
                // If not playing, play and unmute
                player.playVideo();
                player.unMute();
                player.setVolume(30); // Set to 30% volume
                musicButton.innerHTML = '<i class="fas fa-pause"></i> Pause Music';
            }
        });
    }
    
    musicContainer.appendChild(youtubeIframe);
    musicContainer.appendChild(musicButton);
    document.body.appendChild(musicContainer);
}

// Card hover effects with galaxy theme
function addCardEffects() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.background = 'rgba(138, 43, 226, 0.15)';
            this.style.boxShadow = '0 0 20px rgba(138, 43, 226, 0.3)';
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.background = 'rgba(255, 255, 255, 0.05)';
            this.style.boxShadow = 'none';
            this.style.transform = 'translateY(0)';
        });
    });
}

// Button click effects
function addButtonEffects() {
    const buttons = document.querySelectorAll('.action-btn, .discord-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Smooth scroll for better UX
function addSmoothScroll() {
    document.documentElement.style.scrollBehavior = 'smooth';
}

// Title glitch effect
function addTitleEffect() {
    const title = document.querySelector('.title');
    let glitchInterval;
    
    title.addEventListener('mouseenter', function() {
        glitchInterval = setInterval(() => {
            this.style.textShadow = `
                ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #ff6b6b,
                ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #4ecdc4,
                ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #ffd93d
            `;
        }, 100);
    });
    
    title.addEventListener('mouseleave', function() {
        clearInterval(glitchInterval);
        this.style.textShadow = '0 0 30px rgba(255, 255, 255, 0.3)';
    });
}

// Method instructions data with copy buttons
const methodInstructions = {
    'grow-garden': `
        <h1>GROW GARDEN METHOD</h1>
        
        <h2>Method 1:</h2>
        <p>You Go To Grow a Garden Servers and Spam this into Any channels.</p>
        <div class="copy-section">
            <pre>TRADING 3 DRAGONFLY AND A RACOON PLS DM!
TRADING 3 DRAGONFLY AND A RACOON PLS DM!
TRADING 3 DRAGONFLY AND A RACOON PLS DM!</pre>
            <button class="copy-btn" onclick="copyToClipboard('TRADING 3 DRAGONFLY AND A RACOON PLS DM!\\nTRADING 3 DRAGONFLY AND A RACOON PLS DM!\\nTRADING 3 DRAGONFLY AND A RACOON PLS DM!')">
                <i class="fas fa-copy"></i> Copy Method 1
            </button>
        </div>
        
        <h2>Method 2:</h2>
        <p>You Go To Grow a Garden Servers and Spam this into Any channels.</p>
        <div class="copy-section">
            <pre>Helping farming sheckles in my private server.</pre>
            <button class="copy-btn" onclick="copyToClipboard('Helping farming sheckles in my private server.')">
                <i class="fas fa-copy"></i> Copy Method 2
            </button>
        </div>
        
        <h2>Method 3:</h2>
        <p>You Go To Grow a Garden Servers and Spam this into Any channels.</p>
        <div class="copy-section">
            <pre>DM me for exotic eggs
DM me for exotic eggs
DM me for exotic eggs
DM me for exotic eggs
DM me for exotic eggs</pre>
            <button class="copy-btn" onclick="copyToClipboard('DM me for exotic eggs\\nDM me for exotic eggs\\nDM me for exotic eggs\\nDM me for exotic eggs\\nDM me for exotic eggs')">
                <i class="fas fa-copy"></i> Copy Method 3
            </button>
        </div>
        <p><strong>And then give them ur private server.</strong></p>
        
        <h2>Method 4:</h2>
        <p>You Go To Grow a Garden Servers and Spam this into Any channels.</p>
        <p>Neither a Mid W trade for them or Big W like:</p>
        <div class="copy-section">
            <ul>
                <li>a) Owl for 1m Sheckles</li>
                <li>b) Sheckles for Owl</li>
                <li>c) ur option hahaha</li>
            </ul>
            <button class="copy-btn" onclick="copyToClipboard('a) Owl for 1m Sheckles\\nb) Sheckles for Owl\\nc) ur option hahaha')">
                <i class="fas fa-copy"></i> Copy Method 4
            </button>
        </div>
        
        <h2>Method 5:</h2>
        <p>You Go To Grow a Garden Servers and Spam this into Any channels.</p>
        <div class="copy-section">
            <ul>
                <li>a) First 5 person will mesage me quickly wins a free candy blossom and mantis and owl!</li>
                <li>b) First 5 person will mesage me quickly wins</li>
            </ul>
            <button class="copy-btn" onclick="copyToClipboard('First 5 person will mesage me quickly wins a free candy blossom and mantis and owl!\\nFirst 5 person will mesage me quickly wins')">
                <i class="fas fa-copy"></i> Copy Method 5
            </button>
        </div>
        
        <p><strong>SPAMMING THIS ON EVERY Grow a Garden SERVERS WILL GET UR DMS TO 40+ AFTER THAT SEND THEM UR FAKE PS LINK OR FAKE PROFILE</strong></p>
    `,
    
    'blade-ball': `
        <h1>BLADE BALL TRADING GUIDE</h1>
        
        <h2>Join the Blade Ball Discord Server:</h2>
        <p>Join the server using this link: <a href="https://discord.gg/bladeball" target="_blank">https://discord.gg/bladeball</a></p>
        <p>Complete the verification process.</p>
        
        <h2>Copy the Buying Offer:</h2>
        <p>Copy the following text exactly:</p>
        <div class="copy-section">
            <pre>BUYING ALL UNDERRAPS WITH 90K :token:
BUYING ALL UNDERRAPS WITH 90K :token:
BUYING ALL UNDERRAPS WITH 90K :token:
BUYING UNDERRAPS WITH 30K :token:</pre>
            <button class="copy-btn" onclick="copyToClipboard('BUYING ALL UNDERRAPS WITH 90K :token:\\nBUYING ALL UNDERRAPS WITH 90K :token:\\nBUYING ALL UNDERRAPS WITH 90K :token:\\nBUYING UNDERRAPS WITH 30K :token:')">
                <i class="fas fa-copy"></i> Copy Buying Offer
            </button>
        </div>
        
        <h2>Spam the Offer in Trading Channels:</h2>
        <p>Navigate to the trading channels within the Blade Ball Discord server.</p>
        <p>Paste and send the copied text repeatedly.</p>
        
        <h2>Private Server Recommendation:</h2>
        <div class="copy-section">
            <p>Include this message with your spam: <strong>USE YOUR PRIVATE SERVER FOR BETTER CHANCE</strong></p>
            <button class="copy-btn" onclick="copyToClipboard('USE YOUR PRIVATE SERVER FOR BETTER CHANCE')">
                <i class="fas fa-copy"></i> Copy Server Message
            </button>
        </div>
    `,
    
    'pls-donate': `
        <h1>PLS DONATE METHOD</h1>
        
        <p><a href="https://discord.com/invite/hazem" target="_blank">https://discord.com/invite/hazem</a></p>
        
        <blockquote>
            <p><strong>STEP 1: MAKE A PLS DONATE FAKE PRIVATE SERVER LINK</strong></p>
        </blockquote>
        
        <blockquote>
            <p><strong>STEP 2: SPAM, "DOING A SPIN THE WHEEL GIVEAWAY IN MY SERVER IN PLS DONATE WIN UP TO 5K ROBUX DM ME FOR MORE DETAILS"</strong></p>
        </blockquote>
        
        <div class="copy-section">
            <button class="copy-btn" onclick="copyToClipboard('DOING A SPIN THE WHEEL GIVEAWAY IN MY SERVER IN PLS DONATE WIN UP TO 5K ROBUX DM ME FOR MORE DETAILS')">
                <i class="fas fa-copy"></i> Copy Spam Message
            </button>
        </div>
        
        <blockquote>
            <p><strong>U HAVE TO JOIN RANDOM ROBLOX SERVERS</strong></p>
        </blockquote>
    `,
    
    'da-hood': `
        <h1>DAHOOD TRADING PROMOTION GUIDE</h1>
        
        <h2>Join the DaHood Discord Server:</h2>
        <p>Join the official DaHood Discord server: <a href="https://discord.gg/dahood" target="_blank">https://discord.gg/dahood</a></p>
        
        <h2>Copy the Promotional Text:</h2>
        <p>Copy the following text exactly:</p>
        
        <div class="copy-section">
            <pre># __DAHOOD TRADING__

> # Iced Out Knife
> # Golden Age Db
> # Iced Out Rev
> # Iced Out Db
> # Heaven Knife
> # Dual Bayos
> # Galaxy Rev
> # Shadow Db
> # Shadow Rev 
> # Valentine Db
> # Valentine Tac
> # Cyan Karambit Knife
> # Iced Out Knife
> # Reptile Knife
> # Galaxy Tact
> # Galaxy Rev
> # Galaxy Db
> # Elec Set
> # Luck Set
> # Inferno Set
> # OFFER FOR CROSS TRADE OR DH¢ DM ME VERY CHEAP

> # + CAR SKINS UNDER 10K
> # + ALSO DOING DH¢ & ROBUX GIVEAWAY FOR VIDEO DM ME!</pre>
            <button class="copy-btn" onclick="copyToClipboard('# __DAHOOD TRADING__\\n\\n> # Iced Out Knife\\n> # Golden Age Db\\n> # Iced Out Rev\\n> # Iced Out Db\\n> # Heaven Knife\\n> # Dual Bayos\\n> # Galaxy Rev\\n> # Shadow Db\\n> # Shadow Rev\\n> # Valentine Db\\n> # Valentine Tac\\n> # Cyan Karambit Knife\\n> # Iced Out Knife\\n> # Reptile Knife\\n> # Galaxy Tact\\n> # Galaxy Rev\\n> # Galaxy Db\\n> # Elec Set\\n> # Luck Set\\n> # Inferno Set\\n> # OFFER FOR CROSS TRADE OR DH¢ DM ME VERY CHEAP\\n\\n> # + CAR SKINS UNDER 10K\\n> # + ALSO DOING DH¢ & ROBUX GIVEAWAY FOR VIDEO DM ME!')">
                <i class="fas fa-copy"></i> Copy Trading Text
            </button>
        </div>
        
        <h2>Spam the Text in Trading Channels:</h2>
        <p>Navigate to the trading channels within the DaHood Discord server.</p>
        <p>Paste and send the copied text repeatedly.</p>
        <p>Continue spamming to maximize visibility.</p>
    `,
    
    'blox-fruit': `
        <h1>BLOX FRUIT METHOD</h1>
        
        <blockquote>
            <p><strong>Step 1: HIT CREATE UR ACCOUNT, LINK IT WITH DISCORD THERE SO THEY CAN DM U ON DISCORD</strong></p>
        </blockquote>
        
        <blockquote>
            <p><strong>Step 2: CREATE A TRADE</strong></p>
        </blockquote>
        
        <h2>U HAVE DRAGON AND U WANT LEO AND VENOM</h2>
        
        <blockquote>
            <p><strong>Step 3: WHEN THEY DM U TELL THEM U CANT ADD PEOPLE DUE TO PARENTAL CONTROLS AND THEY COULD JOIN UR PRIVATE SERVER LINK</strong></p>
        </blockquote>
        
        <div class="copy-section">
            <button class="copy-btn" onclick="copyToClipboard('I cant add people due to parental controls, you could join my private server link')">
                <i class="fas fa-copy"></i> Copy Excuse Message
            </button>
        </div>
        
        <blockquote>
            <p><strong>Step 4: SEND UR LINK, SAY "ILL BE IN SECOND SEA WAITING"</strong></p>
        </blockquote>
        
        <div class="copy-section">
            <button class="copy-btn" onclick="copyToClipboard('ILL BE IN SECOND SEA WAITING')">
                <i class="fas fa-copy"></i> Copy Waiting Message
            </button>
        </div>
        
        <p><a href="https://fruityblox.com/trading/create-trade" target="_blank">https://fruityblox.com/trading/create-trade</a></p>
        
        <blockquote>
            <p><strong>(IF I DONT LINK UR DISCORD JUST TELL THEM UR DISCORD IN CHAT!)</strong></p>
        </blockquote>
    `
};

// Copy to clipboard function
function copyToClipboard(text) {
    const cleanText = text.replace(/\\n/g, '\n');
    
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(cleanText).then(function() {
            showCopyNotification('Copied to clipboard!');
        }).catch(function(err) {
            fallbackCopyTextToClipboard(cleanText);
        });
    } else {
        fallbackCopyTextToClipboard(cleanText);
    }
}

// Fallback copy function for older browsers
function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showCopyNotification('Copied to clipboard!');
        } else {
            showCopyNotification('Failed to copy!');
        }
    } catch (err) {
        showCopyNotification('Failed to copy!');
    }
    
    document.body.removeChild(textArea);
}

// Show copy notification
function showCopyNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'copy-notification';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

// Dropdown functionality
function addDropdownEffect() {
    const dropdown = document.querySelector('.dropdown-select');
    const instructionsContainer = document.getElementById('method-instructions');
    const instructionsContent = document.getElementById('instructions-content');
    
    if (dropdown && instructionsContainer && instructionsContent) {
        dropdown.addEventListener('change', function() {
            const selectedValue = this.value;
            const selectedText = this.options[this.selectedIndex].text;
            
            // Add visual feedback
            this.style.boxShadow = '0 0 20px rgba(255, 0, 0, 0.6)';
            
            setTimeout(() => {
                this.style.boxShadow = '0 4px 15px rgba(255, 0, 0, 0.2), 0 0 20px rgba(255, 0, 0, 0.1)';
            }, 300);
            
            // Show instructions for selected method
            if (selectedValue && methodInstructions[selectedValue]) {
                instructionsContent.innerHTML = methodInstructions[selectedValue];
                instructionsContainer.style.display = 'block';
                
                // Smooth scroll to instructions
                setTimeout(() => {
                    instructionsContainer.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start' 
                    });
                }, 100);
            } else {
                instructionsContainer.style.display = 'none';
            }
            
            console.log(`Selected method: ${selectedText}`);
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    createGalaxyEffect();
    addCardEffects();
    addButtonEffects();
    addSmoothScroll();
    addTitleEffect();
    addBackgroundMusic();
    
    if (typeof addDropdownEffect === 'function') {
        addDropdownEffect();
    }
    
    // Add CSS for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
