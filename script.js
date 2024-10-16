document.getElementById('zodiacForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const dob = new Date(document.getElementById('dob').value);
    
    // Extract the first letter of the name
    const firstLetter = name.trim()[0].toUpperCase();

    // Calculate the age based on the date of birth
    const age = calculateAge(dob);

    // Get the zodiac sign based on the first letter of the name
    const zodiacSign = getZodiacSignByName(firstLetter);

    // Show results
    document.getElementById('userName').innerText = name;
    document.getElementById('zodiacSignEnglish').innerText = zodiacSign.english;
    document.getElementById('zodiacSignTelugu').innerText = zodiacSign.telugu;
    document.getElementById('age').innerText = age;

    // Display the zodiac image
    displayZodiacImage(zodiacSign.english);

    // Generate and display the fortune message
    const fortuneMessage = getFortuneMessage(firstLetter);
    document.getElementById('fortuneMessage').innerText = fortuneMessage;

    document.getElementById('result').classList.remove('hidden');
});

// Zodiac signs mapped to first letter of the name
function getZodiacSignByName(firstLetter) {
    const zodiacSigns = {
        'A': { english: 'Aries', telugu: 'మేషం' },
        'B': { english: 'Taurus', telugu: 'వృషభం' },
        'C': { english: 'Gemini', telugu: 'మిథునం' },
        'D': { english: 'Cancer', telugu: 'కర్కాటకం' },
        'E': { english: 'Leo', telugu: 'సింహం' },
        'F': { english: 'Virgo', telugu: 'కన్య' },
        'G': { english: 'Libra', telugu: 'తుల' },
        'H': { english: 'Scorpio', telugu: 'వృశ్చికం' },
        'I': { english: 'Sagittarius', telugu: 'ధనస్సు' },
        'J': { english: 'Capricorn', telugu: 'మకరం' },
        'K': { english: 'Aquarius', telugu: 'కుంభం' },
        'L': { english: 'Pisces', telugu: 'మీనం' },
        // Add more mappings as needed
        'M': { english: 'Aries', telugu: 'మేషం' },
        'N': { english: 'Taurus', telugu: 'వృషభం' },
        'O': { english: 'Gemini', telugu: 'మిథునం' },
        'P': { english: 'Cancer', telugu: 'కర్కాటకం' },
        'Q': { english: 'Leo', telugu: 'సింహం' },
        'R': { english: 'Virgo', telugu: 'కన్య' },
        'S': { english: 'Libra', telugu: 'తుల' },
        'T': { english: 'Scorpio', telugu: 'వృశ్చికం' },
        'U': { english: 'Sagittarius', telugu: 'ధనస్సు' },
        'V': { english: 'Capricorn', telugu: 'మకరం' },
        'W': { english: 'Aquarius', telugu: 'కుంభం' },
        'X': { english: 'Pisces', telugu: 'మీనం' },
        'Y': { english: 'Aries', telugu: 'మేషం' },
        'Z': { english: 'Taurus', telugu: 'వృషభం' }
    };
    
    // Return zodiac sign based on the first letter, or Aries by default
    return zodiacSigns[firstLetter] || { english: 'Aries', telugu: 'మేషం' };
}

// Function to calculate the age
function calculateAge(dob) {
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    // Adjust age if the birthday hasn't occurred this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    return age;
}

// Function to display zodiac image
function displayZodiacImage(zodiacSignEnglish) {
    const zodiacImages = {
        'Aries': 'aries.png',
        'Taurus': 'taurus.png',
        'Gemini': 'gemini.png',
        'Cancer': 'cancer.png',
        'Leo': 'leo.png',
        'Virgo': 'virgo.png',
        'Libra': 'libra.png',
        'Scorpio': 'scorpio.png',
        'Sagittarius': 'sagittarius.png',
        'Capricorn': 'capricon.png',
        'Aquarius': 'aquarius.png',
        'Pisces': 'pisces.png'
    };

    const imgSrc = zodiacImages[zodiacSignEnglish] || 'images/default.png';

    const zodiacImageContainer = document.getElementById('zodiacImage');
    zodiacImageContainer.innerHTML = `<img src="${imgSrc}" alt="${zodiacSignEnglish} sign" width="100">`;
}

// Fortune messages mapped to first letter of the name
function getFortuneMessage(firstLetter) {
    const fortuneMessages = {
        'A': 'Good luck will come your way soon.',
        'B': 'A pleasant surprise awaits you.',
        'C': 'You will find success in your upcoming project.',
        'D': 'Happiness will follow your steps today.',
        'E': 'A journey you take will lead to exciting opportunities.',
        'F': 'Your hard work will soon pay off.',
        'G': 'You will meet someone who will change your life.',
        'H': 'New opportunities are on the horizon for you.',
        'I': 'You will soon discover your true potential.',
        'J': 'A financial gain is in your near future.',
        'K': 'A great adventure awaits you.',
        'L': 'You will receive unexpected but joyful news.',
        'M': 'Success is within your reach, keep pushing forward.',
        'N': 'A dream you have will soon come true.',
        'O': 'You will experience a stroke of genius soon.',
        'P': 'An exciting opportunity is coming your way.',
        'Q': 'You are about to make a lifelong friend.',
        'R': 'Your efforts will be recognized soon.',
        'S': 'A positive change is headed your way.',
        'T': 'Today is the perfect day to try something new.',
        'U': 'You will soon discover a hidden talent.',
        'V': 'An exciting opportunity will present itself soon.',
        'W': 'You will soon accomplish a major goal.',
        'X': 'A fortunate turn of events is coming your way.',
        'Y': 'Success will follow your perseverance.',
        'Z': 'Your positive energy will attract good fortune.'
    };

    // Return the fortune message based on the first letter, or a default message
    return fortuneMessages[firstLetter] || 'Good things are coming your way!';
}
