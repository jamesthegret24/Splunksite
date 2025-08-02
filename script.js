
// Optimized Hell animation with fire particles, embers, and lava streams
function createHellEffect() {
    const particlesContainer = document.getElementById('particles');
    // Reduce number of particles for better performance
    const numberOfParticles = 25; // Reduced from 50
    const numberOfEmbers = 40;    // Reduced from 100
    const numberOfLavaStreams = 3; // Reduced from 5
    
    // Use document fragment for better performance
    const fragment = document.createDocumentFragment();
    
    // Create particles (fire dust)
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
        
        // Random color (red/orange hues for hell effect)
        const hue = Math.floor(Math.random() * 50);
        const saturation = Math.floor(Math.random() * 20) + 80;
        const lightness = Math.floor(Math.random() * 30) + 50;
        particle.style.backgroundColor = `hsla(${hue}, ${saturation}%, ${lightness}%, 0.7)`;
        
        fragment.appendChild(particle);
    }
    
    // Create embers
    for (let i = 0; i < numberOfEmbers; i++) {
        const ember = document.createElement('div');
        ember.className = 'star';
        
        // Random size (smaller than particles)
        const size = Math.random() * 2 + 0.5;
        ember.style.width = size + 'px';
        ember.style.height = size + 'px';
        
        // Random position
        ember.style.left = Math.random() * 100 + '%';
        ember.style.top = Math.random() * 100 + '%';
        
        // Random animation delay
        ember.style.animationDelay = Math.random() * 3 + 's';
        
        // Random ember color (yellow to orange)
        const hue = Math.floor(Math.random() * 30) + 20; // Yellow-orange range
        ember.style.backgroundColor = `hsla(${hue}, 100%, 60%, 0.9)`;
        
        fragment.appendChild(ember);
    }
    
    // Append all elements at once for better performance
    particlesContainer.appendChild(fragment);
    
    // Create lava streams with random intervals - using requestAnimationFrame for better performance
    let lavaStreamCount = 0;
    const maxLavaStreams = 10; // Limit total number of streams created
    
    function createLavaStream() {
        if (lavaStreamCount >= maxLavaStreams) return;
        
        const lavaStream = document.createElement('div');
        lavaStream.className = 'shooting-star';
        
        // Random position (always starts from bottom side)
        lavaStream.style.left = Math.random() * 80 + '%';
        lavaStream.style.top = Math.random() * 30 + 70 + '%';
        
        // Random animation duration
        lavaStream.style.animationDuration = (Math.random() * 2 + 2) + 's';
        
        // Add lava color
        lavaStream.style.background = 'linear-gradient(45deg, rgba(255,0,0,0.8), rgba(255,165,0,0.6))';
        
        particlesContainer.appendChild(lavaStream);
        lavaStreamCount++;
        
        // Remove lava stream after animation completes
        setTimeout(() => {
            if (lavaStream.parentNode) {
                lavaStream.remove();
            }
            lavaStreamCount--;
            // Create a new one with longer delay
            if (document.visibilityState !== 'hidden') {
                setTimeout(createLavaStream, Math.random() * 4000 + 2000);
            }
        }, 4000);
    }
    
    // Initialize lava streams with random delays
    for (let i = 0; i < numberOfLavaStreams; i++) {
        setTimeout(createLavaStream, Math.random() * 5000);
    }
}

