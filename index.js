const bioText = document.getElementById('bio-text');
        const bioMessages = [
            "Student Mentor",
            "Placement Coordinator",
            "AI-powered Web Developer",
            "Competitive Programmer",
            "Aspiring SDE",
            "CS Undergrad at SECE"
        ];
        let index = 0;

        function changeBioText() {
            bioText.style.opacity = 0; 
            setTimeout(() => {
                bioText.textContent = bioMessages[index];
                bioText.style.opacity = 1; 
                index = (index + 1) % bioMessages.length; 
            }, 1000);
        }

        setInterval(changeBioText, 3000); 