// Add background music with autoplay using YouTube iframe API
function addBackgroundMusic() {
    console.log('Adding background music with YouTube iframe API');
    const musicContainer = document.createElement('div');
    musicContainer.id = 'music-container';
    musicContainer.style.position = 'fixed';
    musicContainer.style.bottom = '20px';
    musicContainer.style.right = '20px';
    musicContainer.style.zIndex = '1000';
    playerIframe.src = `https://www.youtube.com/embed/${youtubeID}?autoplay=1&mute=0&enablejsapi=1&controls=0&disablekb=1&fs=0&modestbranding=1&iv_load_policy=3&rel=0`;playerVars: {

}
    
    
    // Create a direct iframe for the YouTube player with autoplay and no mute
     const playerIframe = document.createElement('iframe');
     playerIframe.id = 'youtube-player';
     playerIframe.src = `https://www.youtube.com/embed/${youtubeID}?autoplay=1&mute=0&enablejsapi=1&controls=0&disablekb=1&fs=0&modestbranding=1&iv_load_policy=3&rel=0`;
     playerIframe.allow = 'autoplay; encrypted-media';
     playerIframe.style.position = 'fixed';
     playerIframe.style.bottom = '20px';
     playerIframe.style.left = '20px';
     playerIframe.style.width = '100px';
     playerIframe.style.height = '100px';
     playerIframe.style.opacity = '0.3';
     playerIframe.style.pointerEvents = 'none';
     playerIframe.style.zIndex = '1';
     playerIframe.style.border = 'none';
     document.body.appendChild(playerIframe);
    
    
    // Create a backup div for the YouTube API player
    const playerDiv = document.createElement('div');
    playerDiv.id = 'youtube-api-player';
    playerDiv.style.display = 'none';
    document.body.appendChild(playerDiv);
    playerIframe.src = `https://www.youtube.com/embed/${youtubeID}?autoplay=1&mute=0&enablejsapi=1&controls=0&disablekb=1&fs=0&modestbranding=1&iv_load_policy=3&rel=0`;playerIframe.src = `https://www.youtube.com/embed/${youtubeID}?autoplay=1&mute=0&enablejsapi=1&controls=0&disablekb=1&fs=0&modestbranding=1&iv_load_policy=3&rel=0`;
    
    // Create a button to toggle music
    const musicButton = document.createElement('button');
    musicButton.innerHTML = '<i class="fas fa-pause"></i> BUNDAK';
    musicButton.style.background = 'linear-gradient(45deg, #aa0000, #660000)';
    musicButton.style.color = 'white';
    musicButton.style.border = '1px solid rgba(255, 100, 0, 0.4)';
    musicButton.style.borderRadius = '25px';
    musicButton.style.padding = '10px 20px';
    musicButton.style.cursor = 'pointer';
    musicButton.style.boxShadow = '0 4px 15px rgba(255, 30, 0, 0.4), 0 0 20px rgba(255, 30, 0, 0.2)';
    musicButton.style.display = 'flex';
    musicButton.style.alignItems = 'center';
    musicButton.style.gap = '8px';
    musicButton.style.textTransform = 'uppercase';
    musicButton.style.letterSpacing = '1px';
    musicButton.style.position = 'relative';
    musicButton.style.overflow = 'hidden';
    
    // Add fire glow effect
    const addFireGlow = () => {
        const fireGlow = document.createElement('div');
        fireGlow.style.position = 'absolute';
        fireGlow.style.top = '0';
        fireGlow.style.left = '0';
        fireGlow.style.width = '100%';
        fireGlow.style.height = '100%';
        fireGlow.style.background = 'linear-gradient(90deg, transparent, rgba(255, 100, 0, 0.2), transparent)';
        fireGlow.style.animation = 'fireGlow 3s infinite alternate';
        fireGlow.style.zIndex = '-1';
        fireGlow.style.borderRadius = '25px';
        musicButton.appendChild(fireGlow);
    };
    
    // Load YouTube API if not already loaded
    if (!window.YT) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
    
    // Create YouTube player when API is ready
    let player;
    window.onYouTubeIframeAPIReady = function() {
        console.log('YouTube API ready, creating player');
        player = new YT.Player('youtube-api-player', {
            height: '1',  // Small but not zero to ensure it loads
            width: '1',   // Small but not zero to ensure it loads
            videoId: youtubeID,
            playerVars: {
                'autoplay': 1,  // Try to autoplay
                'controls': 0,
                'disablekb': 1,
                'enablejsapi': 1,
                'fs': 0,
                'modestbranding': 1,
                'iv_load_policy': 3,
                'rel': 0,
                'mute': 0  // Start unmuted for autoplay
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange,
                'onError': onPlayerError
            }
        });
    };
    
    // Handle player ready event
    function onPlayerReady(event) {
        console.log('YouTube player ready');
        player.setVolume(30); // Set volume to 30%
        
        // Try to play immediately and unmuted
        try {
            player.unMute();
            player.playVideo();
            console.log('Initial play attempt (unmuted)');
            musicButton.innerHTML = '<i class="fas fa-pause"></i> BUNDAK';
        } catch (e) {
            console.error('Error during initial play attempt:', e);
        }
        
        // Fallback for browsers that block autoplay with sound
        document.addEventListener('click', function() {
            console.log('Document clicked - attempting to play audio');
            
            // Unmute and play the API player
            if (player) {
                player.unMute();
                player.playVideo();
            }
            
            // Unmute and play the iframe
            const iframe = document.getElementById('youtube-player');
            if (iframe) {
                // Replace the iframe with one that has autoplay and unmuted
                const newIframe = document.createElement('iframe');
                newIframe.id = 'youtube-player';
                newIframe.src = `https://www.youtube.com/embed/${youtubeID}?autoplay=1&mute=0&enablejsapi=1&controls=0&disablekb=1&fs=0&modestbranding=1&iv_load_policy=3&rel=0`;
                newIframe.allow = 'autoplay; encrypted-media';
                newIframe.style.position = 'fixed';
                newIframe.style.bottom = '20px';
                newIframe.style.left = '20px';
                newIframe.style.width = '100px';
                newIframe.style.height = '100px';
                newIframe.style.opacity = '0.3';
                newIframe.style.pointerEvents = 'none';
                newIframe.style.zIndex = '1';
                newIframe.style.border = 'none';
                iframe.parentNode.replaceChild(newIframe, iframe);
            }
            
            // Play the fallback audio
            const audio = document.getElementById('fallback-audio');
            if (audio) {
                try {
                    audio.play()
                        .then(() => console.log('Fallback audio playing on first interaction'))
                        .catch(e => console.error('Fallback audio error on first interaction:', e));
                } catch (e) {
                    console.error('Error playing fallback audio on first interaction:', e);
                }
            }
            
            musicButton.innerHTML = '<i class="fas fa-pause"></i> BUNDAK';
        }, { once: true });
    }
    
    // Handle player state changes
    function onPlayerStateChange(event) {
        console.log('Player state changed:', event.data);
    }
    
    // Handle player errors
    function onPlayerError(event) {
        console.error('YouTube player error:', event.data);
        
        // Provide more detailed error information
        let errorMessage = 'Unknown error';
        switch(event.data) {
            case 2:
                errorMessage = 'Invalid video ID';
                break;
            case 5:
                errorMessage = 'HTML5 player error';
                break;
            case 100:
                errorMessage = 'Video not found or removed';
                break;
            case 101:
            case 150:
                errorMessage = 'Video embedding not allowed';
                break;
        }
        console.error('Error details:', errorMessage);
        
        // Try to recover by using a fallback video
        if (event.data === 2 || event.data === 100) {
            console.log('Attempting to use fallback video...');
            player.loadVideoById('iFPfmBcz2cI'); // Alternative Bundak Sa Letra video
        }
    }
    
    // Music button click handler
    musicButton.addEventListener('click', function() {
        console.log('Music button clicked');
        
        // Get the iframe element
        const iframe = document.getElementById('youtube-player');
        
        // Get the fallback audio element
        const audio = document.getElementById('fallback-audio');
        
        // Check if we're currently playing or paused
        const isPlaying = musicButton.innerHTML.includes('PAUSE') || 
                         (player && player.getPlayerState() === YT.PlayerState.PLAYING);
        
        if (isPlaying) {
            // If playing, pause
            if (player) {
                player.pauseVideo();
            }
            
            // Pause the iframe by removing and re-adding it without autoplay
            if (iframe) {
                const newIframe = document.createElement('iframe');
                newIframe.id = 'youtube-player';
                newIframe.src = `https://www.youtube.com/embed/${youtubeID}?autoplay=0&mute=1&enablejsapi=1&controls=0&disablekb=1&fs=0&modestbranding=1&iv_load_policy=3&rel=0`;
                newIframe.allow = 'autoplay; encrypted-media';
                newIframe.style.position = 'fixed';
                 newIframe.style.bottom = '20px';
                 newIframe.style.left = '20px';
                 newIframe.style.width = '100px';
                 newIframe.style.height = '100px';
                 newIframe.style.opacity = '0.3';
                newIframe.style.pointerEvents = 'none';
                newIframe.style.zIndex = '1';
                newIframe.style.border = 'none';
                iframe.parentNode.replaceChild(newIframe, iframe);
            }
            
            // Pause the fallback audio
            if (audio) {
                audio.pause();
            }
            
            musicButton.innerHTML = '<i class="fas fa-music"></i> PLAY BUNDAK';
            console.log('Audio paused');
        } else {
            // If paused or not started, play
            if (player) {
                player.playVideo();
                player.unMute();
            }
            
            // Play the iframe by removing and re-adding it with autoplay
            if (iframe) {
                const newIframe = document.createElement('iframe');
                newIframe.id = 'youtube-player';
                newIframe.src = `https://www.youtube.com/embed/${youtubeID}?autoplay=1&mute=0&enablejsapi=1&controls=0&disablekb=1&fs=0&modestbranding=1&iv_load_policy=3&rel=0`;
                newIframe.allow = 'autoplay; encrypted-media';
                newIframe.style.position = 'fixed';
                newIframe.style.bottom = '0';
                newIframe.style.right = '0';
                newIframe.style.width = '10px';
                newIframe.style.height = '10px';
                newIframe.style.opacity = '0.1';
                newIframe.style.pointerEvents = 'none';
                newIframe.style.zIndex = '1';
                newIframe.style.border = 'none';
                iframe.parentNode.replaceChild(newIframe, iframe);
            }
            
            // Play the fallback audio
            if (audio) {
                try {
                    audio.play()
                        .then(() => console.log('Fallback audio playing'))
                        .catch(e => console.error('Fallback audio error:', e));
                } catch (e) {
                    console.error('Error playing fallback audio:', e);
                }
            }
            
            musicButton.innerHTML = '<i class="fas fa-pause"></i> BUNDAK';
            console.log('Audio started');
        }
    });
    
    // Add fire glow effect to the music button
    addFireGlow();
    
    // Add music container and button to the page
    musicContainer.appendChild(musicButton);
    document.body.appendChild(musicContainer);
    
    // Log that background music has been added
    console.log('Background music added to page');
}

// Optimized card hover effects with hell theme
function addCardEffects() {
    const cards = document.querySelectorAll('.card');
    
    // Add ember rise animation if it doesn't exist - do this only once
    if (!document.querySelector('#ember-animation')) {
        const style = document.createElement('style');
        style.id = 'ember-animation';
        style.textContent = `
            @keyframes emberRise {
                0% {
                    transform: translateY(0) scale(1);
                    opacity: 0;
                }
                10% {
                    opacity: 0.8;
                }
                90% {
                    opacity: 0.4;
                }
                100% {
                    transform: translateY(-100px) scale(0);
                    opacity: 0;
                }
            }
            
            .card-ember {
                position: absolute;
                width: 3px;
                height: 3px;
                border-radius: 50%;
                bottom: 0;
                opacity: 0;
                z-index: 1;
                box-shadow: 0 0 10px rgba(255, 50, 0, 0.8), 0 0 20px rgba(255, 50, 0, 0.4);
                animation: emberRise 4s infinite;
            }
            
            .card-ember-fast {
                animation-duration: 2s !important;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Use event delegation for better performance
    const container = document.querySelector('.dashboard');
    if (!container) return;
    
    // Add embers to cards only once and use a smaller number
    cards.forEach(card => {
        // Create a document fragment for better performance
        const fragment = document.createDocumentFragment();
        
        // Reduce number of embers per card
        for (let i = 0; i < 3; i++) { // Reduced from 5
            const ember = document.createElement('div');
            ember.className = 'card-ember';
            ember.style.backgroundColor = `hsl(${Math.floor(Math.random() * 30)}, 100%, 50%)`;
            ember.style.left = `${Math.random() * 100}%`;
            ember.style.animationDelay = `${Math.random() * 2}s`;
            fragment.appendChild(ember);
        }
        
        card.appendChild(fragment);
    });
    
    // Use event delegation for hover effects
    container.addEventListener('mouseenter', function(e) {
        const card = e.target.closest('.card');
        if (!card) return;
        
        // Use classList for better performance
        card.style.background = 'rgba(80, 20, 0, 0.8)';
        card.style.boxShadow = '0 0 30px rgba(255, 50, 0, 0.5), 0 0 50px rgba(255, 50, 0, 0.3)';
        card.style.transform = 'translateY(-5px)';
        
        // Use classList instead of style changes for better performance
        const embers = card.querySelectorAll('.card-ember');
        embers.forEach(ember => {
            ember.classList.add('card-ember-fast');
        });
    }, true);
    
    container.addEventListener('mouseleave', function(e) {
        const card = e.target.closest('.card');
        if (!card) return;
        
        card.style.background = 'rgba(40, 10, 10, 0.8)';
        card.style.boxShadow = '0 0 15px rgba(255, 30, 0, 0.3)';
        card.style.transform = 'translateY(0)';
        
        const embers = card.querySelectorAll('.card-ember');
        embers.forEach(ember => {
            ember.classList.remove('card-ember-fast');
        });
    }, true);
}

// Optimized button click effects with hell theme
function addButtonEffects() {
    // Use CSS classes instead of inline styles for better performance
    if (!document.querySelector('#button-effects-style')) {
        const style = document.createElement('style');
        style.id = 'button-effects-style';
        style.textContent = `
            .action-btn, .discord-btn {
                position: relative;
                overflow: hidden;
            }
            
            .btn-hover {
                background: linear-gradient(45deg, #ff3300, #aa0000) !important;
                box-shadow: 0 0 20px rgba(255, 50, 0, 0.6), 0 0 40px rgba(255, 50, 0, 0.3) !important;
                transform: translateY(-2px) scale(1.03) !important;
            }
            
            .ripple {
                position: absolute;
                border-radius: 50%;
                background: rgba(255, 100, 0, 0.4);
                transform: scale(0);
                animation: ripple-animation 0.6s linear;
                pointer-events: none;
                box-shadow: 0 0 20px rgba(255, 50, 0, 0.6), 0 0 40px rgba(255, 50, 0, 0.3);
            }
        `;
        document.head.appendChild(style);
    }
    
    // Use event delegation for better performance
    const container = document.body;
    
    // Handle mouseenter event with delegation
    container.addEventListener('mouseenter', function(e) {
        const button = e.target.closest('.action-btn, .discord-btn');
        if (!button) return;
        
        button.classList.add('btn-hover');
    }, true);
    
    // Handle mouseleave event with delegation
    container.addEventListener('mouseleave', function(e) {
        const button = e.target.closest('.action-btn, .discord-btn');
        if (!button) return;
        
        button.classList.remove('btn-hover');
    }, true);
    
    // Handle click event with delegation and throttling
    let isCreatingRipple = false;
    container.addEventListener('click', function(e) {
        const button = e.target.closest('.action-btn, .discord-btn');
        if (!button || isCreatingRipple) return;
        
        isCreatingRipple = true;
        
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        button.appendChild(ripple);
        
        // Remove ripple after animation completes
        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.remove();
            }
            isCreatingRipple = false;
        }, 600);
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
    // Check if device is mobile or low-end (simplified detection)
    const isMobileOrLowEnd = window.innerWidth <= 768 || 
                            navigator.hardwareConcurrency <= 4 || 
                            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Initialize essential effects first
    addSmoothScroll();
    addDropdownEffect();
    
    // Add CSS for ripple effect with optimized animation
    const style = document.createElement('style');
    style.textContent = `
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 51, 0, 0.3);
            transform: scale(0);
            animation: ripple 0.8s linear;
            pointer-events: none;
        }
        
        @keyframes ripple {
            to {
                transform: scale(3);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Defer non-essential effects
    setTimeout(() => {
        addButtonEffects();
        addTitleEffect();
        addBackgroundMusic();
        
        // Only add heavy visual effects on non-mobile/high-end devices
        if (!isMobileOrLowEnd) {
            createHellEffect();
            addCardEffects();
        } else {
            // Add minimal card styling for mobile/low-end devices
            document.querySelectorAll('.card').forEach(card => {
                card.style.boxShadow = '0 5px 15px rgba(255, 30, 0, 0.3)';
                card.style.border = '1px solid rgba(255, 30, 0, 0.4)';
            });
        }
    }, 100); // Short delay to prioritize initial render
    
    // Show loading animation with optimized rendering
    const loadingOverlay = document.createElement('div');
    loadingOverlay.style.position = 'fixed';
    loadingOverlay.style.top = '0';
    loadingOverlay.style.left = '0';
    loadingOverlay.style.width = '100%';
    loadingOverlay.style.height = '100%';
    loadingOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    loadingOverlay.style.display = 'flex';
    loadingOverlay.style.justifyContent = 'center';
    loadingOverlay.style.alignItems = 'center';
    loadingOverlay.style.zIndex = '9999';
    document.body.appendChild(loadingOverlay);
    
    const loadingText = document.createElement('div');
    loadingText.style.color = '#ff3300';
    loadingText.style.fontSize = '2rem';
    loadingText.style.fontWeight = 'bold';
    loadingText.style.textShadow = '0 0 10px rgba(255, 51, 0, 0.7)';
    loadingText.style.textTransform = 'uppercase';
    loadingText.style.letterSpacing = '2px';
    loadingOverlay.appendChild(loadingText);
    
    // Add fire particles to loading screen - using document fragment for better performance
    const particleFragment = document.createDocumentFragment();
    // Reduced number of particles from 20 to 10 for better performance
    for (let i = 0; i < 10; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '3px';
        particle.style.height = '3px';
        particle.style.backgroundColor = `hsl(${Math.floor(Math.random() * 30)}, 100%, 50%)`;
        particle.style.borderRadius = '50%';
        particle.style.bottom = '0';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.opacity = '0';
        particle.style.animation = `emberRise ${3 + Math.random()}s infinite`;
        particle.style.animationDelay = `${Math.random() * 2}s`;
        // Simplified shadow for better performance
        particle.style.boxShadow = '0 0 10px rgba(255, 50, 0, 0.6)';
        particleFragment.appendChild(particle);
    }
    loadingOverlay.appendChild(particleFragment);
    
    // Simulate loading time
    setTimeout(() => {
        loadingOverlay.style.opacity = '0';
        loadingOverlay.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            loadingOverlay.remove();
        }, 500);
    }, 1500);
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in-out';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
